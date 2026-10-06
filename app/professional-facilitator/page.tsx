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
  title: "Professional Facilitator | ATTA9 Training",
  description: "หลักสูตรพัฒนาวิทยากรกระบวนการ 2 วัน ฝึกเลือก Facilitative Process และ Tools ตั้งคำถามทรงพลัง ถอดบทเรียน และตกผลึกความรู้สู่การนำไปใช้จริง",
  openGraph: {
    title: "Professional Facilitator",
    description: "นำพากลุ่มจากการแลกเปลี่ยน สู่บทเรียนใหม่ที่ชัดเจนและนำไปใช้ได้จริง",
    images: ["/images/professional-facilitator/hero.jpg"],
  },
};

const challenges = [
  "ไม่ชัดเจนในบทบาทของ Facilitator และเผลอเป็นผู้ให้คำตอบแทนกลุ่ม",
  "เลือกกระบวนการไม่เหมาะกับบริบท เป้าหมาย หรือความหลากหลายของสมาชิก",
  "ใช้เครื่องมือและกิจกรรมโดยไม่เชื่อมโยงกับวัตถุประสงค์ที่ต้องการ",
  "ตั้งคำถามไม่ลึกพอ จึงดึงประสบการณ์และความรู้ของสมาชิกออกมาไม่ได้",
  "จับประเด็นและรวบรวมข้อมูลสำคัญจากวงสนทนาได้ไม่ชัดเจน",
  "สร้างบรรยากาศการมีส่วนร่วมไม่ได้ ทำให้บางคนครองวงและบางคนเงียบ",
  "จบกิจกรรมแล้วไม่เกิดการถอดบทเรียนหรือตกผลึกเป็นชุดความรู้ใหม่",
  "ได้ข้อสรุปของกลุ่ม แต่เชื่อมต่อไปสู่การใช้จริงในหน้างานไม่ได้",
];

const outcomes: [string, string][] = [
  ["Facilitative Process", "เลือกกระบวนการเพื่อดึงความรู้จากสมาชิกกลุ่มได้เหมาะสมกับเป้าหมายและบริบท"],
  ["Facilitative Tools", "เลือกเกม กิจกรรม กรณีศึกษา เรื่องเล่า วิดีโอ และคำถามมาใช้ประกอบกระบวนการได้แม่นยำ"],
  ["Powerful Questioning", "ตั้งคำถามทรงพลังเพื่อเปิดมุมมองใหม่และนำพากลุ่มสู่การถอดบทเรียนที่มีประสิทธิผล"],
  ["Effective Listening", "ฟังอย่างตั้งใจ สะท้อนกลับ จับประเด็น และรวบรวมข้อมูลสำคัญของกลุ่มได้ชัดเจน"],
  ["Positive Participation", "จูงใจและสร้างบรรยากาศแห่งการมีส่วนร่วมเชิงบวกอย่างสร้างสรรค์"],
  ["Crystallization", "ทำให้กลุ่มตกผลึกบทเรียนตามวัตถุประสงค์และเชื่อมโยงไปสู่การนำไปใช้จริง"],
];

const modules = [
  { number: "01", title: "Facilitative Process", subtitle: "กระบวนการในการจัดการเรียนรู้", topics: ["Individual Sharing การแบ่งปันแบบบุคคล", "Traditional Group Discussion", "Round Robin กลุ่มวน", "Cross Pollination กลุ่มผสมเกสร", "ข้อดีและข้อจำกัดของแต่ละกระบวนการ"] },
  { number: "02", title: "Facilitative Tools", subtitle: "เครื่องมือที่ใช้ในกระบวนการ", topics: ["เกมและกิจกรรม (Game & Activity)", "กรณีศึกษาและการเล่าเรื่อง", "VDO Clip และ Beginning Questions", "คำถามแบบ Peak Pain & Peak Pleasure", "คำถามผ่าน Perceptual Positions"] },
  { number: "03", title: "Debriefing & Crystallization", subtitle: "การถอดบทเรียนและการตกผลึก", topics: ["การฟัง การสะท้อนกลับ และจับประเด็น", "การถอดบทเรียนจากสมาชิกกลุ่ม", "L.A.T. Model: Learning–Application–Transformation", "Stay Stop Start Model", "Tailor-made Action Plan และพันธะสัจจะ"] },
  { number: "04", title: "Positive Participation", subtitle: "สร้างบรรยากาศแห่งการมีส่วนร่วม", topics: ["กิจกรรมละลายพฤติกรรม", "กติกาและข้อตกลงร่วมกันของกลุ่ม", "เทคนิคจูงใจเพื่อสร้างการมีส่วนร่วม", "Intention Setting ก่อนเข้าสู่กระบวนการ", "การครองเวทีและใช้ดนตรีสร้างบรรยากาศ"] },
];

