import Link from "next/link";
import { AdminHeader } from "@/components/admin-header";
import { requireAdmin } from "@/lib/supabase/require-admin";
import { PortfolioForm } from "../portfolio-form";

export default async function NewPortfolioPage() {
  const { user, admin } = await requireAdmin();
  return (
    <main className="admin-shell">
      <AdminHeader displayName={admin.display_name || user.email || "ผู้ดูแลระบบ"} active="portfolio" />
      <div className="admin-content admin-content--editor">
        <div className="admin-detail-heading portfolio-editor-heading"><div><Link className="admin-back-link" href="/admin/portfolio">← กลับไปรายการผลงาน</Link><p className="admin-eyebrow">NEW LEARNING STORY</p><h1>สร้างผลงานใหม่</h1><p>บันทึกโจทย์ วิธีการเรียนรู้ และภาพบรรยากาศให้เป็น Portfolio ที่พร้อมเผยแพร่</p></div></div>
        <PortfolioForm />
      </div>
    </main>
  );
}
