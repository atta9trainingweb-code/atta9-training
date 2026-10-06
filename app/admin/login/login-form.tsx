"use client";

import { useActionState } from "react";
import { login, type LoginState } from "../actions";

const initialState: LoginState = undefined;

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);

  return (
    <form className="admin-login-form" action={action}>
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
        <input
          id="admin-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>
      {state?.error && <p className="admin-form-error" role="alert">{state.error}</p>}
      <button className="admin-primary-button" type="submit" disabled={pending}>
        {pending ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
      </button>
    </form>
  );
}
