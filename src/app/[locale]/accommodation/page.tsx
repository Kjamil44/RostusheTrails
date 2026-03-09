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
    ArrowRight,
    Building2,
    Hotel,
    Home
} from "lucide-react";

const AIRBNB_URL =
    "https://www.airbnb.com/rooms/1571178562943284229?adults=1&s=76&slcid=a27963472ec54e41aa1b56ae1d3d017e&slug=SWBNHOCe&unique_share_id=8ED2A819-7A41-4419-AF05-27141FC9EDDB&viralityEntryPoint=1";

const MIAS_URL = "https://miasfavorite.com/";
const DEKO_URL = "https://www.hoteldeko.com.mk";
const ROSTUSE_ROOMS_URL = "https://www.instagram.com/rostuseroomsandapartments_/";

// verified live asset from Mia's Favorite website
const MIAS_IMAGE =
    "https://miasfavorite.com/wp-content/uploads/2021/04/couple-1-1.png";

const DEKO_IMAGE = "https://www.hoteldeko.com.mk/images/landscape.jpg"

// photo from the Airbnb listing
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

type AccommodationCard = {
    id: string;
    title: string;
    location: string;
    imageUrl?: string;
    href: string;
    guests: string;
    bedrooms: string;
    bath: string;
    description: string;
    badges: string[];
    perks: { icon: React.ElementType; text: string }[];
    fallbackIcon?: React.ElementType;
    ctaLabel: string;
};

function CardFallback({
    icon: Icon,
    title
}: {
    icon: React.ElementType;
    title: string;
}) {
    return (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-emerald-700 via-green-700 to-emerald-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.25),transparent_40%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                    <Icon className="h-8 w-8" />
                </div>
                <div className="px-6 text-center">
                    <p className="text-lg font-semibold">{title}</p>
                </div>
            </div>
        </div>
    );
}

