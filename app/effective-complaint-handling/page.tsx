import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrainerCurriculum } from "@/components/trainer-curriculum";
import { TrainerGallery } from "@/components/trainer-gallery";
import { TrainerOutcomes } from "@/components/trainer-outcomes";
import { Activity, Arrow, BookOpen, ClipboardCheck, Graduation, Presentation, Spark, Target, UserFocus, Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Effective Complaint Handling | ATTA9 Training",
  description: "หลักสูตรรับมือข้อร้องเรียนอย่างมืออาชีพ 2 วัน ฝึกทัศนคติเชิงบวก การสื่อสาร เทคนิค LEO และการเปลี่ยนข้อร้องเรียนให้เป็นโอกาสสร้างความเชื่อมั่น",
  openGraph: {
    title: "Effective Complaint Handling",
    description: "เปลี่ยนทุกข้อร้องเรียนจากสถานการณ์ที่ยาก ให้เป็นโอกาสกู้คืนความเชื่อมั่นและรักษาความสัมพันธ์กับลูกค้า",
    images: ["/images/effective-complaint-handling/course-cover.webp"],
  },
};

const problems = [
  "พนักงานมีทัศนคติเชิงลบ มองข้อร้องเรียนเป็นเรื่องน่ารำคาญและพยายามหลีกเลี่ยง",
  "ผลักภาระหรือส่งต่อให้หน่วยงานอื่น โดยไม่ได้ช่วยให้ลูกค้ารู้สึกว่าได้รับการดูแล",
  "รับมือกับอารมณ์ของลูกค้าไม่ถูกวิธี จนความไม่พอใจยิ่งรุนแรงขึ้น",
  "รีบอธิบายเหตุผลก่อนรับฟังความรู้สึก ทำให้ลูกค้ามองว่าองค์กรไม่เข้าใจปัญหา",
  "แก้สถานการณ์เฉพาะหน้าได้ แต่ไม่สามารถฟื้นความเชื่อมั่นให้ลูกค้ากลับมาใช้บริการ",
  "ข้อร้องเรียนที่ไม่ได้รับการดูแลอาจถูกส่งต่อบนสื่อสังคมและกระทบภาพลักษณ์องค์กร",
];

const outcomes: [string, string][] = [
  ["Positive Mindset", "ปรับมุมมองจากการหลีกเลี่ยง สู่การเห็นข้อร้องเรียนเป็นโอกาสพัฒนาบริการและสร้างความประทับใจ"],
  ["Emotional De-escalation", "รับมือกับลูกค้าที่กำลังโกรธได้อย่างเหมาะสม ลดความตึงเครียดก่อนเข้าสู่การแก้ปัญหา"],
  ["Service Communication", "เลือกใช้คำพูด น้ำเสียง และการฟังอย่างเข้าอกเข้าใจ เพื่อให้ลูกค้ารู้สึกว่าได้รับการดูแล"],
  ["LEO Technique", "ใช้กระบวนการ LEO เป็นกรอบปฏิบัติในการรับฟัง เข้าใจสถานการณ์ และตอบสนองอย่างมืออาชีพ"],
  ["Recover Trust", "เปลี่ยนประสบการณ์เชิงลบให้เป็นโอกาสฟื้นความไว้วางใจ และทำให้ลูกค้าอยากกลับมาใช้บริการ"],
  ["Action Plan", "วางแผนพัฒนาตนเองด้วย Stay Stop Start Model เพื่อนำทักษะกลับไปใช้ในงานจริง"],
];

