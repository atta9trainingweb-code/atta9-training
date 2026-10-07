export type PortfolioStatus = "draft" | "published";

export type PortfolioProject = {
  id: string;
  slug: string;
  status: PortfolioStatus;
  publishedAt: string;
  organization: string;
  shortName: string;
  course: string;
  category: string;
  logo: string;
  logoAlt: string;
  cover: string;
  coverPosition?: string;
  excerpt: string;
  overview: string;
  challenge: string;
  approach: string;
  learningGoals: string[];
  methods: string[];
  gallery: { src: string; alt: string }[];
};

type ImportedPortfolioInput = {
  postId: number;
  slug: string;
  publishedAt: string;
  organization: string;
  shortName: string;
  course: string;
  category: string;
  logoFile: string;
  focus: string;
};

type PortfolioNarrative = {
  overview: string;
  challenge: string;
  approach: string;
  learningGoals: string[];
  methods: string[];
};

const portfolioNarratives: Record<string, PortfolioNarrative> = {
  "การบริการ": {
    overview: "กระบวนการเรียนรู้ด้านการบริการที่เชื่อมกรอบคิด การสื่อสาร และการลงมือปฏิบัติ เพื่อให้ผู้เรียนมองเห็นผลของทุกจุดสัมผัสที่มีต่อประสบการณ์ของลูกค้า",
    challenge: "การบริการที่ดีต้องเกิดอย่างสม่ำเสมอ แม้ผู้รับบริการและสถานการณ์จะแตกต่างกัน ผู้เรียนจึงต้องเข้าใจทั้งความคาดหวัง อารมณ์ และวิธีตอบสนองอย่างเหมาะสม",
    approach: "ใช้กรณีศึกษา สถานการณ์จำลอง และการสะท้อนประสบการณ์จริง เพื่อให้ผู้เรียนทดลองตัดสินใจและเปลี่ยนหลักการบริการให้เป็นพฤติกรรมที่นำกลับไปใช้ได้",
    learningGoals: ["เข้าใจความคาดหวังและมุมมองของลูกค้า", "สื่อสารเชิงบริการอย่างชัดเจนและใส่ใจ", "รับมือสถานการณ์บริการด้วยทางเลือกที่เหมาะสม"],
    methods: ["Service Workshop", "Case Study", "Role Play", "Action Plan"],
  },
  "การสื่อสาร": {
    overview: "การเรียนรู้ที่ช่วยให้ผู้เรียนจัดระบบความคิด เลือกสาร และสื่อสารกับผู้ฟังได้ตรงวัตถุประสงค์ ทั้งในการทำงานร่วมกัน การนำเสนอ และการสร้างอิทธิพลเชิงบวก",
    challenge: "ความคลาดเคลื่อนมักเกิดเมื่อสารไม่ชัดหรือไม่ได้คำนึงถึงมุมมองของผู้รับ ผู้เรียนจึงต้องฝึกทั้งการคิดก่อนสื่อสาร การฟัง และการปรับวิธีนำเสนอให้เหมาะกับบริบท",
    approach: "ออกแบบให้ผู้เรียนวิเคราะห์สถานการณ์ ทดลองสื่อสารจริง และรับ Feedback เพื่อนำไปปรับทั้งโครงสร้างเนื้อหา น้ำเสียง และวิธีสร้างการมีส่วนร่วม",
    learningGoals: ["จัดโครงสร้างสารให้ชัดและเข้าใจง่าย", "ฟังและปรับการสื่อสารให้เหมาะกับผู้รับ", "ถ่ายทอดความคิดอย่างมั่นใจและน่าเชื่อถือ"],
    methods: ["Communication Lab", "Practice", "Peer Feedback", "Reflection"],
  },
  "ภาวะผู้นำ": {
    overview: "หลักสูตรพัฒนาผู้นำที่เชื่อมบทบาทของหัวหน้าเข้ากับการดูแลคน การสื่อสาร และการส่งต่อประสบการณ์ เพื่อช่วยให้ทีมเติบโตพร้อมกับผลลัพธ์ของงาน",
    challenge: "ผู้นำต้องเลือกบทบาทให้เหมาะกับทั้งคนและสถานการณ์ ตั้งแต่การให้ทิศทาง การโค้ช ไปจนถึงการเป็นพี่เลี้ยง โดยไม่ด่วนให้คำตอบแทนทีม",
    approach: "ฝึกผ่านบทสนทนา กรณีศึกษา และสถานการณ์จำลองจากการทำงาน เพื่อให้ผู้เรียนได้ทดลองใช้คำถาม การฟัง และ Feedback ในบทบาทผู้นำ",
    learningGoals: ["เลือกบทบาทผู้นำให้เหมาะกับสถานการณ์", "ใช้คำถามและการฟังเพื่อพัฒนาคน", "สร้างบทสนทนาที่นำไปสู่การลงมือทำ"],
    methods: ["Leadership Dialogue", "Role Play", "Coaching Practice", "Action Planning"],
  },
  "แรงบันดาลใจ": {
    overview: "กระบวนการเรียนรู้ที่ชวนผู้เรียนกลับมาเห็นคุณค่าของตนเอง เชื่อมเป้าหมายส่วนบุคคลกับงาน และค้นหาวิธีรักษาพลังในการก้าวผ่านความท้าทาย",
    challenge: "แรงขับเคลื่อนในการทำงานเปลี่ยนแปลงตามประสบการณ์และสภาพแวดล้อม ผู้เรียนจึงต้องเข้าใจแหล่งพลังของตนเองและมีวิธีกลับมาจัดการความคิดเมื่อเผชิญอุปสรรค",
    approach: "ใช้กิจกรรมสะท้อนตนเอง การแลกเปลี่ยนมุมมอง และการออกแบบแผนลงมือทำ เพื่อเปลี่ยนแรงบันดาลใจให้เป็นพฤติกรรมที่ดูแลต่อเนื่องได้",
    learningGoals: ["ค้นพบแรงขับเคลื่อนและคุณค่าที่สำคัญ", "ปรับมุมมองต่อความท้าทายอย่างสร้างสรรค์", "ออกแบบก้าวถัดไปที่ชัดและทำได้จริง"],
    methods: ["Self Reflection", "Group Dialogue", "Experiential Activity", "Action Plan"],
  },
  "พัฒนาวิทยากร": {
    overview: "หลักสูตรสำหรับผู้ถ่ายทอดความรู้ภายในองค์กร ให้สามารถเปลี่ยนความเชี่ยวชาญเป็นการเรียนรู้ที่มีโครงสร้าง เข้าใจง่าย และเปิดโอกาสให้ผู้เรียนมีส่วนร่วม",
    challenge: "ผู้สอนมีความรู้ในงาน แต่ต้องจัดลำดับเนื้อหา เลือกกิจกรรม และสื่อสารให้เหมาะกับผู้เรียนที่มีพื้นฐานต่างกันภายในเวลาที่กำหนด",
    approach: "ให้ผู้เรียนออกแบบช่วงการสอน ทดลองถ่ายทอดจริง และรับ Feedback แบบเจาะจง เพื่อเห็นจุดแข็งและจุดที่สามารถปรับใช้ได้ทันที",
    learningGoals: ["เปลี่ยนความเชี่ยวชาญเป็นบทเรียนที่มีโครงสร้าง", "ใช้กิจกรรมและคำถามสร้างการมีส่วนร่วม", "ถ่ายทอดอย่างมั่นใจและรับ Feedback ไปพัฒนา"],
    methods: ["Micro Teaching", "Lesson Design", "Practice Session", "Feedback"],
  },
  "บุคลิกภาพ": {
    overview: "การเรียนรู้ที่เชื่อมบุคลิกภาพ มารยาท และการสื่อสารเข้ากับความน่าเชื่อถือในบทบาทการทำงาน เพื่อให้ผู้เรียนเลือกปรับใช้ได้อย่างเป็นธรรมชาติ",
    challenge: "ภาพลักษณ์มืออาชีพเกิดจากรายละเอียดหลายด้าน ผู้เรียนจึงต้องเข้าใจหลักการและมองเห็นผลของการแต่งกาย ภาษากาย และการวางตัวในบริบทที่ต่างกัน",
    approach: "ผสานการสาธิต การวิเคราะห์ตัวอย่าง และกิจกรรมฝึกปฏิบัติ เพื่อให้ผู้เรียนได้สังเกต ทดลอง และรับคำแนะนำที่นำไปปรับกับบุคลิกของตนเอง",
    learningGoals: ["เสริมความมั่นใจในการปรากฏตัว", "ใช้ภาษากายและมารยาทให้เหมาะกับบทบาท", "ดูแลภาพลักษณ์อย่างเป็นมืออาชีพ"],
    methods: ["Demonstration", "Personal Practice", "Image Coaching", "Reflection"],
  },
};

