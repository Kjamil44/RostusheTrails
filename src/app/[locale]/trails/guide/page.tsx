"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from "next-intl";
import { FaFileDownload, FaFilePdf } from "react-icons/fa";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { NextSeo } from "next-seo";

import krchinTrailPic from '../../../../assets/images/golem krcin tabla.jpg';
import trailPic2 from "../../../../assets/images/trail-run-logo.png";
import trailPic3 from "../../../../assets/images/krchin-logo2.png";
import trailPic4 from "../../../../assets/images/planina1.jpg";
import trailPic5 from "../../../../assets/images/planina2.jpg";
import trailPic6 from "../../../../assets/images/lokuv1.jpg";
import trailPic7 from "../../../../assets/images/lokuv2.jpg";
import trailPic8 from "../../../../assets/images/lokuv3.jpg";

export default function Page() {
  const t = useTranslations("guide");
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: krchinTrailPic, alt: "Golem Krchin Trail" },
    { src: trailPic2, alt: "Trail logo" },
    { src: trailPic3, alt: "Krchin logo" },
    { src: trailPic4, alt: "Mountain view 1" },
    { src: trailPic5, alt: "Mountain view 2" },
    { src: trailPic6, alt: "Lokuv lake view 1" },
    { src: trailPic7, alt: "Lokuv lake view 2" },
    { src: trailPic8, alt: "Lokuv lake view 3" }
  ];

  return (
    <>
      <NextSeo
        title={currentLocale === "mk" ? "Водич за патеките" : "Trail Guide"}
        description={
          currentLocale === "mk"
            ? "Сѐ што треба да знаете за Krchin Trail 27K и Bagrem Trail 11К – опис, GPX, фотографии."
            : "Everything you need to know about Krchin Trail 27K and Bagrem Trail 11К – descriptions, GPX files, photos."
        }
        openGraph={{
          url: `https://rostushetrails.com/${currentLocale}/trails/guide`,
          title: currentLocale === "mk" ? "Водич за патеките" : "Trail Guide",
          description:
            currentLocale === "mk"
              ? "Информации и фотографии за двете патеки во Националниот парк Маврово."
              : "Details and images of both trails in Mavrovo National Park.",
          images: [
            {
              url: "https://rostushetrails.com/trail-run-logo.png",
              width: 1200,
              height: 630,
              alt: "Trail Guide Overview"
            }
          ],
          siteName: "Rostushe Trails",
          type: "website",
          locale: currentLocale === "mk" ? "mk_MK" : "en_US"
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
      />

      <div className="min-h-screen p-6 flex flex-col items-center font-sans">
        <h1 className="text-5xl font-extrabold text-green-700 mb-10 text-center">
          {t("overview.title")}
        </h1>

        {/* Overview */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10 text-center">
          <p className="text-gray-700 text-lg">{t("overview.description")}</p>
        </section>

        {/* Krchin Trail Section */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <Link href={`/${currentLocale}/trails/twentyseven-km`}>
            <h2 className="text-2xl font-bold text-green-700 mb-4 hover:underline">
              {t("krchin.title")}
            </h2>
          </Link>
          <p className="text-gray-700 ">{t("krchin.description")}</p>
        </section>

        {/* Bagrem Trail Section */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <Link href={`/${currentLocale}/trails/eleven-km`}>
            <h2 className="text-2xl font-bold text-green-700 mb-4 hover:underline">
              {t("bagrem.title")}
            </h2>
          </Link>
          <p className="text-gray-700">{t("bagrem.description")}</p>
        </section>

        {/* GPX Downloads */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{t("gpx.title")}</h2>
          <div className="flex flex-col gap-4">
            <a
              href="/gpx/krchin-trail-27Km.gpx"
              download
              className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
            >
              <FaFileDownload className="h-5 w-5 mr-2" />
              {t("gpx.twentyseven_km")}
            </a>
            <a
              href="/gpx/bagrem-trail-11km.gpx"
              download
              className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
            >
              <FaFileDownload className="h-5 w-5 mr-2" />
              {t("gpx.ten_km")}
            </a>
          </div>
        </section>

        {/* Rules & Regulations Section */}
        <section   id="rules-section" className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{t("rules.title")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{t("rules.bullet1")}</li>
            <li>{t("rules.bullet2")}</li>
            <li>{t("rules.bullet3")}</li>
            <li>{t("rules.bullet4")}</li>
            <li>{t("rules.bullet5")}</li>
            <li>{t("rules.bullet6")}</li>
          </ul>

          <p className="mt-6 text-gray-600 italic">{t("rules.note")}</p>

          <div className="mt-4">
            <a
              href="/pdfs/pravila-i-propisi-rostushe-trails-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
            >
              <FaFilePdf className="h-5 w-5 mr-2" />
              {t("rules.open")}
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">{t("pictures.title")}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={250}
                  height={250}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            ))}
          </div>

          {open && (
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={images.map((image) => ({ src: image.src.src }))}
              index={currentIndex}
              on={{ view: ({ index }) => setCurrentIndex(index) }}
            />
          )}
        </section>
      </div>
    </>
  );
}
