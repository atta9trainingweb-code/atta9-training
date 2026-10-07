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
  title: "Persuasive & Powerful Presentation | ATTA9 Training",
  description: "หลักสูตรพัฒนาทักษะการนำเสนอและโน้มน้าว 2 วัน ฝึกวางโครงสร้าง สื่อสาร Key Message ใช้บุคลิกภาพ น้ำเสียง PowerPoint และตอบคำถามอย่างมืออาชีพ",
  openGraph: {
    title: "Persuasive & Powerful Presentation",
    description: "นำเสนออย่างมั่นใจ กระชับ ตรงประเด็น และโน้มน้าวผู้ฟังให้พร้อมตัดสินใจ",
    images: ["/images/persuasive-presentation/hero-presentation-seminar-v2.png"],
  },
};

const problems = [
  "นำเสนอแล้วผู้ฟังไม่เข้าใจในสิ่งที่ต้องการสื่อ",
  "ขาดความมั่นใจ ตื่นเต้น ประหม่า และควบคุมตนเองไม่ได้อย่างที่ตั้งใจ",
  "ขาดการวางแผนและไม่รู้จักบริหารเวลาหรือสัดส่วนการนำเสนอ",
  "มีข้อมูลมากมาย แต่ไม่ทราบว่าจะเรียงลำดับอย่างไรให้เข้าใจง่าย",
  "การนำเสนอไม่น่าสนใจ ขาดเสน่ห์ในการดึงดูดผู้ฟัง",
  "เคลื่อนไหวร่างกายและใช้สายตาไม่ถูกต้อง ไม่รู้ว่าจะวางมืออย่างไร",
  "น้ำเสียงราบเรียบ ไม่มีพลัง ขาดความชัดเจนและจังหวะจะโคน",
  "ใช้ PowerPoint Slide โดยไม่มีหลักการจนรบกวนสารที่ต้องการสื่อ",
];

const outcomes: [string, string][] = [
  ["Clear Objective", "กำหนดเป้าหมายการนำเสนอให้ชัดเจน และพาผู้ฟังไปสู่ผลลัพธ์ที่ต้องการ"],
  ["Persuasive Impact", "โน้มน้าวให้ผู้ฟังคล้อยตาม พร้อมเปลี่ยนความคิดหรือพฤติกรรมอย่างมีเหตุผล"],
  ["Strong Structure", "เรียบเรียงข้อมูล จัดโครงสร้าง และลำดับเนื้อหาให้เข้าใจง่าย"],
  ["Concise Delivery", "นำเสนออย่างน่าติดตาม กระชับ และตรงประเด็นภายในเวลาที่กำหนด"],
  ["Confident Presence", "ครองเวทีด้วยบุคลิกภาพ น้ำเสียง และภาษากายที่มั่นใจน่าเชื่อถือ"],
  ["Effective Slides", "ผลิตและใช้ PowerPoint Slide อย่างมีหลักการ เพื่อเสริมสารแทนการแย่งความสนใจ"],
  ["Professional Q&A", "จัดการคำถามและข้อโต้แย้งอย่างมืออาชีพ โดยยังคงเป้าหมายของการนำเสนอ"],
];

