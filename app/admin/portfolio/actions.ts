"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/supabase/require-admin";

export type PortfolioFormState = {
  error?: string;
  fieldErrors?: Record<string, string>;
};

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function text(formData: FormData, key: string, max = 10_000) {
  return String(formData.get(key) || "").trim().slice(0, max);
}

function lines(formData: FormData, key: string) {
  return text(formData, key)
    .split("\n")
    .map((value) => value.trim())
    .filter(Boolean)
    .slice(0, 20);
}

function parseGallery(raw: string) {
  try {
    const value: unknown = JSON.parse(raw);
    if (!Array.isArray(value)) return [];
    return value.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const entry = item as { src?: unknown; alt?: unknown };
      if (typeof entry.src !== "string" || typeof entry.alt !== "string") return [];
      return [{ src: entry.src.slice(0, 2_000), alt: entry.alt.trim().slice(0, 300) }];
    }).slice(0, 30);
  } catch {
    return [];
  }
}

export async function savePortfolio(
  _state: PortfolioFormState,
  formData: FormData,
): Promise<PortfolioFormState> {
  const id = text(formData, "id", 80);
  const status = text(formData, "status", 20) === "published" ? "published" : "draft";
  const slug = text(formData, "slug", 120).toLowerCase();
  const organization = text(formData, "organization", 240);
  const shortName = text(formData, "short_name", 160);
  const course = text(formData, "course", 240);
  const category = text(formData, "category", 120);
  const logoUrl = text(formData, "logo_url", 2_000);
  const coverUrl = text(formData, "cover_url", 2_000);
  const gallery = parseGallery(text(formData, "gallery_json", 100_000));
  const publishedAt = text(formData, "published_at", 10);

  const fieldErrors: Record<string, string> = {};
  if (!organization) fieldErrors.organization = "กรุณากรอกชื่อองค์กร";
  if (!shortName) fieldErrors.short_name = "กรุณากรอกชื่อย่อสำหรับการแสดงผล";
  if (!course) fieldErrors.course = "กรุณากรอกชื่อหลักสูตร";
  if (!category) fieldErrors.category = "กรุณาเลือกหมวดหมู่";
  if (!slugPattern.test(slug)) fieldErrors.slug = "ใช้ตัวพิมพ์เล็ก ตัวเลข และขีดกลางเท่านั้น";
  if (!logoUrl) fieldErrors.logo_url = "กรุณาเพิ่มโลโก้องค์กร";
  if (!coverUrl) fieldErrors.cover_url = "กรุณาเลือกภาพหน้าปก";
  if (!text(formData, "excerpt")) fieldErrors.excerpt = "กรุณากรอกข้อความสรุป";
  if (!text(formData, "overview")) fieldErrors.overview = "กรุณากรอกภาพรวมโครงการ";
  if (!text(formData, "challenge")) fieldErrors.challenge = "กรุณากรอกโจทย์การเรียนรู้";
  if (!text(formData, "approach")) fieldErrors.approach = "กรุณากรอกแนวทางที่ออกแบบ";
  if (!lines(formData, "learning_goals").length) fieldErrors.learning_goals = "เพิ่มเป้าหมายอย่างน้อย 1 ข้อ";
  if (!lines(formData, "methods").length) fieldErrors.methods = "เพิ่มรูปแบบการเรียนรู้อย่างน้อย 1 รายการ";
  if (!gallery.length) fieldErrors.gallery_json = "เพิ่มภาพ Gallery อย่างน้อย 1 ภาพ";
  if (status === "published" && !publishedAt) fieldErrors.published_at = "เลือกวันที่เผยแพร่ก่อนโพสต์";

  if (Object.keys(fieldErrors).length) {
    return { error: "ยังบันทึกไม่ได้ กรุณาตรวจข้อมูลที่ทำเครื่องหมายไว้", fieldErrors };
  }

  const { supabase, user } = await requireAdmin();
  const values = {
    status,
    slug,
    published_at: publishedAt || null,
    organization,
    short_name: shortName,
    course,
    category,
    logo_url: logoUrl,
    logo_alt: text(formData, "logo_alt", 300) || `โลโก้ ${shortName}`,
    cover_url: coverUrl,
    cover_position: text(formData, "cover_position", 60) || "center center",
    excerpt: text(formData, "excerpt"),
    overview: text(formData, "overview"),
    challenge: text(formData, "challenge"),
    approach: text(formData, "approach"),
    learning_goals: lines(formData, "learning_goals"),
    methods: lines(formData, "methods"),
    gallery,
    updated_by: user.id,
  };

  const query = id
    ? supabase.from("portfolio_projects").update(values).eq("id", id)
    : supabase.from("portfolio_projects").insert({ ...values, created_by: user.id });
  const { error } = await query;

  if (error?.code === "23505") return { error: "Slug นี้ถูกใช้งานแล้ว กรุณาเปลี่ยน URL ของผลงาน", fieldErrors: { slug: "Slug ซ้ำ" } };
  if (error) return { error: "บันทึกไม่สำเร็จ กรุณาลองอีกครั้ง" };

  revalidatePath("/gallery");
  revalidatePath(`/gallery/${slug}`);
  revalidatePath("/admin/portfolio");
  redirect(`/admin/portfolio?saved=${status}`);
}
