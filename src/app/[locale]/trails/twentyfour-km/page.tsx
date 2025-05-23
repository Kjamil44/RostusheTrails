"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from "next-intl";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from "react";
import toast from "react-hot-toast";
import countries from "i18n-iso-countries";
import { NextSeo } from "next-seo";
import krchinTrailPic from '../../../../assets/images/krcin-trail-post.jpg';
import { FaFileDownload, FaMountain, FaClock, FaUsers, FaMapMarkedAlt, FaFirstAid } from 'react-icons/fa';

export default function Page() {
  const t = useTranslations("twentyfour-km");
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

  const onRegistration = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    const alpha3CountryCode = countries.alpha2ToAlpha3(formData.country);

    const runnerData = {
      fullName: formData.name,
      email: formData.email,
      age: parseInt(formData.age),
      trail: "24km",
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
        title={locale === "mk" ? "Крчин Треил 24К" : "Krchin Trail 24K"}
        description={
          locale === "mk"
            ? "Предизвикувачка трка до врвот Голем Крчин со технички терен и автентична природа."
            : "A demanding race to Golem Krchin peak with technical terrain and authentic wilderness."
        }
        openGraph={{
          url: `https://rostushetrails.com/${locale}/trails/twentyfour-km`,
          title: locale === "mk" ? "Крчин Треил 24К" : "Krchin Trail 24K",
          description:
            locale === "mk"
              ? "Искачи се преку алпски шуми, камења и ледничкото езеро Локув до врвот на Крчин."
              : "Ascend through alpine forests, rocks and Lokuv glacial lake to the peak of Krchin.",
          images: [
            {
              url: "https://rostushetrails.com/krcin-trail-post.jpg",
              width: 1200,
              height: 630,
              alt: "Krchin Trail preview"
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
          <p className="text-gray-800 text-lg font-semibold mb-6">{t("overview.description")}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-800 font-medium">
            <div className="flex items-center gap-2"><FaClock className="text-green-600" size={25} /> {t("race_info.start")}</div>
            <div className="flex items-center gap-2"><FaMapMarkedAlt className="text-green-600" size={25} /> {t("race_info.distance")}</div>
            <div className="flex items-center gap-2"><FaMountain className="text-green-600" size={25} /> {t("race_info.elevation")}</div>
            <div className="flex items-center gap-2"><FaClock className="text-green-600" size={25} /> {t("race_info.time_limit")}</div>
            <div className="flex items-center gap-2"><FaUsers className="text-green-600" size={25} /> {t("race_info.max_participants")}</div>
            <div className="flex items-center gap-2"><FaFirstAid className="text-green-600" size={25} /> {t("race_info.aid_stations")}</div>
          </div>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("pricing.title")}</h2>
          <p className="text-gray-800 text-lg font-semibold">{t("pricing.regular")}</p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("starter_pack.title")}</h2>
          <ul className="list-disc list-inside text-gray-800 font-medium space-y-2">
            {t.raw("starter_pack.items").map((item: any, i: Key) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("audience.title")}</h2>
          <ul className="list-disc list-inside text-gray-800 font-medium space-y-2">
            {t.raw("audience.reasons").map((item: any, i: Key) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-4xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("route.title")}</h2>
          <p className="text-gray-800 font-medium mb-4">{t("route.description")}</p>

          <a
            href="/gpx/24km.gpx"
            download
            className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
          >
            <FaFileDownload className="h-5 w-5 mr-2" /> {t("route.download")}
          </a>

          <div className="mt-6">
            <Image
              src={krchinTrailPic}
              alt={t("route.image_alt")}
              width={600}
              height={1000}
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl mb-10 text-center">
          <Link
            href="https://runnerspot.com/eventRegistration?event=RostusheTrails&marathon=Trail&package=Krchin%20Trail%2024km"
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-bold py-4 px-8 rounded-xl transition duration-300 shadow-md"
            target="_blank"
          >
            {t("register_now")}
          </Link>
          <p className="text-sm text-gray-500 mt-2">Powered by RunnerSpot.com</p>
        </section>
      </div>
    </>
  );
}
