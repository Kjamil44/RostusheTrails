"use client";

import { useTranslations, useLocale } from "next-intl";
import { NextSeo } from "next-seo";

export default function Page() {
  const t = useTranslations("sponsors");
  const locale = useLocale();

  const placeholderLogos = [
    "https://via.placeholder.com/150?text=Firm+1",
    "https://via.placeholder.com/150?text=Firm+2",
    "https://via.placeholder.com/150?text=Firm+3",
    "https://via.placeholder.com/150?text=Firm+4",
    "https://via.placeholder.com/150?text=Firm+5",
    "https://via.placeholder.com/150?text=Firm+6",
    "https://via.placeholder.com/150?text=Firm+7",
    "https://via.placeholder.com/150?text=Firm+8",
  ];

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
          title: locale === "mk" ? "Спонзори | Ростуше Треилс" : "Sponsors | Rostushe Trails",
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

      <div className="min-h-screen p-6 font-sans">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-10">
          {t("title")}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {placeholderLogos.map((logo, index) => (
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
      </div>
    </>
  );
}