const modules = [
  { number: "01", title: "Presenter Personality", subtitle: "บุคลิกภาพของผู้นำเสนอ", topics: ["การยืนและเคลื่อนไหวร่างกายอย่างน่าเชื่อถือ", "การใช้มือและการสบตากับผู้ฟัง", "การใช้ระดับเสียง น้ำเสียง และจังหวะจะโคน"] },
  { number: "02", title: "How to Persuade", subtitle: "หลักการโน้มน้าวใจ", topics: ["ดึงดูดผู้ฟังตั้งแต่เริ่มนำเสนอ", "การแนะนำตัวให้น่าสนใจ", "คิดจากมุมมองของผู้ฟัง", "เครื่องมือโน้มน้าวและการเล่าเรื่อง", "การนำเสนอสถิติและตัวเลขด้วยกราฟ"] },
  { number: "03", title: "Concept & Theme", subtitle: "การคุมคอนเซปต์ในการนำเสนอ", topics: ["ตั้งวัตถุประสงค์ให้ชัดและตรงประเด็น", "เชื่อมบทนำ เนื้อหา และบทสรุปให้กลมกลืน", "เรียบเรียงและลำดับเนื้อหาให้เข้าใจง่าย", "สร้าง Key Message และคำพาดหัว"] },
  { number: "04", title: "Presentation Psychology", subtitle: "จิตวิทยาในการนำเสนอ", topics: ["ทัศนคติเชิงบวกเพื่อความมั่นใจ", "วิเคราะห์และศึกษาผู้ฟัง", "เปิดการนำเสนอให้น่าติดตาม", "ดึงดูดด้วยหลัก Pain & Pleasure", "สร้างการมีส่วนร่วมและประเมินผู้ฟัง"] },
  { number: "05", title: "Presentation Methods", subtitle: "เทคนิคในการนำเสนอ", topics: ["เลือกรูปแบบการนำเสนอให้เหมาะกับสาร", "ออกแบบ PowerPoint Slide อย่างมีประสิทธิภาพ", "ใช้อุปกรณ์ประกอบการนำเสนอ", "ตอบคำถามและข้อโต้แย้งอย่างมืออาชีพ"] },
  { number: "06", title: "Practice & Evaluation", subtitle: "การฝึกปฏิบัติและประเมินผล", topics: ["ฝึกนำเสนอด้วยเทคนิคและเครื่องมือต่าง ๆ", "ประเมินผลตนเองในการนำเสนอ", "รับ Feedback จากมุมมองของผู้ฟังและผู้สอน", "สร้าง Action Plan เพื่อนำไปใช้จริง"] },
];

const methods = ["Triad Practice", "Presentation Practice", "VDO Recording", "Individual Feedback", "Coaching", "Role Play", "Workshop", "Audience Analysis", "PowerPoint", "Action Plan"];
const methodIcons = [Users, Presentation, Activity, UserFocus, Spark, Users, ClipboardCheck, Target, Presentation, BookOpen];

