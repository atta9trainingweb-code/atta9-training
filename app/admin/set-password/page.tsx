import Link from "next/link";
import { SetPasswordForm } from "./set-password-form";

export default function SetPasswordPage() {
  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <Link className="admin-login-brand" href="/">ATTA9 <span>TRAINING</span></Link>
        <p className="admin-eyebrow">ADMIN ACCOUNT</p>
        <h1>ตั้งรหัสผ่านผู้ดูแล</h1>
        <p className="admin-login-intro">ตั้งรหัสผ่านสำหรับเข้าสู่ระบบจัดการข้อมูลผู้สนใจ</p>
        <SetPasswordForm />
        <Link className="admin-back-link" href="/admin/login">← กลับหน้าเข้าสู่ระบบ</Link>
      </section>
    </main>
  );
}
