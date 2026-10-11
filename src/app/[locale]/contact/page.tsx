
"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { NextSeo } from "next-seo";
import {
  Mail,
  Phone,
  Send,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

export default function Page() {
  const t = useTranslations("contact-us");
  const currentLocale = useLocale();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-locale": currentLocale,
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t("form.success_message"));

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response
          .json()
          .catch(() => ({}));

        toast.error(
          errorData.error || t("form.error_message")
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error(t("form.error_message"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NextSeo
        title={t("seo.title")}
        description={t("seo.description")}
        openGraph={{
          url: `https://rostushetrails.com/${currentLocale}/contact`,
          title: t("seo.title"),
          description: t("seo.ogDescription"),
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
            currentLocale === "mk" ? "mk_MK" : "en_US",
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
              {t("eyebrow")}
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
              {t("title")}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-80 sm:text-lg">
              {t("intro")}
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-8">
            {/* CONTACT DETAILS */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-7">
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t("get_in_touch")}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {t("contactDescription")}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* EMAIL */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {t("email")}
                      </p>

                      <a
                        href="mailto:contact@rostushetrails.com"
                        className="inline-flex max-w-full items-center gap-1.5 break-all text-sm font-semibold text-gray-900 transition-colors hover:text-emerald-700"
                      >
                        contact@rostushetrails.com

                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Phone className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {t("phone")}
                      </p>

                      <a
                        href="tel:+38978394477"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors hover:text-emerald-700"
                      >
                        +389 78 394 477

                        <ArrowUpRight className="h-4 w-4 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* SMALL HELPFUL NOTE */}
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

                <p className="text-sm leading-6 text-gray-600">
                  {t("helpNote")}
                </p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-7">
                  <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                    {t("send_message")}
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {t("formDescription")}
                  </p>
                </div>

                <form
                  className="space-y-5"
                  onSubmit={handleSubmit}
                >
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      {t("form.name")}
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder={t("form.name_placeholder")}
                      required
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 disabled:opacity-60"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      {t("form.email")}
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      placeholder={t("form.email_placeholder")}
                      required
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 disabled:opacity-60"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                      {t("form.message")}
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: e.target.value,
                        }))
                      }
                      placeholder={t("form.message_placeholder")}
                      required
                      disabled={loading}
                      className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 disabled:opacity-60"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        {t("form.submit")}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
