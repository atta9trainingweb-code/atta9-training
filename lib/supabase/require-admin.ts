import "server-only";

import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "./config";
import { createClient } from "./server";

export async function requireAdmin() {
  if (!isSupabaseConfigured()) redirect("/admin/login?setup=1");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: admin } = await supabase
    .from("admin_users")
    .select("user_id, display_name")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin) {
    await supabase.auth.signOut();
    redirect("/admin/login?unauthorized=1");
  }

  return { supabase, user, admin };
}
