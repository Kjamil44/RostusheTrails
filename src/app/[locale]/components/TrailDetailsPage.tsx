"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import countries from "i18n-iso-countries";
import { NextSeo } from "next-seo";
import { ArrowUpRight, Check, Clock3, Download, Flag, MapPinned, Mountain, ShieldCheck, Ticket, Trees, Users, AlertTriangle, Calendar } from "lucide-react";

export interface TrailConfig {
  year: number;
  distance: number;
  elevation: number | null;
  date: string;
  start: string;
  limitHours: number;
  gpx: string;
  map: string;
  registration: string;
  slug: "eleven-km" | "twentyseven-km";
  translationNamespace: "eleven-km" | "twentyseven-km";
  seoImage: string;
  registrationTrail: string;
  prices: readonly { key: "early" | "regular" | "last"; amount: number; from: string | null; until: string }[];
}

export const BAGREM_RACE: TrailConfig = {
  year: 2027,
  distance: 11,
  elevation: 520,
  date: "14.08.2027",
  start: "10:00",
  limitHours: 4,
  gpx: "/gpx/bagrem-trail-11km.gpx",
  map: "https://tracedetrail.fr/en/iframe/10484",
  registration: "https://runnerspot.com/event/RostusheTrails",
  slug: "eleven-km",
  translationNamespace: "eleven-km",
  seoImage: "https://rostushetrails.com/bagrem-trail-post.png",
  registrationTrail: "11km",
  prices: [
    { key: "early", amount: 1000, from: null, until: "2027-01-31" },
    { key: "regular", amount: 1300, from: "2027-02-01", until: "2027-06-30" },
    { key: "last", amount: 1500, from: "2027-07-01", until: "2027-09-09" },
  ],
} as const;


export const KRCHIN_RACE: TrailConfig = {
  ...BAGREM_RACE,
  distance: 27,
  elevation: 1700,
  start: "08:00",
  limitHours: 8,
  gpx: "/gpx/krchin-trail-27Km.gpx",
  map: "https://tracedetrail.fr/en/iframe/6812",
  slug: "twentyseven-km",
  translationNamespace: "twentyseven-km",
  seoImage: "https://rostushetrails.com/krcin-trail-post.jpg",
  registrationTrail: "27Km",
  prices: [
    { key: "early", amount: 1500, from: null, until: "2027-01-31" },
    { key: "regular", amount: 1800, from: "2027-02-01", until: "2027-06-30" },
    { key: "last", amount: 2000, from: "2027-07-01", until: "2027-09-09" },
  ],
};

export const PACK_KEYS = [
  "bib", "medal", "shirt", "gift", "ride", "refreshments", "medical",
  "photos", "sponsors", "results", "party",
] as const;

