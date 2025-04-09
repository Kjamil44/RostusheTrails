"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const t = useTranslations("contact-us");

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
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      {/* Contact Information */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("get_in_touch")}</h2>
        <p className="text-gray-700 mb-2">
          {t("phone")}:{" "}
          <a href="tel:+38970123456" className="text-blue-500 hover:underline">
            +389 70 123 456
          </a>
        </p>
        <p className="text-gray-700">
          {t("email")}:{" "}
          <a href="mailto:info@rostushetrails.com" className="text-blue-500 hover:underline">
            info@rostushetrails.com
          </a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("send_message")}</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              {t("form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={t("form.message_placeholder")}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-medium py-2 rounded-md hover:bg-green-800 transition"
            disabled={loading}
          >
            {loading ? t("form.sending") : t("form.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}