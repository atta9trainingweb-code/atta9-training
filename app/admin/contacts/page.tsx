import Image from "next/image";
import Link from "next/link";
import { logout } from "../actions";
import {
  contactStatuses,
  contactStatusLabels,
  isContactStatus,
  type Contact,
  type ContactStatus,
} from "@/lib/contacts";
import { requireAdmin } from "@/lib/supabase/require-admin";

type ContactsPageProps = {
  searchParams: Promise<{ q?: string; status?: string }>;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  }).format(new Date(value));
}

export default async function ContactsPage({ searchParams }: ContactsPageProps) {
  const params = await searchParams;
  const q = String(params.q || "").trim();
  const selectedStatus = isContactStatus(String(params.status || ""))
    ? (params.status as ContactStatus)
    : "";
  const { supabase, user, admin } = await requireAdmin();

  let query = supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  if (selectedStatus) query = query.eq("status", selectedStatus);

  const safeSearch = q.replace(/[,()%_]/g, " ").trim();
  if (safeSearch) {
    const pattern = `%${safeSearch}%`;
    query = query.or(
      `name.ilike.${pattern},company.ilike.${pattern},email.ilike.${pattern},phone.ilike.${pattern},topic.ilike.${pattern}`,
    );
  }

  const [{ data, error }, { data: statusRows }] = await Promise.all([
    query,
    supabase.from("contacts").select("status"),
  ]);

  if (error) throw new Error("Unable to load contacts");

  const contacts = (data || []) as Contact[];
  const statusCounts = (statusRows || []).reduce<Partial<Record<ContactStatus, number>>>(
    (counts, row) => {
      if (isContactStatus(row.status)) counts[row.status] = (counts[row.status] || 0) + 1;
      return counts;
    },
    {},
  );
  const total = statusRows?.length || 0;

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <Link className="admin-logo" href="/admin/contacts"><Image src="/images/atta9-logo-on-dark.png" width={510} height={263} alt="ATTA9 Training" priority /></Link>
        <div className="admin-account">
          <span>{admin.display_name || user.email}</span>
          <form action={logout}><button type="submit">ออกจากระบบ</button></form>
        </div>
      </header>

      <div className="admin-content">
        <div className="admin-page-heading">
          <div><p className="admin-eyebrow">CONTACT MANAGEMENT</p><h1>รายชื่อผู้สนใจ</h1><p>ติดตามและจัดการข้อมูลที่ส่งมาจากเว็บไซต์</p></div>
          <Link className="admin-secondary-button" href="/admin/contacts/export" prefetch={false}>ส่งออก CSV</Link>
        </div>

        <section className="admin-stats" aria-label="สรุปข้อมูลผู้สนใจ">
          <article><span>ทั้งหมด</span><strong>{total}</strong></article>
          <article><span>รายการใหม่</span><strong>{statusCounts.new || 0}</strong></article>
          <article><span>กำลังติดตาม</span><strong>{statusCounts.following_up || 0}</strong></article>
          <article><span>ปิดการขาย</span><strong>{statusCounts.won || 0}</strong></article>
        </section>

        <section className="admin-panel">
          <form className="admin-filters" method="get">
            <label>
              <span className="sr-only">ค้นหา</span>
              <input name="q" defaultValue={q} placeholder="ค้นหาชื่อ บริษัท อีเมล เบอร์โทร หรือหัวข้อ" />
            </label>
            <label>
              <span className="sr-only">สถานะ</span>
              <select name="status" defaultValue={selectedStatus}>
                <option value="">ทุกสถานะ</option>
                {contactStatuses.map((status) => <option key={status} value={status}>{contactStatusLabels[status]}</option>)}
              </select>
            </label>
            <button className="admin-primary-button" type="submit">ค้นหา</button>
            {(q || selectedStatus) && <Link className="admin-clear-filter" href="/admin/contacts">ล้างตัวกรอง</Link>}
          </form>

          {contacts.length ? (
            <>
              <div className="admin-table-wrap">
                <table className="admin-table">
                  <thead><tr><th>ผู้ติดต่อ</th><th>หัวข้อ</th><th>วันที่ส่ง</th><th>LINE</th><th>สถานะ</th><th /></tr></thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td><strong>{contact.name}</strong><span>{contact.company}</span><small>{contact.phone} · {contact.email}</small></td>
                        <td>{contact.topic}</td>
                        <td>{formatDate(contact.created_at)}</td>
                        <td><span className={`notification-status notification-status--${contact.line_notification_status}`}>{contact.line_notification_status === "sent" ? "ส่งแล้ว" : contact.line_notification_status === "failed" ? "ผิดพลาด" : "รอส่ง"}</span></td>
                        <td><span className={`contact-status contact-status--${contact.status}`}>{contactStatusLabels[contact.status]}</span></td>
                        <td><Link className="admin-row-link" href={`/admin/contacts/${contact.id}`}>ดูรายละเอียด →</Link></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="admin-contact-cards" aria-label="รายชื่อผู้สนใจบนมือถือ">
                {contacts.map((contact) => (
                  <article className="admin-contact-card" key={contact.id}>
                    <div className="admin-contact-card-heading">
                      <div><strong>{contact.name}</strong><span>{contact.company}</span></div>
                      <span className={`contact-status contact-status--${contact.status}`}>{contactStatusLabels[contact.status]}</span>
                    </div>
                    <p className="admin-contact-topic">{contact.topic}</p>
                    <dl>
                      <div><dt>เบอร์โทร</dt><dd><a href={`tel:${contact.phone}`}>{contact.phone}</a></dd></div>
                      <div><dt>อีเมล</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
                      <div><dt>วันที่ส่ง</dt><dd>{formatDate(contact.created_at)}</dd></div>
                      <div><dt>LINE</dt><dd><span className={`notification-status notification-status--${contact.line_notification_status}`}>{contact.line_notification_status === "sent" ? "ส่งแล้ว" : contact.line_notification_status === "failed" ? "ผิดพลาด" : "รอส่ง"}</span></dd></div>
                    </dl>
                    <Link className="admin-contact-card-link" href={`/admin/contacts/${contact.id}`}>ดูรายละเอียด <span>→</span></Link>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="admin-empty"><strong>ไม่พบข้อมูล</strong><span>ลองเปลี่ยนคำค้นหาหรือตัวกรองสถานะ</span></div>
          )}
        </section>
      </div>
    </main>
  );
}
