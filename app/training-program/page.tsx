import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Arrow, Check, Spark, Target } from "@/components/icons";

export const metadata: Metadata = {
  title: "หลักสูตรฝึกอบรมสำหรับองค์กร | ATTA9 Training",
  description: "รวมหลักสูตร In-house Training ด้านการเป็นวิทยากร การนำเสนอ ภาวะผู้นำ การสื่อสาร การบริการ และการพัฒนาทีม ออกแบบให้เหมาะกับบริบทองค์กร",
};

const categories = ["Trainer Skills", "Leadership", "Communication", "Service Excellence", "Professional Image"];

const courses = [
  { title: "Train the Professional Trainer", category: "Trainer Skills", image: "/images/courses/train-professional-trainer.jpg", description: "สร้างความมั่นใจในการก้าวสู่วิทยากรภายในองค์กร เข้าใจบทบาทของผู้สอนมืออาชีพ และออกแบบกระบวนการที่เอื้อต่อการเรียนรู้ของผู้เรียน", outcome: "พัฒนาวิทยากรภายในอย่างเป็นระบบ", href: "/train-the-professional-trainer" },
  { title: "Persuasive & Powerful Presentation", category: "Communication", image: "/images/courses/persuasive-presentation.jpg", description: "ยกระดับการนำเสนอให้โดนใจลูกค้าและผู้บริหาร เรียบเรียงข้อมูลให้เข้าใจง่าย พร้อมเสนอทางเลือกที่ช่วยขับเคลื่อนการตัดสินใจ", outcome: "นำเสนอชัดเจน น่าเชื่อถือ และโน้มน้าวใจ", href: "/persuasive-powerful-presentation" },
  { title: "Leader as an Inspiring Coach", category: "Leadership", image: "/images/courses/inspiring-coach.jpg", description: "เสริมทักษะการบริหารคนสำหรับผู้นำยุคใหม่ ให้เก่งตน เก่งคน และเก่งงาน พร้อมพัฒนาศักยภาพของตนเองและทีมไปด้วยกัน", outcome: "เปลี่ยนหัวหน้าให้เป็นโค้ชที่สร้างแรงบันดาลใจ", href: "/leader-as-an-inspiring-coach" },
  { title: "Communication Skills for Efficiency and Collaboration", category: "Communication", image: "/images/courses/communication-efficiency.jpg", description: "ลดปัญหาการประสานงานที่เกิดจากบรรยากาศและความเข้าใจไม่ตรงกัน สร้างการสื่อสารที่ช่วยให้ทีมทำงานร่วมกันได้อย่างราบรื่น", outcome: "ประสานงานคล่องขึ้นและเข้าใจตรงกัน", href: "/communication-skill-for-efficiency" },
  { title: "Service Mind in Action", category: "Service Excellence", image: "/images/courses/service-mind.jpg", description: "พัฒนาทัศนคติและพฤติกรรมบริการให้ลูกค้าสัมผัสได้ถึงความกระตือรือร้น ความใส่ใจ และความพร้อมในการช่วยเหลืออย่างจริงใจ", outcome: "สร้างประสบการณ์บริการที่น่าประทับใจ", href: "/service-mind-in-action" },
  { title: "Smart Personality for Professional Image", category: "Professional Image", image: "/images/courses/smart-personality.jpg", description: "เสริมความมั่นใจด้านบุคลิกภาพ การแต่งกาย และการวางตัว เพราะรายละเอียดเล็ก ๆ เหล่านี้สะท้อนภาพลักษณ์ความเป็นมืออาชีพขององค์กร", outcome: "เสริมบุคลิกและภาพลักษณ์ที่น่าเชื่อถือ", href: "/smart-personality-for-professional-image" },
  { title: "Effective Complaint Handling", category: "Service Excellence", image: "/images/courses/complaint-handling.jpg", description: "สร้างสมดุลระหว่างทักษะและทัศนคติในการรับมือข้อร้องเรียน เพื่อเปลี่ยนสถานการณ์ที่ยากให้กลายเป็นโอกาสสร้างความเชื่อมั่น", outcome: "รับมือข้อร้องเรียนอย่างมืออาชีพ", href: "/effective-complaint-handling" },
  { title: "Impact Performance Feedback", category: "Leadership", image: "/images/courses/performance-feedback.jpg", description: "ฝึกการให้ข้อมูลป้อนกลับที่ช่วยให้พนักงานเห็นตำแหน่งของตนเมื่อเทียบกับเป้าหมาย รู้สิ่งที่ควรทำต่อ และสิ่งที่ควรพัฒนา", outcome: "ให้ Feedback ที่ชัดเจนและนำไปพัฒนาต่อได้", href: "/impact-performance-feedback" },
  { title: "Persuasive and Powerful Storytelling for Leaders", category: "Leadership", image: "/images/courses/storytelling-leaders.jpg", description: "ใช้พลังของเรื่องเล่าเพื่อส่งต่อข้อคิด จุดประกายความฝัน และสร้างแรงบันดาลใจที่นำไปสู่การเปลี่ยนแปลงพฤติกรรม", outcome: "สื่อสารวิสัยทัศน์ผ่านเรื่องเล่าที่ทรงพลัง", href: "/persuasive-and-powerful-story-telling-for-leaders" },
  { title: "Professional Facilitator", category: "Trainer Skills", image: "/images/courses/professional-facilitator.jpg", description: "พัฒนาทักษะวิทยากรกระบวนการที่ช่วยนำพาการเรียนรู้ กลั่นกรองความคิดเห็นของสมาชิก และตกผลึกเป็นองค์ความรู้ใหม่ร่วมกัน", outcome: "นำวงสนทนาและสร้างการมีส่วนร่วมอย่างมืออาชีพ", href: "/professional-facilitator" },
];

