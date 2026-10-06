import type { Metadata } from "next";
import { Inter, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
  fallback: ["Leelawadee UI", "Tahoma", "sans-serif"],
});

const inter = Inter({
  variable: "--font-inter-web",
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "ATTA9 Training | In-house Training สำหรับองค์กร",
  description: "ออกแบบการเรียนรู้จากโจทย์จริง เพื่อพัฒนาคนและขับเคลื่อนผลลัพธ์ขององค์กร",
  metadataBase: new URL("https://atta9training.com"),
  openGraph: { title: "ATTA9 Training", description: "Empower Your People. Elevate Your Organization.", type: "website", locale: "th_TH" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
