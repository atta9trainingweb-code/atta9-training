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
  title: "Service Mind in Action | ATTA9 Training",
  description: "หลักสูตร Service Mind 2 วัน พัฒนา Growth Mindset, Service Communication, Customer Centricity, Service Beyond Expectation และ Complaint Handling",
  openGraph: { title: "Service Mind in Action", description: "เปลี่ยน Service Mind ให้เป็นพฤติกรรมบริการที่ลูกค้าสัมผัสได้จริง", images: ["/images/service-mind-in-action/course-cover.jpg"] },
};

const problems = [
  "พนักงานไม่แสดงความกระตือรือร้น จนลูกค้าสัมผัสได้ถึงความเฉยชาและไม่ใส่ใจ",
  "คำพูด น้ำเสียง หรือภาษากายไม่ส่งเสริมประสบการณ์บริการที่ดี",
  "รับฟังไม่ลึกพอ จึงไม่เข้าใจความต้องการของลูกค้าที่แตกต่างและหลากหลาย",
  "ขั้นตอนบริการสร้างความไม่สะดวก แต่ผู้ให้บริการไม่คิดหาวิธีช่วยให้ลูกค้าง่ายขึ้น",
  "Fixed Mindset ทำให้พนักงานต่อต้านการเปลี่ยนแปลงและมองความคาดหวังใหม่เป็นภาระ",
  "จัดการข้อร้องเรียนไม่เหมาะสม จนความไม่พอใจขยายตัวและกระทบความสัมพันธ์",
];
const outcomes: [string, string][] = [
  ["Growth Mindset", "ปรับทัศนคติให้เป็นบวก มองความเปลี่ยนแปลงเป็นโอกาสพัฒนาบริการ"],
  ["Customer Centricity", "ให้ลูกค้าเป็นศูนย์กลางและคิดจากมุมของผู้รับบริการก่อนลงมือทำ"],
  ["Empathic Listening", "รับฟังทั้งเนื้อหา ความรู้สึก และความต้องการที่อยู่เบื้องหลังคำพูด"],
  ["Service Communication", "สื่อสารด้วยคำพูด น้ำเสียง และภาษากายที่แสดงถึงความใส่ใจ"],
  ["Beyond Expectation", "ใช้เทคนิคส่งมอบบริการที่สะดวก ใส่ใจ และสร้างความประทับใจเหนือความคาดหวัง"],
  ["Complaint Handling", "ควบคุมอารมณ์ ใช้ Golden Phrases และเครื่องมือ LEO รับมือข้อร้องเรียนอย่างมืออาชีพ"],
];
const modules = [
  { number: "01", title: "Growth Mindset", subtitle: "ทัศนคติเชิงบวกด้วยกรอบความคิดที่เติบโต", topics: ["ปัญหาและอุปสรรคที่ทำให้ลูกค้าไม่พอใจ", "สมการแห่งความเข้าใจลูกค้า E + R = O", "Fixed Mindset และ Growth Mindset", "เปลี่ยนแปลงตนเองด้วย Intention Setting"] },
  { number: "02", title: "Service Communication", subtitle: "การสื่อสารเพื่อบริการเป็นเลิศ", topics: ["เครื่องมือ ASAHI ที่สร้างความประทับใจ", "เทคนิคสร้างความสัมพันธ์กับลูกค้า", "คำพูดที่สร้างสายสัมพันธ์ตามแนวคิด Dale Carnegie", "คำพูด น้ำเสียง และภาษากาย", "การฟังอย่างเข้าอกเข้าใจ"] },
  { number: "03", title: "Service Beyond Expectation", subtitle: "การบริการเหนือความคาดหวัง", topics: ["แนวคิด Customer Centricity", "สมการของการบริการเหนือความคาดหวัง", "O.A.T. คุณสมบัติผู้ให้บริการเหนือความคาดหวัง", "Job Description ใหม่ของคุณ"] },
  { number: "04", title: "Complaint Handling", subtitle: "การจัดการข้อร้องเรียนของลูกค้า", topics: ["โหมดอารมณ์และโหมดเหตุผลในการสื่อสาร", "ประโยคทองในการรับอารมณ์ของลูกค้า", "ทัศนคติเชิงบวกและการควบคุมอารมณ์", "เครื่องมือ LEO ในการรับมือข้อร้องเรียน"] },
];
const methods = ["Ice Breaking", "Intention Setting", "ASAHI Practice", "Empathic Listening", "Triad Practice", "Role Play", "Service Simulation", "Case Study", "Group Activity", "Game", "Workshop", "Coaching"];
const methodIcons = [Spark, Target, Presentation, UserFocus, Users, Presentation, Activity, BookOpen, Users, Spark, ClipboardCheck, UserFocus];
const serviceGallery = Array.from({ length: 12 }, (_, index) => ({ src: `/images/service-mind-in-action/gallery-${String(index + 1).padStart(2, "0")}.jpg`, alt: `บรรยากาศหลักสูตร Service Mind in Action ภาพที่ ${index + 1}` }));

