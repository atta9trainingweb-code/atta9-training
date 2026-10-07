import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrainerCurriculum } from "@/components/trainer-curriculum";
import { TrainerGallery } from "@/components/trainer-gallery";
import { TrainerOutcomes } from "@/components/trainer-outcomes";
import { Activity, Arrow, ClipboardCheck, Graduation, Presentation, Spark, Target, UserFocus, Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Communication Skills for Efficiency and Collaboration | ATTA9 Training",
  description: "หลักสูตรพัฒนาการสื่อสารเพื่อการทำงานอย่างมีประสิทธิภาพ 1 วัน ฝึกสื่อสารให้ชัดเจน ฟังอย่างเข้าอกเข้าใจ สร้างความสัมพันธ์ และลดความผิดพลาดในการประสานงาน",
  openGraph: {
    title: "Communication Skills for Efficiency and Collaboration",
    description: "สื่อสารชัด เข้าใจตรงกัน สร้างความร่วมมือที่ดีในทุกการทำงาน",
    images: ["/images/communication-efficiency/hero.jpg"],
  },
};

const problems = [
  "คำพูด น้ำเสียง สีหน้า และภาษากายไม่สอดคล้องกัน จนผู้ฟังตีความคลาดเคลื่อน",
  "อารมณ์ระหว่างการสื่อสารส่งผลต่อความรู้สึกและความร่วมมือของอีกฝ่าย",
  "ทัศนคติเชิงลบทำให้การสื่อสารและความสัมพันธ์ในการทำงานติดขัด",
  "ข้อมูลไม่ชัดเจน จับประเด็นไม่ได้ และนำไปสู่ความเข้าใจที่ไม่ตรงกัน",
];

const outcomes: [string, string][] = [
  ["Communication Awareness", "ตระหนักถึงอุปสรรคและผลกระทบจากการสื่อสารที่ผิดพลาด พร้อมเลือกวิธีหลีกเลี่ยงปัญหา"],
  ["Positive Mindset", "ปรับทัศนคติและกรอบความคิดด้านการสื่อสารให้เป็นบวก สร้างสรรค์ และพร้อมร่วมมือ"],
  ["Clear & Precise", "ใช้เทคนิคสื่อสารให้ชัดเจน ตรงประเด็น ลดความคลาดเคลื่อน และพาไปสู่เป้าหมาย"],
  ["Listener Centered", "สื่อสารโดยให้คู่สื่อสารเป็นศูนย์กลาง เข้าใจความต้องการก่อนเลือกวิธีตอบสนอง"],
  ["Rapport Building", "สร้างความสัมพันธ์ที่ดี เพื่อบรรยากาศการทำงานและความร่วมมือระหว่างทีม"],
  ["Self Development", "สำรวจตนเอง วิเคราะห์ผู้อื่น และวางแผนพัฒนาการสื่อสารอย่างต่อเนื่อง"],
];

const modules = [
  { number: "01", title: "Mindset & Emotion", subtitle: "ทัศนคติกับการสื่อสาร", topics: ["ตระหนักรู้การสื่อสารของตนเองด้วยตาราง 9 ช่อง", "อุปสรรคและปัญหาที่เกิดขึ้นจากการสื่อสาร", "ปรับทัศนคติเชิงลบด้วยสมการ E+R=O", "การควบคุมและบริหารอารมณ์ในการทำงานร่วมกัน"] },
  { number: "02", title: "Service Communication", subtitle: "การสื่อสารเพื่อการบริการเป็นเลิศ", topics: ["เครื่องมือ ASAHI ที่ช่วยสร้างความประทับใจ", "คำพูดที่เพราะที่สุดตามหลักการของเดล คาร์เนกี", "ความกลมกลืนของคำพูด น้ำเสียง และภาษากาย", "จัดการข้อร้องเรียนเพื่อพลิกวิกฤติเป็นโอกาส"] },
  { number: "03", title: "Accuracy", subtitle: "การสื่อสารเพื่อผลงานที่แม่นยำ", topics: ["เครื่องมือช่วยลดความผิดพลาดในการสื่อสาร", "การสื่อสารแบบจับประเด็นเป็นหัวข้อ", "Active Listening เพื่อเข้าใจความต้องการที่แท้จริง", "ตั้งเป้าหมายและเตรียมความพร้อมก่อนสื่อสาร"] },
  { number: "04", title: "Rapport Building", subtitle: "การสร้างความสัมพันธ์ระดับลึก", topics: ["Matching and Mirroring เพื่อสร้างความสัมพันธ์", "การใช้ภาษาเพื่อสร้างความสัมพันธ์", "การฟังอย่างเข้าอกเข้าใจ"] },
  { number: "05", title: "Outcome Setting", subtitle: "การตั้งผลลัพธ์ของการสื่อสาร", topics: ["Outcome Setting เพื่อการสื่อสารที่ราบรื่น", "Intention Setting เพื่อผลลัพธ์ที่หวังไว้", "ประเมินผลลัพธ์และความตั้งใจหลังการสื่อสาร"] },
  { number: "06", title: "Perceptual Positions", subtitle: "มองต่างมุมและพัฒนาตนเอง", topics: ["ใช้ Perceptual Positions เพื่อมองจากหลายมุม", "Coaching ด้านการสื่อสารเพื่อการปรับปรุง", "สร้าง Action Plan เพื่อการเติบโต"] },
];

const methods = ["Attitude Opening", "Group Activity", "Game", "VDO", "Workshop", "Real Practice", "Coaching", "Reflection"];
const methodIcons = [Spark, Users, Activity, Presentation, ClipboardCheck, UserFocus, Target, Graduation];

