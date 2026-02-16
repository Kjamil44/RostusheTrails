import { NextRequest, NextResponse } from "next/server";
import { RegisteredRunner } from "../../../../prisma/generated/prisma";
import { getTranslations } from "next-intl/server";
import { sendRegistrationEmail } from "../../../../lib/mailer";
import { prisma } from "../../../../lib/prisma";

const API_KEY = process.env.API_KEY;

// ❌ Temporarily disabled — return 403 for all requests

// export async function GET(req: NextRequest) {
//   // return NextResponse.json({ error: "This endpoint is currently disabled." }, { status: 403 });
//   if (!isValidApiKey(req)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const locale = req.headers.get("x-locale") || "en"; // fallback if needed
//   const t = await getTranslations({ locale, namespace: "api" });

//   try {
//     const runners = await prisma.registeredRunner.findMany();
//     return NextResponse.json(runners, { status: 201 });
//   } catch {
//     return NextResponse.json({ error: t("fetch_error") }, { status: 500 });
//   }
// }

//IMPORTANT: Created the endpoint to bypass CORS issues with the remote API. It will simply proxy requests to the remote API and pass through responses.
export async function GET(req: NextRequest) {
  if (!isValidApiKey(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const eventId = searchParams.get("eventId") ?? "43";

  const url =
    `https://runnerspot-api.blackpond-5e9cc4af.germanywestcentral.azurecontainerapps.io/api/runner/getrunnersforevent?eventId=${encodeURIComponent(
      eventId
    )}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  // Pass through status and body
  const text = await res.text();
  return new NextResponse(text, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") ?? "application/json",
    },
  });
}

export async function POST(req: NextRequest) {
  return NextResponse.json({ error: "This endpoint is currently disabled." }, { status: 403 });
  if (!isValidApiKey(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const locale = req.headers.get("x-locale") || "en";
  const t = await getTranslations({ locale, namespace: "api" });

  const { email, fullName, age, trail, country } = await req.json();

  if (!email || !fullName || !age || !trail || !country) {
    return NextResponse.json({ error: t("all_fields_required") }, { status: 400 });
  }

  try {
    const runners = await prisma.registeredRunner.findMany();


    const newRunner = await prisma.registeredRunner.create({
      data: {
        bibNumber: parseInt(age, 10),
        fullName,
        trail,
        country,
        club: "Test Club",
      },
    });

    await sendRegistrationEmail({ to: email, runner: newRunner });

    return NextResponse.json({ success: t("registration_success") }, { status: 201 });
  } catch {
    return NextResponse.json({ error: t("create_error") }, { status: 500 });
  }
}

function isValidApiKey(req: NextRequest): boolean {
  const apiKey = req.headers.get("x-api-key");
  return apiKey === API_KEY;
}