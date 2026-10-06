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
  title: "Smart Personality for Professional Image | ATTA9 Training",
  description: "หลักสูตรพัฒนาบุคลิกภาพมืออาชีพ 2 วัน ครบทั้ง Mindset การสื่อสาร มารยาททางธุรกิจ การแต่งกาย และ Action Plan สำหรับภาพลักษณ์ที่น่าเชื่อถือ",
  openGraph: { title: "Smart Personality for Professional Image", description: "ยกระดับบุคลิกภาพ การวางตัว และการแต่งกาย ให้สะท้อนภาพลักษณ์มืออาชีพขององค์กร", images: ["/images/smart-personality-for-professional-image/hero-smart-personality.png"] },
};

const problems = [
  "ขาดความมั่นใจ หรือมั่นใจเกินไปจนมองไม่เห็นจุดที่ควรพัฒนาในบุคลิกภาพของตน",
  "แต่งกายและเลือกเครื่องประดับตามความชอบ แต่ภาพรวมยังไม่เหมาะกับบทบาทหรือโอกาส",
  "ไม่รู้จักมารยาททางธุรกิจ จึงวางตัวไม่ถูกและลดความน่าเชื่อถือโดยไม่ตั้งใจ",
  "สร้างความประทับใจแรกพบไม่ได้ ทำให้การเริ่มต้นความสัมพันธ์ทางธุรกิจสะดุด",
  "คำพูด น้ำเสียง และภาษากายไม่สอดคล้องกัน จนบุคลิกโดยรวมดูไม่เป็นมืออาชีพ",
  "ไม่ตระหนักว่ารายละเอียดเล็ก ๆ ของพนักงานล้วนสะท้อนภาพลักษณ์ขององค์กร",
];

const outcomes: [string, string][] = [
  ["Professional Image", "สร้างภาพลักษณ์ทันสมัย น่าเชื่อถือ และสอดคล้องกับภาพที่องค์กรต้องการสื่อสาร"],
  ["First Impression", "สร้างความประทับใจแรกพบและสื่อสารเชิงบวกอย่างมีเสน่ห์"],
  ["Business Etiquette", "เข้าสังคมและวางตัวได้เหมาะสมด้วยมารยาททางธุรกิจที่เป็นมืออาชีพ"],
  ["Dress for Success", "เลือกการแต่งกาย สี และเครื่องประดับให้เหมาะกับตนเอง บทบาท และโอกาส"],
  ["Self-awareness", "เห็นตัวเองจากมุมมองใหม่ กล้าปรับเปลี่ยน และมีแผนพัฒนาบุคลิกภาพที่ชัดเจน"],
];

const modules = [
  { number: "01", title: "Mindset is Everything", subtitle: "ทัศนคติคือจุดเริ่มของทุกสิ่ง", topics: ["ปรับทัศนคติเชิงลบให้เป็นบวกและสร้างสรรค์", "ตระหนักรู้ก่อนปรับเปลี่ยน", "Johari Window เพื่อการพัฒนา"] },
  { number: "02", title: "High Impact Communication", subtitle: "การสื่อสารที่ทรงพลังและสร้างแรงดึงดูด", topics: ["เครื่องมือ ASAHI เพื่อสร้างความประทับใจแรกพบ", "คำพูดที่สร้างสายสัมพันธ์", "คำพูด น้ำเสียง และภาษากาย", "Small Talk เพื่อสร้างความเป็นกันเอง", "Empathic Listening เพื่อความสัมพันธ์ที่ดี"] },
  { number: "03", title: "Professional Etiquette", subtitle: "มารยาททางสังคมและธุรกิจสำหรับมืออาชีพ", topics: ["มารยาทสังคมและธุรกิจที่บ่งบอกตัวตน", "มารยาทการรับประทานอาหารแบบสากล", "การแนะนำตัวและแนะนำให้สองฝ่ายรู้จักกัน", "การแลกนามบัตรอย่างให้เกียรติ"] },
  { number: "04", title: "Dress for Success", subtitle: "การแต่งกายสู่ความสำเร็จ", topics: ["ภาพลักษณ์กับการแต่งกาย", "เสื้อผ้าและเครื่องประดับสำหรับมืออาชีพ", "วิเคราะห์สีที่ส่งเสริมบุคลิก", "Mix & Match อย่างเหมาะสม", "แต่งกายเพื่อสร้างความเชื่อมั่น"] },
  { number: "05", title: "Coaching for Personal Change", subtitle: "โค้ชชิ่งสู่ความเปลี่ยนแปลง", topics: ["นำบทเรียนไปใช้ในการทำงานจริง", "คำถามโค้ชชิ่งเพื่อการพัฒนา", "เขียน Action Plan เพื่อผลลัพธ์ที่ยั่งยืน"] },
];

