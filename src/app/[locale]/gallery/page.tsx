"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { FaGoogleDrive } from 'react-icons/fa';

const MAX_THUMBNAILS = 25;

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default function GalleryPage() {
    const t = useTranslations("gallery");
    const locale = useLocale();

    const [images, setImages] = useState<string[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                const res = await fetch("/api/drive-images", {
                    method: "GET",
                    headers: {
                        "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
                    },
                });

                if (!res.ok) throw new Error(t("error"));
                const data: string[] = await res.json();
                // Shuffle images so random ones appear each load
                const shuffled = shuffleArray(data);
                setImages(shuffled);
            } catch (err: any) {
                setError(err.message || t("error"));
            } finally {
                setLoading(false);
            }
        }
        fetchImages();
    }, [t]);

    const handleLoadingComplete = (index: number) => {
        setLoadedMap((prev) => ({ ...prev, [index]: true }));
    };

    const openLightbox = (index: number) => setCurrentIndex(index);
    const closeLightbox = () => setCurrentIndex(null);
    const prevImage = () => {
        if (images && currentIndex !== null) {
            setCurrentIndex((currentIndex - 1 + images.length) % images.length);
        }
    };
    const nextImage = () => {
        if (images && currentIndex !== null) {
            setCurrentIndex((currentIndex + 1) % images.length);
        }
    };

    const driveFolderLink = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_LINK || "#";

    return (
        <>
            <NextSeo
                title={t("seo.title")}
                description={t("seo.description")}
                openGraph={{
                    url: `https://rostushetrails.com/${locale}/gallery`,
                    title: t("seo.title"),
                    description: t("seo.description"),
                    images: [
                        {
                            url: "https://rostushetrails.com/logo-detailed.jpg",
                            width: 1200,
                            height: 630,
                            alt: t("seo.imageAlt"),
                        },
                    ],
                    siteName: "Rostushe Trails",
                    type: "website",
                    locale: locale === "mk" ? "mk_MK" : "en_US",
                }}
                twitter={{ cardType: "summary_large_image" }}
            />

            <div className="min-h-screen p-6 flex flex-col items-center font-sans">
                <h1 className="text-5xl font-extrabold text-green-700 mb-10 text-center">
                    {t("title")}
                </h1>

                <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-7xl mb-20">
                    {error && (
                        <p className="text-red-600 font-medium text-center">{error}</p>
                    )}
                    {loading && (
                        <p className="text-gray-700 font-medium text-center">
                            {t("loading")}
                        </p>
                    )}
                    {images && (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {images.slice(0, MAX_THUMBNAILS).map((src, index) => (
                                    <div
                                        key={src}
                                        className="relative cursor-pointer"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <Image
                                            src={src}
                                            alt={t("altText")}
                                            width={400}
                                            height={300}
                                            onLoadingComplete={() => handleLoadingComplete(index)}
                                            className="w-full h-auto rounded-lg shadow-md"
                                        />
                                        {!loadedMap[index] && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                                                <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {images.length > MAX_THUMBNAILS && (
                                <div className="text-center mt-6">
                                    <a
                                        href={driveFolderLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-green-700 hover:underline font-medium"
                                    >
                                        <FaGoogleDrive size={25} color="#15803d" />
                                        {t("view_more") || "View more images on Drive"}
                                    </a>
                                </div>
                            )}
                        </>
                    )}
                </section>

                {currentIndex !== null && images && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative max-w-3xl max-h-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 text-white text-3xl"
                            >
                                &times;
                            </button>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                            >
                                &#8249;
                            </button>
                            <Image
                                src={images[currentIndex]}
                                alt={t("altText")}
                                width={800}
                                height={600}
                                className="rounded-lg"
                            />
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                            >
                                &#8250;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
