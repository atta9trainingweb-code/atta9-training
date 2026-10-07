import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Activity, Arrow, BookOpen, Briefcase, Building, Check, Graduation, Headset, Messages, Presentation, Spark, Target, UserFocus, Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Trainer Profile — อ.พากร อัตตนนท์ | ATTA9 Training",
  description: "ทำความรู้จัก อ.พากร อัตตนนท์ วิทยากรและโค้ชผู้เชี่ยวชาญด้าน Train the Trainer, Presentation, Personality Development, Leadership และ Service Excellence",
  openGraph: { title: "อ.พากร อัตตนนท์ — Trainer Profile", description: "วิทยากรที่ออกแบบการเรียนรู้ให้สมดุลระหว่าง Mindset และ Skillset เพื่อสร้างการเปลี่ยนแปลงที่นำไปใช้ได้จริง", images: ["/images/trainer-profile/hero-pakorn.png"] },
};

const pillars = [
  { title: "Content", thai: "เนื้อหาที่เข้าใจง่าย", text: "กลั่นกรององค์ความรู้ให้เป็นเทคนิคที่จดจำง่าย ตรงวัตถุประสงค์ และนำไปแก้ปัญหาในการทำงานได้จริง", icon: BookOpen },
  { title: "Methods", thai: "วิธีเรียนรู้ที่หลากหลาย", text: "ออกแบบโดยมีผู้เรียนเป็นศูนย์กลาง ผ่านกิจกรรม Workshop เกม การฝึกปฏิบัติ บทบาทสมมุติ กรณีศึกษา และสื่อที่เหมาะกับบริบท", icon: Activity },
  { title: "Delivery", thai: "การถ่ายทอดที่เข้าถึงผู้เรียน", text: "สร้างบรรยากาศมีส่วนร่วม สนุก ชวนติดตาม กระตุ้นความคิด และท้าทายให้ผู้เรียนเกิดการเปลี่ยนแปลงจากภายใน", icon: Presentation },
];

const certificates = [
  ["NLP Practitioner", "Mind Transformations, Barney Wee"],
  ["Strategic Performance Management Master", "Narongwit.com"],
  ["Quantum Leap", "T. Harv Eker’s Signature Program"],
  ["Life Coaching Practitioner", "Thailand Coaching Academy"],
  ["Train the Trainers", "Blair Singer’s Signature Program"],
  ["Customer Service Trainer", "Thai Airways’s Specially Designed Program"],
  ["The Mastery of Self Expression", "Larry Gilman"],
];

const experience = [
  { year: "พ.ศ. 2559 – ปัจจุบัน", company: "บริษัท แอตต้า 9 เทรนนิ่ง จำกัด", role: "กรรมการผู้จัดการ" },
  { year: "พ.ศ. 2534 – 2559", company: "บริษัท การบินไทย จำกัด (มหาชน)", role: "ครูฝึกอบรมและหัวหน้าพนักงานต้อนรับบนเครื่องบิน" },
  { year: "พ.ศ. 2532 – 2534", company: "โรงแรม โนโวเทล สยามสแควร์", role: "ผู้ประสานงานกรุ๊ปทัวร์" },
];

const specialRoles = [
  ["โค้ชและที่ปรึกษาโครงการ Train the Trainer", "Gosoft (Thailand) Co., Ltd."],
  ["โค้ชและที่ปรึกษาโครงการ Coaching and Mentoring", "GC Maintenance and Engineering Co., Ltd."],
  ["ที่ปรึกษาพิเศษ", "สถาบัน Service Excellency Training"],
  ["โค้ชด้านการบริการ โครงการ Customer Champion", "บริษัท วอลโว่ คาร์ ประเทศไทย จำกัด"],
  ["อาจารย์พิเศษ", "มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร และมหาวิทยาลัยกรุงเทพ"],
  ["ผู้เชี่ยวชาญและผู้ดำเนินรายการ", "Gayle Image Maker TV Program"],
  ["กรรมการผู้ทรงคุณวุฒิด้านการบริการของพนักงานต้อนรับ", "ศาลอาญา"],
];

const expertise = [
  { title: "Train the Professional Trainer", text: "พัฒนาวิทยากรมืออาชีพ", href: "/train-the-professional-trainer", icon: BookOpen },
  { title: "Presentation Skills", text: "การนำเสนอที่ชัดเจนและโน้มน้าวใจ", href: "/persuasive-powerful-presentation", icon: Presentation },
  { title: "Personality Development", text: "การพัฒนาบุคลิกภาพมืออาชีพ", href: "/smart-personality-for-professional-image", icon: UserFocus },
  { title: "Supervisory & Leadership", text: "ทักษะหัวหน้างานและ Leader as Coach", href: "/leader-as-an-inspiring-coach", icon: Users },
  { title: "Communication Skills", text: "การสื่อสารและประสานงานอย่างมีประสิทธิภาพ", href: "/communication-skill-for-efficiency", icon: Messages },
  { title: "Customer Service Excellence", text: "Service Mind และการรับมือข้อร้องเรียน", href: "/service-mind-in-action", icon: Headset },
];

