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
  const t = useTranslations("twentyseven-km");
  const t_api = useTranslations("api");
  const locale = useLocale();

  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
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
      trail: "27Km",
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
        title={locale === "mk" ? "Крчин Треил 27К" : "Krchin Trail 27K"}
        description={
          locale === "mk"
            ? "Предизвикувачка трка до врвот Голем Крчин со технички терен и автентична природа."
            : "A demanding race to Golem Krchin peak with technical terrain and authentic wilderness."
        }
        openGraph={{
          url: `https://rostushetrails.com/${locale}/trails/twentyseven-km`,
          title: locale === "mk" ? "Крчин Треил 27К" : "Krchin Trail 27K",
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
        <h1 className="text-5xl font-extrabold text-green-700 mb-10 text-center">
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

          {/* Desktop/table view */}
          <div className="hidden md:block">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <div className="grid grid-cols-3 bg-gray-50 text-sm font-semibold text-gray-700">
                <div className="p-3">{t("pricing.table.tier")}</div>
                <div className="p-3 text-center">{t("pricing.table.price_mkd")}</div>
                <div className="p-3 text-right">{t("pricing.table.note")}</div>
              </div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-3 items-center">
                <div className="p-4 font-semibold">{t("pricing.rows.first_call.label")}</div>
                <div className="p-4 text-center font-bold text-green-700">{t("pricing.rows.first_call.price")}</div>
                <div className="p-4 text-right text-gray-600">{t("pricing.rows.first_call.hint")}</div>
              </div>

              <div className="grid grid-cols-3 items-center bg-green-50/40">
                <div className="p-4 font-semibold">{t("pricing.rows.regular_call.label")}</div>
                <div className="p-4 text-center font-bold text-green-800">{t("pricing.rows.regular_call.price")}</div>
                <div className="p-4 text-right text-gray-600">{t("pricing.rows.regular_call.hint")}</div>
              </div>

              <div className="grid grid-cols-3 items-center">
                <div className="p-4 font-semibold">{t("pricing.rows.last_chance.label")}</div>
                <div className="p-4 text-center font-bold text-green-700">{t("pricing.rows.last_chance.price")}</div>
                <div className="p-4 text-right text-gray-600">{t("pricing.rows.last_chance.hint")}</div>
              </div>
            </div>
          </div>

          {/* Mobile-friendly stacked view */}
          <div className="mt-4 grid gap-3 md:hidden">
            {[
              { k: "first_call" },
              { k: "regular_call" },
              { k: "last_chance" },
            ].map((row) => (
              <div key={row.k} className="rounded-lg border border-gray-200 p-4">
                <div className="text-sm text-gray-500">{t("pricing.table.tier")}</div>
                <div className="font-semibold">{t(`pricing.rows.${row.k}.label`)}</div>

                <div className="mt-2 text-sm text-gray-500">{t("pricing.table.price_mkd")}</div>
                <div className="font-bold text-green-700">{t(`pricing.rows.${row.k}.price`)}</div>

                <div className="mt-2 text-sm text-gray-500">{t("pricing.table.note")}</div>
                <div className="text-gray-600">{t(`pricing.rows.${row.k}.hint`)}</div>
              </div>
            ))}
          </div>
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
            href="/gpx/krchin-trail-27Km.gpx"
            download
            className="inline-flex items-center bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition-all duration-300"
          >
            <FaFileDownload className="h-5 w-5 mr-2" /> {t("route.download")}
          </a>

          {/* Embed Trace de Trail iframe below GPX link */}
          <div className="mt-6 w-full rounded-lg overflow-hidden h-[800px] relative">
            {!iframeLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600" />
              </div>
            )}
            <iframe
              src="https://tracedetrail.fr/en/iframe/6812"
              allowFullScreen
              className="absolute inset-0 w-full h-[888px] border-0"
              scrolling="no"
              title="Krchin Trail Map"
              onLoad={() => setIframeLoaded(true)}
            />
          </div>
        </section>

        <section className="bg-white shadow-xl rounded-xl p-8 w-full max-w-4xl mb-10 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            {t("registration.title", { defaultValue: "Registration" })}
          </h2>

          <div className="flex justify-center mb-4">
            <Link
              href="https://runnerspot.com/eventRegistration?event=RostusheTrails&marathon=Trail&package=Krchin%20Trail%2027km"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-lg font-bold py-4 px-10 rounded-2xl shadow-lg transition-all duration-300 
                 bg-gradient-to-r from-green-600 via-green-700 to-emerald-700 
                 hover:from-green-700 hover:via-emerald-800 hover:to-green-900 
                 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-105"
            >
              {t("registration.register_here", { defaultValue: "Register Here" })}
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            {t("registration.powered_by", { defaultValue: "Powered by RunnerSpot" })}
          </p>
        </section>
      </div>
    </>
  );
}