const gallery = [
  ...Array.from({ length: 10 }, (_, index) => ({
    src: `/images/persuasive-presentation/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `บรรยากาศหลักสูตร Persuasive & Powerful Presentation ภาพที่ ${index + 1}`,
  })),
  { src: "/images/persuasive-presentation/gallery-11.webp", alt: "สื่อประกอบหลักสูตร Persuasive & Powerful Presentation" },
  { src: "/images/persuasive-presentation/gallery-12.jpg", alt: "ผู้เข้าอบรมฝึกนำเสนอและรับคำแนะนำจากวิทยากร" },
];

export default function PersuasivePowerfulPresentationPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero presentation-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/persuasive-presentation/hero-presentation-seminar-v2.png" fill preload quality={100} sizes="100vw" alt="อาจารย์พากรกำลังถ่ายทอดทักษะการนำเสนอบนเวทีในห้องสัมมนา" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="presentation-hero-kicker">STRUCTURE • PERSUADE • MOVE TO ACTION</p>
            <h1><span>Persuasive &amp;</span><strong>Powerful Presentation</strong></h1>
            <p className="course-detail-lead">เปลี่ยนข้อมูลที่ซับซ้อนให้เป็นการนำเสนอที่ชัดเจน น่าเชื่อถือ และโน้มน้าวลูกค้า ผู้บริหาร หรือทีมงานให้พร้อมตัดสินใจ</p>
            <div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>12</span><p><small>CLASS SIZE</small>ไม่เกิน 12 ท่าน</p></div><div><Presentation /><p><small>FOR WHOM</small>ผู้นำเสนองานในองค์กร</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section presentation-problem">
        <div className="container trainer-problem-layout">
          <div><p className="eyebrow"><span />MAKE EVERY MINUTE MATTER</p><h2>ทำงานเก่งอย่างเดียวไม่พอ<br />ต้องนำเสนอคุณค่าให้คนเห็น</h2><p>เวลาของลูกค้าและผู้บริหารมีคุณค่าทุกวินาที ผู้นำเสนอที่สร้างผลลัพธ์จึงต้องเลือกข้อมูลสำคัญ เรียบเรียงให้เข้าใจง่าย เสนอทางเลือกที่ช่วยตัดสินใจ และสรุปให้กระชับตรงประเด็น</p></div>
          <div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div>
        </div>
        <div className="container presentation-flow" aria-label="ลำดับการนำเสนอที่มีพลัง"><span>ดึงดูด<small>HOOK</small></span><i aria-hidden="true" /><span>เรียบเรียง<small>STRUCTURE</small></span><i aria-hidden="true" /><span>โน้มน้าว<small>PERSUADE</small></span><i aria-hidden="true" /><span>ผลักดัน<small>ACTION</small></span></div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>นำเสนอได้อย่างมั่นใจ<br />และพาผู้ฟังไปสู่การตัดสินใจ</h2></div><p>ผู้เรียนจะพัฒนาตั้งแต่การกำหนดเป้าหมาย จัดโครงสร้าง และออกแบบ Key Message ไปจนถึงการใช้บุคลิกภาพ สไลด์ และการตอบคำถามเพื่อสร้างผลลัพธ์</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum presentation-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>ครบทั้งศาสตร์การโน้มน้าว<br />และศิลป์ของการนำเสนอ</h2></div><p>เนื้อหา 6 ส่วนเชื่อมตั้งแต่ตัวผู้นำเสนอ ผู้ฟัง โครงสร้างเรื่องและจิตวิทยา ไปจนถึงเทคนิค PowerPoint การฝึกปฏิบัติ และแผนพัฒนาต่อในงานจริง</p></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design presentation-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/persuasive-presentation/gallery-02.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมฝึกนำเสนอโดยมีวิทยากรให้คำแนะนำ" /><div><Presentation /><span>Practice <b>+</b> Feedback</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>ฝึกจริง เห็นตัวเองจริง<br />และพัฒนาได้ตรงจุด</h2><p className="presentation-learning-intro">การเรียนรู้ถูกออกแบบให้สมดุลทั้ง Skillset และ Mindset เพื่อให้ผู้เรียนกล้าลอง เห็นผลของวิธีสื่อสารแต่ละแบบ และนำข้อเสนอแนะไปปรับใช้ได้ทันที</p><div className="trainer-learning-block"><span><Activity /></span><div><h3>Simulation &amp; VDO Review</h3><p>ฝึกนำเสนอหน้าคลาสกับผู้ฟังกลุ่มใหญ่ในสถานการณ์เสมือนจริง พร้อมบันทึกวิดีโอเพื่อมองเห็นจุดแข็งและจุดที่ควรพัฒนาอย่างชัดเจน</p></div></div><div className="trainer-learning-block"><span><UserFocus /></span><div><h3>Individual Feedback &amp; Coaching</h3><p>รับ Feedback รายบุคคลจากผู้สอน สลับบทบาทผู้พูด ผู้ฟัง และผู้สังเกตการณ์ในกลุ่ม Triad ก่อนสรุปเป็น Action Plan ของตนเอง</p></div></div></div></div></section>

      <section className="story-photo-pair presentation-photo-pair"><div className="story-photo"><Image src="/images/persuasive-presentation/gallery-03.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมฝึกครองเวทีและสื่อสารกับผู้ฟัง" /><span>Speak with confidence</span></div><div className="story-photo"><Image src="/images/persuasive-presentation/gallery-05.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="กิจกรรมกลุ่มเพื่อฝึกเรียบเรียงและสื่อสารแนวคิด" /><span>Move people to action</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>เรียนรู้ผ่านการลงมือ<br />และข้อเสนอแนะที่เฉพาะตัว</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>จากการวิเคราะห์ผู้ฟังและวาง Storyline สู่การขึ้นนำเสนอจริง ผู้เรียนได้ทดลองหลากหลายบทบาท รับ Feedback และค่อย ๆ สร้างความมั่นใจของตนเอง</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>หลักสูตรเข้มข้นสำหรับคน<br />ที่ต้องนำเสนอเพื่อสร้างผลลัพธ์</h2><p>เหมาะสำหรับพนักงานที่ต้องนำเสนองานให้ลูกค้า ผู้บริหาร และทีมงาน ใช้เวลา 2 วัน เวลา 09.00–16.00 น. จำกัดเพียง 12 ท่านต่อรุ่น เพื่อให้ผู้เรียนทุกคนได้ฝึกจริงและรับ Feedback อย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>ผู้ที่นำเสนอต่อลูกค้า ผู้บริหาร และทีมงาน</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 12 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับโจทย์ให้ตรงกับองค์กร</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
