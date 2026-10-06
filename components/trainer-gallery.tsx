"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryImage = { src: string; alt: string };

export function TrainerGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const show = (index: number) => setActive((index + images.length) % images.length);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? null : (current - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActive((current) => current === null ? null : (current + 1) % images.length);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [active, images.length]);

  const goToSlide = (index: number) => {
    const next = (index + images.length) % images.length;
    setSlide(next);
    const item = railRef.current?.children[next] as HTMLElement | undefined;
    railRef.current?.scrollTo({ left: item?.offsetLeft ?? 0, behavior: "smooth" });
  };

  return <>
    <div className="trainer-gallery-carousel">
      <div ref={railRef} className="trainer-gallery-track" onScroll={(event) => {
        const rail = event.currentTarget;
        const width = rail.firstElementChild?.getBoundingClientRect().width ?? rail.clientWidth;
        setSlide(Math.min(images.length - 1, Math.max(0, Math.round(rail.scrollLeft / (width + 14)))));
      }}>
        {images.map((image, index) => <button className="trainer-gallery-item" type="button" onClick={() => show(index)} key={image.src} aria-label={`เปิดภาพ ${index + 1}: ${image.alt}`}>
          <Image src={image.src} fill sizes="(max-width: 767px) 86vw, (max-width: 1100px) 50vw, 33vw" alt={image.alt}/>
          <span aria-hidden="true">＋</span>
        </button>)}
      </div>
      <div className="trainer-gallery-controls" aria-label="ตัวควบคุมแกลเลอรี">
        <button type="button" onClick={() => goToSlide(slide - 1)} aria-label="ภาพก่อนหน้า">←</button>
        <div>{images.map((image, index) => <button className={slide === index ? "is-active" : ""} type="button" onClick={() => goToSlide(index)} aria-label={`ไปยังภาพที่ ${index + 1}`} key={image.src}/>)}</div>
        <button type="button" onClick={() => goToSlide(slide + 1)} aria-label="ภาพถัดไป">→</button>
      </div>
    </div>

    {active !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="ภาพบรรยากาศการอบรม" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}>
      <button ref={closeRef} className="gallery-lightbox-close" type="button" onClick={() => setActive(null)} aria-label="ปิดภาพ">×</button>
      <button className="gallery-lightbox-nav gallery-lightbox-nav--prev" type="button" onClick={() => show(active - 1)} aria-label="ภาพก่อนหน้า">←</button>
      <figure><div><Image src={images[active].src} fill priority sizes="96vw" alt={images[active].alt}/></div><figcaption><span>{images[active].alt}</span><small>{active + 1} / {images.length}</small></figcaption></figure>
      <button className="gallery-lightbox-nav gallery-lightbox-nav--next" type="button" onClick={() => show(active + 1)} aria-label="ภาพถัดไป">→</button>
    </div>}
  </>;
}
