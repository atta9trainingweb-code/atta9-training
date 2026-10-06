import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow, Check, Spark, Target } from "@/components/icons";
import { TrainerGallery } from "@/components/trainer-gallery";
import { getPortfolioBySlug, getPublishedPortfolio } from "@/lib/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPortfolio().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.organization} — ${project.course} | ATTA9 Training`,
    description: project.excerpt,
    openGraph: { title: project.organization, description: project.excerpt, images: [project.cover] },
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getPortfolioBySlug(slug);
  if (!project) notFound();

  const publishedDate = new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Bangkok",
  }).format(new Date(`${project.publishedAt}T12:00:00+07:00`));

  return <>
    <Header />
    <main>
      <article>
        <header className="portfolio-hero">
          <div className="portfolio-hero-grid" aria-hidden="true" />
          <div className="portfolio-hero-signal" aria-hidden="true"><i /><i /><i /></div>
          <div className="container portfolio-hero-inner">
            <nav className="portfolio-breadcrumb" aria-label="เส้นทางนำทาง"><Link href="/gallery">ผลงานของเรา</Link><span aria-hidden="true">/</span><span aria-current="page">{project.shortName}</span></nav>
            <div className="portfolio-hero-copy">
              <p className="eyebrow"><span />CLIENT LEARNING STORY</p>
              <h1>{project.organization}</h1>
              <p>{project.course}</p>
              <div className="portfolio-meta"><span>{project.category}</span><span>In-house Training</span><time dateTime={project.publishedAt}>{publishedDate}</time></div>
            </div>
          </div>
        </header>

        <section className="portfolio-overview section">
          <div className="container portfolio-overview-grid">
            <div><p className="eyebrow"><span />PROJECT OVERVIEW</p><h2>{project.excerpt}</h2></div>
            <div>
              <div className="portfolio-client-brand">
                <div className="portfolio-client-logo"><Image src={project.logo} fill sizes="180px" alt={project.logoAlt} /></div>
                <div><small>CLIENT ORGANIZATION</small><strong>{project.shortName}</strong></div>
              </div>
              <p>{project.overview}</p><dl><div><dt>องค์กร</dt><dd>{project.shortName}</dd></div><div><dt>หลักสูตร</dt><dd>{project.course}</dd></div><div><dt>รูปแบบ</dt><dd>Customized In-house Training</dd></div></dl>
            </div>
          </div>
        </section>

        <section className="portfolio-thinking section">
          <div className="container portfolio-thinking-grid">
            <article><span><Target /></span><p>THE CHALLENGE</p><h2>โจทย์การเรียนรู้</h2><div>{project.challenge}</div></article>
            <article><span><Spark /></span><p>THE APPROACH</p><h2>แนวทางที่ออกแบบ</h2><div>{project.approach}</div></article>
          </div>
        </section>

        <section className="portfolio-learning section">
          <div className="container portfolio-learning-grid">
            <div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>สิ่งที่ผู้เรียน<br />ได้ฝึกในห้องเรียน</h2><p>เป้าหมายและกิจกรรมถูกเชื่อมเป็นกระบวนการเดียวกัน เพื่อให้ผู้เรียนเข้าใจ ทดลอง และมองเห็นวิธีนำกลับไปใช้กับงาน</p></div>
            <div className="portfolio-goals">{project.learningGoals.map((goal) => <div key={goal}><Check /><span>{goal}</span></div>)}</div>
          </div>
          <div className="container portfolio-methods" aria-label="รูปแบบการเรียนรู้">{project.methods.map((method) => <span key={method}>{method}</span>)}</div>
        </section>

        <section className="portfolio-gallery section">
          <div className="container">
            <div className="portfolio-section-head"><div><p className="eyebrow"><span />IN THE ROOM</p><h2>บรรยากาศการเรียนรู้</h2></div><p>ภาพจากกิจกรรม การแลกเปลี่ยน และการฝึกปฏิบัติระหว่างหลักสูตร</p></div>
            <TrainerGallery images={project.gallery} />
          </div>
        </section>
      </article>

      <section className="portfolio-next">
        <div className="container portfolio-next-inner"><div><p>EXPLORE MORE WORK</p><h2>แต่ละห้องเรียน<br />เริ่มจากโจทย์ที่ต่างกัน</h2></div><div><p>ชม Portfolio อื่นเพื่อดูแนวทางการออกแบบกระบวนการเรียนรู้สำหรับทีมและบริบทที่หลากหลาย</p><Link className="button" href="/gallery">กลับไปดูผลงานทั้งหมด <Arrow /></Link></div></div>
      </section>
    </main>
    <Footer />
  </>;
}
