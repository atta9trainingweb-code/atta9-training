import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq";
import { CustomerLogos } from "@/components/customer-logos";
import { Footer } from "@/components/footer";
import { AdminInviteRedirect } from "@/components/admin-invite-redirect";
import { Arrow, Chart, Check, Mail, Phone, Spark, Target, Users } from "@/components/icons";
import { faqs, programs } from "@/lib/data";

const why = [
  { icon: Users, title: "ผู้เชี่ยวชาญจากประสบการณ์จริง", text: "เรียนรู้จากผู้เชี่ยวชาญที่เข้าใจทั้งการทำงานและการพัฒนาคนในองค์กร" },
  { icon: Target, title: "ออกแบบให้เหมาะกับบริบทองค์กร", text: "ปรับเนื้อหา กิจกรรม และกรณีศึกษาให้เชื่อมกับโจทย์ของทีมคุณ" },
  { icon: Chart, title: "เรียนรู้ผ่านการลงมือและกรณีจริง", text: "สร้างการมีส่วนร่วมผ่านการฝึกปฏิบัติ สนทนา และทบทวนร่วมกัน" },
  { icon: Spark, title: "เชื่อมการอบรมกับการนำไปใช้", text: "วางแนวทางให้ผู้เรียนเห็นขั้นตอนนำทักษะกลับไปใช้กับงานจริง" },
];

const process = [
  ["Discover", "เข้าใจโจทย์", "ทำความเข้าใจเป้าหมาย กลุ่มผู้เรียน และบริบทการทำงาน"],
  ["Design", "ออกแบบการเรียนรู้", "วางเนื้อหา กิจกรรม และกรณีศึกษาที่เหมาะกับองค์กร"],
  ["Deliver", "สร้างการมีส่วนร่วม", "ดำเนินการเรียนรู้แบบลงมือทำกับผู้เชี่ยวชาญ"],
  ["Apply", "นำไปใช้กับงานจริง", "สนับสนุนให้ผู้เรียนเห็นแนวทางประยุกต์ใช้หลังการอบรม"],
];

