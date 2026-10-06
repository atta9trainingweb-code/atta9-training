"use client";

import { useRef, useState } from "react";
import { Activity, BookOpen, Check, ClipboardCheck, Graduation, Spark, UserFocus } from "./icons";

type Module = { number: string; title: string; subtitle: string; topics: string[] };

export function TrainerCurriculum({ modules }: { modules: Module[] }) {
  const [slide, setSlide] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    const next = (index + modules.length) % modules.length;
    setSlide(next);
    const item = railRef.current?.children[next] as HTMLElement | undefined;
    railRef.current?.scrollTo({ left: item?.offsetLeft ?? 0, behavior: "smooth" });
  };

  return <div className="trainer-curriculum-carousel">
    <div ref={railRef} className="trainer-module-grid" onScroll={(event) => {
      const rail = event.currentTarget;
      const width = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
      setSlide(Math.min(modules.length - 1, Math.max(0, Math.round(rail.scrollLeft / (width + 14)))));
    }}>
      {modules.map((module, index) => {
        const icons = [Graduation, Spark, BookOpen, UserFocus, Activity, ClipboardCheck];
        const Icon = icons[index];
        return <article key={module.number}><div className="trainer-module-icon"><Icon/></div><p>{module.title}</p><h3>{module.subtitle}</h3><ul>{module.topics.map((topic) => <li key={topic}><Check/>{topic}</li>)}</ul></article>;
      })}
    </div>
    <div className="trainer-module-controls" aria-label="ตัวควบคุมหัวข้อการเรียนรู้">
      <button type="button" onClick={() => goToSlide(slide - 1)} aria-label="หัวข้อก่อนหน้า">←</button>
      <div>{modules.map((module, index) => <button className={slide === index ? "is-active" : ""} type="button" onClick={() => goToSlide(index)} aria-label={`ไปยังหัวข้อที่ ${index + 1}: ${module.subtitle}`} key={module.number}/>)}</div>
      <button type="button" onClick={() => goToSlide(slide + 1)} aria-label="หัวข้อถัดไป">→</button>
    </div>
  </div>;
}
