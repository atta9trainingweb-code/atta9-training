"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SetPasswordForm() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function restoreInviteSession() {
      const supabase = createClient();
      const hash = new URLSearchParams(window.location.hash.slice(1));
      const accessToken = hash.get("access_token");
      const refreshToken = hash.get("refresh_token");

      if (accessToken && refreshToken) {
        const { error: sessionError } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        window.history.replaceState(null, "", "/admin/set-password");
        if (sessionError) {
          if (active) setError("ลิงก์คำเชิญไม่ถูกต้องหรือหมดอายุ กรุณาขอคำเชิญใหม่");
          return;
        }
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!active) return;
      if (!user) {
        setError("ไม่พบเซสชันจากคำเชิญ กรุณาเปิดลิงก์ล่าสุดจากอีเมลอีกครั้ง");
        return;
      }

      setReady(true);
    }

    void restoreInviteSession();
    return () => {
      active = false;
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const formData = new FormData(event.currentTarget);
    const password = String(formData.get("password") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");

    if (password.length < 8) {
      setError("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");
      return;
    }
    if (password !== confirmPassword) {
      setError("รหัสผ่านทั้งสองช่องไม่ตรงกัน");
      return;
    }

    setPending(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError("ไม่สามารถตั้งรหัสผ่านได้ กรุณาลองใหม่หรือลิงก์อาจหมดอายุ");
      setPending(false);
      return;
    }

    router.replace("/admin/contacts");
    router.refresh();
  }

  return (
    <form className="admin-login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="new-password">รหัสผ่านใหม่</label>
        <input id="new-password" name="password" type="password" autoComplete="new-password" minLength={8} disabled={!ready || pending} required />
      </div>
      <div>
        <label htmlFor="confirm-password">ยืนยันรหัสผ่านใหม่</label>
        <input id="confirm-password" name="confirmPassword" type="password" autoComplete="new-password" minLength={8} disabled={!ready || pending} required />
      </div>
      {error && <p className="admin-form-error" role="alert">{error}</p>}
      {!ready && !error && <p className="admin-form-status">กำลังตรวจสอบคำเชิญ...</p>}
      <button className="admin-primary-button" type="submit" disabled={!ready || pending}>
        {pending ? "กำลังบันทึก..." : "ตั้งรหัสผ่านและเข้าสู่ระบบ"}
      </button>
    </form>
  );
}
