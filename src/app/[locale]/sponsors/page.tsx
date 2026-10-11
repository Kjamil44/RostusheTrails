
"use client";

import { useLocale, useTranslations } from "next-intl";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  Mountain,
  Users,
  Handshake,
} from "lucide-react";

interface Sponsor {
  logo: string;
  url: string;
  name: string;
}

const sponsors: Sponsor[] = [
  {
    logo: "/sponsors/mavrovorostushe.png",
    url: "https://www.mavrovoirostuse.gov.mk/",
    name: "OMiR",
  },
  {
    logo: "/sponsors/npmavrovo.png",
    url: "https://npmavrovo.org.mk/",
    name: "NPM",
  },
  {
    logo: "/sponsors/maya.png",
    url: "https://maya.mk/",
    name: "Maya",
  },
  {
    logo: "/sponsors/mzrostushe.png",
    url: "https://www.facebook.com/mzrostushe/",
    name: "MZ Rostushe",
  },
  {
    logo: "/sponsors/farmapro.png",
    url: "https://farmapro.mk",
    name: "Farma Pro",
  },
  {
    logo: "/sponsors/bluecaferostushe.png",
    url: "https://www.instagram.com/bluecafferostuse/",
    name: "Blue Cafe Rostushe",
  },
  {
    logo: "/sponsors/redcaferostushe.png",
    url: "",
    name: "Red Cafe Rostushe",
  },
  {
    logo: "/sponsors/balkantours.png",
    url: "https://www.facebook.com/balkantoursrostuse",
    name: "Balkan Tours",
  },
  {
    logo: "/sponsors/emenpromrostushe.png",
    url: "",
    name: "Em-En Prom Rostushe",
  },
  {
    logo: "/sponsors/pelisterka.png",
    url: "https://www.pelisterka.eu/mk",
    name: "Pelisterka",
  },
  {
    logo: "/sponsors/sportlab.png",
    url: "https://m3d.mk/",
    name: "Sportlab",
  },
  {
    logo: "/sponsors/tagtiming.png",
    url: "https://tagtiming.mk",
    name: "Tag Timing",
  },
  {
    logo: "/sponsors/reworker.png",
    url: "https://remorker.mk",
    name: "Reworker",
  },
  {
    logo: "/sponsors/peharskopje.png",
    url: "https://www.facebook.com/PeharSK",
    name: "Pehar Skopje",
  },
  {
    logo: "/sponsors/runnerspot.png",
    url: "https://runnerspot.com",
    name: "RunnerSpot",
  },
  {
    logo: "/sponsors/longurov.png",
    url: "https://longurov.mk",
    name: "Longurov",
  },
  {
    logo: "/sponsors/skyrunningmk.png",
    url: "https://www.facebook.com/skyrunningmk",
    name: "SkyRunning MK",
  },
  {
    logo: "/sponsors/policiskastanicarostushe.png",
    url: "",
    name: "Policiska Stanica Rostushe",
  },
  {
    logo: "/sponsors/natusanamk.png",
    url: "https://natusana.mk",
    name: "Natusana MK",
  },
  {
    logo: "/sponsors/jzuzdravstendomrostushe.png",
    url: "https://www.facebook.com/ZdrDomRostuse",
    name: "JZU Zdravsten Dom Rostushe",
  },
];

const impactItems = [
  { key: "community", icon: Users },
  { key: "nature", icon: Mountain },
  { key: "partnership", icon: Handshake },
] as const;

export default function Page() {
  const t = useTranslations("sponsors");
  const locale = useLocale();

  return (
    <>
      <NextSeo
        title={t("seo.title")}
        description={t("seo.description")}
        openGraph={{
          url: `https://rostushetrails.com/${locale}/sponsors`,
          title: t("seo.title"),
          description: t("seo.description"),
          images: [
            {
              url: "https://rostushetrails.com/trail-run-logo.png",
              width: 1200,
              height: 630,
              alt: t("seo.imageAlt"),
            },
          ],
          siteName: "Rostushe Trails",
          type: "website",
          locale: locale === "mk" ? "mk_MK" : "en_US",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <main className="relative min-h-screen">
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
                backgroundSize: "18px 18px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pb-14 sm:pt-16">
            <p className="text-sm font-medium opacity-80">
              {t("eyebrow")}
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
              {t("intro")}
            </p>
          </div>
        </section>

        {/* SPONSORS SECTION */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
              <HeartHandshake className="h-4 w-4" />
              {t("partnersLabel")}
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t("partnersTitle")}
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 opacity-70 sm:text-base">
              {t("partnersDescription")}
            </p>
          </div>

          {/* LOGO-ONLY SPONSORS GRID */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {sponsors.map((sponsor) => {
              const cardContent = (
                <div className="flex h-36 w-full items-center justify-center p-5 sm:h-44 sm:p-8">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} - ${t("sponsor_alt")}`}
                    width={260}
                    height={150}
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                    className="max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              );

              const cardClasses =
                "group flex items-center justify-center overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg";

              return sponsor.url ? (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sponsor.name} - ${t("visitWebsite")}`}
                  className={cardClasses}
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={sponsor.name}
                  className={cardClasses}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>

          {/* THANK YOU */}
          <div className="mt-10 flex items-center justify-center gap-3 text-center">
            <HeartHandshake className="h-5 w-5 shrink-0 text-emerald-600" />

            <p className="text-sm font-medium opacity-70">
              {t("thankYou")}
            </p>
          </div>
        </section>

        {/* COMMUNITY / IMPACT */}
        <section className="border-y border-emerald-100 bg-emerald-50/40">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                {t("impactLabel")}
              </p>

              <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                {t("impactTitle")}
              </h2>

              <p className="mt-4 text-sm leading-7 opacity-70 sm:text-base">
                {t("impactDescription")}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {impactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.key}
                    className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-bold">
                      {t(`impact.${item.key}.title`)}
                    </h3>

                    <p className="mt-2 text-sm leading-7 opacity-70">
                      {t(`impact.${item.key}.description`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SPONSORSHIP CTA */}
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50/60 p-7 ring-1 ring-emerald-500/10 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-28 right-[-5rem] h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />

              <div className="absolute -bottom-32 left-[-5rem] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">
                  <Handshake className="h-4 w-4" />
                  {t("ctaEyebrow")}
                </div>

                <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  {t("ctaTitle")}
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                  {t("ctaDescription")}
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg sm:w-auto"
                >
                  {t("contact_us")}

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