const gallery = Array.from({ length: 10 }, (_, index) => ({
  src: `/images/communication-efficiency/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `บรรยากาศหลักสูตร Communication Skills for Efficiency and Collaboration ภาพที่ ${index + 1}`,
}));

export default function CommunicationSkillForEfficiencyPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero communication-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/communication-efficiency/hero.jpg" fill preload quality={100} sizes="100vw" alt="ผู้เข้าอบรมกำลังฝึกสื่อสารกับวิทยากรในห้องอบรม" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="communication-hero-kicker">COMMUNICATE WITH IMPACT</p>
            <h1><span>Communication Skills</span>{" "}<strong>for Efficiency and Collaboration</strong></h1>
            <p className="course-detail-lead">สื่อสารให้ชัด เข้าใจตรงกัน ลดความผิดพลาดในการประสานงาน และสร้างความร่วมมือที่ทำให้ทุกทีมเดินหน้าไปสู่เป้าหมายเดียวกัน</p>
            <div className="course-facts"><div><span>1</span><p><small>DURATION</small>วัน / 6 ชั่วโมง</p></div><div><span>25</span><p><small>CLASS SIZE</small>ไม่เกิน 25 ท่าน</p></div><div><Users /><p><small>FORMAT</small>In-house Training</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section communication-problem">
        <div className="container trainer-problem-layout">
          <div><p className="eyebrow"><span />THE COMMUNICATION GAP</p><h2>งานไม่ติดขัด<br />เมื่อคนเข้าใจตรงกัน</h2><p>หลายปัญหาในการทำงานไม่ได้เกิดจากความสามารถ แต่เกิดจากสิ่งที่ผู้พูดตั้งใจสื่อกับสิ่งที่ผู้ฟังเข้าใจไม่ตรงกัน จนกระทบทั้งผลงาน ความสัมพันธ์ และบรรยากาศของทีม</p></div>
          <div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div>
        </div>
        <div className="container communication-signals" aria-label="องค์ประกอบสำคัญของการสื่อสาร"><span>คำพูด<small>WORDS</small></span><i aria-hidden="true" /><span>น้ำเสียง<small>TONE</small></span><i aria-hidden="true" /><span>สีหน้า<small>EXPRESSION</small></span><i aria-hidden="true" /><span>ภาษากาย<small>BODY LANGUAGE</small></span><b>ความหมายที่ชัดเจน</b></div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>เปลี่ยนทุกบทสนทนา<br />ให้เกิดความเข้าใจและความร่วมมือ</h2></div><p>ผู้เรียนจะเห็นทั้งมุมของตนเองและคู่สื่อสาร พร้อมฝึกเครื่องมือที่ช่วยให้การประสานงานชัดเจน เป็นบวก และนำไปใช้กับงานจริงได้ทันที</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum communication-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>จากการตระหนักรู้<br />สู่การสื่อสารที่สร้างผลลัพธ์</h2></div><p>หลักสูตรครอบคลุมทัศนคติ อารมณ์ ความแม่นยำ ความสัมพันธ์ การตั้งเป้าหมาย และการมองจากมุมของผู้อื่นอย่างเป็นลำดับ</p></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design communication-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/communication-efficiency/gallery-04.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมทำกิจกรรมกลุ่มเพื่อฝึกการสื่อสาร" /><div><Activity /><span>Learn <b>+</b> Practice</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>เปิดใจ ทดลองจริง<br />และเห็นมุมที่ต่างออกไป</h2><p className="communication-learning-intro">การเปลี่ยนวิธีสื่อสารเริ่มจากการเห็นพฤติกรรมของตนเอง หลักสูตรจึงออกแบบให้ผู้เรียนมีส่วนร่วม ลงมือฝึก และสะท้อนสิ่งที่ค้นพบในบรรยากาศที่สนุกและเป็นกันเอง</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Practice-centered</h3><p>เรียนรู้ผ่านกิจกรรมกลุ่ม เกม วิดีโอ และ Workshop ที่หลากหลาย พร้อมฝึกปฏิบัติกับสถานการณ์ที่นำกลับไปใช้ในงานได้จริง</p></div></div><div className="trainer-learning-block"><span><UserFocus /></span><div><h3>Coaching &amp; Reflection</h3><p>ใช้กระบวนการ Coaching เพื่อช่วยให้ผู้เรียนมองเห็นทางเลือก ปรับปรุงตนเอง และวาง Action Plan สำหรับการพัฒนาอย่างยั่งยืน</p></div></div></div></div></section>

      <section className="story-photo-pair communication-photo-pair"><div className="story-photo"><Image src="/images/communication-efficiency/gallery-03.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="วิทยากรและผู้เข้าอบรมทำกิจกรรมร่วมกัน" /><span>Connect with people</span></div><div className="story-photo"><Image src="/images/communication-efficiency/gallery-05.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมฝึกการสื่อสารในกิจกรรมกลุ่ม" /><span>Communicate with clarity</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>เรียนรู้ผ่าน<br />การมีส่วนร่วม</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>กิจกรรมหลากหลายเปิดโอกาสให้ผู้เรียนได้สังเกต ทดลอง และปรับวิธีการสื่อสารของตนเองผ่านประสบการณ์ตรง</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>เหมาะสำหรับทีมที่ต้องการ<br />สื่อสารและประสานงานให้มีประสิทธิภาพ</h2><p>หลักสูตร 1 วัน เวลา 09.00–16.00 น. จำกัดจำนวนผู้เข้าอบรมไม่เกิน 25 ท่าน เพื่อให้ทุกคนได้มีส่วนร่วม ฝึกปฏิบัติ และรับการดูแลอย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>พนักงานและทีมงานทุกระดับ</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 25 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>1 วัน 6 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับให้เข้ากับองค์กรได้</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
