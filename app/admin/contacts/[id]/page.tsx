import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  contactStatuses,
  contactStatusLabels,
  type Contact,
} from "@/lib/contacts";
import { requireAdmin } from "@/lib/supabase/require-admin";
import { updateContact } from "../actions";

type ContactPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("th-TH", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  }).format(new Date(value));
}

export default async function ContactPage({ params, searchParams }: ContactPageProps) {
  const { id } = await params;
  const query = await searchParams;
  const { supabase } = await requireAdmin();
  const { data } = await supabase.from("contacts").select("*").eq("id", id).maybeSingle();

  if (!data) notFound();
  const contact = data as Contact;
  const cleanPhone = contact.phone.replace(/[^\d+]/g, "");

  return (
    <main className="admin-shell admin-detail-shell">
      <header className="admin-header">
        <Link className="admin-logo" href="/admin/contacts"><Image src="/images/atta9-logo-on-dark.png" width={510} height={263} alt="ATTA9 Training" priority /></Link>
        <Link className="admin-back" href="/admin/contacts">← กลับหน้ารายชื่อ</Link>
      </header>
      <div className="admin-content admin-detail-content">
        {query.saved && <div className="admin-saved" role="status">บันทึกการเปลี่ยนแปลงแล้ว</div>}
        <div className="admin-detail-heading">
          <div><p className="admin-eyebrow">CONTACT DETAIL</p><h1>{contact.name}</h1><p>{contact.company}</p></div>
          <span className={`contact-status contact-status--${contact.status}`}>{contactStatusLabels[contact.status]}</span>
        </div>

        <div className="admin-detail-grid">
          <section className="admin-detail-card">
            <h2>ข้อมูลผู้ติดต่อ</h2>
            <dl>
              <div><dt>ชื่อ</dt><dd>{contact.name}</dd></div>
              <div><dt>องค์กร</dt><dd>{contact.company}</dd></div>
              <div><dt>เบอร์โทรศัพท์</dt><dd><a href={`tel:${cleanPhone}`}>{contact.phone}</a></dd></div>
              <div><dt>อีเมล</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
              <div><dt>วันที่ส่ง</dt><dd>{formatDate(contact.created_at)}</dd></div>
              <div><dt>การแจ้งเตือน LINE</dt><dd>{contact.line_notification_status === "sent" ? "ส่งสำเร็จ" : contact.line_notification_status === "failed" ? "ส่งไม่สำเร็จ" : "รอส่ง"}</dd></div>
            </dl>
          </section>

          <section className="admin-detail-card admin-requirement-card">
            <h2>ความต้องการ</h2>
            <small>หัวข้อที่สนใจ</small><h3>{contact.topic}</h3>
            <small>รายละเอียด</small><p>{contact.message || "ไม่ได้ระบุรายละเอียดเพิ่มเติม"}</p>
            <div className="admin-consent">✓ ยืนยันนโยบายความเป็นส่วนตัวเมื่อ {formatDate(contact.consent_at)}</div>
          </section>

          <section className="admin-detail-card admin-followup-card">
            <h2>การติดตาม</h2>
            <form action={updateContact}>
              <input type="hidden" name="id" value={contact.id} />
              <label htmlFor="contact-status">สถานะ</label>
              <select id="contact-status" name="status" defaultValue={contact.status}>
                {contactStatuses.map((status) => <option key={status} value={status}>{contactStatusLabels[status]}</option>)}
              </select>
              <label htmlFor="admin-note">บันทึกสำหรับทีมงาน</label>
              <textarea id="admin-note" name="admin_note" rows={7} defaultValue={contact.admin_note || ""} placeholder="เช่น ติดต่อแล้ว รอส่งใบเสนอราคา..." />
              <button className="admin-primary-button" type="submit">บันทึกการติดตาม</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
