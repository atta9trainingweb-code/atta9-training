import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow, Spark } from "@/components/icons";
import { WorkGallery } from "@/components/work-gallery";
import { getPublishedPortfolio } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "ผลงานการอบรมองค์กร | ATTA9 Training",
  description: "รวมผลงาน In-house Training ของ ATTA9 Training พร้อมรายละเอียดหลักสูตร แนวทางการเรียนรู้ และภาพบรรยากาศจากแต่ละองค์กร",
  openGraph: {
    title: "ผลงานของเรา — ATTA9 Training",
    description: "Portfolio การออกแบบและจัดกระบวนการเรียนรู้ให้กับองค์กรชั้นนำ",
    images: ["/images/train-the-trainer/gallery-vietjet.webp"],
  },
};

export default function GalleryPage() {
  const projects = getPublishedPortfolio();

  return <>
    <Header />
    <main>
      <section className="gallery-hero">
        <Image className="gallery-hero-image" src="/images/inspiring-coach/gallery-10.jpg" fill preload quality={100} sizes="100vw" alt="บรรยากาศการอบรมสำหรับองค์กรโดย ATTA9 Training" />
        <div className="gallery-hero-overlay" />
        <div className="container gallery-hero-inner">
          <div className="gallery-hero-copy">
            <p className="eyebrow"><span />CORPORATE TRAINING PORTFOLIO</p>
            <h1>ผลงานการอบรม<br /><strong>สำหรับแต่ละองค์กร</strong></h1>
            <p>สำรวจเบื้องหลังหลักสูตร โจทย์การพัฒนา และบรรยากาศการลงมือฝึกจริงจากองค์กรที่ไว้วางใจ ATTA9</p>
            <a className="button" href="#portfolio">ดู Portfolio <Arrow /></a>
          </div>
          <div className="gallery-hero-index" aria-label="กระบวนการออกแบบการเรียนรู้ของ ATTA9">
            <span><b>01</b>เข้าใจโจทย์</span><i />
            <span><b>02</b>ออกแบบ</span><i />
            <span><b>03</b>ลงมือเรียนรู้</span>
          </div>
        </div>
      </section>

      <section className="gallery-intro section">
        <div className="container gallery-intro-grid">
          <div><p className="eyebrow"><span />WORK DESIGNED AROUND PEOPLE</p><h2>แต่ละองค์กรมีโจทย์ต่างกัน<br />การเรียนรู้จึงไม่ควรเหมือนกัน</h2></div>
          <div><p>ทุก Portfolio รวบรวมแนวคิดเบื้องหลังการออกแบบหลักสูตร วิธีการเรียนรู้ และภาพบรรยากาศ เพื่อให้เห็นว่ากระบวนการของเราปรับเข้ากับผู้เรียนและบริบทจริงอย่างไร</p><div className="gallery-intro-note"><Spark /><span><b>Customized In-house Training</b><small>ออกแบบจากโจทย์จริงขององค์กรและผู้เรียน</small></span></div></div>
        </div>
      </section>

      <section className="gallery-work section" id="portfolio">
        <div className="container">
          <div className="gallery-work-head"><div><p className="eyebrow"><span />SELECTED CLIENT WORK</p><h2>ผลงานของเรา</h2></div><p>เลือกดูตามประเภทหลักสูตร แล้วกดที่การ์ดเพื่ออ่านรายละเอียดและชมภาพบรรยากาศของแต่ละองค์กร</p></div>
          <WorkGallery projects={projects} />
        </div>
      </section>

      <section className="gallery-cta">
        <div className="container gallery-cta-inner">
          <div><p>YOUR TEAM, YOUR CONTEXT</p><h2>โจทย์ขององค์กรคุณ<br />ควรมีหลักสูตรของตัวเอง</h2></div>
          <div><p>เล่าเป้าหมาย กลุ่มผู้เรียน และผลลัพธ์ที่อยากเห็น เราจะช่วยออกแบบหลักสูตรและกิจกรรมให้เหมาะกับบริบทขององค์กร</p><Link className="button" href="/#contact">ปรึกษาทีม ATTA9 <Arrow /></Link></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
