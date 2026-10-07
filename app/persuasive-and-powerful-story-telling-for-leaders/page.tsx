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
  title: "Persuasive & Powerful Storytelling for Leaders | ATTA9 Training",
  description: "หลักสูตร Storytelling สำหรับผู้นำ 2 วัน ฝึกสร้าง Key Message วางพล็อต เล่าเรื่องอย่างทรงพลัง และเชื่อมเรื่องเล่าสู่เป้าหมายทางธุรกิจ",
  openGraph: {
    title: "Persuasive & Powerful Storytelling for Leaders",
    description: "เปลี่ยนวิสัยทัศน์และเป้าหมาย ให้เป็นเรื่องเล่าที่เข้าถึงใจและขับเคลื่อนทีมไปด้วยกัน",
    images: ["/images/storytelling-leaders/course-cover.webp"],
  },
};

const outcomes: [string, string][] = [
  ["Science of Story", "เข้าใจศาสตร์ของการเล่าเรื่อง และเบื้องหลังการทำงานของสมองเมื่อผู้ฟังรับรู้เรื่องราว"],
  ["Story Ideas", "ค้นหาและเลือกเรื่องจากประสบการณ์รอบตัว เพื่อสร้างคลังไอเดียที่หยิบมาใช้ได้จริง"],
  ["Plot & Structure", "สร้างโครงเรื่อง พล็อต และองค์ประกอบสำคัญให้เรื่องเล่าชัดเจน ครบถ้วน และน่าติดตาม"],
  ["Powerful Delivery", "เล่าเรื่องเพื่อสร้างความตระหนักรู้ เข้าถึงอารมณ์ และนำไปสู่การเปลี่ยนพฤติกรรม"],
  ["Business Connection", "เชื่อมเรื่องเล่าเข้ากับวิสัยทัศน์ เป้าหมาย และบริบททางธุรกิจขององค์กรได้อย่างเห็นผล"],
];

const modules = [
  { number: "01", title: "The Why & The Story", subtitle: "รากฐานของเรื่องเล่าสำหรับผู้นำ", topics: ["ผู้นำกับความสำคัญของการเล่าเรื่อง", "องค์ประกอบของการเล่าเรื่อง", "ประเภทของเรื่องที่เล่า"] },
  { number: "02", title: "Message & Plot", subtitle: "เปลี่ยนไอเดียให้เป็นโครงเรื่อง", topics: ["การสร้าง Key Message หลักของเรื่องที่จะเล่า", "พล็อตเรื่องที่ใช้ได้ผล", "เทคนิคในการหาไอเดียและเลือกเรื่องที่จะเล่า"] },
  { number: "03", title: "Peak & Delivery", subtitle: "เล่าให้น่าติดตามและทรงพลัง", topics: ["หลักการคิดจุดพีคหรือไฮไลต์ของเรื่อง", "วิธีการเล่าเรื่องเพื่อดึงดูดใจ", "การขยี้เรื่องให้ทรงพลัง"] },
  { number: "04", title: "Story to Action", subtitle: "เชื่อมเรื่องเล่าสู่การเปลี่ยนแปลง", topics: ["การเล่าเรื่องที่ทำให้คนเปลี่ยนแปลงพฤติกรรม", "การโยงเรื่องเล่าเข้าสู่ธุรกิจ"] },
];

const methods = ["Triad Practice", "Storytelling Practice", "Individual Feedback", "Coaching", "Ice Breaking", "Intention Setting", "VDO Clip", "Music", "Game", "Group Activity"];
const methodIcons = [Users, Presentation, UserFocus, Target, Spark, Activity, Presentation, Spark, Activity, Users];