const methods = ["Ice Breaking", "Intention Setting", "Johari Window", "ASAHI Practice", "Small Talk", "Etiquette Practice", "Color Analysis", "Mix & Match", "Triad Practice", "Role Play", "Coaching", "Action Plan"];
const methodIcons = [Spark, Target, UserFocus, Presentation, Users, Graduation, Activity, Spark, Users, Presentation, UserFocus, ClipboardCheck];
const smartGallery = ["gallery-01.jpg", "gallery-02.jpg", "gallery-03.jpg", "gallery-04.jpg", "gallery-05.jpg", "gallery-06.webp", "gallery-07.webp", "gallery-08.jpg", "gallery-09.jpg", "gallery-10.jpg", "gallery-11.jpg", "gallery-12.jpg"].map((file, index) => ({ src: `/images/smart-personality-for-professional-image/${file}`, alt: `บรรยากาศหลักสูตร Smart Personality for Professional Image ภาพที่ ${index + 1}` }));

export default function SmartPersonalityPage() {
  return <><Header /><main>
    <section className="course-detail-hero personality-hero" id="top"><Image className="course-detail-hero-image" src="/images/smart-personality-for-professional-image/hero-smart-personality.png" fill preload quality={100} sizes="100vw" alt="วิทยากรถ่ายทอดการพัฒนาบุคลิกภาพอย่างมืออาชีพต่อผู้เข้าอบรม" /><div className="course-detail-hero-overlay" /><div className="container course-detail-hero-grid"><div className="course-detail-hero-copy"><p className="personality-hero-kicker">CONFIDENCE • PRESENCE • CREDIBILITY</p><h1><span>Smart Personality</span><strong>for Professional Image</strong></h1><p className="course-detail-lead">พัฒนาบุคลิกภาพจากภายในสู่ภาพลักษณ์ภายนอก ให้ทุกการสื่อสาร การวางตัว และการแต่งกาย สะท้อนความมั่นใจและความเป็นมืออาชีพ</p><div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>20</span><p><small>CLASS SIZE</small>ไม่เกิน 20 ท่าน</p></div><div><Users /><p><small>FOR WHOM</small>ผู้แทนภาพลักษณ์องค์กร</p></div></div><div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div></div></div></section>

    <section className="section personality-problem"><div className="container trainer-problem-layout"><div><p className="eyebrow"><span />BE SEEN AT YOUR BEST</p><h2>บุคลิกภาพถูกมองเห็น<br />ก่อนความสามารถจะได้พูดแทนเรา</h2><p>การแต่งกาย การวางตัว และมารยาทอาจดูเป็นรายละเอียดเล็กน้อย แต่ล้วนส่งผลต่อความเชื่อถือและความไว้วางใจ หลักสูตรนี้เริ่มจากการตระหนักรู้ ก่อนพัฒนาทักษะที่ทำให้ภาพลักษณ์ภายนอกสอดคล้องกับศักยภาพภายใน</p></div><div className="trainer-problem-list">{problems.map((problem, index) => <article key={problem}><span>{String(index + 1).padStart(2, "0")}</span><p>{problem}</p></article>)}</div></div><div className="container personality-flow" aria-label="ลำดับการพัฒนาบุคลิกภาพ"><span>ตระหนักรู้<small>AWARE</small></span><i /><span>สื่อสาร<small>CONNECT</small></span><i /><span>วางตัว<small>PRESENT</small></span><i /><span>สร้างความเชื่อมั่น<small>IMPACT</small></span></div></section>

    <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>ดูดีอย่างมีเหตุผล<br />มั่นใจอย่างเป็นตัวเอง</h2></div><p>ผู้เรียนจะเข้าใจว่าภาพลักษณ์มืออาชีพไม่ได้เกิดจากการแต่งตัวเพียงอย่างเดียว แต่เกิดจากทัศนคติ การสื่อสาร มารยาท และการเลือกนำเสนอตนเองให้เหมาะกับบริบท</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

    <section className="section trainer-curriculum personality-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>ครบทั้ง Mindset<br />Communication, Etiquette &amp; Style</h2></div><p>เนื้อหา 5 ส่วนพาผู้เรียนสำรวจตนเอง สร้างความประทับใจแรกพบ เรียนรู้มารยาททางธุรกิจ พัฒนาการแต่งกาย และเปลี่ยนสิ่งที่ค้นพบให้เป็นแผนพัฒนาจริง</p></div><TrainerCurriculum modules={modules} /></div></section>

    <section className="section trainer-learning-design personality-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/smart-personality-for-professional-image/gallery-03.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมฝึกการสื่อสารและบุคลิกภาพเป็นกลุ่มย่อย" /><div><UserFocus /><span>Inner Mindset <b>+</b> Outer Image</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>เห็นตัวเองจากมุมใหม่<br />แล้วทดลองปรับทันที</h2><p className="personality-learning-intro">ผู้เรียนได้ฝึกเป็นกลุ่มย่อยแบบ Triad สลับบทบาทและรับมุมมองจากผู้อื่น เพื่อเปลี่ยนสิ่งที่มองไม่เห็นให้เป็นความตระหนักรู้ที่นำไปพัฒนาได้</p><div className="trainer-learning-block"><span><Presentation /></span><div><h3>Practice &amp; Observation</h3><p>ฝึกการแนะนำตัว Small Talk มารยาท และการนำเสนอบุคลิกภาพ พร้อมสังเกตผลของคำพูด น้ำเสียง ภาษากาย และรายละเอียดภายนอก</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Coaching for Change</h3><p>ใช้คำถามโค้ชชิ่งช่วยให้ผู้เรียนเลือกสิ่งที่ต้องการเปลี่ยนด้วยตนเอง และวาง Action Plan ที่เหมาะกับบทบาทการทำงาน</p></div></div></div></div></section>

    <section className="story-photo-pair personality-photo-pair"><div className="story-photo"><Image src="/images/smart-personality-for-professional-image/gallery-09.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="กิจกรรมฝึกภาพลักษณ์และการวางตัวอย่างมืออาชีพ" /><span>Confidence from within</span></div><div className="story-photo"><Image src="/images/smart-personality-for-professional-image/gallery-04.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="ผู้เข้าอบรมร่วมกิจกรรมพัฒนาบุคลิกภาพ" /><span>Presence people remember</span></div></section>
    <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>เรียนรู้ผ่านการมองเห็น<br />ทดลอง และรับมุมมองใหม่</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>
    <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />PERSONALITY IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>กิจกรรมที่เป็นกันเองช่วยให้ผู้เรียนกล้าออกจาก Comfort Zone เปิดรับมุมมอง และทดลองปรับบุคลิกภาพในพื้นที่ที่ปลอดภัย</p></div><TrainerGallery images={smartGallery} /></div></section>
    <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>สำหรับทุกคนที่เป็น<br />ภาพลักษณ์ขององค์กร</h2><p>หลักสูตร 2 วัน เวลา 09.00–16.00 น. เหมาะสำหรับพนักงานทุกท่านที่เป็นภาพลักษณ์ขององค์กร จำกัดไม่เกิน 20 ท่าน เพื่อให้ทุกคนได้รับการฝึก การสังเกต และ Coaching อย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>พนักงานทุกท่านที่เป็นภาพลักษณ์ขององค์กร</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 20 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับให้เหมาะกับภาพลักษณ์องค์กร</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
  </main><Footer /></>;
}
