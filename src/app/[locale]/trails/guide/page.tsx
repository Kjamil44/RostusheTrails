import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  ArrowRight,
  FileText,
  Download,
  Shield,
  Backpack,
  Clock3,
  Mountain,
  Leaf,
  AlertTriangle,
  ExternalLink,
  MapPinned,
  CheckCircle2,
  Flag,
  ThermometerSun,
  Phone,
  Route
} from "lucide-react";

import heroImage from "../../../../assets/images/golem krcin tabla.jpg";
import trailPic4 from "../../../../assets/images/planina1.jpg";
import trailPic5 from "../../../../assets/images/planina2.jpg";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guide" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description")
    }
  };
}

function Stat({
  icon: Icon,
  label
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border bg-background/75 px-3 py-2 shadow-sm backdrop-blur">
      <Icon className="h-4 w-4 opacity-80" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  text
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm opacity-80">{text}</p>
    </div>
  );
}

function TrailCard({
  title,
  description,
  href,
  image,
  badge
}: {
  title: string;
  description: string;
  href: string;
  image: any;
  badge: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border bg-background shadow-sm ring-1 ring-emerald-500/25 transition hover:ring-emerald-500/45">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -top-24 right-[-5rem] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-[-5rem] h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur">
            {badge}
          </span>
        </div>
      </div>

      <div className="relative p-5">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm opacity-90">{description}</p>

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
        >
          {badge}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-600" />
      <span className="text-sm opacity-90">{children}</span>
    </li>
  );
}

function RulesTabs({
  locale,
  t
}: {
  locale: string;
  t: Awaited<ReturnType<typeof getTranslations>>;
}) {
  const isMk = locale === "mk";

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
        <div className="mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-emerald-700" />
          <h3 className="text-lg font-semibold">{t("rules.summaryTitle")}</h3>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
            {isMk ? "МК" : "EN"}
          </span>
          <span className="rounded-full border px-3 py-1 text-xs font-medium">
            {t("rules.translationBadge")}
          </span>
        </div>

        <ul className="space-y-3">
          <Bullet>{t("rules.summary1")}</Bullet>
          <Bullet>{t("rules.summary2")}</Bullet>
          <Bullet>{t("rules.summary3")}</Bullet>
          <Bullet>{t("rules.summary4")}</Bullet>
          <Bullet>{t("rules.summary5")}</Bullet>
          <Bullet>{t("rules.summary6")}</Bullet>
        </ul>
      </div>

      <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
        <div className="mb-4 flex items-center gap-2">
          <Backpack className="h-5 w-5 text-emerald-700" />
          <h3 className="text-lg font-semibold">{t("gear.title")}</h3>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border bg-background/60 p-4">
            <p className="text-sm font-semibold">{t("gear.commonTitle")}</p>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li>{t("gear.common1")}</li>
              <li>{t("gear.common2")}</li>
              <li>{t("gear.common3")}</li>
              <li>{t("gear.common4")}</li>
              <li>{t("gear.common5")}</li>
              <li>{t("gear.common6")}</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-background/60 p-4">
            <p className="text-sm font-semibold">{t("gear.longTitle")}</p>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li>{t("gear.long1")}</li>
              <li>{t("gear.long2")}</li>
              <li>{t("gear.long3")}</li>
              <li>{t("gear.long4")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
        <div className="mb-4 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-emerald-700" />
          <h3 className="text-lg font-semibold">{t("penalties.title")}</h3>
        </div>

        <ul className="space-y-3">
          <Bullet>{t("penalties.item1")}</Bullet>
          <Bullet>{t("penalties.item2")}</Bullet>
          <Bullet>{t("penalties.item3")}</Bullet>
          <Bullet>{t("penalties.item4")}</Bullet>
          <Bullet>{t("penalties.item5")}</Bullet>
        </ul>
      </div>
    </div>
  );
}