export default function TrailDetailsPage({ race: RACE }: { race: TrailConfig }) {
  const t = useTranslations(RACE.translationNamespace);
  const t_api = useTranslations("api");
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", age: "", country: "" });

  const onRegistration = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const alpha3CountryCode = countries.alpha2ToAlpha3(formData.country);
    const runnerData = {
      fullName: formData.name,
      email: formData.email,
      age: parseInt(formData.age, 10),
      trail: RACE.registrationTrail,
      country: alpha3CountryCode,
    };
    try {
      const res = await fetch("/api/runners", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-locale": locale,
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
        },
        body: JSON.stringify(runnerData),
      });
      if (res.ok) {
        toast.success(t_api("registration_success"));
        setRegistered(true);
      } else {
        const error = await res.json();
        toast.error(`${error.error}`);
      }
    } catch {
      toast.error(t_api("catch_error"));
    } finally {
      setLoading(false);
    }
  };
  // Keep state available for the future registration form.
  void onRegistration;
  void registered;
  void loading;
  void setFormData;

  const cta = () => (
    <a
      href={RACE.registration}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600`}
    >
      {t("registration.button")} <ArrowUpRight className="h-4 w-4" />
    </a>
  );

  return (
    <>
      <NextSeo
        title={t("seo.title")}
        description={t("seo.description")}
        openGraph={{
          url: `https://rostushetrails.com/${locale}/trails/${RACE.slug}`,
          title: t("seo.title"),
          description: t("seo.description"),
          images: [{ url: RACE.seoImage, width: 1200, height: 630, alt: t("seo.imageAlt") }],
          siteName: "Rostushe Trails",
          type: "article",
          locale: locale === "mk" ? "mk_MK" : "en_US",
        }}
        twitter={{ cardType: "summary_large_image" }}
      />
      <main className="relative min-h-screen">
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="absolute -bottom-40 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-12 sm:pt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">Rostushe Trails · {RACE.year}</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-green-700 sm:text-5xl">{t("overview.title")}</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">{t("overview.description")}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-emerald-800">{RACE.distance} km</span>
              {RACE.elevation !== null && <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-emerald-800">{RACE.elevation} D+</span>}
              {RACE.distance === 27 && <span className="rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-emerald-800">{t("overview.highest_point")}</span>}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-emerald-800"><Trees className="h-4 w-4" />{t("overview.terrain")}</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-8 px-4 pb-20">
          {/* Core race facts: the same component can serve 27K. */}
          <section aria-label={t("facts.title")} className="grid grid-cols-2 gap-3 md:grid-cols-5">
            {[
              { icon: MapPinned, label: t("facts.distance"), value: `${RACE.distance} km` },
              { icon: Mountain, label: t("facts.elevation"), value: RACE.elevation === null ? t("facts.toConfirm") : `${RACE.elevation} D+` },
              { icon: Calendar, label: t("facts.date"), value: RACE.date },
              { icon: Clock3, label: t("facts.start"), value: RACE.start },
              { icon: Flag, label: t("facts.limit"), value: t("facts.hours", { hours: RACE.limitHours }) },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <Icon className="mb-3 h-5 w-5 text-emerald-600" />
                <p className="text-xs font-medium text-gray-500">{label}</p>
                <p className="mt-1 text-xl font-extrabold text-gray-900">{value}</p>
              </div>
            ))}
          </section>

          <section id="pricing" className="scroll-mt-8">
            <div className="mb-5 flex items-center gap-2"><Ticket className="h-5 w-5 text-emerald-600" /><h2 className="text-2xl font-extrabold text-gray-900">{t("pricing.title")}</h2></div>
            <p className="mb-5 text-sm text-gray-600">{t("pricing.subtitle")}</p>
            <div className="grid gap-4 md:grid-cols-3">
              {RACE.prices.map((tier, index) => (
                <div key={tier.key} className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm ${index === 1 ? "border-emerald-300 ring-1 ring-emerald-200" : "border-gray-200"}`}>
                  <p className="text-sm font-semibold text-emerald-700">{t(`pricing.${tier.key}.title`)}</p>
                  <p className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900">{tier.amount.toLocaleString(locale === "mk" ? "mk-MK" : "en-US")} <span className="text-sm font-semibold text-gray-500">{t("pricing.currency")}</span></p>
                  <p className="mt-3 text-sm text-gray-600">{t(`pricing.${tier.key}.dates`)}</p>
                  {tier.key === "last" && <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">{t("pricing.last.note")}</p>}
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-5">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <h2 className="text-2xl font-extrabold text-gray-900">{t("starter_pack.title")}</h2>
              <p className="mt-2 text-sm text-gray-500">{t("starter_pack.subtitle")}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {PACK_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm leading-6 text-gray-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{t(`starter_pack.items.${key}`)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">{t("starter_pack.lastChanceNote")}</p>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-8 lg:col-span-2">
              <ShieldCheck className="h-7 w-7 text-emerald-700" />
              <h2 className="mt-4 text-xl font-bold text-gray-900">{t("raceDay.title")}</h2>
              <p className="mt-3 text-sm leading-7 text-gray-700">{t("raceDay.description")}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-800"><Users className="h-4 w-4" />{t("raceDay.audience")}</div>
            </div>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900">{t("route.title")}</h2>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-600">{t("route.description")}</p>
              </div>
              <a href={RACE.gpx} download className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"><Download className="h-4 w-4" />{t("route.download")}</a>
            </div>
            <div className="relative mt-6 h-[540px] overflow-hidden rounded-xl border border-gray-100 bg-gray-50 sm:h-[720px]">
              {!iframeLoaded && <div className="absolute inset-0 z-10 flex items-center justify-center bg-white"><div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-600" /></div>}
              <iframe src={RACE.map} title={t("route.mapTitle")} loading="lazy" allowFullScreen onLoad={() => setIframeLoaded(true)} className="absolute inset-0 w-full h-[825px] border-0" />
            </div>
          </section>

          <section className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
            <p className="text-sm leading-7 text-amber-950"><strong>{t("notice.title")}</strong> {t("notice.description")}</p>
          </section>

          <section className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50/70 p-7 text-center sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{t("registration.title")}</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600">{t("registration.description")}</p>
              <div className="mt-6">{cta()}</div>
              <p className="mt-3 text-xs font-medium text-gray-500">{t("registration.poweredBy")}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
