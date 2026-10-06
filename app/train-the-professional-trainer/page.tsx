import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TrainerGallery } from "@/components/trainer-gallery";
import { TrainerOutcomes } from "@/components/trainer-outcomes";
import { TrainerCurriculum } from "@/components/trainer-curriculum";
import { Activity, Arrow, BookOpen, ClipboardCheck, Graduation, Presentation, Spark, Target, UserFocus, Users } from "@/components/icons";

export const metadata: Metadata = {
  title: "Train the Professional Trainer | ATTA9 Training",
  description: "หลักสูตรพัฒนาวิทยากรภายในองค์กร 3 วัน ฝึกออกแบบเนื้อหา เทคนิคการสอน บุคลิกภาพ การใช้สื่อ และการประเมินผล เพื่อสร้างการเรียนรู้ที่นำไปใช้ได้จริง",
};

const problems = [
  "สอนเรื่องง่ายให้กลายเป็นเรื่องยาก ผู้เรียนเข้าใจเนื้อหาได้ไม่ชัดเจน",
  "ใช้เทคนิคและรูปแบบการสอนที่จำกัด ขาดความน่าสนใจและน่าติดตาม",
  "สร้างบรรยากาศการเรียนรู้และกระตุ้นการมีส่วนร่วมของผู้เรียนไม่ได้",
  "ผู้เรียนไม่สามารถนำสิ่งที่เรียนรู้กลับไปประยุกต์ใช้กับงานจริง",
];

const outcomes: [string, string][] = [
  ["Learner Centered", "เข้าใจบทบาทของผู้สอนมืออาชีพ และออกแบบการเรียนรู้โดยมีผู้เรียนเป็นศูนย์กลาง"],
  ["Friendly Content", "ถ่ายทอดเรื่องยากให้เข้าใจง่าย พร้อมเชื่อมเนื้อหาไปสู่การลงมือใช้จริง"],
  ["Impact Methods", "เลือกใช้เทคนิคและเครื่องมือการสอนที่สร้างสรรค์ หลากหลาย และน่าติดตาม"],
  ["Activity Based", "สร้างการเรียนรู้ผ่านกิจกรรมและการฝึกปฏิบัติที่ผู้เรียนมีส่วนร่วม"],
  ["Show Time Delivery", "ส่งมอบเนื้อหาด้วยบรรยากาศที่เปิดกว้าง สนุก และเอื้อต่อการเรียนรู้"],
  ["Smart Personality", "ใช้การเคลื่อนไหว สายตา น้ำเสียง และจังหวะการพูดอย่างทรงพลัง"],
  ["Assessment", "ประเมินก่อน ระหว่าง และหลังการสอน เพื่อนำข้อมูลมาพัฒนาการสอนอย่างต่อเนื่อง"],
];

const modules = [
  { number: "01", title: "To Be the Professional Trainer", subtitle: "หลักการของการเป็นวิทยากรมืออาชีพ", topics: ["บทบาทและหน้าที่ของวิทยากรที่มีผู้เรียนเป็นศูนย์กลาง", "คุณสมบัติที่ดีของวิทยากรมืออาชีพ", "ทัศนคติที่นำไปสู่การสอนอย่างมีประสิทธิภาพ"] },
  { number: "02", title: "Psychology of Teaching", subtitle: "จิตวิทยาและบรรยากาศการเรียนรู้", topics: ["หลักการเรียนรู้ที่มีประสิทธิภาพ", "การละลายพฤติกรรม (Ice Breaking)", "การสร้างบรรยากาศที่เอื้อต่อการเรียนรู้", "วิธีกระตุ้นพลังของคลาสเมื่อความสนใจลดลง"] },
  { number: "03", title: "Content Management", subtitle: "ออกแบบเนื้อหาให้ชัดและน่าจดจำ", topics: ["บริหารเวลา: บทนำ เนื้อหา และบทสรุป", "โครงสร้างเนื้อหาและคำถาม What’s in It for Me?", "Headline, Key Message และ Pain & Pleasure", "5 เครื่องมือในการโน้มน้าวใจ", "การทวนและ Gimmick เพื่อการจดจำอย่างยั่งยืน"] },
  { number: "04", title: "Smart Personality", subtitle: "บุคลิกภาพของวิทยากร", topics: ["บุคลิกภาพแห่งความน่าเชื่อถือ", "การยืน การเคลื่อนไหว การใช้มือ และการสบตา", "พลังของน้ำเสียง ความชัดเจน และจังหวะการออกเสียง"] },
  { number: "05", title: "Principles & Training Methods", subtitle: "เทคนิคการสอนที่สร้างการมีส่วนร่วม", topics: ["ความทรงจำ 4 รูปแบบกับการเรียนรู้", "3 ทวีปของการสอน: เนื้อหา เทคนิค และการถ่ายทอด", "วงจร KUSA: Knowledge, Understanding, Skill, Attitude", "กิจกรรม เกม สาธิต กรณีศึกษา Role Play และ Skill Practice", "เทคนิคถาม–ตอบที่ทำให้ผู้เรียนมีส่วนร่วม"] },
  { number: "06", title: "Media, Lesson Plan & Assessment", subtitle: "สื่อ แผนการสอน และการประเมินผล", topics: ["เลือกใช้สื่อการสอนให้หลากหลายและเหมาะสม", "PowerPoint, Flipchart และสื่อสร้างสรรค์", "องค์ประกอบและการฝึกเขียน Lesson Plan", "วิเคราะห์ผู้เรียนและประเมินผลระหว่างการสอน", "คำถาม Coaching เพื่อสร้าง Action Plan"] },
];

