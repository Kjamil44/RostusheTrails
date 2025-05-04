"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";
import { NextSeo } from "next-seo";

export default function Page() {
  const t = useTranslations("contact-us");
  const currentLocale = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-locale": currentLocale,
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? ""
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("form.success_message"));
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || t("form.error_message"));
      }
    } catch (error) {
      toast.error(t("form.error_message"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo
        title={currentLocale === "mk" ? "Контакт | Ростуше Треилс" : "Contact Us | Rostushe Trails"}
        description={
          currentLocale === "mk"
            ? "Контактирајте не за информации за трките, партнерства или медиумски прашања."
            : "Get in touch with us for race info, partnerships, or media inquiries."
        }
        openGraph={{
          url: `https://rostushetrails.com/${currentLocale}/contact`,
          title: currentLocale === "mk" ? "Контакт | Ростуше Треилс" : "Contact Us | Rostushe Trails",
          description:
            currentLocale === "mk"
              ? "Испратете порака или најдете детали за контакт со тимот на Ростуше Треилс."
              : "Send a message or find contact details for the Rostushe Trails team.",
          images: [
            {
              url: "https://rostushetrails.com/logo-detailed.jpg",
              width: 1200,
              height: 630,
              alt: "Rostushe Trails Contact"
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
        <h1 className="text-5xl font-extrabold text-green-800 mb-10 text-center">
          {t("title")}
        </h1>

        {/* Contact Info */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("get_in_touch")}</h2>
          <p className="text-gray-800 font-medium mb-2">
            📞 <strong>{t("phone")}:</strong>{" "}
            <a href="tel:+38970123456" className="text-blue-600 hover:underline">+389 78 394 477</a>
          </p>
          <p className="text-gray-800 font-medium">
            📧 <strong>{t("email")}:</strong>{" "}
            <a href="mailto:contact@rostushetrails.com" className="text-blue-600 hover:underline">contact@rostushetrails.com</a>
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl mb-20">
          <h2 className="text-2xl font-bold text-green-700 mb-4">{t("send_message")}</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">
                {t("form.name")}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
                placeholder={t("form.name_placeholder")}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">
                {t("form.email")}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
                placeholder={t("form.email_placeholder")}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">
                {t("form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 font-medium"
                placeholder={t("form.message_placeholder")}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white text-lg font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md"
              disabled={loading}
            >
              {loading ? t("form.sending") : t("form.submit")}
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
