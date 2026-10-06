"use client";

import { useEffect } from "react";

export function AdminInviteRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const params = new URLSearchParams(hash.slice(1));
    const type = params.get("type");
    const hasSession = params.has("access_token") && params.has("refresh_token");

    if (hasSession && (type === "invite" || type === "recovery")) {
      window.location.replace(`/admin/set-password${hash}`);
    }
  }, []);

  return null;
}
