import "server-only";

import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { getSupabasePublicConfig, isSupabaseConfigured } from "./supabase/config";
import {
  getPortfolioBySlug as getStaticPortfolioBySlug,
  getPublishedPortfolio as getStaticPublishedPortfolio,
  type PortfolioProject,
} from "./portfolio";

export type PortfolioRow = {
  id: string;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  status: "draft" | "published";
  slug: string;
  organization: string;
  short_name: string;
  course: string;
  category: string;
  logo_url: string;
  logo_alt: string;
  cover_url: string;
  cover_position: string;
  excerpt: string;
  overview: string;
  challenge: string;
  approach: string;
  learning_goals: unknown;
  methods: unknown;
  gallery: unknown;
};

function stringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
}

function galleryArray(value: unknown): { src: string; alt: string }[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const entry = item as { src?: unknown; alt?: unknown };
    return typeof entry.src === "string" && typeof entry.alt === "string"
      ? [{ src: entry.src, alt: entry.alt }]
      : [];
  });
}

export function portfolioRowToProject(row: PortfolioRow): PortfolioProject {
  return {
    id: row.id,
    slug: row.slug,
    status: row.status,
    publishedAt: row.published_at || row.created_at.slice(0, 10),
    organization: row.organization,
    shortName: row.short_name,
    course: row.course,
    category: row.category,
    logo: row.logo_url,
    logoAlt: row.logo_alt,
    cover: row.cover_url,
    coverPosition: row.cover_position,
    excerpt: row.excerpt,
    overview: row.overview,
    challenge: row.challenge,
    approach: row.approach,
    learningGoals: stringArray(row.learning_goals),
    methods: stringArray(row.methods),
    gallery: galleryArray(row.gallery),
  };
}

function createPublicClient() {
  const { url, publishableKey } = getSupabasePublicConfig();
  return createSupabaseClient(url, publishableKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function getCmsPublished(): Promise<PortfolioProject[]> {
  if (!isSupabaseConfigured()) return [];
  const { data, error } = await createPublicClient()
    .from("portfolio_projects")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) return [];
  return ((data || []) as PortfolioRow[]).map(portfolioRowToProject);
}

export async function getPublishedPortfolio(): Promise<PortfolioProject[]> {
  const cms = await getCmsPublished();
  if (!cms.length) return getStaticPublishedPortfolio();
  const cmsSlugs = new Set(cms.map((project) => project.slug));
  return [...cms, ...getStaticPublishedPortfolio().filter((project) => !cmsSlugs.has(project.slug))];
}

export async function getPortfolioBySlug(slug: string): Promise<PortfolioProject | undefined> {
  if (isSupabaseConfigured()) {
    const { data } = await createPublicClient()
      .from("portfolio_projects")
      .select("*")
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();
    if (data) return portfolioRowToProject(data as PortfolioRow);
  }
  return getStaticPortfolioBySlug(slug);
}
