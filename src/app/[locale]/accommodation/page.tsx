import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import {
    BedDouble,
    Bath,
    Users,
    MapPin,
    KeyRound,
    Coffee,
    Car,
    Tv,
    Wind,
    ChefHat,
    ExternalLink,
    Plus,
    ArrowRight
} from "lucide-react";

const AIRBNB_URL =
    "https://www.airbnb.com/rooms/1571178562943284229?adults=1&s=76&slcid=a27963472ec54e41aa1b56ae1d3d017e&slug=SWBNHOCe&unique_share_id=8ED2A819-7A41-4419-AF05-27141FC9EDDB&viralityEntryPoint=1";

// photo from the listing (muscache CDN)
const ATA_IMAGE =
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1571178562943284229/original/1a03fdb1-dff1-41f6-8670-372c5b9f5be0.jpeg?im_w=1200";

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "accommodation" });

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

function Amenity({
    icon: Icon,
    text
}: {
    icon: React.ElementType;
    text: string;
}) {
    return (
        <div className="flex items-center gap-2 rounded-xl border bg-background/70 px-3 py-2">
            <Icon className="h-4 w-4 opacity-80" />
            <span className="text-sm">{text}</span>
        </div>
    );
}

type AccommodationCard =
    | {
        kind: "listing";
        id: string;
        title: string;
        location: string;
        imageUrl: string;
        href: string;
        guests: string;
        bedrooms: string;
        bath: string;
        description: string;
    }
    | { kind: "placeholder"; id: string };

