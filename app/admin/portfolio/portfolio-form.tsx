"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { PortfolioProject } from "@/lib/portfolio";
import { savePortfolio, type PortfolioFormState } from "./actions";

type GalleryItem = { src: string; alt: string };

const initialState: PortfolioFormState = {};
const categories = ["พัฒนาวิทยากร", "การสื่อสาร", "ภาวะผู้นำ", "การบริการ", "บุคลิกภาพ", "แรงบันดาลใจ"];
const acceptedTypes = ["image/jpeg", "image/png", "image/webp", "image/avif"];
const maxFileSize = 12 * 1024 * 1024;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function safeFileName(name: string) {
  const extension = name.split(".").pop()?.toLowerCase() || "jpg";
  return `${Date.now()}-${crypto.randomUUID()}.${extension}`;
}

export function PortfolioForm({ project }: { project?: PortfolioProject }) {
  const [state, action, pending] = useActionState(savePortfolio, initialState);
  const [organization, setOrganization] = useState(project?.organization || "");
  const [slug, setSlug] = useState(project?.slug || "");
  const [slugTouched, setSlugTouched] = useState(Boolean(project));
  const [logoUrl, setLogoUrl] = useState(project?.logo || "");
  const [coverUrl, setCoverUrl] = useState(project?.cover || "");
  const [gallery, setGallery] = useState<GalleryItem[]>(project?.gallery || []);
  const [uploading, setUploading] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState("");
  const [dirty, setDirty] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const completed = useMemo(() => {
    const checks = [organization, slug, logoUrl, coverUrl, gallery.length, project?.course, project?.excerpt];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [organization, slug, logoUrl, coverUrl, gallery.length, project]);

  useEffect(() => {
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!dirty || pending) return;
      event.preventDefault();
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty, pending]);

  useEffect(() => {
    if (!state.error) return;
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus());
  }, [state]);

  const uploadFiles = async (files: FileList | null, kind: "logo" | "gallery") => {
    if (!files?.length) return;
    setUploadError("");
    const selected = Array.from(files);
    const invalid = selected.find((file) => !acceptedTypes.includes(file.type) || file.size > maxFileSize || file.size === 0);
    if (invalid) {
      setUploadError(`${invalid.name}: รองรับ JPG, PNG, WebP หรือ AVIF ขนาดไม่เกิน 12 MB`);
      return;
    }
    if (kind === "gallery" && gallery.length + selected.length > 30) {
      setUploadError("Gallery รองรับได้สูงสุด 30 ภาพต่อผลงาน");
      return;
    }

    const supabase = createClient();
    const uploaded: GalleryItem[] = [];
    for (const file of selected) {
      setUploading(`กำลังอัปโหลด ${file.name}`);
      const path = `${slug || "draft"}/${kind}/${safeFileName(file.name)}`;
      const { error } = await supabase.storage.from("portfolio").upload(path, file, {
        cacheControl: "31536000",
        contentType: file.type,
        upsert: false,
      });
      if (error) {
        setUploadError(`อัปโหลด ${file.name} ไม่สำเร็จ กรุณาลองอีกครั้ง`);
        setUploading(null);
        return;
      }
      const { data } = supabase.storage.from("portfolio").getPublicUrl(path);
      uploaded.push({ src: data.publicUrl, alt: `บรรยากาศการอบรม ${organization || "ATTA9 Training"}` });
    }
    if (kind === "logo") setLogoUrl(uploaded[0].src);
    else {
      setGallery((items) => [...items, ...uploaded]);
      if (!coverUrl && uploaded[0]) setCoverUrl(uploaded[0].src);
    }
    setDirty(true);
    setUploading(null);
  };

  const moveImage = (index: number, offset: number) => {
    const nextIndex = index + offset;
    if (nextIndex < 0 || nextIndex >= gallery.length) return;
    setGallery((items) => {
      const next = [...items];
      [next[index], next[nextIndex]] = [next[nextIndex], next[index]];
      return next;
    });
    setDirty(true);
  };

  const removeImage = (index: number) => {
    setGallery((items) => items.filter((_, itemIndex) => itemIndex !== index));
    setDirty(true);
  };

  return (
    <form ref={formRef} className="portfolio-editor" action={action} noValidate onChange={() => setDirty(true)}>
      <input type="hidden" name="id" value={project?.id || ""} />
      <input type="hidden" name="logo_url" value={logoUrl} />
      <input type="hidden" name="cover_url" value={coverUrl} />
      <input type="hidden" name="gallery_json" value={JSON.stringify(gallery)} />

      <aside className="portfolio-editor-rail" aria-label="สถานะและส่วนของแบบฟอร์ม">
        <div className="portfolio-completeness">
          <span>ความพร้อมของโพสต์</span>
          <strong>{completed}%</strong>
          <i><b style={{ width: `${completed}%` }} /></i>
          <small>ตรวจเนื้อหาและภาพก่อนเผยแพร่</small>
        </div>
        <nav>
          <a href="#identity"><span>01</span>ข้อมูลองค์กร</a>
          <a href="#story"><span>02</span>เรื่องราวการเรียนรู้</a>
          <a href="#media"><span>03</span>ภาพและ Gallery</a>
          <a href="#publish"><span>04</span>การเผยแพร่</a>
        </nav>
        {slug && <Link className="portfolio-preview-link" href={`/gallery/${slug}`} target="_blank">เปิดหน้าตัวอย่าง ↗</Link>}
      </aside>

      <div className="portfolio-editor-main">
        {state.error && <div className="admin-error-banner" role="alert"><strong>ตรวจสอบข้อมูลอีกครั้ง</strong><span>{state.error}</span></div>}
        {uploadError && <div className="admin-error-banner" role="alert"><strong>อัปโหลดภาพไม่ได้</strong><span>{uploadError}</span></div>}

        <section className="portfolio-form-section" id="identity">
          <div className="portfolio-form-heading"><span>01</span><div><p>PROJECT IDENTITY</p><h2>ข้อมูลองค์กรและหลักสูตร</h2><small>ข้อมูลส่วนนี้จะปรากฏใน Hero และการ์ดผลงาน</small></div></div>
          <div className="portfolio-field-grid">
            <label className="portfolio-field portfolio-field--wide"><span>ชื่อองค์กร (ภาษาไทย)</span><input name="organization" value={organization} onChange={(event) => { const value = event.target.value; setOrganization(value); if (!slugTouched) setSlug(slugify(value)); }} aria-invalid={Boolean(state.fieldErrors?.organization)} aria-describedby={state.fieldErrors?.organization ? "organization-error" : undefined} />{state.fieldErrors?.organization && <small id="organization-error" className="field-error">{state.fieldErrors.organization}</small>}</label>
            <label className="portfolio-field"><span>ชื่อย่อ / ชื่อแสดงผล</span><input name="short_name" defaultValue={project?.shortName} aria-invalid={Boolean(state.fieldErrors?.short_name)} />{state.fieldErrors?.short_name && <small className="field-error">{state.fieldErrors.short_name}</small>}</label>
            <label className="portfolio-field"><span>หมวดหมู่</span><select name="category" defaultValue={project?.category || categories[0]}>{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label className="portfolio-field portfolio-field--wide"><span>ชื่อหลักสูตร</span><input name="course" defaultValue={project?.course} aria-invalid={Boolean(state.fieldErrors?.course)} />{state.fieldErrors?.course && <small className="field-error">{state.fieldErrors.course}</small>}</label>
            <label className="portfolio-field portfolio-field--wide"><span>URL ของผลงาน</span><div className="slug-input"><b>/gallery/</b><input name="slug" value={slug} onChange={(event) => { setSlugTouched(true); setSlug(slugify(event.target.value)); }} /></div>{state.fieldErrors?.slug ? <small className="field-error">{state.fieldErrors.slug}</small> : <small>ใช้ภาษาอังกฤษตัวพิมพ์เล็กและขีดกลาง เช่น thai-vietjet-air</small>}</label>
          </div>
          <div className="portfolio-logo-row">
            <div className="portfolio-logo-preview">{logoUrl ? <Image src={logoUrl} fill sizes="120px" alt="ตัวอย่างโลโก้" unoptimized={logoUrl.startsWith("http")} /> : <span>LOGO</span>}</div>
            <div><strong>โลโก้องค์กร</strong><p>แนะนำ PNG พื้นหลังโปร่งใส หรือ JPG อัตราส่วนใกล้เคียงสี่เหลี่ยม</p><label className="admin-upload-button"><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" onChange={(event) => uploadFiles(event.target.files, "logo")} />เลือกโลโก้</label>{state.fieldErrors?.logo_url && <small className="field-error">{state.fieldErrors.logo_url}</small>}</div>
          </div>
          <label className="portfolio-field"><span>ข้อความ Alt ของโลโก้</span><input name="logo_alt" defaultValue={project?.logoAlt || `โลโก้ ${project?.shortName || ""}`} /></label>
        </section>

        <section className="portfolio-form-section" id="story">
          <div className="portfolio-form-heading"><span>02</span><div><p>LEARNING STORY</p><h2>เล่าโจทย์และวิธีออกแบบการเรียนรู้</h2><small>ใช้ภาษากระชับ อ่านเข้าใจง่าย และไม่เปิดเผยข้อมูลภายในของลูกค้า</small></div></div>
          <label className="portfolio-field"><span>ข้อความสรุปบนการ์ด</span><textarea className="resize-none" name="excerpt" rows={3} defaultValue={project?.excerpt} aria-invalid={Boolean(state.fieldErrors?.excerpt)} />{state.fieldErrors?.excerpt && <small className="field-error">{state.fieldErrors.excerpt}</small>}</label>
          <label className="portfolio-field"><span>ภาพรวมโครงการ</span><textarea className="resize-none" name="overview" rows={5} defaultValue={project?.overview} aria-invalid={Boolean(state.fieldErrors?.overview)} />{state.fieldErrors?.overview && <small className="field-error">{state.fieldErrors.overview}</small>}</label>
          <div className="portfolio-field-grid">
            <label className="portfolio-field"><span>โจทย์การเรียนรู้</span><textarea className="resize-none" name="challenge" rows={7} defaultValue={project?.challenge} aria-invalid={Boolean(state.fieldErrors?.challenge)} />{state.fieldErrors?.challenge && <small className="field-error">{state.fieldErrors.challenge}</small>}</label>
            <label className="portfolio-field"><span>แนวทางที่ออกแบบ</span><textarea className="resize-none" name="approach" rows={7} defaultValue={project?.approach} aria-invalid={Boolean(state.fieldErrors?.approach)} />{state.fieldErrors?.approach && <small className="field-error">{state.fieldErrors.approach}</small>}</label>
            <label className="portfolio-field"><span>เป้าหมายการเรียนรู้</span><textarea className="resize-none" name="learning_goals" rows={6} defaultValue={project?.learningGoals.join("\n")} placeholder="หนึ่งเป้าหมายต่อหนึ่งบรรทัด" />{state.fieldErrors?.learning_goals && <small className="field-error">{state.fieldErrors.learning_goals}</small>}</label>
            <label className="portfolio-field"><span>รูปแบบกิจกรรม</span><textarea className="resize-none" name="methods" rows={6} defaultValue={project?.methods.join("\n")} placeholder="หนึ่งกิจกรรมต่อหนึ่งบรรทัด" />{state.fieldErrors?.methods && <small className="field-error">{state.fieldErrors.methods}</small>}</label>
          </div>
        </section>

        <section className="portfolio-form-section" id="media">
          <div className="portfolio-form-heading"><span>03</span><div><p>VISUAL STORY</p><h2>ภาพหน้าปกและ Gallery</h2><small>ภาพแรกที่เลือกเป็นหน้าปกได้ และใช้ปุ่มลูกศรเพื่อจัดลำดับ</small></div></div>
          <label className={`portfolio-dropzone ${uploading ? "is-busy" : ""}`}>
            <input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" disabled={Boolean(uploading)} onChange={(event) => uploadFiles(event.target.files, "gallery")} />
            <span aria-hidden="true">＋</span><strong>{uploading || "เพิ่มภาพบรรยากาศ"}</strong><small>JPG, PNG, WebP หรือ AVIF · ไม่เกิน 12 MB ต่อภาพ · สูงสุด 30 ภาพ</small>
          </label>
          {gallery.length ? <div className="portfolio-media-grid">
            {gallery.map((image, index) => <article className={coverUrl === image.src ? "is-cover" : ""} key={`${image.src}-${index}`}>
              <div><Image src={image.src} fill sizes="240px" alt={image.alt} unoptimized={image.src.startsWith("http")} />{coverUrl === image.src && <b>ภาพหน้าปก</b>}</div>
              <label><span className="sr-only">คำอธิบายภาพที่ {index + 1}</span><input value={image.alt} onChange={(event) => setGallery((items) => items.map((item, itemIndex) => itemIndex === index ? { ...item, alt: event.target.value } : item))} /></label>
              <footer><button type="button" onClick={() => setCoverUrl(image.src)}>ตั้งเป็นปก</button><span><button type="button" onClick={() => moveImage(index, -1)} disabled={index === 0} aria-label={`เลื่อนภาพ ${index + 1} ไปก่อนหน้า`}>←</button><button type="button" onClick={() => moveImage(index, 1)} disabled={index === gallery.length - 1} aria-label={`เลื่อนภาพ ${index + 1} ไปถัดไป`}>→</button><button className="is-danger" type="button" onClick={() => removeImage(index)} aria-label={`นำภาพ ${index + 1} ออก`}>นำออก</button></span></footer>
            </article>)}
          </div> : <div className="portfolio-media-empty"><strong>ยังไม่มีภาพใน Gallery</strong><span>เพิ่มภาพเพื่อเล่าเรื่องราวและบรรยากาศของคลาส</span></div>}
          {state.fieldErrors?.gallery_json && <small className="field-error">{state.fieldErrors.gallery_json}</small>}
          <label className="portfolio-field"><span>ตำแหน่งภาพหน้าปก</span><select name="cover_position" defaultValue={project?.coverPosition || "center center"}><option value="center center">กึ่งกลาง</option><option value="center top">ด้านบน</option><option value="center 35%">ช่วงบน 35%</option><option value="center 65%">ช่วงล่าง 65%</option></select></label>
        </section>

        <section className="portfolio-form-section portfolio-publish-section" id="publish">
          <div className="portfolio-form-heading"><span>04</span><div><p>PUBLISHING</p><h2>บันทึกและเผยแพร่</h2><small>ฉบับร่างจะไม่แสดงบนเว็บไซต์จนกว่าจะเปลี่ยนเป็น “เผยแพร่”</small></div></div>
          <div className="portfolio-field-grid">
            <label className="portfolio-field"><span>สถานะ</span><select name="status" defaultValue={project?.status || "draft"}><option value="draft">ฉบับร่าง</option><option value="published">เผยแพร่</option></select></label>
            <label className="portfolio-field"><span>วันที่เผยแพร่</span><input name="published_at" type="date" defaultValue={project?.publishedAt || new Date().toISOString().slice(0, 10)} />{state.fieldErrors?.published_at && <small className="field-error">{state.fieldErrors.published_at}</small>}</label>
          </div>
        </section>

        <div className="portfolio-savebar"><div><strong>{dirty ? "มีการเปลี่ยนแปลงที่ยังไม่ได้บันทึก" : "พร้อมแก้ไขข้อมูล"}</strong><span>บันทึกแล้วระบบจะอัปเดตหน้า Gallery โดยอัตโนมัติ</span></div><div><Link className="admin-secondary-button" href="/admin/portfolio">ยกเลิก</Link><button className="admin-primary-button" type="submit" disabled={pending || Boolean(uploading)}>{pending ? "กำลังบันทึก..." : "บันทึกผลงาน"}</button></div></div>
      </div>
    </form>
  );
}
