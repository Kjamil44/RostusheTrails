"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { FaGoogleDrive } from "react-icons/fa";

const MAX_THUMBNAILS = 20;

type Edition = 2026 | 2025;

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

  const [edition, setEdition] = useState<Edition>(2026);

  const [images, setImages] = useState<string[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [loadedMap, setLoadedMap] = useState<
    Record<number, boolean>
  >({});

  const [currentIndex, setCurrentIndex] =
    useState<number | null>(null);

  const driveFolderLinks: Record<Edition, string> = {
    2026:
      process.env
        .NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_LINK_2026 || "#",

    2025:
      process.env
        .NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_LINK_2025 || "#",
  };

  const driveFolderLink = driveFolderLinks[edition];

  const displayedImages =
    images?.slice(0, MAX_THUMBNAILS) ?? [];

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);

        // Clear previous edition state
        setImages(null);
        setLoadedMap({});
        setCurrentIndex(null);

        const res = await fetch(
          `/api/drive-images?edition=${edition}`,
          {
            method: "GET",
            headers: {
              "x-api-key":
                process.env.NEXT_PUBLIC_API_KEY ?? "",
            },
          }
        );

        if (!res.ok) {
          throw new Error(t("error"));
        }

        const data: string[] = await res.json();

        // Shuffle so different photos appear on each load
        const shuffled = shuffleArray(data);

        setImages(shuffled);
      } catch (err: any) {
        setError(err.message || t("error"));
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [edition, t]);

  const handleEditionChange = (
    selectedEdition: Edition
  ) => {
    if (selectedEdition === edition) {
      return;
    }

    setEdition(selectedEdition);
  };

  const handleLoadingComplete = (index: number) => {
    setLoadedMap((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (
      displayedImages.length > 0 &&
      currentIndex !== null
    ) {
      setCurrentIndex(
        (currentIndex - 1 + displayedImages.length) %
          displayedImages.length
      );
    }
  };

  const nextImage = () => {
    if (
      displayedImages.length > 0 &&
      currentIndex !== null
    ) {
      setCurrentIndex(
        (currentIndex + 1) % displayedImages.length
      );
    }
  };

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
          locale:
            locale === "mk" ? "mk_MK" : "en_US",
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
              Rostushe Trails
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
              {t("title")}
            </h1>

            {/* EDITION SELECTOR */}
            <div className="mt-7">
              <div className="inline-flex rounded-2xl border border-emerald-200/70 bg-white/80 p-1 shadow-sm backdrop-blur">
                {([2026, 2025] as Edition[]).map(
                  (year) => (
                    <button
                      key={year}
                      type="button"
                      onClick={() =>
                        handleEditionChange(year)
                      }
                      className={`min-w-[90px] rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                        edition === year
                          ? "bg-emerald-600 text-white shadow-sm"
                          : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      {year}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          {/* Gallery header */}
          <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Rostushe Trails
              </p>

              <h2 className="mt-1 text-xl font-bold text-gray-900">
                {edition} Gallery
              </h2>
            </div>

            {driveFolderLink !== "#" && (
              <a
                href={driveFolderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100 transition hover:bg-emerald-50"
              >
                <FaGoogleDrive size={18} />

                {t("view_more") ||
                  "View more images on Drive"}
              </a>
            )}
          </div>

          {/* GALLERY */}
          <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white p-3 shadow-md sm:p-5">
            {/* ERROR */}
            {error && (
              <div className="flex min-h-[300px] items-center justify-center">
                <p className="font-medium text-red-600">
                  {error}
                </p>
              </div>
            )}

            {/* LOADING */}
            {loading && (
              <div className="flex min-h-[300px] flex-col items-center justify-center gap-4">
                <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-green-600" />

                <p className="text-sm font-medium text-gray-500">
                  {t("loading")}
                </p>
              </div>
            )}

            {/* IMAGES */}
            {!loading &&
              !error &&
              displayedImages.length > 0 && (
                <>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {displayedImages.map(
                      (src, index) => (
                        <button
                          type="button"
                          key={`${edition}-${src}`}
                          onClick={() =>
                            openLightbox(index)
                          }
                          className="group relative overflow-hidden rounded-2xl bg-gray-100 text-left"
                        >
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={src}
                              alt={t("altText")}
                              width={500}
                              height={375}
                              sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 768px) 50vw,
                                (max-width: 1024px) 33vw,
                                25vw
                              "
                              onLoadingComplete={() =>
                                handleLoadingComplete(
                                  index
                                )
                              }
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            />

                            {/* Hover */}
                            <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />

                            {/* Loader */}
                            {!loadedMap[index] && (
                              <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                                <div className="h-9 w-9 animate-spin rounded-full border-4 border-green-700 border-t-transparent" />
                              </div>
                            )}

                            {/* Bottom fade */}
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                        </button>
                      )
                    )}
                  </div>

                  {/* DRIVE CTA */}
                  {images &&
                    images.length >
                      MAX_THUMBNAILS &&
                    driveFolderLink !== "#" && (
                      <div className="mt-7 flex justify-center border-t border-gray-100 pt-6">
                        <a
                          href={driveFolderLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
                        >
                          <FaGoogleDrive
                            size={20}
                          />

                          {t("view_more") ||
                            "View more images on Drive"}
                        </a>
                      </div>
                    )}
                </>
              )}

            {/* EMPTY */}
            {!loading &&
              !error &&
              displayedImages.length === 0 && (
                <div className="flex min-h-[300px] items-center justify-center">
                  <p className="text-sm font-medium text-gray-500">
                    No images available.
                  </p>
                </div>
              )}
          </div>
        </section>

        {/* LIGHTBOX */}
        {currentIndex !== null &&
          displayedImages.length > 0 && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <div
                className="relative flex max-h-[95vh] w-full max-w-5xl items-center justify-center"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >
                {/* CLOSE */}
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close"
                  className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-3xl text-white backdrop-blur-sm transition hover:bg-black/70 sm:-right-12 sm:top-0"
                >
                  &times;
                </button>

                {/* PREVIOUS */}
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-4xl text-white backdrop-blur-sm transition hover:bg-black/70 sm:-left-16"
                >
                  &#8249;
                </button>

                {/* CURRENT IMAGE */}
                <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
                  <Image
                    src={
                      displayedImages[
                        currentIndex
                      ]
                    }
                    alt={t("altText")}
                    width={1200}
                    height={900}
                    sizes="90vw"
                    className="max-h-[90vh] w-auto max-w-full object-contain"
                  />
                </div>

                {/* NEXT */}
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-4xl text-white backdrop-blur-sm transition hover:bg-black/70 sm:-right-16"
                >
                  &#8250;
                </button>

                {/* COUNTER */}
                <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/55 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  {currentIndex + 1} /{" "}
                  {displayedImages.length}
                </div>
              </div>
            </div>
          )}
      </main>
    </>
  );
}