export default function AccommodationPage() {
    const t = useTranslations("accommodation");
    const locale = useLocale();

    const cards: AccommodationCard[] = [
        {
            kind: "listing",
            id: "ata-house",
            title: t("listing.ataHouse.title"),
            location: t("listing.ataHouse.location"),
            imageUrl: ATA_IMAGE,
            href: AIRBNB_URL,
            guests: t("listing.ataHouse.guests"),
            bedrooms: t("listing.ataHouse.bedrooms"),
            bath: t("listing.ataHouse.bath"),
            description: t("listing.ataHouse.description")
        },
        { kind: "placeholder", id: "placeholder-1" },
        { kind: "placeholder", id: "placeholder-2" }
    ];

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

                <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pb-14 sm:pt-16">
                    <p className="text-sm font-medium opacity-80">{t("hero.kicker")}</p>
                    <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
                        {t("hero.title")}
                    </h1>
                    <p className="mt-3 max-w-2xl text-base opacity-90 sm:text-lg">
                        {t("hero.subtitle")}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border bg-background/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
                            {t("hero.chips.nearStart")}
                        </span>
                        <span className="rounded-full border bg-background/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
                            {t("hero.chips.freeParking")}
                        </span>
                        <span className="rounded-full border bg-background/70 px-3 py-1 text-sm shadow-sm backdrop-blur">
                            {t("hero.chips.flexibleStay")}
                        </span>
                    </div>
                </div>
            </section>

            {/* GRID */}
            <section className="mx-auto max-w-6xl px-4 pb-16">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold">{t("listings.title")}</h2>
                        <p className="mt-1 opacity-80">{t("listings.subtitle")}</p>
                    </div>
                    <div className="hidden sm:block">
                        <div className="rounded-2xl border bg-background/60 px-4 py-3">
                            <p className="text-sm opacity-80">{t("listings.tip.label")}</p>
                            <p className="text-sm font-medium">{t("listings.tip.value")}</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((c) => {
                        if (c.kind === "placeholder") {
                            return (
                                <div
                                    key={c.id}
                                    className={[
                                        "group relative overflow-hidden rounded-3xl border bg-background/70 p-6 shadow-sm",
                                        "ring-1 ring-emerald-500/25 hover:ring-emerald-500/45",
                                        "transition"
                                    ].join(" ")}
                                >
                                    {/* green glow */}
                                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                                        <div className="absolute -top-24 right-[-5rem] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                                        <div className="absolute -bottom-24 left-[-5rem] h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
                                    </div>

                                    {/* trail stripe */}
                                    <div className="pointer-events-none absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-emerald-400/80 via-emerald-500/30 to-transparent" />

                                    <div className="relative flex h-full flex-col justify-between gap-4">
                                        <div>
                                            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border bg-emerald-500/10">
                                                <Plus className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                                            </div>
                                            <h3 className="text-lg font-semibold">
                                                {t("placeholders.title")}
                                            </h3>
                                            <p className="mt-2 text-sm opacity-80">
                                                {t("placeholders.text")}
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-800 dark:text-emerald-200">
                                            {t("placeholders.badge")}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <article
                                key={c.id}
                                className={[
                                    "group relative overflow-hidden rounded-3xl border bg-background shadow-sm",
                                    "ring-1 ring-emerald-500/25 hover:ring-emerald-500/45",
                                    "transition"
                                ].join(" ")}
                            >
                                {/* green glow */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                                    <div className="absolute -top-24 right-[-5rem] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                                    <div className="absolute -bottom-24 left-[-5rem] h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
                                </div>

                                {/* trail stripe */}
                                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1.5 bg-gradient-to-b from-emerald-400/80 via-emerald-500/30 to-transparent" />

                                {/* Photo header */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                    <Image
                                        src={c.imageUrl}
                                        alt={`${c.title} photo`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded-full bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur dark:bg-emerald-950/60 dark:text-emerald-100">
                                                {t("listing.badges.entireHome")}
                                            </span>
                                            <span className="rounded-full bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur dark:bg-emerald-950/60 dark:text-emerald-100">
                                                {t("listing.badges.airbnb")}
                                            </span>
                                            <span className="rounded-full bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur dark:bg-emerald-950/60 dark:text-emerald-100">
                                                {t("listing.badges.new")}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative p-5">
                                    <h3 className="text-xl font-semibold tracking-tight">
                                        {c.title}
                                    </h3>

                                    <div className="mt-2 flex flex-wrap gap-2">
                                        <Stat icon={MapPin} label={c.location} />
                                        <Stat icon={Users} label={c.guests} />
                                        <Stat icon={BedDouble} label={c.bedrooms} />
                                        <Stat icon={Bath} label={c.bath} />
                                    </div>

                                    <p className="mt-4 text-sm opacity-90">{c.description}</p>

                                    <div className="mt-5 grid gap-2">
                                        <div className="grid gap-2 sm:grid-cols-2">
                                            <Amenity
                                                icon={KeyRound}
                                                text={t("listing.ataHouse.perks.selfCheckIn")}
                                            />
                                            <Amenity
                                                icon={Coffee}
                                                text={t("listing.ataHouse.perks.coffee")}
                                            />
                                            <Amenity
                                                icon={ChefHat}
                                                text={t("listing.ataHouse.perks.kitchen")}
                                            />
                                            <Amenity
                                                icon={Car}
                                                text={t("listing.ataHouse.perks.parking")}
                                            />
                                            <Amenity icon={Tv} text={t("listing.ataHouse.perks.tv")} />
                                            <Amenity
                                                icon={Wind}
                                                text={t("listing.ataHouse.perks.ac")}
                                            />
                                        </div>

                                        <Link
                                            href={c.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                                        >
                                            {t("listing.sidebar.cta")}
                                            <ExternalLink className="h-4 w-4" />
                                        </Link>

                                        <p className="text-xs opacity-70">
                                            {t("listing.sidebar.disclaimer")}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* bottom CTA */}
                <div className="mt-12 overflow-hidden rounded-3xl border bg-background/70 ring-1 ring-emerald-500/25">
                    <div className="relative p-6 sm:p-8">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
                            <div className="absolute -bottom-24 left-[-5rem] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
                        </div>

                        <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <div>
                                <h3 className="text-xl font-semibold">{t("cta.title")}</h3>
                                <p className="mt-1 max-w-2xl text-sm opacity-80">
                                    {t("cta.text")}
                                </p>
                            </div>

                            <Link
                                href={`/${locale}/contact`}
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                            >
                                {t("cta.button")}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
