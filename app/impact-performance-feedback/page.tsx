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
  title: "Impact Performance Feedback | ATTA9 Training",
  description: "หลักสูตร Performance Feedback สำหรับหัวหน้างาน 1 วัน ฝึก GROW Model, EAR, Sandwich Feedback, Coaching และ Action Plan เพื่อพัฒนาผลงานอย่างสร้างสรรค์",
  openGraph: {
    title: "Impact Performance Feedback",
    description: "เปลี่ยนบทสนทนาเรื่องผลงาน ให้เป็นแรงขับเคลื่อนการพัฒนาที่ชัดเจนและรักษาความไว้วางใจ",
    images: ["/images/impact-performance-feedback/hero.jpg"],
  },
};

const problems = [
  "พนักงานมอง Feedback เป็นเรื่องลบ และรู้สึกว่ากำลังถูกตักเตือนหรือตำหนิ",
  "หัวหน้างานขาดศิลปะในการให้ Feedback จนพนักงานเสียกำลังใจและไม่ยอมรับ",
  "หัวหน้ากลัวลูกน้องรู้สึกไม่ดี จึงไม่พูดหรือเลือกพูดเฉพาะสิ่งที่ดี",
  "ประเมินจาก KPI หรือ Competency เพียงด้านเดียว โดยไม่ค้นหาปัญหาจากมุมของพนักงาน",
  "Feedback ไม่ชัดเจนและขาดการติดตาม ทำให้พนักงานไม่รู้ว่าจะปรับปรุงอย่างไร",
];

const outcomes: [string, string][] = [
  ["Positive Attitude", "เห็นความสำคัญและปรับทัศนคติต่อ Performance Feedback ให้เป็นบวกและสร้างสรรค์"],
  ["Self-assessment", "พาพนักงานสำรวจและให้ Feedback ตนเอง เพื่อให้ได้ข้อมูลรอบด้านและแม่นยำขึ้น"],
  ["Evidence-based", "ใช้เทคนิคและเครื่องมือที่มีหลักฐานชัดเจน สอดคล้องกับการประเมินของทีมและองค์กร"],
  ["Trust & Acceptance", "สื่อสารอย่างรักษาความรู้สึก ทำให้พนักงานยอมรับและเต็มใจนำคำแนะนำไปพัฒนา"],
  ["Coaching for Results", "สอนแนะพนักงานให้วางเป้าหมาย ทางเลือก และแผนปรับปรุงผลงานอย่างเป็นรูปธรรม"],
  ["Continuous Follow-up", "ติดตามผลและต่อยอดบทสนทนา Feedback ให้เกิดการพัฒนาอย่างต่อเนื่อง"],
];

const modules = [
  { number: "01", title: "Leader’s Attitude", subtitle: "ทัศนคติของผู้นำในการให้ Feedback", topics: ["สร้างความตระหนักถึงความสำคัญของ Performance Feedback", "ทัศนคติเชิงบวกและสร้างสรรค์", "วุฒิภาวะทางอารมณ์และการสำรวจตนเอง", "ผู้นำ 4 ประเภทกับการให้ Feedback"] },
  { number: "02", title: "Effective Communication", subtitle: "การสื่อสารที่ทรงประสิทธิภาพ", topics: ["ความสำคัญของคำพูด น้ำเสียง และภาษากาย", "การฟังอย่างเข้าอกเข้าใจ (Empathic Listening)", "สร้าง Rapport เพื่อความไว้วางใจ", "จัดสภาพแวดล้อมที่เอื้อต่อการ Feedback"] },
  { number: "03", title: "Tools & Techniques", subtitle: "เทคนิคและเครื่องมือ Performance Feedback", topics: ["แบบฟอร์มและเอกสารบันทึกข้อมูล", "ลำดับขั้นตอนในการให้ Performance Feedback", "GROW Model กับการตั้งคำถาม", "EAR: Feedback ด้วยหลักฐานที่ชัดเจน", "Sandwich Feedback ที่ทำให้ผู้รับเต็มใจพัฒนา"] },
  { number: "04", title: "Coaching for Improvement", subtitle: "การสอนแนะหลังให้ Feedback", topics: ["Pain & Pleasure เพื่อสร้างแรงจูงใจ", "หลักการสอนแนะแบบ KUSA", "ขั้นตอนการสอนงานเพื่อให้ได้ผลลัพธ์ตามเป้าหมาย"] },
  { number: "05", title: "Action Plan", subtitle: "แผนปฏิบัติการสู่ความสำเร็จ", topics: ["การตั้งเป้าหมายแบบ SMART", "การสำรวจตนเองเพื่อสร้างความตระหนักรู้", "ค้นหาทางเลือกเพื่อประกอบการตัดสินใจ", "Action Plan ด้วย Stay Stop Start Model"] },
];

const methods = ["Triad Practice", "Role Play", "Performance Feedback", "Coaching", "Empathic Listening", "GROW Model", "Case Study", "Group Activity", "Workshop", "Reflection", "Action Plan"];
const methodIcons = [Users, UserFocus, Presentation, Spark, Activity, Target, BookOpen, Users, ClipboardCheck, UserFocus, Target];

const gallery = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/impact-performance-feedback/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `บรรยากาศหลักสูตร Impact Performance Feedback ภาพที่ ${index + 1}`,
}));

export default function ImpactPerformanceFeedbackPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero feedback-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/impact-performance-feedback/hero.jpg" fill preload quality={100} sizes="100vw" alt="วิทยากรกำลังนำกิจกรรม Performance Feedback กับผู้เข้าอบรม" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="feedback-hero-kicker">CLARITY • TRUST • IMPROVEMENT</p>
            <h1><span>Impact</span><strong>Performance Feedback</strong></h1>
            <p className="course-detail-lead">เปลี่ยนบทสนทนาเรื่องผลงานจากความกังวลและการตัดสิน ให้เป็นการสื่อสารที่ชัดเจน รักษาความไว้วางใจ และนำไปสู่การพัฒนาจริง</p>
            <div className="course-facts"><div><span>1</span><p><small>DURATION</small>วัน / 6 ชั่วโมง</p></div><div><span>20</span><p><small>CLASS SIZE</small>ไม่เกิน 20 ท่าน</p></div><div><Users /><p><small>FOR WHOM</small>หัวหน้างานขึ้นไป</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section feedback-problem">
        <div className="container trainer-problem-layout">
          <div><p className="eyebrow"><span />FROM JUDGMENT TO DEVELOPMENT</p><h2>Feedback ที่ดีไม่ใช่การตัดสิน<br />แต่คือข้อมูลเพื่อก้าวต่อไป</h2><p>Performance Feedback ช่วยให้พนักงานรู้ว่าผลงานอยู่ตรงไหนเมื่อเทียบกับเป้าหมาย สิ่งใดควรทำต่อ และสิ่งใดต้องปรับปรุง แต่บทสนทนาจะเกิดผลได้ก็ต่อเมื่อหัวหน้าสื่อสารอย่างชัดเจน เปิดรับมุมมอง และร่วมกันสร้างทางเลือกในการพัฒนา</p></div>
          <div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div>
        </div>
        <div className="container feedback-flow" aria-label="ลำดับการให้ Feedback เพื่อพัฒนาผลงาน"><span>สังเกต<small>OBSERVE</small></span><i aria-hidden="true" /><span>สนทนา<small>DISCUSS</small></span><i aria-hidden="true" /><span>ตั้งเป้า<small>ALIGN</small></span><i aria-hidden="true" /><span>ลงมือพัฒนา<small>IMPROVE</small></span></div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>ชัดเจนเรื่องผลงาน<br />โดยไม่ทำลายความสัมพันธ์</h2></div><p>ผู้เรียนจะได้ทั้งกรอบความคิดและเครื่องมือ เพื่อทำให้พนักงานเห็นข้อมูลจริง กล้าสำรวจตนเอง ยอมรับคำแนะนำ และสร้างแผนพัฒนาที่ทุกฝ่ายเห็นตรงกัน</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum feedback-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>จากทัศนคติของผู้นำ<br />สู่ Action Plan ที่ติดตามผลได้</h2></div><p>เนื้อหาเชื่อม 5 ส่วน ตั้งแต่ทัศนคติ การฟังและสร้าง Rapport ไปจนถึง GROW, EAR, Sandwich Feedback, Coaching และ Stay Stop Start Model</p></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design feedback-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/impact-performance-feedback/gallery-03.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมฝึกบทสนทนา Performance Feedback เป็นกลุ่มย่อย" /><div><UserFocus /><span>Evidence <b>+</b> Empathy</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>ฝึกครบทั้งผู้ให้<br />ผู้รับ และผู้สังเกตการณ์</h2><p className="feedback-learning-intro">การฝึกแบบ Triad ช่วยให้ผู้เรียนเข้าใจผลของคำพูด น้ำเสียง คำถาม และภาษากายจากหลายมุมมอง พร้อมเห็นจุดที่ควรพัฒนาในบทสนทนาของตนเอง</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Triad Feedback Practice</h3><p>สลับบทบาทผู้ให้การประเมิน ผู้ถูกประเมิน และผู้สังเกตการณ์ เพื่อฝึกใช้หลักฐาน รับฟังมุมมอง และสื่อสารคำแนะนำอย่างสร้างสรรค์</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Feedback on Feedback</h3><p>นำเครื่องมือ Feedback มาใช้สะท้อนการฝึกของเพื่อนร่วมคลาสอีกชั้นหนึ่ง ก่อนสรุปสิ่งที่ค้นพบเป็น Action Plan เฉพาะบุคคล</p></div></div></div></div></section>

      <section className="story-photo-pair feedback-photo-pair"><div className="story-photo"><Image src="/images/impact-performance-feedback/gallery-09.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="วิทยากรสาธิตการฟังและสนทนาอย่างเข้าอกเข้าใจ" /><span>Evidence with empathy</span></div><div className="story-photo"><Image src="/images/impact-performance-feedback/gallery-04.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมร่วมกิจกรรมสะท้อนมุมมองอย่างเป็นกันเอง" /><span>Feedback that moves forward</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>ทดลองบทสนทนาจริง<br />ก่อนนำกลับไปใช้กับทีม</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />FEEDBACK IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>กิจกรรมที่เปิดพื้นที่ให้ผู้เรียนทดลองฟัง ตั้งคำถาม ให้คำแนะนำ และสะท้อนตนเอง ช่วยเปลี่ยน Feedback จากแนวคิดให้กลายเป็นทักษะที่ใช้ได้จริง</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>สำหรับหัวหน้าที่ต้องการ<br />ยกระดับผลงานผ่านบทสนทนา</h2><p>หลักสูตร 1 วัน เวลา 09.00–16.00 น. เหมาะสำหรับผู้บริหารระดับหัวหน้างานขึ้นไป จำกัดไม่เกิน 20 ท่านต่อรุ่น เพื่อให้ทุกคนได้ฝึกสถานการณ์จริง รับ Feedback และสร้าง Action Plan ของตนเอง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>ผู้บริหารระดับหัวหน้างานขึ้นไป</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 20 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>1 วัน 6 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับกรณีศึกษาให้ตรงกับองค์กร</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
