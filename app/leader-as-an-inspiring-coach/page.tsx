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
  title: "Leader as an Inspiring Coach | ATTA9 Training",
  description: "หลักสูตรพัฒนาผู้นำสู่บทบาทโค้ช 2 วัน ฝึก Growth Mindset การสื่อสาร Feedback การสอนงาน และ GROW Model เพื่อดึงศักยภาพทีมอย่างยั่งยืน",
  openGraph: {
    title: "Leader as an Inspiring Coach",
    description: "เปลี่ยนบทบาทจากหัวหน้าผู้สั่งการ สู่โค้ชที่สร้างความไว้วางใจและปลุกศักยภาพของทีม",
    images: ["/images/inspiring-coach/hero.jpg"],
  },
};

const problems = [
  "อีโก้สูง จนทีมไม่รู้สึกถึงความน่าเชื่อถือและไว้วางใจ",
  "จ้องตำหนิและรายงาน แต่ไม่เคยเป็นโค้ชผู้สอนและดึงศักยภาพ",
  "นิ่งเฉย ไม่กล้าตัดสินใจหรือจัดการ เมื่อลูกน้องทำผิดก็ไม่กล้าพูด",
  "ถนัดพูดแต่ไม่ถนัดฟัง ทำให้มองไม่เห็นความต้องการของลูกน้อง",
  "ให้คำแนะนำโดยไม่รักษาน้ำใจ จนทีมไม่อยากปรับปรุงเปลี่ยนแปลง",
  "สร้างแรงจูงใจหรือกระตุ้นให้ลูกน้องอยากพัฒนาตนเองไม่เป็น",
  "บริหารลูกน้องทุกคนด้วยวิธีเดียวกัน ทั้งที่แต่ละคนมีความหลากหลาย",
  "ไม่สามารถดึงศักยภาพของทีมให้เติบโตและก้าวหน้าได้อย่างเต็มที่",
];

const outcomes: [string, string][] = [
  ["Growth Mindset", "ปรับกรอบความคิดให้เป็นบวก เชื่อมั่นในศักยภาพและความคิดเห็นของลูกน้อง พร้อมเติบโตไปด้วยกัน"],
  ["Trust & Rapport", "สร้างความสัมพันธ์ระดับลึกและความไว้วางใจ ด้วยการฟังอย่างเข้าอกเข้าใจและวางตัวโดยไม่ตัดสิน"],
  ["Constructive Feedback", "ให้ Feedback อย่างชัดเจน รักษาน้ำใจ และช่วยให้ลูกน้องเต็มใจนำคำแนะนำไปพัฒนาตนเอง"],
  ["Effective Coaching", "ใช้คำถามทรงพลัง การสะท้อนความคิด และ GROW Model เพื่อให้ผู้รับการโค้ชค้นพบคำตอบของตนเอง"],
  ["Motivate Potential", "กระตุ้นแรงจูงใจและดึงศักยภาพของทีมให้เกิดการเปลี่ยนแปลงอย่างต่อเนื่องและยั่งยืน"],
  ["Lead by Example", "เป็นผู้นำที่ครองใจทีมและแสดงพฤติกรรมต้นแบบ พร้อมนำเครื่องมือกลับไปใช้กับงานจริง"],
];

