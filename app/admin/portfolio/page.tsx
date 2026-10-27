import Image from "next/image";
import Link from "next/link";
import { AdminHeader } from "@/components/admin-header";
import type { PortfolioRow } from "@/lib/portfolio-cms";
import { requireAdmin } from "@/lib/supabase/require-admin";

type PortfolioAdminPageProps = {
  searchParams: Promise<{ q?: string; status?: string; saved?: string }>;
};

function formatDate(value: string | null) {
  if (!value) return "ยังไม่กำหนด";
  return new Intl.DateTimeFormat("th-TH", { dateStyle: "medium", timeZone: "Asia/Bangkok" }).format(new Date(`${value}T12:00:00+07:00`));
}

export default async function PortfolioAdminPage({ searchParams }: PortfolioAdminPageProps) {
  const params = await searchParams;
  const q = String(params.q || "").trim();
  const selectedStatus = params.status === "draft" || params.status === "published" ? params.status : "";
  const { supabase, user, admin } = await requireAdmin();

  let query = supabase.from("portfolio_projects").select("*").order("updated_at", { ascending: false }).limit(100);
  if (selectedStatus) query = query.eq("status", selectedStatus);
  const safeSearch = q.replace(/[,()%_]/g, " ").trim();
  if (safeSearch) query = query.or(`organization.ilike.%${safeSearch}%,course.ilike.%${safeSearch}%,slug.ilike.%${safeSearch}%`);

  const [{ data, error }, { data: statusRows }] = await Promise.all([
    query,
    supabase.from("portfolio_projects").select("status"),
  ]);
  if (error) throw new Error("Unable to load portfolio projects. Apply the portfolio CMS migration first.");

  const projects = (data || []) as PortfolioRow[];
  const published = statusRows?.filter((row) => row.status === "published").length || 0;
  const drafts = statusRows?.filter((row) => row.status === "draft").length || 0;

  return (
    <main className="admin-shell">
      <AdminHeader displayName={admin.display_name || user.email || "ผู้ดูแลระบบ"} active="portfolio" />
      <div className="admin-content">
        <div className="admin-page-heading portfolio-list-heading">
          <div><p className="admin-eyebrow">PORTFOLIO DESK</p><h1>ผลงาน Gallery</h1><p>สร้างเรื่องราวการเรียนรู้ จัดภาพ และควบคุมการเผยแพร่จากที่เดียว</p></div>
          <Link className="admin-primary-button" href="/admin/portfolio/new">＋ สร้างผลงานใหม่</Link>
        </div>

        {params.saved && <div className="admin-saved" role="status">บันทึกผลงานแล้ว · {params.saved === "published" ? "เผยแพร่บนเว็บไซต์เรียบร้อย" : "เก็บเป็นฉบับร่างเรียบร้อย"}</div>}

        <section className="portfolio-summary" aria-label="สรุปผลงาน">
          <article><span>ผลงานทั้งหมด</span><strong>{statusRows?.length || 0}</strong><small>รายการในระบบหลังบ้าน</small></article>
          <article><span>เผยแพร่แล้ว</span><strong>{published}</strong><small>มองเห็นบนหน้า Gallery</small></article>
          <article><span>ฉบับร่าง</span><strong>{drafts}</strong><small>รอตรวจสอบและเผยแพร่</small></article>
        </section>

        <section className="admin-panel portfolio-list-panel">
          <form className="admin-filters" method="get" noValidate>
            <label><span className="sr-only">ค้นหาผลงาน</span><input name="q" defaultValue={q} placeholder="ค้นหาองค์กร หลักสูตร หรือ URL" /></label>
            <label><span className="sr-only">สถานะ</span><select name="status" defaultValue={selectedStatus}><option value="">ทุกสถานะ</option><option value="published">เผยแพร่แล้ว</option><option value="draft">ฉบับร่าง</option></select></label>
            <button className="admin-primary-button" type="submit">ค้นหา</button>
            {(q || selectedStatus) && <Link className="admin-clear-filter" href="/admin/portfolio">ล้างตัวกรอง</Link>}
          </form>

          {projects.length ? <div className="portfolio-admin-list">
            {projects.map((project) => <article className="portfolio-admin-card" key={project.id}>
              <Link className="portfolio-admin-card-media" href={`/admin/portfolio/${project.id}`}>
                <Image src={project.cover_url} fill sizes="220px" alt="" unoptimized={project.cover_url.startsWith("http")} />
              </Link>
              <div className="portfolio-admin-card-body">
                <div><span className={`portfolio-status portfolio-status--${project.status}`}>{project.status === "published" ? "เผยแพร่แล้ว" : "ฉบับร่าง"}</span><time dateTime={project.published_at || undefined}>{formatDate(project.published_at)}</time></div>
                <p>{project.category}</p><h2>{project.organization}</h2><strong>{project.course}</strong>
                <small>/gallery/{project.slug}</small>
              </div>
              <div className="portfolio-admin-card-actions">
                {project.status === "published" && <Link href={`/gallery/${project.slug}`} target="_blank">ดูหน้าเว็บ ↗</Link>}
                <Link className="admin-secondary-button" href={`/admin/portfolio/${project.id}`}>แก้ไข</Link>
              </div>
            </article>)}
          </div> : <div className="admin-empty"><strong>{q || selectedStatus ? "ไม่พบผลงานที่ค้นหา" : "ยังไม่มีผลงานในระบบ"}</strong><span>{q || selectedStatus ? "ลองเปลี่ยนคำค้นหาหรือล้างตัวกรอง" : "เริ่มต้นด้วยการสร้างผลงานแรก"}</span>{!q && !selectedStatus && <Link className="admin-primary-button" href="/admin/portfolio/new">สร้างผลงานใหม่</Link>}</div>}
        </section>
      </div>
    </main>
  );
}
