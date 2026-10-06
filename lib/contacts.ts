export const contactStatuses = [
  "new",
  "contacted",
  "following_up",
  "won",
  "lost",
  "spam",
] as const;

export type ContactStatus = (typeof contactStatuses)[number];

export const contactStatusLabels: Record<ContactStatus, string> = {
  new: "ใหม่",
  contacted: "ติดต่อแล้ว",
  following_up: "กำลังติดตาม",
  won: "ปิดการขาย",
  lost: "ไม่สนใจ",
  spam: "สแปม",
};

export type Contact = {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string | null;
  consent_at: string;
  status: ContactStatus;
  admin_note: string | null;
  line_notification_status: "pending" | "sent" | "failed";
  line_notification_error: string | null;
};

export function isContactStatus(value: string): value is ContactStatus {
  return contactStatuses.includes(value as ContactStatus);
}