function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: string; intro?: string; align?: "left" | "center" }) {
  return <div className={`section-heading section-heading--${align}`}><p className="eyebrow"><span/>{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>;
}

export default function Home() {
  return <>
    <AdminInviteRedirect />
    <Header />
    <main>
      <section className="hero" id="top">
        <div className="hero-stage" aria-hidden="true">
          <Image
            className="hero-stage-photo"
            src="/images/hero-seminar-background-v2.png"
            fill
            sizes="100vw"
            quality={82}
            priority
            alt=""
          />
        </div>
        <div className="hero-overlay"/>
        <div className="hero-visual">
          <div className="hero-portrait-halo" aria-hidden="true" />
          <Image
            className="hero-speaker"
            src="/images/hero-phakorn-cutout.png"
            width={1197}
            height={1315}
            sizes="(max-width: 767px) 78vw, (max-width: 1100px) 58vw, 48vw"
            priority
            alt="อาจารย์พากร อัตตนนท์ วิทยากร ATTA9 กำลังบรรยาย"
          />
        </div>
        <div className="container hero-content">
          <p className="hero-kicker">IN-HOUSE TRAINING FOR ORGANIZATIONAL IMPACT</p>
          <h1>Empower Your People.<span className="hero-heading-line"><strong>Elevate</strong> Your Organization.</span></h1>
          <p className="hero-copy">ออกแบบการเรียนรู้จากโจทย์จริงขององค์กร<br/>เพื่อให้บุคลากรนำไปใช้และสร้างการเปลี่ยนแปลงในการทำงาน</p>
          <div className="hero-benefits">
            <div><Users/><p><strong>หลักสูตรทันสมัย</strong><span>เชื่อมกับงานวันนี้</span></p></div>
            <div><Target/><p><strong>ออกแบบเฉพาะองค์กร</strong><span>ปรับตามบริบทจริง</span></p></div>
            <div><Chart/><p><strong>มุ่งสู่การนำไปใช้</strong><span>ต่อยอดหลังอบรม</span></p></div>
          </div>
          <div className="hero-actions"><a className="button" href="#programs">ดูหลักสูตรของเรา <Arrow/></a><a className="button button--ghost" href="#contact">ขอคำปรึกษา <Arrow/></a></div>
        </div>
        <div className="container trust-wrap"><CustomerLogos /></div>
      </section>

      <section className="section why" id="why"><div className="container"><SectionHeading eyebrow="WHY ATTA9 TRAINING" title="พัฒนาคนให้พร้อมขับเคลื่อนองค์กร" intro="เราเชื่อว่าการเรียนรู้ที่ดีต้องเริ่มจากความเข้าใจงานจริง และจบที่ผู้เรียนมองเห็นวิธีนำกลับไปใช้" align="center"/><div className="why-grid">{why.map(({icon: Icon, title, text}) => <article className="proof-card" key={title}><div className="icon-box"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section programs" id="programs"><div className="container"><div className="section-top"><SectionHeading eyebrow="COURSES & PROGRAMS" title="เลือกหลักสูตรจากความท้าทายขององค์กร"/><Link className="text-link desktop-only" href="/training-program">ดูหลักสูตรทั้งหมด <Arrow/></Link></div><div className="program-track" aria-label="หลักสูตรแนะนำ">{programs.map((item, i) => <article className="program-card" key={item.title}><div className="program-media"><Image src={item.image} fill sizes="(max-width: 767px) 84vw, (max-width: 1279px) 46vw, 31vw" alt={`บรรยากาศหลักสูตร ${item.title}`}/><span>{item.category}</span></div><div className="program-body"><p>PROGRAM {String(i + 1).padStart(2, "0")}</p><h3>{item.title}</h3><p>{item.description}</p><Link href="/training-program" aria-label={`ดูรายละเอียดหลักสูตร ${item.title}`}><span>รายละเอียดหลักสูตร</span><Arrow/></Link></div></article>)}</div><Link className="text-link mobile-only" href="/training-program">ดูหลักสูตรทั้งหมด <Arrow/></Link></div></section>

      <section className="section process-section" id="process"><div className="container process-layout"><div className="process-photo"><Image src="/images/pakorn-workshop.webp" fill sizes="(max-width: 1023px) 100vw, 46vw" alt="อาจารย์พากร อรรถนนท์ กำลังดำเนินกิจกรรมเวิร์กช็อปกับผู้เข้าร่วม"/><div className="photo-note"><span>LEARNING IN ACTION</span><strong>กิจกรรมที่เชื่อมกับสถานการณ์จริง</strong></div></div><div><SectionHeading eyebrow="IN-HOUSE APPROACH" title="จากโจทย์ธุรกิจ สู่การเรียนรู้ที่นำไปใช้ได้จริง" intro="กระบวนการออกแบบที่เชื่อมเป้าหมายขององค์กรเข้ากับประสบการณ์เรียนรู้ของผู้เข้าร่วม"/><ol className="process-list">{process.map(([en, title, text], i) => <li key={en}><span>{String(i + 1).padStart(2, "0")}</span><div><small>{en}</small><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></div></section>

      <section className="impact-band"><div className="container impact-grid"><div className="impact-lead"><p>ATTA9 PRINCIPLE</p><h2>People · Performance · Purpose</h2></div><div><Users/><strong>People</strong><span>เริ่มจากผู้เรียนและบริบทจริง</span></div><div><Target/><strong>Performance</strong><span>เชื่อมทักษะกับการทำงาน</span></div><div><Spark/><strong>Purpose</strong><span>มุ่งสู่เป้าหมายขององค์กร</span></div></div></section>

      <section className="section cases" id="cases"><div className="container"><SectionHeading eyebrow="REAL LEARNING MOMENTS" title="บรรยากาศการเรียนรู้จากงานจริง" intro="ตัวอย่างภาพจากการจัดอบรมของ ATTA9 ที่สะท้อนการมีส่วนร่วมและการเรียนรู้ร่วมกัน"/><div className="case-grid"><article className="case-card case-card--wide"><Image src="/images/program-facilitator-retouched.png" fill sizes="(max-width: 767px) 100vw, 60vw" alt="วิทยากรกำลังให้คำแนะนำระหว่างกิจกรรมกลุ่ม"/><div><span>FACILITATION</span><h3>เรียนรู้ผ่านการสนทนาและลงมือทำ</h3></div></article><article className="case-card"><Image src="/images/program-communication-retouched.png" fill sizes="(max-width: 767px) 100vw, 35vw" alt="ผู้เข้าร่วมทำกิจกรรมการสื่อสารร่วมกัน"/><div><span>TEAM LEARNING</span><h3>สร้างพื้นที่ให้ทีมได้คิดและแลกเปลี่ยน</h3></div></article></div></div></section>

      <section className="section expert" id="expert"><div className="container expert-grid"><div><SectionHeading eyebrow="MEET THE TRAINER" title="เรียนรู้กับผู้เชี่ยวชาญที่เข้าใจโลกการทำงานจริง"/><p className="expert-copy">การเรียนรู้ที่ทรงพลังไม่ได้เกิดจากการบอกเพียงอย่างเดียว แต่เกิดจากคำถามที่ดี ประสบการณ์ที่เกี่ยวข้อง และพื้นที่ที่ทำให้ผู้เรียนกล้าลองคิดและลงมือทำ</p><div className="quote">“พาผู้เรียนเห็นศักยภาพของตัวเอง และเปลี่ยนความเข้าใจให้เป็นการลงมือทำ”</div><Link className="button button--dark" href="/trainer-profile">ดูประวัติวิทยากร <Arrow/></Link></div><div className="expert-card"><div className="expert-photo"><Image src="/images/phakorn-profile.webp" fill sizes="(max-width: 767px) 100vw, 42vw" alt="อาจารย์พากร อัตตนนท์ วิทยากร ATTA9"/></div><div><p>LEAD TRAINER</p><h3>Phakorn Attanon</h3><span>Train the Trainer · Presentation · Communication</span></div></div></div></section>

      <section className="section insights" id="insights"><div className="container"><SectionHeading eyebrow="INSIGHTS FOR ORGANIZATIONS" title="มุมคิดเพื่อการพัฒนาคนและองค์กร" align="center"/><div className="insight-grid"><article><span>LEADERSHIP</span><h3>หัวหน้างานยุคใหม่ควรสร้างพื้นที่ให้ทีมเรียนรู้อย่างไร</h3><p>แนวคิดสำหรับเปลี่ยนการสั่งงานให้เป็นบทสนทนาที่ช่วยให้ทีมคิดและเติบโต</p><a href="#contact">ขอคำแนะนำหัวข้อนี้ <Arrow/></a></article><article><span>COMMUNICATION</span><h3>ทำไมการสื่อสารในทีมจึงต้องเริ่มจากบริบทที่ตรงกัน</h3><p>สำรวจจุดที่ทำให้การประสานงานติดขัด และวิธีออกแบบการเรียนรู้ให้ใกล้กับงานจริง</p><a href="#contact">ขอคำแนะนำหัวข้อนี้ <Arrow/></a></article><article><span>LEARNING DESIGN</span><h3>ออกแบบ In-house Training อย่างไรให้คนอยากมีส่วนร่วม</h3><p>จากโจทย์องค์กร สู่กิจกรรมที่ทำให้ผู้เรียนได้คิด ทดลอง และเห็นวิธีนำไปใช้</p><a href="#contact">ขอคำแนะนำหัวข้อนี้ <Arrow/></a></article></div></div></section>

      <section className="section faq" id="faq"><div className="container faq-layout"><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title="คำถามก่อนเริ่มออกแบบหลักสูตร" intro="คำตอบเบื้องต้นสำหรับทีม HR, L&D และผู้ประสานงานโครงการ"/><FaqList items={faqs}/></div></section>

      <section className="consultation" id="contact"><div className="container consultation-grid"><div className="consultation-copy"><p className="eyebrow"><span/>START A CONVERSATION</p><h2>เริ่มออกแบบการเรียนรู้ที่ตอบโจทย์องค์กรของคุณ</h2><p>เล่าเป้าหมาย กลุ่มผู้เรียน และสิ่งที่อยากให้เปลี่ยนแปลงหลังการอบรม ทีมงานจะใช้ข้อมูลนี้เพื่อเริ่มต้นการสนทนาอย่างตรงประเด็น</p><ul><li><Check/>คุยโจทย์และบริบทขององค์กร</li><li><Check/>แนะนำรูปแบบการเรียนรู้ที่เหมาะสม</li><li><Check/>ออกแบบแนวทางตามกลุ่มเป้าหมาย</li></ul><div className="direct-contact"><a href="tel:0897896591"><Phone/><span><small>โทรปรึกษาทีมงาน</small>089-789-6591</span></a><a href="mailto:cs@atta9training.com"><Mail/><span><small>ส่งรายละเอียดทางอีเมล</small>cs@atta9training.com</span></a><a href="https://line.me/ti/p/~@atta9training" target="_blank" rel="noreferrer"><span className="line-contact-mark" aria-hidden="true">LINE</span><span><small>พูดคุยผ่าน Line</small>@atta9training</span></a></div></div><ContactForm/></div></section>
    </main>
    <Footer />
  </>;
}
