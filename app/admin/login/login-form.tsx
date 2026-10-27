"use client";

import { useActionState, useState } from "react";
import { login, type LoginState } from "../actions";

const initialState: LoginState = undefined;

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="admin-login-form" action={action} noValidate>
      <div>
        <label htmlFor="admin-email">อีเมล</label>
        <input
          id="admin-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="admin@atta9.com"
          required
        />
      </div>
      <div>
        <label htmlFor="admin-password">รหัสผ่าน</label>
        <div className="admin-password-field">
          <input
            id="admin-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
          />
          <button type="button" aria-pressed={showPassword} aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"} onClick={() => setShowPassword((visible) => !visible)}>{showPassword ? "ซ่อน" : "แสดง"}</button>
        </div>
      </div>
      {state?.error && <p className="admin-form-error" role="alert">{state.error}</p>}
      <button className="admin-primary-button" type="submit" disabled={pending}>
        {pending ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
      </button>
    </form>
  );
}
