"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const videos = [
    {
        id: "X5xTafSiZws",
        key: "video1_title",
    },
    {
        id: "LkDL5143ric",
        key: "video2_title",
    },
    {
        id: "aAkVnPcpXiA",
        key: "video3_title",
    },
    {
        id: "iGYvo6E9etg",
        key: "video4_title",
    },
    {
        id: "wGdOyv8YGhg",
        key: "video5_title",
        featured: true,
    },
];

export default function VideosSection() {
    const t = useTranslations("home");
    const [playing, setPlaying] = useState<Record<string, boolean>>({});

    const handlePlay = (id: string) => {
        setPlaying((prev) => ({ ...prev, [id]: true }));
    };

    if (videos.length === 0) return null;

    const featured = videos.find((v) => v.featured) ?? videos[0];
    const others = videos.filter((v) => v.id !== featured.id).slice(0, 4);

    return (
        <section className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-green-700 text-center mb-4">
                {t("videos.section_title")}
            </h2>
            <p className="text-center text-gray-800 font-medium mb-10 max-w-2xl mx-auto">
                {t("videos.section_subtitle")}
            </p>

            <div className="space-y-10">
                {/* Featured video (big) */}
                <article className="bg-white rounded-3xl shadow-lg overflow-hidden border border-green-100 flex flex-col lg:flex-row">
                    <div className="relative w-full lg:w-2/3 aspect-video bg-black">
                        {playing[featured.id] ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${featured.id}?autoplay=1`}
                                title={t(`videos.${featured.key}`)}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => handlePlay(featured.id)}
                                className="group relative w-full h-full"
                                aria-label={t(`videos.${featured.key}`)}
                            >
                                <Image
                                    src={`https://img.youtube.com/vi/${featured.id}/hqdefault.jpg`}
                                    alt={t(`videos.${featured.key}`)}
                                    fill
                                    className="object-cover"
                                />

                                {/* Custom green play button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative flex items-center justify-center">
                                        {/* Outer glow circle */}
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-emerald-500/70 blur-sm group-hover:bg-emerald-400/80 transition" />
                                        {/* Solid circle + triangle */}
                                        <div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-700 shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:bg-green-600 transition-transform duration-200">
                                            <span
                                                className="ml-1 inline-block"
                                                aria-hidden="true"
                                                style={{
                                                    width: 0,
                                                    height: 0,
                                                    borderTop: "10px solid transparent",
                                                    borderBottom: "10px solid transparent",
                                                    borderLeft: "16px solid white",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Dark gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </button>
                        )}
                    </div>

                    {/* Title & description side panel */}
                    <div className="w-full lg:w-1/3 p-6 flex flex-col justify-center">
                        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
                            {t(`videos.${featured.key}`)}
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            {t("videos.featured_description")}
                        </p>
                    </div>
                </article>

                {/* Other videos (4 smaller) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {others.map((video) => (
                        <article
                            key={video.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden border border-green-50 flex flex-col"
                        >
                            <div className="relative w-full aspect-video bg-black">
                                {playing[video.id] ? (
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                                        title={t(`videos.${video.key}`)}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handlePlay(video.id)}
                                        className="group relative w-full h-full"
                                        aria-label={t(`videos.${video.key}`)}
                                    >
                                        <Image
                                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                            alt={t(`videos.${video.key}`)}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Smaller green play button */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="relative flex items-center justify-center">
                                                <div className="w-12 h-12 rounded-full bg-emerald-500/60 blur-[2px] group-hover:bg-emerald-400/80 transition" />
                                                <div className="absolute w-10 h-10 rounded-full bg-green-700 shadow-md flex items-center justify-center group-hover:scale-110 group-hover:bg-green-600 transition-transform duration-200">
                                                    <span
                                                        className="ml-[2px] inline-block"
                                                        aria-hidden="true"
                                                        style={{
                                                            width: 0,
                                                            height: 0,
                                                            borderTop: "7px solid transparent",
                                                            borderBottom: "7px solid transparent",
                                                            borderLeft: "12px solid white",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50 group-hover:opacity-35 transition-opacity" />
                                    </button>
                                )}
                            </div>
                            <div className="p-3 flex-1 flex items-center">
                                <h3 className="text-sm md:text-base font-semibold text-green-800">
                                    {t(`videos.${video.key}`)}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
