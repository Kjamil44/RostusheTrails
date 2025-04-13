import { NextRequest, NextResponse } from "next/server";
import { RegisteredRunner } from "../../../../prisma/generated/prisma";
import { getTranslations } from "next-intl/server";
import { sendRegistrationEmail } from "../../../../lib/mailer";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
  const locale = req.headers.get("x-locale") || "en"; // fallback if needed
  const t = await getTranslations({ locale, namespace: "api" });

  try {
    const runners = await prisma.registeredRunner.findMany();
    return NextResponse.json(runners);
  } catch {
    return NextResponse.json({ error: t("fetch_error") }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const locale = req.headers.get("x-locale") || "en";
  const t = await getTranslations({ locale, namespace: "api" });

  const { email, fullName, age, trail, country } = await req.json();

  if (!email || !fullName || !age || !trail || !country) {
    return NextResponse.json({ error: t("all_fields_required") }, { status: 400 });
  }

  try {
    const runners = await prisma.registeredRunner.findMany();

    let isEmailUnique = checkUniqueEmail(runners, email);
    if (!isEmailUnique) {
      return NextResponse.json({ error: t("email_not_unique") }, { status: 400 });
    }

    let isAgeValid = checkRunnersAgeRestrictionByTrail(age, trail);
    if (!isAgeValid) {
      return NextResponse.json({ error: t("age_restriction") }, { status: 400 });
    }

    const newRunner = await prisma.registeredRunner.create({
      data: {
        email,
        fullName,
        age: parseInt(age, 10),
        trail,
        country,
      },
    });

    await sendRegistrationEmail({ to: email, runner: newRunner });

    return NextResponse.json({ success: t("registration_success") }, { status: 201 });
  } catch {
    return NextResponse.json({ error: t("create_error") }, { status: 500 });
  }
}

function checkUniqueEmail(runners: RegisteredRunner[], email: string) {
  for (const runner of runners) {
    if (runner.email === email) {
      return false;
    }
  }
  return true;
}

function checkRunnersAgeRestrictionByTrail(age: number, trail: string) {
  return (trail === "10km" && age >= 15) || (trail === "24km" && age >= 18);
}