import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseAdminConfigured } from "@/lib/supabase/config";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  topic?: unknown;
  message?: unknown;
  consent?: unknown;
};

const LINE_PUSH_URL = "https://api.line.me/v2/bot/message/push";
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 2_000;

function clean(value: unknown, maxLength = MAX_FIELD_LENGTH) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function detailRow(label: string, value: string, bold = false) {
  return {
    type: "box",
    layout: "horizontal",
    spacing: "sm",
    contents: [
      { type: "text", text: label, size: "sm", color: "#526178", flex: 2 },
      {
        type: "text",
        text: value,
        size: "sm",
        color: "#0F172A",
        weight: bold ? "bold" : "regular",
        wrap: true,
        flex: 5,
      },
    ],
  };
}

function buildFlexMessage({
  name,
  company,
  email,
  phone,
  topic,
  message,
  submittedAt,
}: {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  submittedAt: string;
}) {
  const phoneUri = phone.replace(/[^\d+]/g, "");

  return {
    type: "flex",
    altText: `มีผู้สนใจติดต่อเข้ามาใหม่ — ${name}`,
    contents: {
      type: "bubble",
      size: "mega",
      header: {
        type: "box",
        layout: "vertical",
        paddingAll: "20px",
        backgroundColor: "#04152F",
        contents: [
          {
            type: "text",
            text: "ATTA9 TRAINING",
            size: "xs",
            weight: "bold",
            color: "#91AAFF",
          },
          {
            type: "text",
            text: "มีผู้สนใจติดต่อเข้ามาใหม่",
            size: "xl",
            weight: "bold",
            color: "#FFFFFF",
            wrap: true,
            margin: "md",
          },
          {
            type: "text",
            text: submittedAt,
            size: "xs",
            color: "#C7D1E0",
            margin: "sm",
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        paddingAll: "20px",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "ข้อมูลผู้ติดต่อ",
            size: "sm",
            weight: "bold",
            color: "#1746D1",
          },
          detailRow("ชื่อ", name, true),
          detailRow("องค์กร", company, true),
          detailRow("โทรศัพท์", phone),
          detailRow("อีเมล", email),
          { type: "separator", color: "#E2E8F0", margin: "lg" },
          {
            type: "box",
            layout: "vertical",
            paddingAll: "14px",
            backgroundColor: "#F5F8FF",
            cornerRadius: "10px",
            margin: "lg",
            contents: [
              {
                type: "text",
                text: "หัวข้อที่สนใจ",
                size: "xs",
                weight: "bold",
                color: "#1746D1",
              },
              {
                type: "text",
                text: topic,
                size: "md",
                weight: "bold",
                color: "#04152F",
                wrap: true,
                margin: "sm",
              },
            ],
          },
          {
            type: "text",
            text: "รายละเอียดความต้องการ",
            size: "xs",
            weight: "bold",
            color: "#526178",
            margin: "lg",
          },
          {
            type: "text",
            text: message || "-",
            size: "sm",
            color: "#334155",
            wrap: true,
            margin: "sm",
          },
          {
            type: "text",
            text: "✓ รับทราบนโยบายความเป็นส่วนตัวแล้ว",
            size: "xs",
            color: "#14804A",
            margin: "lg",
          },
        ],
      },
      footer: {
        type: "box",
        layout: "horizontal",
        spacing: "sm",
        paddingAll: "16px",
        contents: [
          {
            type: "button",
            style: "primary",
            height: "sm",
            color: "#2456F4",
            action: { type: "uri", label: "โทรกลับ", uri: `tel:${phoneUri}` },
          },
          {
            type: "button",
            style: "secondary",
            height: "sm",
            action: { type: "uri", label: "ส่งอีเมล", uri: `mailto:${email}` },
          },
        ],
      },
    },
  };
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "ข้อมูลที่ส่งมาไม่ถูกต้อง" }, { status: 400 });
  }

  const name = clean(payload.name);
  const company = clean(payload.company);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const topic = clean(payload.topic);
  const message = clean(payload.message, MAX_MESSAGE_LENGTH);

  if (
    !name ||
    !company ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !phone ||
    !topic ||
    payload.consent !== true
  ) {
    return Response.json({ error: "กรุณากรอกข้อมูลที่จำเป็นให้ถูกต้อง" }, { status: 400 });
  }

  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const recipientId = process.env.LINE_RECIPIENT_ID;

  if (!channelAccessToken || !recipientId) {
    console.error("LINE_CHANNEL_ACCESS_TOKEN or LINE_RECIPIENT_ID is not configured");
    return Response.json(
      { error: "ระบบรับข้อมูลยังไม่ได้ตั้งค่า กรุณาติดต่อทีมงานโดยตรง" },
      { status: 503 },
    );
  }

  const submittedAt = new Intl.DateTimeFormat("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Bangkok",
  }).format(new Date());

  const supabaseAdmin = isSupabaseAdminConfigured() ? createAdminClient() : null;
  let storedContactId: string | null = null;

  if (supabaseAdmin) {
    const { data: storedContact, error: storageError } = await supabaseAdmin
      .from("contacts")
      .insert({
        name,
        company,
        email,
        phone,
        topic,
        message: message || null,
        consent_at: new Date().toISOString(),
        line_notification_status: "pending",
      })
      .select("id")
      .single();

    if (storageError || !storedContact) {
      console.error("Unable to store contact", storageError);
      return Response.json(
        { error: "ไม่สามารถบันทึกข้อมูลได้ กรุณาลองอีกครั้ง" },
        { status: 502 },
      );
    }

    storedContactId = storedContact.id;
  } else {
    console.warn("Supabase is not configured; contact will only be sent to LINE");
  }

  const flexMessage = buildFlexMessage({
    name,
    company,
    email,
    phone,
    topic,
    message,
    submittedAt,
  });

  try {
    const lineResponse = await fetch(LINE_PUSH_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${channelAccessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: recipientId,
        messages: [flexMessage],
      }),
      cache: "no-store",
    });

    if (!lineResponse.ok) {
      const lineError = await lineResponse.text();
      console.error("LINE Messaging API error", lineResponse.status, lineError);
      if (supabaseAdmin && storedContactId) {
        await supabaseAdmin
          .from("contacts")
          .update({
            line_notification_status: "failed",
            line_notification_error: `LINE API ${lineResponse.status}`,
          })
          .eq("id", storedContactId);
      }
      return Response.json(
        { error: "ส่งข้อมูลไม่สำเร็จ กรุณาลองอีกครั้งหรือติดต่อทีมงานโดยตรง" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Unable to connect to LINE Messaging API", error);
    if (supabaseAdmin && storedContactId) {
      await supabaseAdmin
        .from("contacts")
        .update({
          line_notification_status: "failed",
          line_notification_error: "Unable to connect to LINE Messaging API",
        })
        .eq("id", storedContactId);
    }
    return Response.json(
      { error: "ไม่สามารถเชื่อมต่อระบบรับข้อมูลได้ กรุณาลองอีกครั้ง" },
      { status: 502 },
    );
  }

  if (supabaseAdmin && storedContactId) {
    const { error: notificationUpdateError } = await supabaseAdmin
      .from("contacts")
      .update({ line_notification_status: "sent", line_notification_error: null })
      .eq("id", storedContactId);

    if (notificationUpdateError) {
      console.error("Unable to update LINE notification status", notificationUpdateError);
    }
  }

  return Response.json({ success: true });
}