const methods = ["Ice Breaking", "Group Activity", "Role Play", "Skill Practice", "Game", "Group Discussion", "Sharing", "Round Robin", "VDO Clip", "Casino Classroom", "Coaching"];
const methodIcons = [Spark, Users, UserFocus, Target, Activity, Presentation, Users, Activity, Presentation, BookOpen, ClipboardCheck];

const gallery = [
  ...Array.from({ length: 10 }, (_, index) => ({
    src: `/images/professional-facilitator/gallery-${String(index + 1).padStart(2, "0")}.jpg`,
    alt: `บรรยากาศหลักสูตร Professional Facilitator ภาพที่ ${index + 1}`,
  })),
  { src: "/images/professional-facilitator/gallery-11.webp", alt: "กิจกรรมฝึกใช้เครื่องมือของวิทยากรกระบวนการ" },
  { src: "/images/professional-facilitator/gallery-12.jpg", alt: "ผู้เข้าอบรมร่วมกิจกรรมเพื่อถอดบทเรียนและตกผลึกความรู้" },
];

export default function ProfessionalFacilitatorPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero facilitator-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/professional-facilitator/hero.jpg" fill preload quality={100} sizes="100vw" alt="วิทยากรกำลังนำกระบวนการเรียนรู้ร่วมกับผู้เข้าอบรม" />
        <div className="course-detail-hero-overlay" />
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <p className="facilitator-hero-kicker">ENGAGE • DEBRIEF • CRYSTALLIZE</p>
            <h1><span>Professional</span><strong>Facilitator</strong></h1>
            <p className="course-detail-lead">นำพากลุ่มให้กล้าแลกเปลี่ยน ดึงประสบการณ์ของทุกคนออกมา และตกผลึกเป็นความรู้ใหม่ที่นำกลับไปใช้ได้จริง</p>
            <div className="course-facts"><div><span>2</span><p><small>DURATION</small>วัน / 12 ชั่วโมง</p></div><div><span>12</span><p><small>CLASS SIZE</small>ไม่เกิน 12 ท่าน</p></div><div><Users /><p><small>FOR WHOM</small>กระบวนกรและวิทยากร</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow /></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section facilitator-challenge">
        <div className="container trainer-problem-layout">
          <div><p className="eyebrow"><span />FROM DISCUSSION TO DISCOVERY</p><h2>วงสนทนาที่ดีไม่ได้จบ<br />เพียงแค่ทุกคนได้พูด</h2><p>Facilitator คือผู้นำพากระบวนการที่ช่วยกลั่นกรองข้อมูลจากสมาชิก จนกลายเป็นชุดความรู้ใหม่ หากบทบาท กระบวนการ หรือคำถามไม่ชัดเจน วงสนทนาอาจจบลงโดยไม่เกิดบทเรียนหรือการเปลี่ยนแปลงที่ต้องการ</p></div>
          <div className="trainer-problem-list">{challenges.map((challenge, index) => <article key={challenge}><span>{String(index + 1).padStart(2, "0")}</span><p>{challenge}</p></article>)}</div>
        </div>
        <div className="container facilitator-flow" aria-label="ลำดับกระบวนการสู่การตกผลึก"><span>เปิดพื้นที่<small>ENGAGE</small></span><i aria-hidden="true" /><span>ดึงความรู้<small>EXPLORE</small></span><i aria-hidden="true" /><span>ถอดบทเรียน<small>DEBRIEF</small></span><i aria-hidden="true" /><span>ตกผลึก<small>CRYSTALLIZE</small></span></div>
      </section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />LEARNING OUTCOMES</p><h2>สร้างกระบวนการที่ทุกเสียง<br />นำไปสู่บทเรียนร่วมกัน</h2></div><p>ผู้เรียนจะเข้าใจทั้งบทบาท กระบวนการ เครื่องมือ การฟัง และการตั้งคำถาม เพื่อเปลี่ยนการแลกเปลี่ยนในกลุ่มให้เป็นข้อค้นพบที่ชัดเจนและมีคุณค่า</p></div><TrainerOutcomes outcomes={outcomes} /></div></section>

      <section className="section trainer-curriculum facilitator-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span />COURSE CURRICULUM</p><h2>จากการออกแบบวงสนทนา<br />สู่การตกผลึกที่นำไปใช้ได้จริง</h2></div><p>เรียนรู้ 4 แกนสำคัญ ตั้งแต่การเลือก Facilitative Process และ Tools ไปจนถึง Debriefing, Crystallization และการสร้างบรรยากาศที่ทุกคนพร้อมมีส่วนร่วม</p></div><TrainerCurriculum modules={modules} /></div></section>

      <section className="section trainer-learning-design facilitator-learning"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/professional-facilitator/gallery-03.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="ผู้เข้าอบรมทำกิจกรรมกลุ่มในกระบวนการเรียนรู้" /><div><UserFocus /><span>Process <b>+</b> Presence</span></div></div><div><p className="eyebrow"><span />LEARNING DESIGN</p><h2>เรียนรู้ด้วยการเป็น<br />Facilitator จริงในห้อง</h2><p className="facilitator-learning-intro">ผู้เรียนจะได้สัมผัสกระบวนการหลากหลายด้วยตนเอง ก่อนออกแบบและนำกระบวนการเสมือนจริง เพื่อให้เข้าใจทั้งมุมของผู้นำกลุ่ม สมาชิก และผู้สังเกตการณ์</p><div className="trainer-learning-block"><span><Activity /></span><div><h3>Facilitation Simulation</h3><p>ฝึกนำกระบวนการหน้าคลาสกับผู้เข้าร่วมกลุ่มใหญ่ ใช้กิจกรรมและเครื่องมือจริง พร้อมบันทึกวิดีโอเพื่อทบทวนวิธีสร้างการมีส่วนร่วม</p></div></div><div className="trainer-learning-block"><span><Spark /></span><div><h3>Feedback &amp; Coaching</h3><p>รับ Feedback รายบุคคลจากผู้สอนและเพื่อนร่วมกลุ่ม ใช้คำถาม Coaching เพื่อประเมินตนเองและสร้างแผนพัฒนาที่นำไปใช้ต่อได้</p></div></div></div></div></section>

      <section className="story-photo-pair facilitator-photo-pair"><div className="story-photo"><Image src="/images/professional-facilitator/gallery-01.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="วิทยากรนำกิจกรรมที่สร้างการมีส่วนร่วมอย่างเป็นกันเอง" /><span>Create participation</span></div><div className="story-photo"><Image src="/images/professional-facilitator/gallery-05.jpg" fill sizes="(max-width: 767px) 100vw, 50vw" alt="สมาชิกกลุ่มร่วมกันแลกเปลี่ยนและตกผลึกความรู้" /><span>Crystallize learning</span></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>สัมผัสกระบวนการ<br />ก่อนลงมือนำด้วยตนเอง</h2></div><div className="trainer-method-cloud">{methods.map((method, index) => { const Icon = methodIcons[index]; return <span key={method}><Icon />{method}</span>; })}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span />FACILITATION IN ACTION</p><h2>ภาพบรรยากาศฝึกอบรม</h2></div><p>บรรยากาศที่เปิดกว้าง สนุก และเป็นกันเอง ช่วยให้ผู้เรียนกล้าทดลองใช้เครื่องมือ นำกิจกรรม และเรียนรู้จากมุมมองของสมาชิกในกลุ่มจริง</p></div><TrainerGallery images={gallery} /></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span />PROGRAM AT A GLANCE</p><h2>สำหรับผู้ที่ต้องนำพา<br />การเรียนรู้และการเปลี่ยนแปลง</h2><p>เหมาะสำหรับกระบวนกร วิทยากร หรือครูฝึกอบรมภายในองค์กร ใช้เวลา 2 วัน เวลา 09.00–16.00 น. จำกัดไม่เกิน 12 ท่านต่อรุ่น เพื่อให้ทุกคนได้ออกแบบ ทดลองนำกระบวนการ และรับ Feedback อย่างทั่วถึง</p></div><aside><div><Users /><span><small>เหมาะสำหรับ</small>กระบวนกร วิทยากร และครูฝึกอบรมภายใน</span></div><div><Target /><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 12 ท่าน / รุ่น</span></div><div><Graduation /><span><small>ระยะเวลา</small>2 วัน 12 ชั่วโมง (09.00–16.00 น.)</span></div><div><ClipboardCheck /><span><small>รูปแบบ</small>In-house Training ปรับบริบทให้ตรงกับองค์กร</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow /></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
