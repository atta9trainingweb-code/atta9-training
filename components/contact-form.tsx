"use client";

import { FormEvent, useRef, useState } from "react";

type Errors = Partial<Record<"name" | "company" | "email" | "phone" | "topic" | "consent", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); const form = e.currentTarget; const fd = new FormData(form); const next: Errors = {};
    if (!fd.get("name")) next.name = "กรุณาระบุชื่อ–นามสกุล";
    if (!fd.get("company")) next.company = "กรุณาระบุชื่อองค์กร";
    const email = String(fd.get("email") || ""); if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "กรุณาระบุอีเมลให้ถูกต้อง";
    if (!fd.get("phone")) next.phone = "กรุณาระบุเบอร์โทรศัพท์";
    if (!fd.get("topic")) next.topic = "กรุณาระบุหัวข้อที่สนใจ";
    if (!fd.get("consent")) next.consent = "กรุณายืนยันการรับทราบนโยบายความเป็นส่วนตัว";
    setErrors(next);
    if (Object.keys(next).length) { requestAnimationFrame(() => document.querySelector<HTMLElement>("[aria-invalid='true']")?.focus()); return; }
    setSending(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          company: fd.get("company"),
          email,
          phone: fd.get("phone"),
          topic: fd.get("topic"),
          message: fd.get("message"),
          consent: fd.get("consent") === "on",
        }),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error || "ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง");

      form.reset();
      setSent(true);
      requestAnimationFrame(() => successRef.current?.focus());
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้ง");
    } finally {
      setSending(false);
    }
  }
  if (sent) return <div className="form-success" ref={successRef} tabIndex={-1} role="status"><span>✓</span><h3>ส่งข้อมูลเรียบร้อยแล้ว</h3><p>ทีมงานได้รับข้อมูลของคุณแล้ว และจะติดต่อกลับโดยเร็วที่สุด</p><button type="button" className="text-link" onClick={() => setSent(false)}>ส่งข้อมูลอีกครั้ง</button></div>;
  const field = (id: keyof Errors, label: string, type = "text", autoComplete?: string) => <div className="field"><label htmlFor={id}>{label} <em>*</em></label><input id={id} name={id} type={type} autoComplete={autoComplete} aria-invalid={Boolean(errors[id])} aria-describedby={errors[id] ? `${id}-error` : undefined}/>{errors[id] && <p id={`${id}-error`} className="field-error">{errors[id]}</p>}</div>;
  return <form className="contact-form" noValidate onSubmit={submit}>
    <div className="field-grid">{field("name", "ชื่อ–นามสกุล", "text", "name")}{field("company", "องค์กร", "text", "organization")}{field("email", "อีเมลธุรกิจ", "email", "email")}{field("phone", "เบอร์โทรศัพท์", "tel", "tel")}</div>
    {field("topic", "หัวข้อที่สนใจ")}
    <div className="field"><label htmlFor="message">รายละเอียดความต้องการ <span>(ไม่บังคับ)</span></label><textarea id="message" name="message" rows={4}/></div>
    <div className="consent"><input id="consent" name="consent" type="checkbox" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined}/><label htmlFor="consent">ฉันรับทราบว่าข้อมูลจะใช้เพื่อการติดต่อกลับเกี่ยวกับบริการฝึกอบรม <em>*</em></label></div>
    {errors.consent && <p id="consent-error" className="field-error">{errors.consent}</p>}
    {submitError && <p className="form-submit-error" role="alert">{submitError}</p>}
    <button className="button form-submit" type="submit" disabled={sending} aria-busy={sending}>{sending ? "กำลังส่งข้อมูล..." : "ส่งข้อมูลเพื่อรับคำปรึกษา"} <span>{sending ? "" : "→"}</span></button>
    <p className="form-note">ข้อมูลจะถูกส่งให้ทีมงานผ่าน LINE Official Account</p>
  </form>;
}
