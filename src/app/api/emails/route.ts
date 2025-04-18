import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "../../../../lib/mailer";

const API_KEY = process.env.API_KEY;

export async function POST(req: NextRequest) {
  if (!isValidApiKey(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, email, message } = await req.json();

  try {
    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: "Email sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

function isValidApiKey(req: NextRequest): boolean {
  const apiKey = req.headers.get("x-api-key");
  return apiKey === API_KEY;
}