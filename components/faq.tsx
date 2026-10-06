"use client";

import { useState } from "react";

export function FaqList({ items }: { items: string[][] }) {
  const [open, setOpen] = useState(0);
  return <div className="faq-list">{items.map(([q, a], index) => <div className={`faq-item ${open === index ? "is-open" : ""}`} key={q}>
    <button type="button" aria-expanded={open === index} aria-controls={`faq-${index}`} onClick={() => setOpen(open === index ? -1 : index)}><span>{q}</span><i aria-hidden="true">{open === index ? "−" : "+"}</i></button>
    <div id={`faq-${index}`} className="faq-answer" hidden={open !== index}><p>{a}</p></div>
  </div>)}</div>;
}
