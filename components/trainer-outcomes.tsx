"use client";

import { useRef, useState } from "react";
import { Activity, BookOpen, ClipboardCheck, Presentation, Spark, UserFocus, Users } from "./icons";

type Outcome = [title: string, text: string];

export function TrainerOutcomes({ outcomes }: { outcomes: Outcome[] }) {
  const [slide, setSlide] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    const next = (index + outcomes.length) % outcomes.length;
    setSlide(next);
    const item = railRef.current?.children[next] as HTMLElement | undefined;
    railRef.current?.scrollTo({ left: item?.offsetLeft ?? 0, behavior: "smooth" });
  };

  return <div className="trainer-outcomes-carousel">
    <div ref={railRef} className="trainer-outcome-grid" onScroll={(event) => {
      const rail = event.currentTarget;
      const width = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
      setSlide(Math.min(outcomes.length - 1, Math.max(0, Math.round(rail.scrollLeft / (width + 14)))));
    }}>
      {outcomes.map(([title, text], index) => {
        const icons = [Users, BookOpen, Spark, Activity, Presentation, UserFocus, ClipboardCheck];
        const Icon = icons[index];
        return <article key={title}>
        <div className="trainer-outcome-icon"><Icon/></div>
        <h3>{title}</h3><p>{text}</p>
      </article>;})}
    </div>
    <div className="trainer-outcome-controls" aria-label="ตัวควบคุมผลลัพธ์การเรียนรู้">
      <button type="button" onClick={() => goToSlide(slide - 1)} aria-label="ผลลัพธ์ก่อนหน้า">←</button>
      <div>{outcomes.map(([title], index) => <button className={slide === index ? "is-active" : ""} type="button" onClick={() => goToSlide(index)} aria-label={`ไปยังผลลัพธ์ที่ ${index + 1}: ${title}`} key={title}/>)}</div>
      <button type="button" onClick={() => goToSlide(slide + 1)} aria-label="ผลลัพธ์ถัดไป">→</button>
    </div>
  </div>;
}
