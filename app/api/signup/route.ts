import { NextResponse } from "next/server";

type SignupPayload = {
  name?: unknown;
  email?: unknown;
  year?: unknown;
  language?: unknown;
  interests?: unknown;
};

function isString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: SignupPayload;
  try {
    body = (await req.json()) as SignupPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, year, language, interests } = body;

  if (!isString(name) || name.length > 100) {
    return NextResponse.json({ error: "Tên không hợp lệ" }, { status: 400 });
  }
  if (!isString(email) || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email không hợp lệ" }, { status: 400 });
  }
  if (!isString(year)) {
    return NextResponse.json({ error: "Năm học không hợp lệ" }, { status: 400 });
  }
  if (!isString(language)) {
    return NextResponse.json({ error: "Ngôn ngữ không hợp lệ" }, { status: 400 });
  }
  if (interests !== undefined && !isStringArray(interests)) {
    return NextResponse.json({ error: "Mối quan tâm không hợp lệ" }, { status: 400 });
  }

  const record = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    year,
    language,
    interests: interests ?? [],
  };

  // TODO: persist to DB / forward to Resend / Formspree.
  // For now we log server-side so the developer can confirm submissions in the dev console.
  console.log("[signup]", record);

  return NextResponse.json({ ok: true, id: record.id });
}