const gallery = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/storytelling-leaders/gallery-${String(index + 1).padStart(2, "0")}${index === 10 ? ".webp" : ".jpg"}`,
  alt: `บรรยากาศการฝึกเล่าเรื่องสำหรับผู้นำ ภาพที่ ${index + 1}`,
}));

export default function StoryTellingForLeadersPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero story-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/storytelling-leaders/hero-highres.jpg" fill preload quality={100} sizes="100vw" alt="วิทยากรกำลังสาธิตการเล่าเรื่องต่อผู้เข้าอบรม" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="story-hero-kicker">LEAD WITH A STORY</p>
            <h1><span>Persuasive &amp; Powerful&nbsp;</span><strong>Storytelling for Leaders</strong></h1>
            <p className="course-detail-lead">เปลี่ยนวิสัยทัศน์และเป้าหมาย ให้เป็นเรื่องเล่าที่เข้าถึงใจ สร้างภาพเดียวกัน และขับเคลื่อนทีมไปสู่การลงมือทำ</p>
            <div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>12</span><p><small>CLASS SIZE</small>ท่าน / รุ่น</p></div><div><Users /><p><small>FOR WHOM</small>ผู้นำทุกระดับ</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section story-why">
        <div className="container story-why-grid">
          <div className="story-why-heading"><p className="eyebrow"><span />WHY STORYTELLING</p><h2>ทำไมผู้นำ<br />ต้องเล่าเรื่องเป็น</h2><div className="story-quote"><BookOpen /><p>“คนมักเลือกจำเรื่องราว<br />ที่มีอารมณ์และความรู้สึก”</p></div></div>
          <div className="story-why-copy">
            <p>หนังบางเรื่อง ละครบางฉาก หรือนิทานที่เราเคยฟังในวัยเด็ก สามารถทิ้งข้อคิด ความฝัน และแรงบันดาลใจไว้ได้นาน เพราะเรื่องราวเหล่านั้นไม่ได้ส่งต่อเพียงข้อมูล แต่พาอารมณ์และความรู้สึกไปพร้อมกัน</p>
            <p>วิสัยทัศน์ขององค์กรหรือเป้าหมายของทีมอาจเป็นเพียงข้อความ หากผู้นำยังไม่สามารถทำให้คนมองเห็นภาพเดียวกัน การอธิบายแบบแห้ง ๆ จึงไม่พอที่จะโน้มน้าวให้ทีม “ลงเรือลำเดียวกัน”</p>
            <p>การเล่าเรื่องเป็นเครื่องมือที่ช่วยผู้นำเข้าถึงทัศนคติและความเชื่อ สร้างความตระหนักรู้ จุดประกายการลงมือทำ และนำทีมไปสู่เป้าหมายเดียวกันอย่างมีพลัง</p>
          </div>
        </div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>จากข้อมูลธรรมดา<br />สู่เรื่องเล่าที่สร้างการเปลี่ยนแปลง</h2></div><p>ผู้เรียนจะเข้าใจกระบวนการตั้งแต่การหาเรื่อง วางโครง สร้างจุดพีค ไปจนถึงการส่งมอบเรื่องเล่าที่เชื่อมกลับสู่เป้าหมายขององค์กร</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum story-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>เส้นทางของเรื่องเล่าที่ทรงพลัง</h2></div><p>เรียงลำดับการเรียนรู้จากความหมายของเรื่องเล่า สู่ Key Message และ Plot ก่อนฝึกส่งมอบเรื่องเพื่อสร้างการเปลี่ยนแปลงในบริบทธุรกิจจริง</p></div><div className="story-arc" aria-hidden="true"><span>KEY MESSAGE</span><span>PLOT</span><span>PEAK</span><span>ACTION</span></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design story-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/storytelling-leaders/learning-design-storytelling.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมฝึกเล่าเรื่องบนเวทีต่อหน้าผู้ฟังและกล้องบันทึกภาพ" /><div><Spark /><span>Practice <b>+</b> Reflection</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>ฝึกทั้งวิธีเล่า<br />และความกล้าที่จะเล่า</h2><p className="story-learning-intro">การเรียนรู้ที่นำไปใช้ได้จริงต้องเกิดจากสมดุลระหว่างทักษะ (Skillset) และทัศนคติ (Mindset) หลักสูตรจึงออกแบบให้ผู้เรียนได้ทดลอง สังเกต รับคำแนะนำ และสะท้อนการเรียนรู้ของตนเอง</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Skillset</h3><p>ฝึกแบบกลุ่มเล็กสามมิติ (Triad) สลับบทบาทผู้เล่า ผู้ฟัง และผู้สังเกตการณ์ ก่อนเล่าเสมือนจริงหน้าคลาส รับ Feedback รายบุคคล และใช้ Coaching เพื่อพัฒนาต่ออย่างยั่งยืน</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Mindset</h3><p>เปิดใจผ่าน Ice Breaking และ Intention Setting กล้าออกจาก Comfort Zone พร้อมเรียนรู้ผ่านเรื่องเล่า วิดีโอ เพลง เกม และกิจกรรมกลุ่มในบรรยากาศที่สนุกและให้กำลังใจกัน</p></div></div></div></div></section>

      <section className="story-photo-pair"><div className="story-photo"><Image src="/images/storytelling-leaders/skillset.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมฝึกเล่าเรื่องหน้ากลุ่ม" /><span>Practice the story</span></div><div className="story-photo"><Image src="/images/storytelling-leaders/mindset.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมแลกเปลี่ยนความคิดเห็นระหว่างกิจกรรม" /><span>Build the confidence</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>เรียนรู้ผ่าน<br />การลงมือเล่าจริง</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>การฝึกปฏิบัติจริงทั้งแบบกลุ่มเล็กและหน้าคลาส ช่วยให้ผู้เรียนเห็นพัฒนาการของตนเองผ่านหลายมุมมองและนำเทคนิคกลับไปใช้กับทีมได้อย่างมั่นใจ</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>เหมาะสำหรับผู้นำ<br />ที่ต้องการขับเคลื่อนคนด้วยพลังของเรื่องเล่า</h2><p>หลักสูตรเข้มข้น 2 วัน เวลา 09.00–16.00 น. จำกัดผู้เรียนไม่เกิน 12 ท่าน เพื่อให้ทุกคนได้ฝึกเล่า รับ Feedback และ Coaching อย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>ผู้นำในทุกระดับ</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 12 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับให้เข้ากับองค์กรได้</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
