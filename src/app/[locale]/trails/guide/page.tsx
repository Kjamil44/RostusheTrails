"use client";

import { useTranslations } from "next-intl";
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import krchinTrailPic from '../../../../assets/images/golem krcin tabla.jpg'; // update with real path
import trailPic2 from "../../../../assets/images/trail-run-logo.png"; // add as many as you want
import trailPic3 from "../../../../assets/images/krchin-logo2.png";
import trailPic4 from "../../../../assets/images/bagrem-trail-post.png";
import trailPic5 from "../../../../assets/images/krcin-trail-post.jpg";
import trailPic6 from "../../../../assets/images/planina1.jpg";
import trailPic7 from "../../../../assets/images/planina2.jpg";
import { FaFileDownload } from "react-icons/fa";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Page() {
  const t = useTranslations("guide");

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: krchinTrailPic, alt: "Golem Krchin Trail" },
    { src: trailPic2, alt: "Another view of the trail" },
    { src: trailPic3, alt: "Scenic part of the route" },
    { src: trailPic4, alt: "Trail post" },
    { src: trailPic5, alt: "Another trail post" },
    { src: trailPic6, alt: "Another trail post" },
    { src: trailPic7, alt: "Another trail post" }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      {/* Introduction */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("introduction.title")}</h2>
        <p className="text-gray-700">{t("introduction.description")}</p>
      </section>

      {/* GPX Files */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("gpx.title")}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 list-none">
          <li>
            <a href="/gpx/10km.gpx"
              download
              className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <FaFileDownload className="h-5 w-5 mr-2" />
              {t("gpx.twentyfour_km")}
            </a>
          </li>
          <li>
            <a
              href="/gpx/24km.gpx"
              download
              className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              <FaFileDownload className="h-5 w-5 mr-2" />
              {t("gpx.ten_km")}
            </a>
          </li>
        </ul>
      </section>


      {/* Pictures Gallery */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("pictures.title")}</h2>
        {/* Gallery */}
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

        {/* Lightbox */}
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
  );
}