export default function ServiceMindPage() {
  return <><Header /><main>
    <section className="course-detail-hero service-hero" id="top"><Image className="course-detail-hero-image" src="/images/service-mind-in-action/hero.jpg" fill preload quality={100} sizes="100vw" alt="วิทยากรนำกิจกรรม Service Mind กับผู้เข้าอบรม" /><div className="course-detail-hero-overlay" /><div className="container course-detail-hero-grid"><div className="course-detail-hero-copy"><p className="service-hero-kicker">CARE • CONNECT • EXCEED EXPECTATIONS</p><h1><span>Service Mind</span><strong>in Action</strong></h1><p className="course-detail-lead">เปลี่ยนความตั้งใจให้บริการให้กลายเป็นคำพูด การกระทำ และประสบการณ์ที่ลูกค้าสัมผัสได้ถึงความใส่ใจจริง</p><div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>25</span><p><small>CLASS SIZE</small>ไม่เกิน 25 ท่าน</p></div><div><Users /><p><small>FOR WHOM</small>พนักงานผู้ให้บริการ</p></div></div><div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div></div></div></section>

    <section className="section service-problem"><div className="container trainer-problem-layout"><div><p className="eyebrow"><span />FROM SERVICE MIND TO SERVICE ACTION</p><h2>บริการที่ดีไม่ใช่แค่คิดดี<br />แต่ลูกค้าต้องสัมผัสได้</h2><p>ความไม่ประทับใจเกิดขึ้นได้ตั้งแต่ความเฉยชา การสื่อสารที่ไม่ใส่ใจ ไปจนถึงขั้นตอนที่สร้างความไม่สะดวก หลักสูตรนี้จึงเชื่อม Growth Mindset เข้ากับทักษะการฟัง การสื่อสาร และการลงมือบริการแบบ Customer Centric</p></div><div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div></div><div className="container service-flow" aria-label="ลำดับการบริการที่สร้างความประทับใจ"><span>ใส่ใจ<small>CARE</small></span><i /><span>เข้าใจ<small>LISTEN</small></span><i /><span>ลงมือช่วย<small>ACT</small></span><i /><span>เหนือความคาดหวัง<small>DELIGHT</small></span></div></section>

    <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>คิดจากมุมลูกค้า<br />และส่งมอบความใส่ใจทุกจุดสัมผัส</h2></div><p>ผู้เรียนจะได้ทั้งทัศนคติและเครื่องมือที่ช่วยให้เข้าใจความคาดหวัง สื่อสารได้ดีขึ้น ลดความยุ่งยาก และสร้างบริการที่ทำให้ลูกค้ารู้สึกว่าตนคือคนสำคัญ</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

    <section className="section trainer-curriculum service-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>จาก Growth Mindset<br />สู่บริการเหนือความคาดหวัง</h2></div><p>เนื้อหา 4 ส่วนครอบคลุมแก่นของงานบริการ ตั้งแต่กรอบความคิด การสื่อสารแบบใส่ใจ Customer Centricity ไปจนถึงการรับมือข้อร้องเรียนอย่างมีประสิทธิภาพ</p></div><TrainerCurriculum modules={modules} /></div></section>

    <section className="section trainer-learning-design service-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/service-mind-in-action/gallery-03.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมฝึกสถานการณ์การสื่อสารเพื่อบริการ" /><div><UserFocus /><span>Mindset <b>+</b> Service Skill</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>สลับมุมมองเพื่อเข้าใจ<br />ประสบการณ์ของลูกค้า</h2><p className="service-learning-intro">การฝึกกลุ่มย่อยแบบ Triad ให้ผู้เรียนสลับบทบาทพนักงาน ลูกค้า และผู้สังเกตการณ์ จึงเห็นผลของรายละเอียดเล็ก ๆ ในบริการได้ชัดกว่าการเรียนจากทฤษฎีเพียงอย่างเดียว</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Service Simulation</h3><p>ฝึกบทสนทนาและสถานการณ์ใกล้เคียงงานจริง ตั้งแต่การสร้างความประทับใจ รับฟังความต้องการ ไปจนถึงการรับมือเมื่อลูกค้าไม่พอใจ</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Reflection &amp; Coaching</h3><p>รับมุมมองจากเพื่อนและวิทยากร แล้วสรุปสิ่งที่ต้องเริ่มทำ หยุดทำ และทำต่อ เพื่อเปลี่ยน Service Mind ให้เป็นพฤติกรรมที่ยั่งยืน</p></div></div></div></div></section>

    <section className="story-photo-pair service-photo-pair"><div className="story-photo"><Image src="/images/service-mind-in-action/gallery-09.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="กิจกรรมกลุ่มเพื่อพัฒนาทัศนคติการบริการ" /><span>Care customers can feel</span></div><div className="story-photo"><Image src="/images/service-mind-in-action/gallery-04.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมร่วมฝึกบริการผ่านสถานการณ์จำลอง" /><span>Service beyond expectation</span></div></section>
    <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>ฝึกให้ความใส่ใจ<br />กลายเป็นพฤติกรรมจริง</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>
    <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />SERVICE IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>กิจกรรม เกม กรณีศึกษา และ Role Play ทำให้ผู้เรียนมีอารมณ์ร่วม สนุกกับการเรียนรู้ และมองเห็นวิธีประยุกต์ใช้กับงานบริการของตนเอง</p></div><TrainerGallery images={serviceGallery} /></div></section>
    <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>สำหรับทีมที่ต้องการ<br />ยกระดับบริการจากภายใน</h2><p>หลักสูตร 2 วัน เวลา 09.00–16.00 น. เหมาะสำหรับพนักงานที่ให้บริการทั้งลูกค้าภายนอกและลูกค้าภายใน จำกัดไม่เกิน 25 ท่าน เพื่อให้ทุกคนได้ฝึกสถานการณ์และรับ Coaching อย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>พนักงานบริการลูกค้าภายนอกและภายใน</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 25 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับสถานการณ์ให้ตรงกับองค์กร</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
  </main><Footer /></>;
}