const modules = [
  { number: "01", title: "Positive Complaint Mindset", subtitle: "ทัศนคติเชิงบวกต่อข้อร้องเรียน", topics: ["เปลี่ยนจาก Negative & Avoid สู่ Positive & Approach", "มองข้อร้องเรียนเป็น Voice from Heaven", "Fixed Mindset และ Growth Mindset", "Intention Setting ก่อนเริ่มให้บริการ", "หลักคิด E + R = O"] },
  { number: "02", title: "Service Communication", subtitle: "การสื่อสารเพื่อดูแลความรู้สึก", topics: ["สื่อสารด้วยคำพูด น้ำเสียง และภาษากายที่เหมาะสม", "ฟังเพื่อเข้าใจทั้งปัญหาและความรู้สึกของลูกค้า", "แสดงความเข้าอกเข้าใจโดยไม่โต้แย้ง", "สร้างบรรยากาศที่ช่วยลดความตึงเครียด"] },
  { number: "03", title: "Effective Complaint Handling", subtitle: "เทคนิคจัดการข้อร้องเรียนอย่างมืออาชีพ", topics: ["ความเข้าใจผิดที่พบบ่อยในการรับมือข้อร้องเรียน", "แยกโหมดเหตุผลและโหมดอารมณ์ของลูกค้า", "เครื่องมือ LEO สำหรับจัดการข้อร้องเรียน", "Golden Phrases เพื่อรองรับอารมณ์ลูกค้า", "Complaint Handling Simulation"] },
  { number: "04", title: "Coaching for Success", subtitle: "ต่อยอดสู่การพัฒนาที่ยั่งยืน", topics: ["Coaching เพื่อดึงศักยภาพและสร้างความรับผิดชอบ", "ทบทวนพฤติกรรมด้วย Stay Stop Start Model", "สรุปสิ่งที่ค้นพบและจัดทำ Personal Action Plan"] },
];

const methods = ["Ice Breaking", "Triad Practice", "Role Play", "Complaint Simulation", "Case Study", "Group Activity", "Game", "Workshop", "VDO Clip", "Coaching", "Action Plan"];
const methodIcons = [Spark, Users, Presentation, Activity, BookOpen, Users, Spark, ClipboardCheck, Presentation, UserFocus, Target];

const gallery = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/effective-complaint-handling/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `บรรยากาศหลักสูตร Effective Complaint Handling ภาพที่ ${index + 1}`,
}));

export default function EffectiveComplaintHandlingPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero complaint-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/effective-complaint-handling/hero.avif" fill preload quality={100} sizes="100vw" alt="วิทยากรกำลังนำกิจกรรมฝึกรับมือข้อร้องเรียนกับผู้เข้าอบรม" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="complaint-hero-kicker">LISTEN • EMPATHIZE • RECOVER TRUST</p>
            <h1><span>Effective</span><strong>Complaint Handling</strong></h1>
            <p className="course-detail-lead">เปลี่ยนข้อร้องเรียนจากสถานการณ์ที่ยาก ให้เป็นโอกาสรับฟัง แก้ไข และสร้างความเชื่อมั่นจนลูกค้าอยากกลับมาใช้บริการ</p>
            <div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>25</span><p><small>CLASS SIZE</small>ไม่เกิน 25 ท่าน</p></div><div><Users /><p><small>FOR WHOM</small>พนักงานผู้ให้บริการ</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section complaint-problem">
        <div className="container trainer-problem-layout">
          <div><p className="eyebrow"><span />FROM COMPLAINT TO CONFIDENCE</p><h2>ลูกค้าไม่ได้ต้องการแค่คำตอบ<br />แต่ต้องการรู้ว่าเราเข้าใจ</h2><p>ข้อร้องเรียนมักมีทั้งปัญหาและอารมณ์ซ่อนอยู่ หากพนักงานรีบอธิบาย โต้แย้ง หรือส่งต่อ ลูกค้าอาจยิ่งรู้สึกว่าไม่ได้รับการดูแล หลักสูตรนี้จึงพัฒนาทั้ง Mindset และ Skillset เพื่อรับฟังอย่างเข้าใจ คลี่คลายสถานการณ์ และกู้คืนความสัมพันธ์</p></div>
          <div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div>
        </div>
        <div className="container complaint-flow" aria-label="ลำดับการรับมือข้อร้องเรียน"><span>รับฟัง<small>LISTEN</small></span><i aria-hidden="true" /><span>เข้าใจอารมณ์<small>EMPATHIZE</small></span><i aria-hidden="true" /><span>แก้ไข<small>RESOLVE</small></span><i aria-hidden="true" /><span>ฟื้นความเชื่อมั่น<small>RECOVER</small></span></div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>รับมือด้วยความเข้าใจ<br />เปลี่ยนวิกฤตเป็นความไว้วางใจ</h2></div><p>ผู้เรียนจะเข้าใจความคิดและความรู้สึกของลูกค้า เลือกวิธีสื่อสารให้เหมาะกับสถานการณ์ และใช้เครื่องมือที่ช่วยเปลี่ยนบทสนทนาที่ยากให้เดินหน้าได้อย่างสร้างสรรค์</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum complaint-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>จาก Positive Mindset<br />สู่การรับมือสถานการณ์จริง</h2></div><p>เนื้อหาเชื่อมทัศนคติ การสื่อสาร เครื่องมือ LEO และการ Coaching เข้าด้วยกัน เพื่อให้ผู้เรียนดูแลได้ทั้งปัญหา อารมณ์ และความสัมพันธ์ในทุกจังหวะของข้อร้องเรียน</p></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design complaint-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/effective-complaint-handling/gallery-03.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมฝึกรับมือข้อร้องเรียนผ่านสถานการณ์จำลอง" /><div><UserFocus /><span>Mindset <b>+</b> Skillset</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>ได้ลองเป็นทั้งผู้ให้บริการ<br />ลูกค้า และผู้สังเกตการณ์</h2><p className="complaint-learning-intro">การฝึกแบบ Triad ทำให้ผู้เรียนเห็นสถานการณ์จากหลายมุม ได้สังเกตผลของคำพูด น้ำเสียง และภาษากาย พร้อมรับ Coaching เพื่อพัฒนาวิธีตอบสนองของตนเอง</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Complaint Simulation</h3><p>ฝึกรับมือโจทย์ที่ใกล้เคียงงานจริง ตั้งแต่ลูกค้าเริ่มไม่พอใจ ไปจนถึงการคลี่คลายปัญหาและฟื้นความเชื่อมั่น</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Reflection &amp; Coaching</h3><p>สะท้อนสิ่งที่เกิดขึ้นหลังการฝึก รับคำแนะนำเฉพาะจุด และสรุปเป็นแนวทางที่พร้อมนำกลับไปใช้ในบริบทขององค์กร</p></div></div></div></div></section>

      <section className="story-photo-pair complaint-photo-pair"><div className="story-photo"><Image src="/images/effective-complaint-handling/gallery-09.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="กิจกรรมกลุ่มเพื่อฝึกการรับฟังและสื่อสารกับลูกค้า" /><span>Listen beyond the words</span></div><div className="story-photo"><Image src="/images/effective-complaint-handling/gallery-04.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมร่วมวิเคราะห์สถานการณ์ข้อร้องเรียน" /><span>Turn recovery into loyalty</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>ฝึกคิด ฝึกฟัง ฝึกตอบ<br />จนพร้อมรับมือหน้างาน</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>การเรียนรู้ผ่านกิจกรรม กรณีศึกษา Role Play และการสะท้อนผล ช่วยให้ผู้เรียนเข้าใจทั้งมุมของลูกค้าและวิธีตอบสนองที่เหมาะสมก่อนกลับไปใช้จริง</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>สำหรับทีมบริการที่ต้องการ<br />เปลี่ยนทุกข้อร้องเรียนเป็นโอกาส</h2><p>หลักสูตร 2 วัน เวลา 09.00–16.00 น. เหมาะสำหรับพนักงานที่ให้บริการลูกค้าทั้งภายนอกและภายในองค์กร จำกัดไม่เกิน 25 ท่านต่อรุ่น เพื่อให้ทุกคนได้ฝึกสถานการณ์ รับคำแนะนำ และจัดทำ Action Plan ของตนเอง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>พนักงานผู้ให้บริการลูกค้าภายนอกและภายใน</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 25 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับสถานการณ์ให้ตรงกับองค์กร</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