function importedPortfolioProject(input: ImportedPortfolioInput): PortfolioProject {
  const narrative = portfolioNarratives[input.category];
  const base = `/images/portfolio/${input.slug}`;

  return {
    id: `portfolio-${input.postId}`,
    slug: input.slug,
    status: "published",
    publishedAt: input.publishedAt,
    organization: input.organization,
    shortName: input.shortName,
    course: input.course,
    category: input.category,
    logo: `${base}/${input.logoFile}`,
    logoAlt: `โลโก้ ${input.shortName}`,
    cover: `${base}/cover.webp`,
    excerpt: input.focus,
    overview: narrative.overview,
    challenge: narrative.challenge,
    approach: narrative.approach,
    learningGoals: narrative.learningGoals,
    methods: narrative.methods,
    gallery: Array.from({ length: 10 }, (_, index) => ({
      src: index === 0 ? `${base}/cover.webp` : `${base}/gallery-${String(index).padStart(2, "0")}.webp`,
      alt: `บรรยากาศการอบรมหลักสูตร ${input.course} ของ${input.organization} ภาพที่ ${index + 1}`,
    })),
  };
}

// Public content contract: this shape can be returned from Supabase/CMS later
// without changing the gallery list or portfolio detail components.
const featuredPortfolioProjects: PortfolioProject[] = [
  {
    id: "portfolio-vietjet-2023",
    slug: "thai-vietjet-air",
    status: "published",
    publishedAt: "2023-10-10",
    organization: "บริษัท ไทยเวียดเจ๊ทแอร์",
    shortName: "Thai VietJet Air",
    course: "Train the Professional Trainer",
    category: "พัฒนาวิทยากร",
    logo: "/images/customers/thai-vietjet.jpg",
    logoAlt: "โลโก้ Thai VietJet Air",
    cover: "/images/train-the-trainer/gallery-vietjet.webp",
    coverPosition: "center 38%",
    excerpt: "พัฒนาทักษะการถ่ายทอดและความมั่นใจของวิทยากรภายใน ผ่านการฝึกปฏิบัติและรับ Feedback ในห้องเรียน",
    overview: "หลักสูตรสำหรับผู้ที่ต้องถ่ายทอดความรู้ภายในองค์กร ให้สามารถเปลี่ยนเนื้อหาที่มีอยู่เป็นประสบการณ์เรียนรู้ที่เข้าใจง่าย มีส่วนร่วม และนำไปใช้ได้จริง",
    challenge: "ผู้สอนมีความรู้ในงานเป็นอย่างดี แต่ยังต้องการเครื่องมือจัดลำดับเนื้อหา สร้างบรรยากาศ และรับมือกับผู้เรียนที่มีพื้นฐานต่างกัน",
    approach: "ออกแบบให้ผู้เรียนสลับระหว่างการเรียนรู้หลักการ การดูตัวอย่าง และการทดลองสอนจริง พร้อมรับ Feedback ที่ชัดเจนเพื่อนำไปปรับทันที",
    learningGoals: ["วางโครงสร้างการสอนให้ชัดและจดจำง่าย", "ใช้กิจกรรมและคำถามสร้างการมีส่วนร่วม", "ถ่ายทอดอย่างมั่นใจและเป็นธรรมชาติ"],
    methods: ["Workshop", "Practice Session", "Peer Feedback", "Reflection"],
    gallery: [
      { src: "/images/train-the-trainer/gallery-vietjet.webp", alt: "ผู้เข้าอบรมไทยเวียดเจ๊ทแอร์ฝึกถ่ายทอดในชั้นเรียน" },
      { src: "/images/train-the-trainer/gallery-04.jpg", alt: "กิจกรรมฝึกทักษะวิทยากรภายในองค์กร" },
      { src: "/images/train-the-trainer/gallery-05.jpg", alt: "ผู้เรียนร่วมแลกเปลี่ยนระหว่างการฝึกสอน" },
      { src: "/images/train-the-trainer/gallery-06.jpg", alt: "บรรยากาศการฝึกนำเสนอและรับ Feedback" },
      { src: "/images/train-the-trainer/gallery-07.jpg", alt: "วิทยากรให้คำแนะนำกับผู้เข้าอบรม" },
      { src: "/images/train-the-trainer/gallery-08.jpg", alt: "ผู้เรียนลงมือฝึกสอนจากสถานการณ์จริง" },
    ],
  },
  {
    id: "portfolio-malee-2023",
    slug: "malee-group",
    status: "published",
    publishedAt: "2023-10-10",
    organization: "บริษัท ฟอร์ด มอเตอร์ คัมปะนี ประเทศไทย จำกัด",
    shortName: "Ford Motor Company Thailand",
    course: "Train the Professional Trainer",
    category: "พัฒนาวิทยากร",
    logo: "/images/customers/malee-group.png",
    logoAlt: "โลโก้ Malee Group",
    cover: "/images/train-the-trainer/gallery-09.jpg",
    excerpt: "เตรียมความพร้อมวิทยากรภายในให้ถ่ายทอดความเชี่ยวชาญขององค์กรได้อย่างเป็นระบบและชวนติดตาม",
    overview: "กระบวนการเรียนรู้ที่ช่วยให้ Subject Matter Expert ก้าวสู่บทบาทวิทยากรภายใน โดยรักษาความถูกต้องของเนื้อหาและเพิ่มวิธีการสอนที่เข้าถึงผู้เรียน",
    challenge: "เปลี่ยนความรู้เฉพาะทางและประสบการณ์ทำงานให้เป็นบทเรียนที่มีโครงสร้าง กระชับ และเหมาะกับผู้เรียนหลายกลุ่ม",
    approach: "ให้ผู้เรียนพัฒนาแผนการสอนของตนเอง ทดลองใช้เทคนิคเปิดชั้นเรียน อธิบายเนื้อหา และปิดการเรียนรู้ผ่านกิจกรรมแบบลงมือทำ",
    learningGoals: ["เปลี่ยนความเชี่ยวชาญเป็นบทเรียน", "ออกแบบแผนการสอนอย่างเป็นระบบ", "สร้างการมีส่วนร่วมตลอดคลาส"],
    methods: ["Micro Teaching", "Lesson Design", "Group Coaching", "Feedback"],
    gallery: [
      { src: "/images/train-the-trainer/gallery-09.jpg", alt: "ผู้เข้าอบรมฝึกกิจกรรมการสอนเป็นคู่" },
      { src: "/images/train-the-trainer/gallery-10.jpg", alt: "เวิร์กช็อปออกแบบแผนการสอน" },
      { src: "/images/train-the-trainer/gallery-11.jpg", alt: "ผู้เรียนทดลองถ่ายทอดต่อหน้าชั้น" },
      { src: "/images/train-the-trainer/gallery-12.jpg", alt: "การแลกเปลี่ยนความคิดเห็นในกลุ่ม" },
      { src: "/images/train-the-trainer/gallery-13.jpg", alt: "วิทยากรโค้ชผู้เรียนระหว่างการฝึก" },
      { src: "/images/train-the-trainer/gallery-14.jpg", alt: "ภาพรวมบรรยากาศหลักสูตร Train the Trainer" },
    ],
  },
  {
    id: "portfolio-bumrungrad-2023",
    slug: "bumrungrad-hospital",
    status: "published",
    publishedAt: "2023-10-10",
    organization: "บริษัท โรงพยาบาลบำรุงราษฎร์ จำกัด (มหาชน)",
    shortName: "Bumrungrad International Hospital",
    course: "Professional Facilitator",
    category: "พัฒนาวิทยากร",
    logo: "/images/customers/bumrungrad.png",
    logoAlt: "โลโก้ Bumrungrad International Hospital",
    cover: "/images/train-the-trainer/gallery-bumrungrad.webp",
    excerpt: "พัฒนาผู้นำกระบวนการเรียนรู้ให้ตั้งคำถาม รับฟัง และพากลุ่มตกผลึกเป็นข้อสรุปร่วมกัน",
    overview: "หลักสูตรที่เน้นบทบาทของ Facilitator ในการสร้างพื้นที่ปลอดภัย ชวนทุกคนมีส่วนร่วม และทำให้การสนทนานำไปสู่การเรียนรู้ร่วมกัน",
    challenge: "การนำวงสนทนาต้องรักษาสมดุลระหว่างเป้าหมาย เวลา และความคิดเห็นที่หลากหลาย โดยไม่รีบด่วนสรุปแทนผู้เรียน",
    approach: "ฝึกผ่านสถานการณ์จำลอง ตั้งแต่การเปิดวง ใช้คำถาม สังเกตพลังของกลุ่ม ไปจนถึงการสรุปประเด็นและเชื่อมสู่การทำงาน",
    learningGoals: ["ตั้งคำถามที่เปิดการคิด", "จัดการพลังและการมีส่วนร่วมของกลุ่ม", "ตกผลึกบทเรียนอย่างเป็นกลาง"],
    methods: ["Facilitation Lab", "Role Play", "Case Practice", "Debrief"],
    gallery: [
      { src: "/images/train-the-trainer/gallery-bumrungrad.webp", alt: "วิทยากรสาธิตกิจกรรมกับผู้เรียนโรงพยาบาลบำรุงราษฎร์" },
      { src: "/images/train-the-trainer/gallery-bumrungrad-2.webp", alt: "ผู้เข้าอบรมฝึกนำกระบวนการกลุ่ม" },
      { src: "/images/professional-facilitator/gallery-01.jpg", alt: "กิจกรรมเรียนรู้บทบาท Facilitator" },
      { src: "/images/professional-facilitator/gallery-02.jpg", alt: "ผู้เรียนร่วมสร้างสื่อสำหรับกิจกรรมกลุ่ม" },
      { src: "/images/professional-facilitator/gallery-03.jpg", alt: "การฝึกตั้งคำถามและรับฟัง" },
      { src: "/images/professional-facilitator/gallery-04.jpg", alt: "บรรยากาศการสรุปบทเรียนร่วมกัน" },
    ],
  },
  {
    id: "portfolio-thai-airways-2023",
    slug: "thai-airways",
    status: "published",
    publishedAt: "2023-10-10",
    organization: "บริษัท การบินไทย จำกัด (มหาชน)",
    shortName: "Thai Airways",
    course: "Train the Facilitative Trainer",
    category: "พัฒนาวิทยากร",
    logo: "/images/customers/thai-airways-portfolio.jpg",
    logoAlt: "โลโก้ Thai Airways",
    cover: "/images/professional-facilitator/gallery-05.jpg",
    excerpt: "เสริมทักษะวิทยากรกระบวนการ ให้เชื่อมประสบการณ์ของผู้เรียนกับเนื้อหาและสร้างบทเรียนร่วมกัน",
    overview: "การพัฒนาวิทยากรที่ไม่ได้หยุดแค่การบรรยาย แต่สามารถออกแบบวงสนทนาและกิจกรรมเพื่อให้ผู้เรียนค้นพบคำตอบด้วยตนเอง",
    challenge: "ผู้เรียนมีประสบการณ์หลากหลาย จึงต้องใช้กระบวนการที่เปิดพื้นที่ให้ทุกเสียงมีคุณค่าและยังพากลุ่มไปถึงเป้าหมายในเวลาที่กำหนด",
    approach: "จำลองวงเรียนรู้จริง ฝึกใช้คำถาม การฟัง การสะท้อน และเครื่องมือสรุปประเด็น โดยมี Feedback หลังการฝึกแต่ละรอบ",
    learningGoals: ["นำวงเรียนรู้อย่างมั่นใจ", "ฟังและสะท้อนประเด็นอย่างแม่นยำ", "เชื่อมกิจกรรมกับเป้าหมายของหลักสูตร"],
    methods: ["Simulation", "Questioning Practice", "Peer Learning", "Facilitator Feedback"],
    gallery: [
      { src: "/images/professional-facilitator/gallery-05.jpg", alt: "วิทยากรพูดคุยกับผู้เข้าอบรมในกิจกรรมกลุ่ม" },
      { src: "/images/professional-facilitator/gallery-06.jpg", alt: "ผู้เรียนฝึกนำวงสนทนา" },
      { src: "/images/professional-facilitator/gallery-07.jpg", alt: "การแลกเปลี่ยนความคิดเห็นระหว่างกลุ่ม" },
      { src: "/images/professional-facilitator/gallery-08.jpg", alt: "Workshop การเป็นวิทยากรกระบวนการ" },
      { src: "/images/professional-facilitator/gallery-09.jpg", alt: "ผู้เรียนฝึกสรุปและสะท้อนบทเรียน" },
      { src: "/images/professional-facilitator/gallery-10.jpg", alt: "บรรยากาศการเรียนรู้แบบมีส่วนร่วม" },
    ],
  },
  {
    id: "portfolio-caat-2023",
    slug: "caat",
    status: "published",
    publishedAt: "2023-10-10",
    organization: "บริษัท ชิเซโด้ ไทยแลนด์ จำกัด",
    shortName: "Shiseido Thailand",
    course: "Supervisory Mind in Action",
    category: "ภาวะผู้นำ",
    logo: "/images/customers/caat.jpg",
    logoAlt: "โลโก้สำนักงานการบินพลเรือนแห่งประเทศไทย",
    cover: "/images/inspiring-coach/gallery-06.jpg",
    excerpt: "พัฒนากรอบคิดและทักษะของหัวหน้างาน ให้บริหารทั้งงานและคนได้อย่างเข้าใจบริบทของทีม",
    overview: "หลักสูตรสำหรับหัวหน้างานที่ต้องเปลี่ยนจากผู้ปฏิบัติที่เชี่ยวชาญ สู่ผู้นำที่มอบหมาย สื่อสาร และพัฒนาศักยภาพของทีมได้",
    challenge: "หัวหน้างานต้องรับผิดชอบผลลัพธ์พร้อมกับดูแลคน จึงต้องเลือกบทบาทและวิธีสื่อสารให้เหมาะกับสถานการณ์ที่แตกต่างกัน",
    approach: "ใช้กรณีศึกษาและบทสนทนาจากสถานการณ์ของหัวหน้างาน ฝึกวิเคราะห์ปัญหา ตั้งคำถาม และออกแบบการพูดคุยกับทีม",
    learningGoals: ["เข้าใจบทบาทหัวหน้างานยุคใหม่", "สื่อสารความคาดหวังอย่างชัดเจน", "พัฒนาคนผ่านคำถามและ Feedback"],
    methods: ["Case Study", "Leadership Dialogue", "Role Play", "Action Planning"],
    gallery: [
      { src: "/images/inspiring-coach/gallery-06.jpg", alt: "วิทยากรถ่ายทอดแนวคิดการเป็นหัวหน้างาน" },
      { src: "/images/inspiring-coach/gallery-03.jpg", alt: "ผู้เรียนทำกิจกรรมพัฒนาภาวะผู้นำ" },
      { src: "/images/inspiring-coach/gallery-04.jpg", alt: "การฝึกสนทนาเพื่อพัฒนาทีม" },
      { src: "/images/inspiring-coach/gallery-08.jpg", alt: "ผู้เข้าอบรมแลกเปลี่ยนกรณีศึกษา" },
      { src: "/images/inspiring-coach/gallery-10.jpg", alt: "วิทยากรพูดคุยกับกลุ่มผู้บริหาร" },
      { src: "/images/inspiring-coach/gallery-11.jpg", alt: "บรรยากาศการเรียนรู้ด้านภาวะผู้นำ" },
    ],
  },
  {
    id: "portfolio-aia-2023",
    slug: "aia-thailand",
    status: "published",
    publishedAt: "2023-10-10",
    organization: "บริษัท เอไอเอ จำกัด",
    shortName: "AIA Thailand",
    course: "Smart Personality for Professional Image",
    category: "บุคลิกภาพ",
    logo: "/images/customers/aia.jpg",
    logoAlt: "โลโก้ AIA",
    cover: "/images/smart-personality-for-professional-image/gallery-01.jpg",
    excerpt: "สร้างความมั่นใจผ่านบุคลิกภาพ การวางตัว และรายละเอียดที่ช่วยสะท้อนภาพลักษณ์มืออาชีพขององค์กร",
    overview: "การเรียนรู้ที่เชื่อมภาพลักษณ์ส่วนบุคคลกับความน่าเชื่อถือในบทบาทการทำงาน ตั้งแต่การแต่งกาย ภาษากาย ไปจนถึงการสื่อสารกับผู้อื่น",
    challenge: "ภาพลักษณ์มืออาชีพเกิดจากรายละเอียดหลายด้าน ผู้เรียนจึงต้องเข้าใจหลักการและได้ทดลองปรับใช้กับบุคลิกของตนเอง",
    approach: "ผสานการสาธิต การวิเคราะห์ตัวอย่าง และกิจกรรมฝึกปฏิบัติ เพื่อให้ผู้เรียนเห็นความเปลี่ยนแปลงและเลือกใช้ได้อย่างเหมาะสม",
    learningGoals: ["เสริมความมั่นใจในการปรากฏตัว", "ใช้ภาษากายให้สอดคล้องกับบทบาท", "ดูแลภาพลักษณ์อย่างเหมาะสมกับบริบท"],
    methods: ["Demonstration", "Personal Practice", "Image Coaching", "Reflection"],
    gallery: [
      { src: "/images/smart-personality-for-professional-image/gallery-01.jpg", alt: "วิทยากรถ่ายทอดเรื่องการแต่งกายมืออาชีพ" },
      { src: "/images/smart-personality-for-professional-image/gallery-02.jpg", alt: "กิจกรรมวิเคราะห์ภาพลักษณ์" },
      { src: "/images/smart-personality-for-professional-image/gallery-03.jpg", alt: "ผู้เรียนฝึกบุคลิกภาพในห้องอบรม" },
      { src: "/images/smart-personality-for-professional-image/gallery-04.jpg", alt: "การสาธิตภาษากายเพื่อความน่าเชื่อถือ" },
      { src: "/images/smart-personality-for-professional-image/gallery-05.jpg", alt: "บรรยากาศ Workshop บุคลิกภาพ" },
      { src: "/images/smart-personality-for-professional-image/gallery-06.webp", alt: "ผู้เรียนลงมือฝึกและรับคำแนะนำ" },
    ],
  },
];

