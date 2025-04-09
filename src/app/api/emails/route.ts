import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "../../../../lib/mailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: "Email sent successfully." }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