export default function AccommodationPage() {
    const t = useTranslations("accommodation");
    const locale = useLocale();

    const cards: AccommodationCard[] = [
        {
            id: "ata-house",
            title: t("listing.ataHouse.title"),
            location: t("listing.ataHouse.location"),
            imageUrl: ATA_IMAGE,
            href: AIRBNB_URL,
            guests: t("listing.ataHouse.guests"),
            bedrooms: t("listing.ataHouse.bedrooms"),
            bath: t("listing.ataHouse.bath"),
            description: t("listing.ataHouse.description"),
            badges: [
                t("listing.badges.entireHome"),
                t("listing.badges.airbnb"),
                t("listing.badges.new")
            ],
            perks: [
                { icon: KeyRound, text: t("listing.ataHouse.perks.selfCheckIn") },
                { icon: Coffee, text: t("listing.ataHouse.perks.coffee") },
                { icon: ChefHat, text: t("listing.ataHouse.perks.kitchen") },
                { icon: Car, text: t("listing.ataHouse.perks.parking") },
                { icon: Tv, text: t("listing.ataHouse.perks.tv") },
                { icon: Wind, text: t("listing.ataHouse.perks.ac") }
            ],
            fallbackIcon: Home,
            ctaLabel: t("listing.buttons.airbnb")
        },
        {
            id: "mias-favorite",
            title: t("listing.miasFavorite.title"),
            location: t("listing.miasFavorite.location"),
            imageUrl: MIAS_IMAGE,
            href: MIAS_URL,
            guests: t("listing.miasFavorite.guests"),
            bedrooms: t("listing.miasFavorite.bedrooms"),
            bath: t("listing.miasFavorite.bath"),
            description: t("listing.miasFavorite.description"),
            badges: [
                t("listing.miasFavorite.badges.boutique"),
                t("listing.miasFavorite.badges.breakfast"),
                t("listing.miasFavorite.badges.spa")
            ],
            perks: [
                { icon: Coffee, text: t("listing.miasFavorite.perks.breakfast") },
                { icon: Car, text: t("listing.miasFavorite.perks.parking") },
                { icon: Tv, text: t("listing.miasFavorite.perks.tv") },
                { icon: Wind, text: t("listing.miasFavorite.perks.spa") },
                { icon: Users, text: t("listing.miasFavorite.perks.family") },
                { icon: MapPin, text: t("listing.miasFavorite.perks.location") }
            ],
            fallbackIcon: Hotel,
            ctaLabel: t("listing.buttons.website")
        },
        {
            id: "hotel-deko",
            title: t("listing.hotelDeko.title"),
            location: t("listing.hotelDeko.location"),
            imageUrl: DEKO_IMAGE,
            href: DEKO_URL,
            guests: t("listing.hotelDeko.guests"),
            bedrooms: t("listing.hotelDeko.bedrooms"),
            bath: t("listing.hotelDeko.bath"),
            description: t("listing.hotelDeko.description"),
            badges: [
                t("listing.hotelDeko.badges.hotel"),
                t("listing.hotelDeko.badges.region"),
                t("listing.hotelDeko.badges.booking")
            ],
            perks: [
                { icon: BedDouble, text: t("listing.hotelDeko.perks.rooms") },
                { icon: Bath, text: t("listing.hotelDeko.perks.bathroom") },
                { icon: MapPin, text: t("listing.hotelDeko.perks.mountain") },
                { icon: Car, text: t("listing.hotelDeko.perks.parking") },
                { icon: Coffee, text: t("listing.hotelDeko.perks.breakfast") },
                { icon: Building2, text: t("listing.hotelDeko.perks.option") }
            ],
            fallbackIcon: Building2,
            ctaLabel: t("listing.buttons.website")
        },
        {
            id: "rostuse-rooms",
            title: t("listing.rostuseRooms.title"),
            location: t("listing.rostuseRooms.location"),
            href: ROSTUSE_ROOMS_URL,
            guests: t("listing.rostuseRooms.guests"),
            bedrooms: t("listing.rostuseRooms.bedrooms"),
            bath: t("listing.rostuseRooms.bath"),
            description: t("listing.rostuseRooms.description"),
            badges: [
                t("listing.rostuseRooms.badges.local"),
                t("listing.rostuseRooms.badges.rostushe"),
                t("listing.rostuseRooms.badges.instagram")
            ],
            perks: [
                { icon: Home, text: t("listing.rostuseRooms.perks.rooms") },
                { icon: MapPin, text: t("listing.rostuseRooms.perks.close") },
                { icon: Users, text: t("listing.rostuseRooms.perks.runners") },
                { icon: BedDouble, text: t("listing.rostuseRooms.perks.flexible") },
                { icon: Coffee, text: t("listing.rostuseRooms.perks.contact") },
                { icon: Car, text: t("listing.rostuseRooms.perks.parking") }
            ],
            fallbackIcon: Home,
            ctaLabel: t("listing.buttons.instagram")
        }
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
                    {cards.map((c) => (
                        <article
                            key={c.id}
                            className={[
                                "group relative overflow-hidden rounded-3xl border bg-background shadow-sm",
                                "ring-1 ring-emerald-500/25 hover:ring-emerald-500/45",
                                "transition"
                            ].join(" ")}
                        >
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="absolute -top-24 right-[-5rem] h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
                                <div className="absolute -bottom-24 left-[-5rem] h-64 w-64 rounded-full bg-emerald-500/15 blur-3xl" />
                            </div>

                            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-1.5 bg-gradient-to-b from-emerald-400/80 via-emerald-500/30 to-transparent" />

                            {c.imageUrl ? (
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                    <img
                                        src={c.imageUrl}
                                        alt={`${c.title} photo`}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex flex-wrap gap-2">
                                            {c.badges.map((badge) => (
                                                <span
                                                    key={badge}
                                                    className="rounded-full bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur dark:bg-emerald-950/60 dark:text-emerald-100"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <CardFallback
                                        icon={c.fallbackIcon ?? Building2}
                                        title={c.title}
                                    />
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex flex-wrap gap-2">
                                            {c.badges.map((badge) => (
                                                <span
                                                    key={badge}
                                                    className="rounded-full bg-emerald-50/90 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur"
                                                >
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

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
                                        {c.perks.map((perk) => (
                                            <Amenity
                                                key={perk.text}
                                                icon={perk.icon}
                                                text={perk.text}
                                            />
                                        ))}
                                    </div>

                                    <Link
                                        href={c.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                                    >
                                        {c.ctaLabel}
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>

                                    <p className="text-xs opacity-70">
                                        {t("listing.sidebar.disclaimer")}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
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