const importedPortfolioProjects: PortfolioProject[] = [
  importedPortfolioProject({
    postId: 1019,
    slug: "gulf-energy",
    publishedAt: "2023-10-10",
    organization: "บริษัท กัลฟ์ เอ็นเนอร์จี ดีเวลลอปเม้นท์ จำกัด (มหาชน)",
    shortName: "Gulf Energy",
    course: "Smart Personality & Business Etiquette for Professional Image",
    category: "บุคลิกภาพ",
    logoFile: "logo.jpg",
    focus: "เสริมภาพลักษณ์ มารยาทธุรกิจ และความมั่นใจ เพื่อสะท้อนความเป็นมืออาชีพในทุกสถานการณ์การทำงาน",
  }),
  importedPortfolioProject({
    postId: 993,
    slug: "jaspal",
    publishedAt: "2023-10-10",
    organization: "บริษัท ยัสปาล จำกัด",
    shortName: "JASPAL",
    course: "Service Mind in Action",
    category: "การบริการ",
    logoFile: "logo.png",
    focus: "พัฒนากรอบคิดและพฤติกรรมบริการ ให้ผู้เรียนเปลี่ยนความใส่ใจเป็นประสบการณ์ที่ดีของลูกค้า",
  }),
  importedPortfolioProject({
    postId: 980,
    slug: "bangkok-university",
    publishedAt: "2023-10-10",
    organization: "มหาวิทยาลัยกรุงเทพ",
    shortName: "Bangkok University",
    course: "Service Mind and Positive Thinking",
    category: "การบริการ",
    logoFile: "logo.png",
    focus: "เชื่อมทัศนคติเชิงบวกกับการดูแลผู้รับบริการ เพื่อสร้างการสื่อสารที่ใส่ใจและตอบสนองอย่างเหมาะสม",
  }),
  importedPortfolioProject({
    postId: 967,
    slug: "thai-credit-bank",
    publishedAt: "2023-10-10",
    organization: "ธนาคารไทยเครดิต (เพื่อรายย่อย) จำกัด (มหาชน)",
    shortName: "Thai Credit Bank",
    course: "Service Excellence with Team Spirit",
    category: "การบริการ",
    logoFile: "logo.png",
    focus: "ยกระดับการบริการควบคู่กับพลังการทำงานเป็นทีม เพื่อส่งต่อประสบการณ์ที่สม่ำเสมอให้ลูกค้า",
  }),
  importedPortfolioProject({
    postId: 941,
    slug: "ocean-life-service",
    publishedAt: "2023-10-10",
    organization: "บริษัท ไทยสมุทรประกันชีวิต จำกัด (มหาชน)",
    shortName: "Ocean Life Thai Samut",
    course: "Service Beyond Expectation",
    category: "การบริการ",
    logoFile: "logo.png",
    focus: "มองหาโอกาสส่งมอบบริการเหนือความคาดหวัง ผ่านการเข้าใจลูกค้าและใส่ใจในรายละเอียดของทุกจุดสัมผัส",
  }),
  importedPortfolioProject({
    postId: 918,
    slug: "uob-thailand",
    publishedAt: "2023-10-10",
    organization: "ธนาคาร ยูโอบี จำกัด (มหาชน)",
    shortName: "UOB Thailand",
    course: "Persuasive & Powerful Presentation",
    category: "การสื่อสาร",
    logoFile: "logo.png",
    focus: "พัฒนาการนำเสนอให้มีโครงสร้าง ชัดเจน และสร้างความเชื่อมั่น เพื่อพาผู้ฟังไปสู่สารสำคัญและการตัดสินใจ",
  }),
  importedPortfolioProject({
    postId: 905,
    slug: "bangkok-bank-presentation",
    publishedAt: "2023-10-10",
    organization: "ธนาคารกรุงเทพ จำกัด (มหาชน)",
    shortName: "Bangkok Bank",
    course: "Persuasive & Powerful Presentation",
    category: "การสื่อสาร",
    logoFile: "logo.jpg",
    focus: "จัดระบบความคิดและถ่ายทอดสารอย่างทรงพลัง ให้การนำเสนอชัด ชวนติดตาม และตอบโจทย์ผู้ฟัง",
  }),
  importedPortfolioProject({
    postId: 892,
    slug: "bridgestone-thailand",
    publishedAt: "2023-10-10",
    organization: "บริษัท ไทยบริดจสโตน จำกัด",
    shortName: "Bridgestone Thailand",
    course: "Persuasive & Powerful Presentation",
    category: "การสื่อสาร",
    logoFile: "logo.jpg",
    focus: "ฝึกนำเสนออย่างเป็นระบบและน่าเชื่อถือ ตั้งแต่การวิเคราะห์ผู้ฟังไปจนถึงการส่งสารด้วยความมั่นใจ",
  }),
  importedPortfolioProject({
    postId: 850,
    slug: "aia-storytelling",
    publishedAt: "2023-10-10",
    organization: "บริษัท เอไอเอ จำกัด",
    shortName: "AIA Thailand",
    course: "Persuasive & Powerful Storytelling for Leaders",
    category: "การสื่อสาร",
    logoFile: "logo.jpg",
    focus: "ถ่ายทอดเรื่องราวของผู้นำให้ชัด ชวนติดตาม และเชื่อมสารสำคัญเข้ากับแรงขับเคลื่อนของทีม",
  }),
  importedPortfolioProject({
    postId: 818,
    slug: "thanulux",
    publishedAt: "2023-10-10",
    organization: "บริษัท ธนูลักษณ์ จำกัด (มหาชน)",
    shortName: "Thanulux",
    course: "Leader as Success Coach",
    category: "ภาวะผู้นำ",
    logoFile: "logo.jpg",
    focus: "พัฒนาบทบาทผู้นำในฐานะโค้ช ใช้คำถาม การฟัง และ Feedback เพื่อช่วยให้ทีมก้าวสู่ความสำเร็จ",
  }),
  importedPortfolioProject({
    postId: 802,
    slug: "gcme",
    publishedAt: "2023-10-10",
    organization: "บริษัท จีซี เมนเทนแนนซ์ แอนด์ เอนจิเนียริง จำกัด GCME",
    shortName: "GCME",
    course: "Idol Mentor",
    category: "ภาวะผู้นำ",
    logoFile: "logo.png",
    focus: "พัฒนาทักษะ Mentor เพื่อส่งต่อประสบการณ์ สร้างความไว้วางใจ และสนับสนุนการเติบโตของคนในทีม",
  }),
  importedPortfolioProject({
    postId: 789,
    slug: "king-power",
    publishedAt: "2023-10-10",
    organization: "บริษัท คิง เพาเวอร์ อินเตอร์ เนชั่นแนล จำกัด",
    shortName: "King Power",
    course: "Idol Mentor",
    category: "ภาวะผู้นำ",
    logoFile: "logo.jpg",
    focus: "สร้าง Mentor ที่เป็นแบบอย่างและถ่ายทอดประสบการณ์ได้อย่างเข้าใจ เพื่อช่วยให้คนรุ่นถัดไปเรียนรู้และเติบโต",
  }),
  importedPortfolioProject({
    postId: 771,
    slug: "univentures",
    publishedAt: "2023-10-09",
    organization: "บริษัท ยูนิเวนเจอร์ จำกัด (มหาชน)",
    shortName: "Univentures",
    course: "Customer Focus Service Expert",
    category: "การบริการ",
    logoFile: "logo.png",
    focus: "เข้าใจลูกค้าเชิงลึกและพัฒนามุมมองแบบ Service Expert เพื่อออกแบบการตอบสนองที่ตรงกับความต้องการจริง",
  }),
  importedPortfolioProject({
    postId: 750,
    slug: "noble-development",
    publishedAt: "2023-10-09",
    organization: "บริษัท โนเบิล ดีเวลลอปเม้นท์ จำกัด (มหาชน)",
    shortName: "Noble Development",
    course: "Communication Skills for Efficiency and Collaboration",
    category: "การสื่อสาร",
    logoFile: "logo.jpg",
    focus: "สื่อสารในงานอย่างชัดเจน ลดความคลาดเคลื่อน และเลือกวิธีประสานงานให้เหมาะกับเป้าหมายและผู้รับสาร",
  }),
  importedPortfolioProject({
    postId: 734,
    slug: "krungsri-auto",
    publishedAt: "2023-10-09",
    organization: "บริษัท อยุธยา แคปปิตอล ออโต้ลีส จำกัด (มหาชน)",
    shortName: "Krungsri Auto",
    course: "Collaborative Communication",
    category: "การสื่อสาร",
    logoFile: "logo.jpg",
    focus: "สื่อสารเชิงร่วมมือ เปิดรับมุมมองที่แตกต่าง และสร้างบทสนทนาที่พาทีมไปสู่ทางออกร่วมกัน",
  }),
  importedPortfolioProject({
    postId: 710,
    slug: "wha-industrial",
    publishedAt: "2023-10-09",
    organization: "บริษัท ดับบลิวเอชเอ อินดัสเตรียล ดีเวลลอปเม้นท์ จำกัด (มหาชน)",
    shortName: "WHA Industrial Development",
    course: "Boost Up Your Inspiration for Success",
    category: "แรงบันดาลใจ",
    logoFile: "logo.png",
    focus: "ปลุกพลังและแรงบันดาลใจ เพื่อเชื่อมเป้าหมายส่วนบุคคลเข้ากับความสำเร็จในการทำงาน",
  }),
  importedPortfolioProject({
    postId: 693,
    slug: "thai-life-insurance",
    publishedAt: "2023-10-09",
    organization: "บริษัท ไทยประกันชีวิต จำกัด (มหาชน)",
    shortName: "Thai Life Insurance",
    course: "Boost Up Self-Inspiration",
    category: "แรงบันดาลใจ",
    logoFile: "logo.jpg",
    focus: "สร้างแรงบันดาลใจจากภายใน ปรับมุมมองต่อความท้าทาย และรักษาพลังในการเดินหน้าสู่เป้าหมาย",
  }),
  importedPortfolioProject({
    postId: 678,
    slug: "gosoft-thailand",
    publishedAt: "2023-10-09",
    organization: "บริษัท โกซอฟท์ (ประเทศไทย) จำกัด",
    shortName: "Gosoft Thailand",
    course: "Train the Professional Trainer",
    category: "พัฒนาวิทยากร",
    logoFile: "logo.jpg",
    focus: "เปลี่ยนผู้เชี่ยวชาญภายในให้ถ่ายทอดความรู้ได้อย่างเป็นระบบ ผ่านการออกแบบบทเรียนและทดลองสอนจริง",
  }),
  importedPortfolioProject({
    postId: 654,
    slug: "ministry-of-commerce",
    publishedAt: "2023-10-09",
    organization: "กระทรวงพาณิชย์ สถาบันกรมพระจันทบุรีนฤนาถ",
    shortName: "สถาบันกรมพระจันทบุรีนฤนาถ",
    course: "Smart Personality for Professional Image",
    category: "บุคลิกภาพ",
    logoFile: "logo.jpg",
    focus: "เสริมบุคลิกภาพและภาพลักษณ์มืออาชีพ ตั้งแต่การวางตัว ภาษากาย ไปจนถึงรายละเอียดที่เหมาะกับบทบาท",
  }),
  importedPortfolioProject({
    postId: 584,
    slug: "ocean-life-communication",
    publishedAt: "2023-10-09",
    organization: "บริษัท ไทยสมุทรประกันชีวิต จำกัด (มหาชน)",
    shortName: "Ocean Life Thai Samut",
    course: "Professional Communication",
    category: "การสื่อสาร",
    logoFile: "logo.png",
    focus: "สื่อสารอย่างมืออาชีพ ชัดเจน และเหมาะกับผู้รับสาร เพื่อสร้างความเข้าใจและความร่วมมือในการทำงาน",
  }),
];

export const portfolioProjects: PortfolioProject[] = [...featuredPortfolioProjects, ...importedPortfolioProjects];

export const getPublishedPortfolio = () => portfolioProjects.filter((project) => project.status === "published");

export const getPortfolioBySlug = (slug: string) => getPublishedPortfolio().find((project) => project.slug === slug);