const methods = ["Ice Breaking", "Group Activity", "Role Play", "Skill Practice", "Game", "Group Discussion", "Sharing", "Round Robin", "VDO Clip", "Casino Classroom", "Coaching"];
const problemIcons = [BookOpen, Spark, Users, Target];
const methodIcons = [Spark, Users, UserFocus, Target, Activity, Presentation, Users, Activity, Presentation, BookOpen, ClipboardCheck];

const gallery = [
  { src: "/images/train-the-trainer/hero.jpg", alt: "กิจกรรมสร้างการมีส่วนร่วมในห้องเรียน" },
  { src: "/images/train-the-trainer/workshop-wide.jpg", alt: "วิทยากรกำลังนำกิจกรรมฝึกปฏิบัติ" },
  { src: "/images/train-the-trainer/practice.jpg", alt: "ผู้เข้าอบรมฝึกออกแบบการเรียนรู้ร่วมกัน" },
  { src: "/images/train-the-trainer/gallery-04.jpg", alt: "ผู้เข้าอบรมฝึกถ่ายทอดเนื้อหา" },
  { src: "/images/train-the-trainer/gallery-05.jpg", alt: "กิจกรรมกลุ่มสำหรับวิทยากรภายใน" },
  { src: "/images/train-the-trainer/gallery-06.jpg", alt: "การฝึกนำเสนอหน้าชั้นเรียน" },
  { src: "/images/train-the-trainer/gallery-07.jpg", alt: "กิจกรรมการเรียนรู้แบบมีส่วนร่วม" },
  { src: "/images/train-the-trainer/gallery-08.jpg", alt: "เวิร์กช็อปฝึกทักษะการสอน" },
  { src: "/images/train-the-trainer/gallery-09.jpg", alt: "การฝึกบุคลิกภาพและการสื่อสาร" },
  { src: "/images/train-the-trainer/gallery-10.jpg", alt: "กิจกรรมกลุ่มและการแลกเปลี่ยนความคิดเห็น" },
  { src: "/images/train-the-trainer/gallery-11.jpg", alt: "ผู้เข้าอบรมฝึกปฏิบัติจริง" },
  { src: "/images/train-the-trainer/gallery-12.jpg", alt: "วิทยากรให้คำแนะนำระหว่างกิจกรรม" },
  { src: "/images/train-the-trainer/gallery-13.jpg", alt: "การฝึกออกแบบสื่อการสอน" },
  { src: "/images/train-the-trainer/gallery-14.jpg", alt: "การเรียนรู้ผ่านกิจกรรมในองค์กร" },
  { src: "/images/train-the-trainer/gallery-bags.webp", alt: "ผู้เข้าอบรมฝึกออกแบบกระบวนการเรียนรู้" },
];