export default async function GuidePage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guide" });

  const pdfUrl = "/pdfs/pravila-i-propisi-rostushe-trails-2026.pdf";

  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-40 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "18px 18px"
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 pb-10 pt-12 sm:pb-14 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-medium opacity-80">{t("hero.kicker")}</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-3 max-w-2xl text-base opacity-90 sm:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border bg-background/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
                {t("hero.chips.rules")}
              </span>
              <span className="rounded-full border bg-background/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
                {t("hero.chips.gpx")}
              </span>
              <span className="rounded-full border bg-background/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
                {t("hero.chips.safety")}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#rules-center"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                {t("hero.primaryButton")}
                <FileText className="h-4 w-4" />
              </a>

              <a
                href="#downloads"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border bg-background px-5 py-3 text-sm font-semibold transition hover:bg-muted"
              >
                {t("hero.secondaryButton")}
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border shadow-sm ring-1 ring-emerald-500/25">
            <Image
              src={heroImage}
              alt="Rostushe Trails Guide"
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{t("quick.title")}</h2>
          <p className="mt-1 opacity-80">{t("quick.subtitle")}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Clock3}
            title={t("quick.card1.title")}
            text={t("quick.card1.text")}
          />
          <FeatureCard
            icon={Backpack}
            title={t("quick.card2.title")}
            text={t("quick.card2.text")}
          />
          <FeatureCard
            icon={Shield}
            title={t("quick.card3.title")}
            text={t("quick.card3.text")}
          />
          <FeatureCard
            icon={Leaf}
            title={t("quick.card4.title")}
            text={t("quick.card4.text")}
          />
        </div>
      </section>

      {/* TRAILS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">{t("trails.title")}</h2>
            <p className="mt-1 opacity-80">{t("trails.subtitle")}</p>
          </div>
          <div className="hidden sm:block">
            <div className="rounded-2xl border bg-background/60 px-4 py-3">
              <p className="text-sm opacity-80">{t("trails.tipLabel")}</p>
              <p className="text-sm font-medium">{t("trails.tipValue")}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <TrailCard
            title={t("trails.longTitle")}
            description={t("trails.longText")}
            href={`/${locale}/trails/twentyseven-km`}
            image={trailPic4}
            badge={t("trails.viewTrail")}
          />
          <TrailCard
            title={t("trails.shortTitle")}
            description={t("trails.shortText")}
            href={`/${locale}/trails/eleven-km`}
            image={trailPic5}
            badge={t("trails.viewTrail")}
          />
        </div>
      </section>

      {/* RACE FACTS */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{t("facts.title")}</h2>
          <p className="mt-1 opacity-80">{t("facts.subtitle")}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
            <h3 className="text-lg font-semibold">{t("facts.leftTitle")}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <Stat icon={Flag} label={t("facts.date")} />
              <Stat icon={Clock3} label={t("facts.start27")} />
              <Stat icon={Clock3} label={t("facts.start11")} />
              <Stat icon={Mountain} label={t("facts.limit27")} />
              <Stat icon={Mountain} label={t("facts.limit11")} />
              <Stat icon={Route} label={t("facts.autonomy")} />
            </div>
          </div>

          <div className="rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
            <h3 className="text-lg font-semibold">{t("facts.rightTitle")}</h3>
            <ul className="mt-4 space-y-3">
              <Bullet>{t("facts.rule1")}</Bullet>
              <Bullet>{t("facts.rule2")}</Bullet>
              <Bullet>{t("facts.rule3")}</Bullet>
              <Bullet>{t("facts.rule4")}</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* RULES CENTER */}
      <section id="rules-center" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">{t("rules.title")}</h2>
          <p className="mt-1 max-w-3xl opacity-80">{t("rules.subtitle")}</p>
        </div>

        {/* TOP CARDS */}
        <div className="mb-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
            <div className="mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">{t("rules.summaryTitle")}</h3>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                {locale === "mk" ? "МК" : "EN"}
              </span>
              <span className="rounded-full border px-3 py-1 text-xs font-medium">
                {t("rules.translationBadge")}
              </span>
            </div>

            <ul className="space-y-3">
              <Bullet>{t("rules.summary1")}</Bullet>
              <Bullet>{t("rules.summary2")}</Bullet>
              <Bullet>{t("rules.summary3")}</Bullet>
              <Bullet>{t("rules.summary4")}</Bullet>
              <Bullet>{t("rules.summary5")}</Bullet>
              <Bullet>{t("rules.summary6")}</Bullet>
            </ul>
          </div>

          <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
            <div className="mb-4 flex items-center gap-2">
              <Flag className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">{t("facts.leftTitle")}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <Stat icon={Flag} label={t("facts.date")} />
              <Stat icon={Clock3} label={t("facts.start27")} />
              <Stat icon={Clock3} label={t("facts.start11")} />
              <Stat icon={Mountain} label={t("facts.limit27")} />
              <Stat icon={Mountain} label={t("facts.limit11")} />
              <Stat icon={Route} label={t("facts.autonomy")} />
            </div>
          </div>

          <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25 md:col-span-2 xl:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">{t("facts.rightTitle")}</h3>
            </div>

            <ul className="space-y-3">
              <Bullet>{t("facts.rule1")}</Bullet>
              <Bullet>{t("facts.rule2")}</Bullet>
              <Bullet>{t("facts.rule3")}</Bullet>
              <Bullet>{t("facts.rule4")}</Bullet>
            </ul>
          </div>
        </div>

        {/* PDF VIEWER ALONE */}
        <div id="rules-section" className="overflow-hidden rounded-3xl border bg-background shadow-sm ring-1 ring-emerald-500/25">
          <div className="flex flex-col gap-3 border-b px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">{t("rules.viewerTitle")}</h3>
              <p className="text-sm opacity-75">{t("rules.viewerText")}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                <ExternalLink className="h-4 w-4" />
                {t("rules.open")}
              </a>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                <Download className="h-4 w-4" />
                {t("rules.download")}
              </a>
            </div>
          </div>

          <div className="bg-muted/20 p-2 sm:p-4 lg:p-6">
            <div className="mx-auto w-full max-w-5xl">
              <div className="relative aspect-[210/297] w-full overflow-hidden rounded-2xl border bg-white shadow-sm">
                <iframe
                  src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  title="Rostushe Trails Rules PDF"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
            <div className="mb-4 flex items-center gap-2">
              <Backpack className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">{t("gear.title")}</h3>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-sm font-semibold">{t("gear.commonTitle")}</p>
                <ul className="mt-3 space-y-2 text-sm opacity-90">
                  <li>{t("gear.common1")}</li>
                  <li>{t("gear.common2")}</li>
                  <li>{t("gear.common3")}</li>
                  <li>{t("gear.common4")}</li>
                  <li>{t("gear.common5")}</li>
                  <li>{t("gear.common6")}</li>
                </ul>
              </div>

              <div className="rounded-2xl border bg-background/60 p-4">
                <p className="text-sm font-semibold">{t("gear.longTitle")}</p>
                <ul className="mt-3 space-y-2 text-sm opacity-90">
                  <li>{t("gear.long1")}</li>
                  <li>{t("gear.long2")}</li>
                  <li>{t("gear.long3")}</li>
                  <li>{t("gear.long4")}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">{t("penalties.title")}</h3>
            </div>

            <ul className="space-y-3">
              <Bullet>{t("penalties.item1")}</Bullet>
              <Bullet>{t("penalties.item2")}</Bullet>
              <Bullet>{t("penalties.item3")}</Bullet>
              <Bullet>{t("penalties.item4")}</Bullet>
              <Bullet>{t("penalties.item5")}</Bullet>
            </ul>
          </div>

          <div className="h-full rounded-3xl border bg-background p-5 shadow-sm ring-1 ring-emerald-500/25 md:col-span-2 xl:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-700" />
              <h3 className="text-lg font-semibold">{t("downloads.title")}</h3>
            </div>

            <div className="grid gap-3">
              <a
                href="/gpx/krchin-trail-27Km.gpx"
                download
                className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-4 transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium">{t("downloads.gpx27")}</span>
                </div>
                <Download className="h-4 w-4" />
              </a>

              <a
                href="/gpx/bagrem-trail-11km.gpx"
                download
                className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-4 transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium">{t("downloads.gpx11")}</span>
                </div>
                <Download className="h-4 w-4" />
              </a>

              <a
                href={pdfUrl}
                download
                className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-4 transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium">{t("downloads.rulesPdf")}</span>
                </div>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADS + CTA */}
      <section id="downloads" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border bg-background p-6 shadow-sm ring-1 ring-emerald-500/25">
            <h3 className="text-xl font-semibold">{t("downloads.title")}</h3>
            <p className="mt-2 text-sm opacity-80">{t("downloads.subtitle")}</p>

            <div className="mt-5 grid gap-3">
              <a
                href="/gpx/krchin-trail-27Km.gpx"
                download
                className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-4 transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium">{t("downloads.gpx27")}</span>
                </div>
                <Download className="h-4 w-4" />
              </a>

              <a
                href="/gpx/bagrem-trail-11km.gpx"
                download
                className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-4 transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <MapPinned className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium">{t("downloads.gpx11")}</span>
                </div>
                <Download className="h-4 w-4" />
              </a>

              <a
                href={pdfUrl}
                download
                className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-4 transition hover:bg-muted"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-emerald-700" />
                  <span className="font-medium">{t("downloads.rulesPdf")}</span>
                </div>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border bg-background/70 ring-1 ring-emerald-500/25">
            <div className="relative p-6 sm:p-8">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
                <div className="absolute -bottom-24 left-[-5rem] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
              </div>

              <div className="relative">
                <h3 className="text-xl font-semibold">{t("cta.title")}</h3>
                <p className="mt-2 max-w-2xl text-sm opacity-80">
                  {t("cta.text")}
                </p>

                <div className="mt-5 grid gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border bg-background/70 px-4 py-3">
                    <Phone className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm">{t("cta.line1")}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border bg-background/70 px-4 py-3">
                    <ThermometerSun className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm">{t("cta.line2")}</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-2xl border bg-background/70 px-4 py-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm">{t("cta.line3")}</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                  >
                    {t("cta.button")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="#rules-center"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition hover:bg-muted"
                  >
                    {t("cta.secondary")}
                    <FileText className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}