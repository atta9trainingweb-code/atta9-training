import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export const Arrow = (p: IconProps) => <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
export const Phone = (p: IconProps) => <svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.1 9.88a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z" /></svg>;
export const Users = (p: IconProps) => <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
export const Target = (p: IconProps) => <svg {...base} {...p}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m15 9 6-6M17 3h4v4"/></svg>;
export const Chart = (p: IconProps) => <svg {...base} {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20V7"/><path d="m3 8 7-5 6 6 5-4"/></svg>;
export const Spark = (p: IconProps) => <svg {...base} {...p}><path d="M9 18h6M10 22h4M8.7 14.5A7 7 0 1 1 15.3 14.5C14.5 15.1 14 16 14 17h-4c0-1-.5-1.9-1.3-2.5Z"/></svg>;
export const Check = (p: IconProps) => <svg {...base} {...p}><path d="m5 12 4 4L19 6" /></svg>;
export const Building = (p: IconProps) => <svg {...base} {...p}><path d="M3 21h18M6 21V3h12v18M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></svg>;
export const Briefcase = (p: IconProps) => <svg {...base} {...p}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M9 12v2h6v-2"/></svg>;
export const Graduation = (p: IconProps) => <svg {...base} {...p}><path d="m2 10 10-5 10 5-10 5L2 10Z"/><path d="M6 12.5V17c3 2.5 9 2.5 12 0v-4.5M22 10v6"/></svg>;
export const BookOpen = (p: IconProps) => <svg {...base} {...p}><path d="M2.5 5.5A3.5 3.5 0 0 1 6 3h5v16H6a3.5 3.5 0 0 0-3.5 2V5.5ZM21.5 5.5A3.5 3.5 0 0 0 18 3h-5v16h5a3.5 3.5 0 0 1 3.5 2V5.5Z"/></svg>;
export const Activity = (p: IconProps) => <svg {...base} {...p}><path d="M3 12h4l2.2-6 4.1 12 2.2-6H21"/><circle cx="12" cy="12" r="9"/></svg>;
export const Presentation = (p: IconProps) => <svg {...base} {...p}><path d="M4 3h16v12H4zM2 3h20M8 21l4-6 4 6M8 9l2-2 2 2 3-3 2 2"/></svg>;
export const UserFocus = (p: IconProps) => <svg {...base} {...p}><circle cx="12" cy="9" r="3"/><path d="M6.5 20c.8-3.2 2.6-5 5.5-5s4.7 1.8 5.5 5M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4"/></svg>;
export const ClipboardCheck = (p: IconProps) => <svg {...base} {...p}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 13l2 2 5-5"/></svg>;
export const Mail = (p: IconProps) => <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>;
export const Messages = (p: IconProps) => <svg {...base} {...p}><path d="M20 15a3 3 0 0 1-3 3H9l-5 3v-3.7A3 3 0 0 1 2 14.5V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8Z"/><path d="M7 9h8M7 13h5"/></svg>;
export const Headset = (p: IconProps) => <svg {...base} {...p}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2ZM17 20c-1 1-2.5 1.5-5 1.5"/></svg>;