export default function TrainTheProfessionalTrainerPage() {
  return <>
    <Header />
    <main>
      <section className="course-detail-hero" id="top">
        <Image className="course-detail-hero-image" src="/images/train-the-trainer/hero-instructor-enhanced.png" fill preload quality={92} sizes="100vw" alt="วิทยากรหลักกำลังให้คำแนะนำผู้เข้าอบรมในหลักสูตร Train the Professional Trainer"/>
        <div className="course-detail-hero-overlay"/>
        <div className="container course-detail-hero-grid">
          <div className="course-detail-hero-copy">
            <h1>Train the<br/><strong>Professional Trainer</strong></h1>
            <p className="course-detail-lead">สร้างวิทยากรภายในที่ถ่ายทอดอย่างมั่นใจ ออกแบบการเรียนรู้ได้เป็นระบบ และพาผู้เรียนเชื่อมบทเรียนไปสู่การลงมือทำจริง</p>
            <div className="course-facts"><div><span>3</span><p><small>DURATION</small>วันเต็ม</p></div><div><span>10</span><p><small>CLASS SIZE</small>ท่าน / รุ่น</p></div><div><Users/><p><small>FOR WHOM</small>วิทยากรภายใน</p></div></div>
            <div className="course-detail-actions"><Link className="button" href="/#contact">ขอรายละเอียดหลักสูตร <Arrow/></Link><a className="button button--ghost" href="#curriculum">ดูหัวข้อการเรียนรู้</a></div>
          </div>
        </div>
      </section>

      <section className="section trainer-problems"><div className="container trainer-problem-layout"><div><p className="eyebrow"><span/>THE CHALLENGE</p><h2>เมื่อรู้เนื้อหา<br/>แต่ยังถ่ายทอดไม่ถึงผู้เรียน</h2><p>ความเชี่ยวชาญในงานเป็นจุดเริ่มต้นที่ดี แต่การสร้างการเรียนรู้ต้องอาศัยทั้งการออกแบบ เทคนิคการสอน และการส่งมอบที่เข้าใจผู้เรียน</p></div><div className="trainer-problem-list">{problems.map((problem,index)=>{const Icon=problemIcons[index];return <article key={problem}><span><Icon/></span><p>{problem}</p></article>;})}</div></div></section>

      <section className="section trainer-outcomes"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span/>LEARNING OUTCOMES</p><h2>หลักสูตรนี้จะทำให้ผู้สอน<br/>พร้อมในทุกมิติ</h2></div><p>พัฒนาตั้งแต่กรอบความคิด การออกแบบเนื้อหา ไปจนถึงบุคลิกภาพและการประเมินผล เพื่อให้ทุกนาทีในห้องเรียนมีความหมาย</p></div><TrainerOutcomes outcomes={outcomes}/></div></section>

      <section className="section trainer-curriculum" id="curriculum"><div className="container"><div className="trainer-section-head trainer-section-head--light"><div><p className="eyebrow"><span/>COURSE CURRICULUM</p><h2>หัวข้อในการเรียนรู้</h2></div><p>โครงสร้างเนื้อหาครบตั้งแต่พื้นฐานการเป็นวิทยากร จิตวิทยาการสอน การบริหารเนื้อหา เทคนิคการถ่ายทอด ไปจนถึง Lesson Plan และ Assessment</p></div><TrainerCurriculum modules={modules}/></div></section>

      <section className="section trainer-learning-design"><div className="container trainer-learning-layout"><div className="trainer-learning-photo"><Image src="/images/train-the-trainer/practice.jpg" fill sizes="(max-width: 900px) 100vw, 45vw" alt="กิจกรรมฝึกทักษะในหลักสูตรวิทยากรมืออาชีพ"/><div><Spark/><span>Skillset <b>+</b> Mindset</span></div></div><div><p className="eyebrow"><span/>LEARNING DESIGN</p><h2>สมดุลทั้งทักษะ<br/>และทัศนคติ</h2><div className="trainer-learning-block"><span><Target/></span><div><h3>Skillset</h3><p>ฝึกแบบกลุ่มเล็กสามมิติ (Triad) สลับบทบาทผู้สอน ผู้เรียน และผู้สังเกตการณ์ พร้อมฝึกสอนเสมือนจริง อัดวิดีโอ รับ Feedback รายบุคคล และใช้ Coaching เพื่อประเมินตนเอง</p></div></div><div className="trainer-learning-block"><span><Spark/></span><div><h3>Mindset</h3><p>ปรับทัศนคติให้เห็นความสำคัญของการเรียนรู้ เปิดใจ ออกจาก Comfort Zone และสร้างความมั่นใจผ่านกิจกรรมที่หลากหลาย ในบรรยากาศสนุก เป็นกันเอง และให้กำลังใจกัน</p></div></div></div></div></section>

      <section className="trainer-methods"><div className="container trainer-methods-grid"><div><p>TRAINING METHODS</p><h2>เครื่องมือที่ใช้<br/>ตลอด 3 วัน</h2></div><div className="trainer-method-cloud">{methods.map((method,index)=>{const Icon=methodIcons[index];return <span key={method}><Icon/>{method}</span>;})}</div></div></section>

      <section className="section trainer-gallery"><div className="container"><div className="trainer-section-head"><div><p className="eyebrow"><span/>LEARNING IN ACTION</p><h2>บรรยากาศจากการเรียนรู้จริง</h2></div><p>ผู้เรียนได้ทดลอง ออกแบบ สอน แลกเปลี่ยน และรับคำแนะนำ เพื่อนำทักษะกลับไปสร้างการเรียนรู้ในองค์กรของตนเอง</p></div><TrainerGallery images={gallery}/></div></section>

      <section className="section trainer-summary"><div className="container trainer-summary-grid"><div><p className="eyebrow"><span/>PROGRAM AT A GLANCE</p><h2>เหมาะสำหรับทีมที่ต้องการ<br/>สร้างวิทยากรภายในอย่างจริงจัง</h2><p>การเรียนรู้เข้มข้นตลอด 3 วัน ตั้งแต่เวลา 09.00–16.00 น. ของแต่ละวัน จำกัดจำนวนผู้เรียนเพื่อให้ทุกคนได้ฝึกจริงและรับคำแนะนำอย่างทั่วถึง</p></div><aside><div><Users/><span><small>เหมาะสำหรับ</small>วิทยากรหรือครูฝึกอบรมภายในองค์กร</span></div><div><Target/><span><small>จำนวนผู้เข้าอบรม</small>ไม่เกิน 10 ท่าน / รุ่น</span></div><div><Graduation/><span><small>ระยะเวลา</small>3 วัน เวลา 09.00–16.00 น.</span></div><Link className="button" href="/#contact">ปรึกษาและขอใบเสนอราคา <Arrow/></Link></aside></div></section>
    </main>
    <Footer />
  </>;
}
