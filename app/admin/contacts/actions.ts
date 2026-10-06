"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isContactStatus } from "@/lib/contacts";
import { requireAdmin } from "@/lib/supabase/require-admin";

export async function updateContact(formData: FormData) {
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");
  const adminNote = String(formData.get("admin_note") || "").trim().slice(0, 5_000);

  if (!/^[0-9a-f-]{36}$/i.test(id) || !isContactStatus(status)) {
    throw new Error("Invalid contact update");
  }

  const { supabase } = await requireAdmin();
  const { error } = await supabase
    .from("contacts")
    .update({ status, admin_note: adminNote || null })
    .eq("id", id);

  if (error) throw new Error("Unable to update contact");

  revalidatePath("/admin/contacts");
  revalidatePath(`/admin/contacts/${id}`);
  redirect(`/admin/contacts/${id}?saved=1`);
}
