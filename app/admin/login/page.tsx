import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";
import { LoginForm } from "./login-form";

type LoginPageProps = {
  searchParams: Promise<{ setup?: string; unauthorized?: string; invite_error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();

  if (configured) {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) redirect("/admin/contacts");
  }

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <Link className="admin-login-brand" href="/" aria-label="ATTA9 Training หน้าหลัก"><Image src="/images/atta9-logo.png" width={510} height={263} alt="ATTA9 Training" priority /></Link>
        <p className="admin-eyebrow">CONTACT MANAGEMENT</p>
        <h1>ระบบจัดการผู้สนใจ</h1>
        <p className="admin-login-intro">เข้าสู่ระบบเพื่อดูและติดตามข้อมูลที่ส่งจากเว็บไซต์</p>
        {!configured || params.setup ? (
          <div className="admin-setup-notice">
            <strong>ยังไม่ได้เชื่อมต่อ Supabase</strong>
            <span>เพิ่ม Project URL และ API Keys ใน `.env.local` แล้ว restart เซิร์ฟเวอร์</span>
          </div>
        ) : (
          <LoginForm />
        )}
        {params.unauthorized && (
          <p className="admin-form-error">บัญชีนี้ยังไม่ได้รับสิทธิ์เป็นผู้ดูแลระบบ</p>
        )}
        {params.invite_error && (
          <p className="admin-form-error">ลิงก์คำเชิญไม่ถูกต้องหรือหมดอายุ กรุณาขอคำเชิญใหม่</p>
        )}
        <Link className="admin-back-link" href="/">← กลับเว็บไซต์</Link>
      </section>
    </main>
  );
}