const courseImageFocus = [
  "48% 28%", "50% 28%", "84% 28%", "30% 28%", "14% 28%",
  "55% 28%", "16% 28%", "30% 28%", "11% 28%", "78% 28%",
];

export default function TrainingProgramPage() {
  return <>
    <Header />
    <main>
      <section className="training-hero training-hero--photo" id="top">
        <Image className="training-hero-image" src="/images/training-program-hero-atta9.png" fill preload quality={100} sizes="100vw" alt="วิทยากร ATTA9 ในบรรยากาศการฝึกอบรมสำหรับองค์กร" />
        <div className="training-hero-overlay" />
        <div className="container training-hero-grid">
          <div className="training-hero-copy">
            <p className="eyebrow"><span/>COURSES &amp; PROGRAMS</p>
            <h1><span>หลักสูตรฝึกอบรม</span><strong>ที่เปลี่ยนการเรียนรู้</strong><span>ให้เกิดขึ้นในงานจริง</span></h1>
            <p>เลือกจากหลักสูตรมาตรฐานของ ATTA9 หรือปรับเนื้อหา กิจกรรม และกรณีศึกษาให้ตรงกับเป้าหมายขององค์กรคุณ</p>
            <div className="course-facts training-hero-facts"><div><span>10</span><p><small>PROGRAMS</small>หลักสูตรหลัก</p></div><div><Spark/><p><small>CUSTOMIZED</small>ปรับให้ตรงกับทีม</p></div><div><Target/><p><small>FORMAT</small>In-house Training</p></div></div>
            <div className="training-hero-actions"><a className="button" href="#all-courses">สำรวจหลักสูตร <Arrow/></a><Link className="button button--ghost" href="/#contact">ปรึกษาทีมงาน</Link></div>
          </div>
        </div>
      </section>

      <section className="training-intro">
        <div className="container training-intro-grid"><div><p className="eyebrow"><span/>LEARN. PRACTICE. APPLY.</p><h2>เริ่มจากความท้าทายของคน<br/>เชื่อมไปสู่เป้าหมายขององค์กร</h2></div><div className="training-intro-copy"><p>ทุกหลักสูตรเน้นการมีส่วนร่วม การฝึกปฏิบัติ และการสะท้อนบทเรียน เพื่อให้ผู้เรียนเห็นวิธีประยุกต์ใช้กับสถานการณ์จริงของตนเอง</p><ul><li><Check/>ปรับเนื้อหาตามกลุ่มผู้เรียน</li><li><Check/>ใช้กิจกรรมและกรณีศึกษาจากงานจริง</li><li><Check/>รองรับการจัดอบรมแบบ In-house</li></ul></div></div>
      </section>

      <section className="section training-catalog" id="all-courses">
        <div className="container">
          <div className="training-catalog-head"><div><p className="eyebrow"><span/>TRAINING PROGRAMS</p><h2>เลือกหลักสูตรที่ตอบโจทย์ทีมของคุณ</h2></div><p>ครอบคลุมทักษะที่จำเป็นต่อการทำงาน ตั้งแต่การสื่อสาร ภาวะผู้นำ การพัฒนาวิทยากร ไปจนถึงการบริการอย่างมืออาชีพ</p></div>
          <div className="category-row" aria-label="หมวดหมู่หลักสูตร">{categories.map((category, index) => <span className={index === 0 ? "is-primary" : ""} key={category}>{category}</span>)}</div>
          <div className="course-grid">{courses.map((course, index) => <article className="course-card" key={course.title}>
            <div className="course-card-media"><Image src={course.image} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: courseImageFocus[index] }} alt={`ภาพประกอบหลักสูตร ${course.title}`}/><span>{course.category}</span><small>{String(index + 1).padStart(2,"0")}</small></div>
            <div className="course-card-body"><h2>{course.title}</h2><p>{course.description}</p><div className="course-outcome"><Target/><span><small>KEY OUTCOME</small>{course.outcome}</span></div><Link href={course.href ?? "/#contact"} aria-label={`${course.href ? "ดู" : "ขอ"}รายละเอียดหลักสูตร ${course.title}`}>{course.href ? "ดูรายละเอียดหลักสูตร" : "ขอรายละเอียดหลักสูตร"} <Arrow/></Link></div>
          </article>)}</div>
        </div>
      </section>

      <section className="training-cta"><div className="container training-cta-inner"><div><p>CUSTOMIZED IN-HOUSE TRAINING</p><h2>ยังไม่แน่ใจว่าหลักสูตรไหน<br/>เหมาะกับทีมของคุณ?</h2></div><div><p>เล่าเป้าหมาย กลุ่มผู้เรียน และความท้าทายที่องค์กรกำลังเผชิญ ทีมงานจะช่วยแนะนำและปรับรูปแบบการเรียนรู้ให้เหมาะสม</p><Link className="button" href="/#contact">ปรึกษาทีมผู้เชี่ยวชาญ <Arrow/></Link></div></div></section>
    </main>
    <Footer />
  </>;
}
