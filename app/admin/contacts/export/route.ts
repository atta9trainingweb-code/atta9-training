import { requireAdmin } from "@/lib/supabase/require-admin";

function csvCell(value: unknown) {
  const raw = String(value ?? "");
  const safe = /^[=+\-@\t\r]/.test(raw) ? `'${raw}` : raw;
  const text = safe.replace(/"/g, '""');
  return `"${text}"`;
}

export async function GET() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("contacts")
    .select("created_at,name,company,email,phone,topic,message,status,admin_note,line_notification_status")
    .order("created_at", { ascending: false });

  if (error) return Response.json({ error: "Unable to export contacts" }, { status: 500 });

  const headers = ["วันที่", "ชื่อ", "องค์กร", "อีเมล", "โทรศัพท์", "หัวข้อ", "รายละเอียด", "สถานะ", "บันทึก", "LINE"];
  const rows = (data || []).map((contact) => [
    contact.created_at,
    contact.name,
    contact.company,
    contact.email,
    contact.phone,
    contact.topic,
    contact.message,
    contact.status,
    contact.admin_note,
    contact.line_notification_status,
  ]);
  const csv = `\uFEFF${[headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}`;
  const date = new Date().toISOString().slice(0, 10);

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="atta9-contacts-${date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
