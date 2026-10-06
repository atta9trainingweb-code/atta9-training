"use client";

import Image from "next/image";
import { useRef } from "react";
import { Arrow } from "./icons";

const customers = [
  { name: "Bangkok Bank", src: "/images/customers/bangkok-bank.webp", className: "customer-logo--square" },
  { name: "Toyota", src: "/images/customers/toyota.webp" },
  { name: "PTTEP", src: "/images/customers/pttep.webp", className: "customer-logo--square" },
  { name: "True", src: "/images/customers/true.webp" },
  { name: "Kasikornbank", src: "/images/customers/kbank.webp" },
  { name: "Thai Airways", src: "/images/customers/thai-airways.webp" },
  { name: "Makro", src: "/images/customers/makro.webp" },
  { name: "BITEC", src: "/images/customers/bitec.webp" },
  { name: "Thairath TV", src: "/images/customers/thairath-tv.webp" },
  { name: "การไฟฟ้านครหลวง", src: "/images/customers/mep.webp", className: "customer-logo--square" },
];

export function CustomerLogos() {
  const trackRef = useRef<HTMLDivElement>(null);

  function showMore() {
    const track = trackRef.current;
    if (!track) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: Math.max(280, track.clientWidth * 0.72), behavior: reducedMotion ? "auto" : "smooth" });
  }

  return <div className="trust-panel">
    <div className="trust-copy"><small>องค์กรที่ไว้วางใจเรา</small><strong>ร่วมพัฒนาคนและทีม</strong></div>
    <div ref={trackRef} className="customer-logo-track" tabIndex={0} role="region" aria-label="รายชื่อองค์กรลูกค้าของ ATTA9">
      {customers.map((customer) => <div className={`customer-logo ${customer.className ?? ""}`} key={customer.name}>
        <Image src={customer.src} fill sizes="120px" alt={customer.name} />
      </div>)}
    </div>
    <button className="customer-logo-next" type="button" onClick={showMore} aria-label="ดูโลโก้องค์กรถัดไป"><Arrow /></button>
  </div>;
}
