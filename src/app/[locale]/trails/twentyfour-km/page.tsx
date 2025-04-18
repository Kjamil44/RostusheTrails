"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";
import CountrySelect from "../../components/CountrySelect";
import { CheckCircle } from "lucide-react";
import countries from "i18n-iso-countries";

export default function Page() {
  const t = useTranslations("twentyfour-km");
  const t_api = useTranslations("api");

  const currentLocale = useLocale();

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

    // Map the 2-letter country code to the 3-letter country code
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
          'x-locale': currentLocale,
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
      console.error("Error:", error);
      toast.error(t_api("catch_error"));
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      {/* Rules and Regulations */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("rules.title")}</h2>
        <p className="text-gray-700 mb-4">{t("rules.description")}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("rules.point1")}</li>
          <li>{t("rules.point2")}</li>
          <li>{t("rules.point3")}</li>
        </ul>
      </section>

      {/* Registration Process */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("registration.title")}</h2>
        <p className="text-gray-700 mb-4">{t("registration.description")}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("registration.step1")}</li>
          <li>{t("registration.step2")}</li>
          <li>{t("registration.step3")}</li>
        </ul>
      </section>

      {/* Mandatory Equipment */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("equipment.title")}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("equipment.item1")}</li>
          <li>{t("equipment.item2")}</li>
          <li>{t("equipment.item3")}</li>
        </ul>
      </section>

      {/* GPX File and Route */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("route.title")}</h2>
        <p className="text-gray-700 mb-4">{t("route.description")}</p>
        <a
          href="/files/twentyfour-km-route.gpx"
          download
          className="text-blue-500 hover:underline"
        >
          {t("route.download")}
        </a>
        <div className="mt-4">
          <img
            src="/images/twentyfour-km-route.jpg"
            alt={t("route.image_alt")}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Registration Form */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("form.title")}</h2>

        {registered ? (
          <div className="flex flex-col items-center justify-center text-center text-green-700 space-y-4">
            <CheckCircle size={64} className="text-green-600" />
            <p className="text-xl font-semibold">{t("form.success_message")}</p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={onRegistration}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={t("form.name_placeholder")}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={t("form.email_placeholder")}
                required
              />
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
                {t("form.age")}
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={t("form.age_placeholder")}
                required
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-gray-700 font-medium mb-1">
                {t("form.country")}
              </label>
              <CountrySelect
                id="country"
                name="country"
                value={formData.country}
                onChange={(value) => setFormData((prev) => ({ ...prev, country: value }))}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder={t("form.country_placeholder")}
                required
              />
            </div>

            {/* Submit button with spinner */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white font-medium py-2 rounded-md hover:bg-green-800 transition flex items-center justify-center"
              disabled={loading}
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              )}
              {t("form.submit")}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}