export default function TrainerProfilePage() {
  return <><Header /><main>
    <section className="profile-hero" id="top">
      <Image className="profile-hero-image" src="/images/trainer-profile/hero-pakorn.png" fill preload quality={100} sizes="100vw" alt="อาจารย์พากร อัตตนนท์ กำลังถ่ายทอดการเรียนรู้ท่ามกลางผู้เข้าอบรม" />
      <div className="profile-hero-overlay" />
      <div className="container profile-hero-layout">
        <div className="profile-hero-copy"><p className="profile-kicker">LEAD TRAINER • FACILITATOR • COACH</p><h1><span>อ.พากร</span><strong>อัตตนนท์</strong></h1><div className="profile-identity"><p className="profile-role">Phakorn Attanon</p><p className="profile-titles">Trainer <span>|</span> Facilitator <span>|</span> Coach</p><p className="profile-specialties">Leadership <span>•</span> Communication <span>•</span> Presentation <span>•</span> Service</p></div><p>ออกแบบการเรียนรู้ที่ผสาน <b>Mindset</b> และ <b>Skillset</b><br />เพื่อเปลี่ยนความเข้าใจให้เป็นทักษะที่ใช้ได้จริง</p><div className="profile-hero-actions"><Link className="button" href="/#contact">พูดคุยเรื่องหลักสูตร <Arrow /></Link><a className="profile-download" href="/trainer-profile-phakorn-attanon-2025.pdf" download>DOWNLOAD TRAINER PROFILE (PDF) <span>↓</span></a></div><div className="profile-hero-facts"><div><strong>+20</strong><span>ปีของประสบการณ์<br />งานบริการและฝึกอบรม</span></div><div><strong>90%+</strong><span>ผลประเมินการอบรม<br />ในทุกหัวข้อ</span></div></div></div>
      </div>
    </section>

    <section className="section profile-belief"><div className="container profile-belief-head"><div><p className="eyebrow"><span />TRAINING PHILOSOPHY</p><h2>การเรียนรู้ที่ดี<br />ต้องเปลี่ยนได้ทั้งความคิดและพฤติกรรม</h2></div><p>อ.พากรเชื่อว่าการฝึกอบรมที่มีประสิทธิผลต้องสมดุลระหว่างการปรับทัศนคติและการฝึกทักษะ จึงออกแบบทุกหลักสูตรบนแนวคิด Activity Based Learning ที่มีผู้เรียนเป็นศูนย์กลาง</p></div><div className="container profile-pillar-grid">{pillars.map(({ title, thai, text, icon: Icon }) => <article key={title}><div><Icon /></div><p>{title}</p><h3>{thai}</h3><small>{text}</small></article>)}</div></section>

    <section className="profile-story"><div className="profile-story-image"><Image src="/images/trainer-profile/training-01.jpg" fill sizes="(max-width: 900px) 100vw, 50vw" alt="อาจารย์พากรกำลังถ่ายทอดการเรียนรู้กับผู้เข้าอบรม" /></div><div className="profile-story-copy"><p className="eyebrow"><span />MINDSET × SKILLSET</p><h2>สร้างพื้นที่ที่ผู้เรียน<br />กล้าคิด กล้าลอง และกล้าเปลี่ยน</h2><p>การถ่ายทอดไม่ได้หยุดอยู่ที่การบอกเนื้อหา แต่ต้องสร้างบรรยากาศของความมีส่วนร่วม เปิดพื้นที่ให้แลกเปลี่ยน และท้าทายให้เกิดมุมมองใหม่ด้วยวิธีที่สนุก น่าสนใจ และเข้าถึงความรู้สึกของผู้เรียน</p><div><Spark /><p><strong>ความสุขของผู้สอน</strong><span>คือการได้เห็นผู้เรียนเปลี่ยนแปลงทัศนคติและพฤติกรรมของเขาไปตลอดกาล</span></p></div></div></section>

    <section className="section profile-expertise"><div className="container"><div className="profile-section-head"><div><p className="eyebrow"><span />AREAS OF EXPERTISE</p><h2>ความเชี่ยวชาญที่เชื่อม<br />คน งาน และประสบการณ์ลูกค้า</h2></div><p>จากประสบการณ์ในธุรกิจบริการ การเป็นครูฝึกอบรม และการดูแลทีม ทำให้เนื้อหาทุกด้านเชื่อมกับโลกการทำงานจริง</p></div><div className="profile-expertise-grid">{expertise.map(({ title, text, href, icon: Icon }) => <Link href={href} key={title}><span className="profile-expertise-icon"><Icon /></span><h3>{title}</h3><p>{text}</p><Arrow className="profile-expertise-arrow" /></Link>)}</div></div></section>

    <section className="section profile-credentials"><div className="container"><div className="profile-section-head profile-section-head--light"><div><p className="eyebrow"><span />EDUCATION &amp; CREDENTIALS</p><h2>รากฐานความรู้<br />ที่ต่อยอดด้วยการเรียนรู้อย่างต่อเนื่อง</h2></div><p>ผสานศาสตร์ด้านการพัฒนาทรัพยากรมนุษย์ การบริหารธุรกิจ Coaching, NLP, Performance Management และประสบการณ์ด้านบริการ</p></div><div className="profile-education"><article><Graduation /><div><small>ปริญญาโท</small><h3>การพัฒนาทรัพยากรมนุษย์และองค์การ</h3><p>สถาบันบัณฑิตพัฒนบริหารศาสตร์ (NIDA)</p></div></article><article><Graduation /><div><small>ปริญญาตรี</small><h3>บริหารธุรกิจ สาขาการตลาด</h3><p>มหาวิทยาลัยอัสสัมชัญ</p></div></article></div><div className="profile-certificate-grid">{certificates.map(([course, institute]) => <article key={course}><Check /><div><h3>{course}</h3><p>{institute}</p></div></article>)}</div></div></section>

    <section className="section profile-experience"><div className="container profile-experience-layout"><div><p className="eyebrow"><span />CAREER JOURNEY</p><h2>ประสบการณ์ตั้งแต่งานบริการ<br />สู่การพัฒนาคนและองค์กร</h2><div className="profile-timeline">{experience.map((item) => <article key={item.year}><span /><small>{item.year}</small><h3>{item.role}</h3><p>{item.company}</p></article>)}</div></div><div className="profile-experience-photo"><Image src="/images/trainer-profile/training-02.jpg" fill sizes="(max-width: 900px) 100vw, 44vw" alt="อาจารย์พากรจัดกระบวนการเรียนรู้ให้ผู้เข้าอบรม" /><div><Building /><span><small>EXPERIENCE</small>Service · Training · Coaching</span></div></div></div></section>

    <section className="section profile-roles"><div className="container"><div className="profile-section-head"><div><p className="eyebrow"><span />ADVISORY &amp; SPECIAL ROLES</p><h2>บทบาทที่ปรึกษา โค้ช<br />และอาจารย์พิเศษ</h2></div><p>ประสบการณ์การทำงานร่วมกับองค์กรธุรกิจ สถาบันการศึกษา และหน่วยงานต่าง ๆ ในการพัฒนาวิทยากร ผู้นำ และมาตรฐานการบริการ</p></div><div className="profile-role-list">{specialRoles.map(([role, organization]) => <article key={role}><span><Briefcase /></span><div><h3>{role}</h3><p>{organization}</p></div></article>)}</div></div></section>

    <section className="profile-photo-band"><div><Image src="/images/trainer-profile/training-03.jpg" fill sizes="100vw" alt="อาจารย์พากรสร้างบรรยากาศการเรียนรู้แบบมีส่วนร่วม" /></div><div className="container"><p>LEARNING THAT LASTS</p><h2>“เปลี่ยนความเข้าใจ<br />ให้กลายเป็นการลงมือทำ”</h2></div></section>

    <section className="section profile-customers"><div className="container"><div className="profile-section-head"><div><p className="eyebrow"><span />TRUSTED BY ORGANIZATIONS</p><h2>องค์กรที่ไว้วางใจ<br />ให้ร่วมพัฒนาคน</h2></div><p>ประสบการณ์การจัดฝึกอบรมและออกแบบการเรียนรู้ให้กับองค์กรหลากหลายอุตสาหกรรม ทั้งภาคธุรกิจ บริการ และหน่วยงานภาครัฐ</p></div><div className="profile-customer-sheets"><Image src="/images/trainer-profile/customers-01.webp" width={900} height={1140} sizes="(max-width: 767px) 100vw, 48vw" alt="รายชื่อลูกค้าและองค์กรที่เคยร่วมงานกับอาจารย์พากร ชุดที่ 1" /><Image src="/images/trainer-profile/customers-02.webp" width={900} height={1060} sizes="(max-width: 767px) 100vw, 48vw" alt="รายชื่อลูกค้าและองค์กรที่เคยร่วมงานกับอาจารย์พากร ชุดที่ 2" /></div></div></section>

    <section className="profile-cta"><div className="container profile-cta-inner"><div><p>DESIGN LEARNING WITH US</p><h2>ให้การเรียนรู้ครั้งต่อไป<br />สร้างการเปลี่ยนแปลงที่เห็นได้จริง</h2></div><div><p>พูดคุยเป้าหมาย กลุ่มผู้เรียน และความท้าทายขององค์กร เพื่อออกแบบเนื้อหาและกิจกรรมให้เหมาะกับบริบทของทีมคุณ</p><div><Link className="button" href="/#contact">ปรึกษา อ.พากร และทีมงาน <Arrow /></Link><a href="/trainer-profile-phakorn-attanon-2025.pdf" download>ดาวน์โหลด Profile <span>↓</span></a></div></div></div></section>
  </main><Footer /></>;
}