const modules = [
  { number: "01", title: "Leader’s Mindset", subtitle: "ทัศนคติของผู้นำ", topics: ["สำรวจตนเองในบทบาทของผู้นำ", "วิธีคิดแบบเติบโต (Growth Mindset)", "การตั้งความตั้งใจ (Intention Setting)", "วุฒิภาวะทางอารมณ์ด้วยสมการ E + R = O", "เข้าใจความหลากหลายของทีมงาน"] },
  { number: "02", title: "Effective Communication", subtitle: "การสื่อสารที่มีประสิทธิภาพ", topics: ["การชมที่เป็นกำลังใจในการพัฒนา", "คำพูด น้ำเสียง และภาษากายของผู้นำ", "การสื่อสารเป้าหมายแบบ SMART", "อวัจนภาษากับการสื่อสาร", "การสื่อสารความคาดหวังของกันและกัน"] },
  { number: "03", title: "Constructive Feedback", subtitle: "Feedback ที่ทำให้ทีมอยากเปลี่ยน", topics: ["ทัศนคติของผู้นำที่กล้าให้ Feedback", "EAR เครื่องมือสื่อสารด้วยหลักฐานที่ชัดเจน", "Sandwich Feedback ที่รักษาความรู้สึก", "4 คำถามเพื่อการประเมินผลตนเอง"] },
  { number: "04", title: "On-the-job Training", subtitle: "การสอนงานให้เกิดผลลัพธ์", topics: ["หลักการสอนงานแบบ KUSA", "Pain & Gain เพื่อสร้างแรงจูงใจในการเรียนรู้", "ขั้นตอนการสอนงานเพื่อเปลี่ยนพฤติกรรม", "ประเมินผลก่อน ระหว่าง และหลังการสอนงาน"] },
  { number: "05", title: "Coach’s Mindset", subtitle: "กรอบความคิดของโค้ช", topics: ["ละความเป็นเจ้านาย สู่การเป็นเพื่อนร่วมทาง", "ให้ผู้รับการโค้ชเป็นศูนย์กลาง", "โฟกัสที่ทางออก ไม่ใช่ปัญหา", "วางตัวเป็นกลางโดยไม่ตัดสิน"] },
  { number: "06", title: "Leader as Coach", subtitle: "ผู้นำในบทบาทของโค้ช", topics: ["กรอบความคิดของโค้ชผู้พัฒนาศักยภาพของลูกน้อง", "การฟังอย่างเข้าอกเข้าใจ (Empathic Listening)", "สร้าง Rapport เพื่อความไว้วางใจ", "การตั้งคำถามทรงพลังและสะท้อนความคิด", "GROW Model เครื่องมือพื้นฐานของโค้ช", "Action Plan แบบ Stay Stop Start"] },
];

const methods = ["Triad Practice", "Coaching", "Role Play", "Case Study", "Workshop", "Group Activity", "Game", "VDO Clip", "Reflection", "Action Plan"];
const methodIcons = [Users, UserFocus, Presentation, BookOpen, ClipboardCheck, Activity, Spark, Presentation, UserFocus, Target];

const gallery = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/inspiring-coach/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `บรรยากาศหลักสูตร Leader as an Inspiring Coach ภาพที่ ${index + 1}`,
}));

export default function LeaderAsAnInspiringCoachPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero coach-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/inspiring-coach/hero-speaker.avif" fill preload quality={100} sizes="100vw" alt="วิทยากรกำลังถ่ายทอดและแลกเปลี่ยนกับผู้เข้าอบรมอย่างใกล้ชิด" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="coach-hero-kicker">LEAD • LISTEN • UNLOCK POTENTIAL</p>
            <h1><span>Leader as an</span><strong>Inspiring Coach</strong></h1>
            <p className="course-detail-lead">เปลี่ยนจากหัวหน้าผู้ให้คำตอบ สู่โค้ชที่รับฟัง สร้างความไว้วางใจ และปลุกศักยภาพให้ทีมค้นพบทางเลือกของตนเอง</p>
            <div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>20</span><p><small>CLASS SIZE</small>ไม่เกิน 20 ท่าน</p></div><div><Users /><p><small>FOR WHOM</small>ผู้นำองค์กรทุกระดับ</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section coach-why">
        <div className="container trainer-problem-layout">
          <div><p className="eyebrow"><span />FROM BOSS TO COACH</p><h2>คนเข้าทำงานเพราะบริษัท<br />แต่อาจตัดใจออกเพราะผู้นำ</h2><p>ผู้นำจำนวนมากเติบโตจากความเชี่ยวชาญในงานและความอาวุโส แต่ไม่เคยได้รับการพัฒนาด้านการบริหารคน จึงอาจเผลอใช้คำสั่ง ความเชื่อ หรือวิธีแก้ปัญหาของตนเองแทนการช่วยให้ทีมเติบโต</p></div>
          <div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div>
        </div>
        <div className="container coach-path" aria-label="วงจรการโค้ชเพื่อสร้างการเติบโต"><span>ฟัง<small>LISTEN</small></span><i aria-hidden="true" /><span>ถาม<small>QUESTION</small></span><i aria-hidden="true" /><span>สะท้อน<small>REFLECT</small></span><i aria-hidden="true" /><span>ลงมือทำ<small>ACTION</small></span></div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>สร้างผู้นำที่ครองใจ<br />และทำให้ทีมเติบโตจากภายใน</h2></div><p>ผู้เรียนจะได้พัฒนาทั้งกรอบความคิดและทักษะ ตั้งแต่การฟัง การสื่อสาร การให้ Feedback ไปจนถึงการโค้ชที่ทำให้ลูกน้องเห็นศักยภาพและวางแผนลงมือทำด้วยตนเอง</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum coach-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>จากกรอบความคิดของผู้นำ<br />สู่บทสนทนาที่ปลุกศักยภาพ</h2></div><p>หลักสูตรเรียงลำดับจากการสำรวจตนเอง สื่อสารและให้ Feedback อย่างสร้างสรรค์ ก่อนต่อยอดสู่การสอนงานและกระบวนการโค้ชด้วย GROW Model</p></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design coach-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/inspiring-coach/gallery-05.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="วิทยากรสังเกตและให้คำแนะนำระหว่างกิจกรรมฝึกโค้ช" /><div><UserFocus /><span>Skillset <b>+</b> Mindset</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>สลับมุมมอง<br />เพื่อเข้าใจทั้งผู้นำและผู้รับการโค้ช</h2><p className="coach-learning-intro">การเรียนรู้ที่นำไปใช้ได้จริงต้องสมดุลทั้งทักษะและทัศนคติ ผู้เรียนจึงได้ทดลอง สนทนา สังเกต และสะท้อนตนเองในบรรยากาศที่เปิดใจและให้กำลังใจกัน</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Triad Practice</h3><p>ฝึกเป็นกลุ่มเล็กสามมิติ สลับบทบาทผู้นำ ลูกน้อง และผู้สังเกตการณ์ เพื่อเห็นผลของคำถาม การฟัง และการ Feedback ผ่านหลายมุมมอง</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Mindset &amp; Reflection</h3><p>ใช้ Ice Breaking, Intention Setting, Coaching และ Action Plan เพื่อเปิดใจ ลดอีโก้ กล้าออกจาก Comfort Zone และพร้อมนำสิ่งที่ค้นพบไปใช้จริง</p></div></div></div></div></section>

      <section className="story-photo-pair coach-photo-pair"><div className="story-photo"><Image src="/images/inspiring-coach/gallery-10.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="วิทยากรสื่อสารกับกลุ่มผู้เข้าอบรมอย่างใกล้ชิด" /><span>Listen without judgment</span></div><div className="story-photo"><Image src="/images/inspiring-coach/gallery-12.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมทำกิจกรรมร่วมกันอย่างมีพลัง" /><span>Unlock team potential</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>เข้าใจผ่านประสบการณ์<br />เปลี่ยนผ่านการลงมือทำ</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>กิจกรรมที่หลากหลายช่วยให้ผู้เรียนเปิดใจ ทดลองเครื่องมือจริง แลกเปลี่ยนมุมมอง และเปลี่ยนบทบาทจากผู้สั่งการสู่โค้ชที่เดินไปพร้อมกับทีม</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>เหมาะสำหรับผู้นำ<br />ที่ต้องการพัฒนาคนให้เติบโตอย่างยั่งยืน</h2><p>หลักสูตร 2 วัน เวลา 09.00–16.00 น. ของแต่ละวัน จำกัดผู้เข้าอบรมไม่เกิน 20 ท่าน เพื่อให้ทุกคนได้ฝึกบทบาทสมมุติ รับ Feedback และสร้าง Action Plan ของตนเองอย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>ผู้นำในองค์กรทุกระดับ</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 20 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับให้เข้ากับองค์กรได้</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
