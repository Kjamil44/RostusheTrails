"use client";

import { useTranslations } from "next-intl";
import Image from 'next/image';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import krchinTrailPic from "@/assets/images/golem krcin tabla.jpg"; // update with real path
import trailPic2 from "@/assets/images/trail-run-logo.png"; // add as many as you want
import trailPic3 from "@/assets/images/krchin-logo2.png";
import trailPic4 from "@/assets/images/bagrem-trail-post.png";
import trailPic5 from "@/assets/images/krcin-trail-post.png";

export default function Page() {
  const t = useTranslations("guide");

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
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="/files/twentyfour-km-route.gpx"
              download
              className="text-blue-500 hover:underline"
            >
              {t("gpx.twentyfour_km")}
            </a>
          </li>
          <li>
            <a
              href="/files/ten-km-route.gpx"
              download
              className="text-blue-500 hover:underline"
            >
              {t("gpx.ten_km")}
            </a>
          </li>
        </ul>
      </section>

      {/* Pictures Gallery */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("pictures.title")}</h2>
    {/* TODO FIX IMAGE SIZES */}
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          className="rounded-lg shadow-md custom-carousel"
        >
          <div className="flex justify-center items-center h-[600px]">
            <Image
              src={krchinTrailPic}
              alt="Golem Krchin Trail"
              width={250}
              height={250}
              className="rounded-lg object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-[600px]">
            <Image
              src={trailPic2}
              alt="Another view of the trail"
              width={250}
              height={250}
              className="rounded-lg object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-[600px]">
            <Image
              src={trailPic3}
              alt="Scenic part of the route"
              width={250}
              height={250}
              className="rounded-lg object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-[600px]">
            <Image
              src={trailPic4}
              alt="Scenic part of the route"
              width={250}
              height={250}
              className="rounded-lg object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-[600px]">
            <Image
              src={trailPic5}
              alt="Scenic part of the route"
              width={250}
              height={250}
              className="rounded-lg object-contain"
            />
          </div>
        </Carousel>
      </section>
    </div>
  );
}