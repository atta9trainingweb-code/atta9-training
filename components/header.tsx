"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "./icons";

const links = [
  ["In-house Training", "/#process"], ["โซลูชันองค์กร", "/#why"],
  ["ผลงานของเรา", "/gallery"], ["เกี่ยวกับวิทยากร", "/trainer-profile"], ["ติดต่อเรา", "/#contact"],
];

export function Header() {
  const pathname = usePathname();
  const imageHeroPage = pathname === "/" || pathname.startsWith("/gallery") || pathname === "/training-program" || pathname === "/trainer-profile" || pathname === "/train-the-professional-trainer" || pathname === "/professional-facilitator" || pathname === "/persuasive-powerful-presentation" || pathname === "/impact-performance-feedback" || pathname === "/effective-complaint-handling" || pathname === "/service-mind-in-action" || pathname === "/smart-personality-for-professional-image" || pathname === "/persuasive-and-powerful-story-telling-for-leaders" || pathname === "/communication-skill-for-efficiency" || pathname === "/leader-as-an-inspiring-coach";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const prev = document.body.style.overflow; document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const items = Array.from(document.querySelectorAll<HTMLElement>("#mobile-menu button, #mobile-menu a"));
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", key);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", key); trigger?.focus(); };
  }, [open]);

  const solid = scrolled || !imageHeroPage;

  return <header className={`site-header ${solid ? "site-header--scrolled" : ""}`}>
    <div className="container header-inner">
      <Link className="brand" href="/" aria-label="ATTA9 Training หน้าหลัก"><Image src="/images/atta9-logo-header-footer-v3.png" width={510} height={263} priority alt="ATTA9 Training" /></Link>
      <nav className="desktop-nav" aria-label="เมนูหลัก"><div className="nav-group"><Link className={pathname === "/training-program" || pathname.includes("persuasive-powerful-presentation") || pathname.includes("impact-performance-feedback") || pathname.includes("effective-complaint-handling") || pathname.includes("service-mind-in-action") || pathname.includes("smart-personality") || pathname.includes("story-telling") || pathname.includes("professional-trainer") || pathname.includes("professional-facilitator") || pathname.includes("communication-skill") || pathname.includes("inspiring-coach") ? "is-active" : ""} href="/training-program">หลักสูตรฝึกอบรม <span className="nav-caret" aria-hidden="true">⌄</span></Link><div className="nav-dropdown"><p>TRAINING PROGRAMS</p><Link href="/train-the-professional-trainer"><span>Train the Professional Trainer</span><small>พัฒนาวิทยากรภายในองค์กร</small></Link><Link href="/professional-facilitator"><span>Professional Facilitator</span><small>นำกระบวนการและตกผลึกการเรียนรู้</small></Link><Link href="/persuasive-powerful-presentation"><span>Persuasive &amp; Powerful Presentation</span><small>นำเสนอชัดเจนและโน้มน้าวใจ</small></Link><Link href="/impact-performance-feedback"><span>Impact Performance Feedback</span><small>เปลี่ยน Feedback ให้เกิดการพัฒนา</small></Link><Link href="/effective-complaint-handling"><span>Effective Complaint Handling</span><small>เปลี่ยนข้อร้องเรียนให้เป็นความเชื่อมั่น</small></Link><Link href="/service-mind-in-action"><span>Service Mind in Action</span><small>เปลี่ยนความใส่ใจให้ลูกค้าสัมผัสได้</small></Link><Link href="/smart-personality-for-professional-image"><span>Smart Personality</span><small>สร้างบุคลิกและภาพลักษณ์มืออาชีพ</small></Link><Link href="/persuasive-and-powerful-story-telling-for-leaders"><span>Storytelling for Leaders</span><small>เล่าเรื่องเพื่อขับเคลื่อนทีม</small></Link><Link href="/communication-skill-for-efficiency"><span>Communication Skills for Efficiency and Collaboration</span><small>สื่อสารชัดเจนและประสานงานอย่างมีประสิทธิภาพ</small></Link><Link href="/leader-as-an-inspiring-coach"><span>Leader as an Inspiring Coach</span><small>เปลี่ยนหัวหน้าให้เป็นโค้ชที่ปลุกศักยภาพทีม</small></Link></div></div>{links.map(([label, href]) => <Link className={pathname === href || (href === "/gallery" && pathname.startsWith("/gallery/")) ? "is-active" : ""} href={href} key={label}>{label}</Link>)}</nav>
      <div className="header-actions">
        <a className="phone-link" href="tel:0897896591"><Phone width={17}/><span>089-789-6591</span></a>
        <Link className="button button--small" href="/#contact">ปรึกษาหลักสูตร</Link>
      </div>
      <button ref={triggerRef} className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-menu" aria-label="เปิดเมนู"><span/><span/><span/></button>
    </div>
    {open && <div className="menu-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
      <nav id="mobile-menu" className="mobile-menu" aria-label="เมนูมือถือ" aria-modal="true" role="dialog">
        <div className="mobile-menu-head"><Image className="mobile-brand-logo" src="/images/atta9-logo-header-footer-v3.png" width={510} height={263} alt="ATTA9 Training"/><button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="ปิดเมนู">×</button></div>
        <div className="mobile-course-group"><Link href="/training-program" onClick={() => setOpen(false)}>หลักสูตรฝึกอบรม<span>↗</span></Link><Link href="/train-the-professional-trainer" onClick={() => setOpen(false)}>Train the Professional Trainer</Link><Link href="/professional-facilitator" onClick={() => setOpen(false)}>Professional Facilitator</Link><Link href="/persuasive-powerful-presentation" onClick={() => setOpen(false)}>Persuasive &amp; Powerful Presentation</Link><Link href="/impact-performance-feedback" onClick={() => setOpen(false)}>Impact Performance Feedback</Link><Link href="/effective-complaint-handling" onClick={() => setOpen(false)}>Effective Complaint Handling</Link><Link href="/service-mind-in-action" onClick={() => setOpen(false)}>Service Mind in Action</Link><Link href="/smart-personality-for-professional-image" onClick={() => setOpen(false)}>Smart Personality for Professional Image</Link><Link href="/persuasive-and-powerful-story-telling-for-leaders" onClick={() => setOpen(false)}>Storytelling for Leaders</Link><Link href="/communication-skill-for-efficiency" onClick={() => setOpen(false)}>Communication Skills for Efficiency and Collaboration</Link><Link href="/leader-as-an-inspiring-coach" onClick={() => setOpen(false)}>Leader as an Inspiring Coach</Link></div>
        {links.map(([label, href]) => <Link href={href} key={label} onClick={() => setOpen(false)}>{label}<span>↗</span></Link>)}
        <Link className="button" href="/#contact" onClick={() => setOpen(false)}>ปรึกษาหลักสูตร</Link>
      </nav>
    </div>}
  </header>;
}
