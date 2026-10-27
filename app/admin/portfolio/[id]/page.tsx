import Link from "next/link";
import { notFound } from "next/navigation";
import { AdminHeader } from "@/components/admin-header";
import { portfolioRowToProject, type PortfolioRow } from "@/lib/portfolio-cms";
import { requireAdmin } from "@/lib/supabase/require-admin";
import { PortfolioForm } from "../portfolio-form";

export default async function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase, user, admin } = await requireAdmin();
  const { data } = await supabase.from("portfolio_projects").select("*").eq("id", id).maybeSingle();
  if (!data) notFound();
  const project = portfolioRowToProject(data as PortfolioRow);

  return (
    <main className="admin-shell">
      <AdminHeader displayName={admin.display_name || user.email || "ผู้ดูแลระบบ"} active="portfolio" />
      <div className="admin-content admin-content--editor">
        <div className="admin-detail-heading portfolio-editor-heading"><div><Link className="admin-back-link" href="/admin/portfolio">← กลับไปรายการผลงาน</Link><p className="admin-eyebrow">EDIT LEARNING STORY</p><h1>{project.shortName}</h1><p>แก้ไขเนื้อหา ภาพ และสถานะการเผยแพร่</p></div></div>
        <PortfolioForm project={project} />
      </div>
    </main>
  );
}
