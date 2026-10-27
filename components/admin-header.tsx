import Image from "next/image";
import Link from "next/link";
import { logout } from "@/app/admin/actions";

export function AdminHeader({
  displayName,
  active,
}: {
  displayName: string;
  active: "contacts" | "portfolio";
}) {
  return (
    <header className="admin-header">
      <div className="admin-header-primary">
        <Link className="admin-logo" href="/admin/portfolio" aria-label="ATTA9 Training ระบบหลังบ้าน">
          <Image src="/images/atta9-logo-on-dark.png" width={510} height={263} alt="ATTA9 Training" priority />
        </Link>
        <nav className="admin-nav" aria-label="เมนูระบบหลังบ้าน">
          <Link className={active === "portfolio" ? "is-active" : ""} href="/admin/portfolio">ผลงาน</Link>
          <Link className={active === "contacts" ? "is-active" : ""} href="/admin/contacts">ผู้สนใจ</Link>
        </nav>
      </div>
      <div className="admin-account">
        <span>{displayName}</span>
        <form action={logout} noValidate><button type="submit">ออกจากระบบ</button></form>
      </div>
    </header>
  );
}
