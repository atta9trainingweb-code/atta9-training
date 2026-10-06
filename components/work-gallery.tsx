"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PortfolioProject } from "@/lib/portfolio";

export function WorkGallery({ projects }: { projects: PortfolioProject[] }) {
  const categories = ["ทั้งหมด", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [category, setCategory] = useState("ทั้งหมด");
  const visibleProjects = useMemo(
    () => category === "ทั้งหมด" ? projects : projects.filter((project) => project.category === category),
    [category, projects],
  );

  return <>
    <div className="work-gallery-toolbar">
      <div className="work-gallery-filters" aria-label="กรองผลงานตามประเภทหลักสูตร">
        {categories.map((item) => <button
          className={category === item ? "is-active" : ""}
          type="button"
          aria-pressed={category === item}
          onClick={() => setCategory(item)}
          key={item}
        >{item}</button>)}
      </div>
      <p aria-live="polite"><strong>{visibleProjects.length}</strong> ผลงาน</p>
    </div>

    <div className="portfolio-card-grid">
      {visibleProjects.map((project) => <Link
        className="portfolio-card"
        href={`/gallery/${project.slug}`}
        aria-label={`ดูผลงานการอบรม ${project.organization}: ${project.course}`}
        key={project.id}
      >
        <span className="portfolio-card-media">
          <Image src={project.cover} fill sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: project.coverPosition }} alt={`บรรยากาศการอบรมของ${project.organization}`} />
          <span className="portfolio-card-category">{project.category}</span>
        </span>
        <span className="portfolio-card-body">
          <small>{project.course}</small>
          <strong>{project.organization}</strong>
          <span>ดูรายละเอียดผลงาน <b aria-hidden="true">→</b></span>
        </span>
      </Link>)}
    </div>
  </>;
}
