"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";
import countries from "i18n-iso-countries";
import { NextSeo } from "next-seo";
import bagremTrailPic from '../../../../assets/images/bagrem-trail-post.png';
import { FaFileDownload, FaMountain, FaClock, FaUsers, FaMapMarkedAlt, FaFirstAid } from 'react-icons/fa';

export default function Page() {
  const t = useTranslations("ten-km");
  const t_api = useTranslations("api");
  const locale = useLocale();

  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    country: ""
  });

  const onRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const alpha3CountryCode = countries.alpha2ToAlpha3(formData.country);

    const runnerData = {
      fullName: formData.name,
      email: formData.email,
      age: parseInt(formData.age),
      trail: "10km",
      country: alpha3CountryCode,
    };

    try {
      const res = await fetch('/api/runners', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-locale': locale,
          'x-api-key': process.env.NEXT_PUBLIC_API_KEY ?? ""
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
    } catch (error) {
      toast.error(t_api("catch_error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo
        title={locale === "mk" ? "Багрем Треил 10К" : "Bagrem Trail 10K"}
        description={
          locale === "mk"
            ? "Идеална патека за рекреативци и почетници, низ долината на Радика и селото Јанче."
            : "An ideal trail for recreational and beginner runners through the Radika valley and the village of Janche."
        }
        openGraph={{
          url: `https://rostushetrails.com/${locale}/trails/ten-km`,
          title: locale === "mk" ? "Багрем Треил 10К" : "Bagrem Trail 10K",
          description:
            locale === "mk"
              ? "Започнува од Ростуше, минува низ Радика и Јанче, враќа се преку Аџиевци."
              : "Starting in Rostushe, it follows the Radika river and returns via Janche and Adjievci.",
          images: [
            {
              url: "https://rostushetrails.com/bagrem-trail-post.png",
              width: 1200,
              height: 630,
              alt: "Bagrem Trail preview"
            }
          ],
          siteName: "Rostushe Trails",
          type: "article",
          locale: locale === "mk" ? "mk_MK" : "en_US"
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <div className="min-h-screen p-6 flex flex-col items-center font-sans">
        <h1 className="text-5xl font-extrabold text-green-800 mb-10 text-center">
          {t("overview.title")}
        </h1>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <p className="text-gray-800 text-lg font-semibold mb-6">
            {t("overview.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-800 font-medium">
            <div className="flex items-center gap-2"><FaClock className="text-green-600" size={25} /> {t("race_info.start")}</div>
            <div className="flex items-center gap-2"><FaMapMarkedAlt className="text-green-600" size={25} /> {t("race_info.distance")}</div>
            <div className="flex items-center gap-2"><FaMountain className="text-green-600" size={25} /> {t("race_info.elevation")}</div>
            <div className="flex items-center gap-2"><FaClock className="text-green-600" size={25} /> {t("race_info.time_limit")}</div>
            <div className="flex items-center gap-2"><FaUsers className="text-green-600" size={25} /> {t("race_info.max_participants")}</div>
            <div className="flex items-center gap-2"><FaFirstAid className="text-green-600" size={25} /> {t("race_info.aid_station")}</div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("pricing.title")}</h2>
          <p className="text-gray-800 text-lg font-semibold">{t("pricing.regular")}</p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("starter_pack.title")}</h2>
          <ul className="list-disc list-inside text-gray-800 font-medium space-y-2">
            {t.raw("starter_pack.items").map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("audience.title")}</h2>
          <p className="text-gray-800 text-lg font-semibold">{t("audience.description")}</p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("route.title")}</h2>
          <p className="text-gray-800 font-medium mb-4">{t("route.description")}</p>

          <a
            href="/gpx/10km.gpx"
            download
            className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
          >
            <FaFileDownload className="h-5 w-5 mr-2" /> {t("route.download")}
          </a>

          <div className="mt-6">
            <Image
              src={bagremTrailPic}
              alt={t("route.image_alt")}
              width={600}
              height={1000}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl mb-10 text-center">
          <Link
            href="https://runnerspot.com/eventRegistration?event=RostusheTrails&marathon=Trail&package=Bagrem%20Trail%2010KM"
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-bold py-4 px-8 rounded-xl transition duration-300 shadow-md"
            target='_blank'
          >
            {t("register_now")}
          </Link>
          <p className="text-sm text-gray-500 mt-2">Powered by RunnerSpot.com</p>
        </section>
      </div>
    </>
  );
}