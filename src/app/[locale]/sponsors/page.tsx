"use client";

import { useTranslations, useLocale } from "next-intl";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Page() {
  const t = useTranslations("sponsors");
  const locale = useLocale();

  // Sponsors list is currently empty but layout is ready
  const sponsors: string[] = [];

  return (
    <>
      <NextSeo
        title={locale === "mk" ? "Спонзори | Ростуше Треилс" : "Sponsors | Rostushe Trails"}
        description={
          locale === "mk"
            ? "Партнери и поддржувачи на Ростуше Треилс – благодарност за нивната доверба."
            : "Partners and sponsors supporting Rostushe Trails – thank you for your trust."
        }
        openGraph={{
          url: `https://rostushetrails.com/${locale}/sponsors`,
          title: locale === "mk" ? "Спонзори | Ростусе Треилс" : "Sponsors | Rostushe Trails",
          description:
            locale === "mk"
              ? "Придонесот на локалните и меѓународните компании е од големо значење."
              : "The contribution of local and international firms makes these events possible.",
          images: [
            {
              url: "https://rostushetrails.com/trail-run-logo.png",
              width: 1200,
              height: 630,
              alt: "Rostushe Trails Sponsors"
            }
          ],
          siteName: "Rostushe Trails",
          type: "website",
          locale: locale === "mk" ? "mk_MK" : "en_US"
        }}
        twitter={{
          cardType: "summary_large_image"
        }}
      />

      <div className="min-h-screen p-6 font-sans flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-green-700 text-center mb-10">
          {t("title")}
        </h1>

        {sponsors.length === 0 ? (
          <div className="text-center max-w-2xl mb-20">
            <p className="text-gray-800 text-lg font-medium mb-6">
              {t("coming_soon", {
                defaultValue: "Our 2024 sponsors will be announced soon. Stay tuned!"
              })}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md"
            >
              {t("contact_us", { defaultValue: "Contact us for sponsorship" })}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl w-full">
            {sponsors.map((logo, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`${t("sponsor_alt")} ${index + 1}`}
                  className="max-w-full h-auto"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
