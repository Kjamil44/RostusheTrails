"use client";

import { useTranslations, useLocale } from "next-intl";
import { NextSeo } from "next-seo";

export default function Page() {
  const t = useTranslations("accommodation");
  const locale = useLocale();

  const accommodations = [
    {
      name: "Mountain View Hotel",
      description: "A cozy hotel with stunning mountain views.",
      image: "https://via.placeholder.com/300x200?text=Mountain+View+Hotel",
    },
    {
      name: "Forest Retreat",
      description: "A peaceful retreat surrounded by lush forests.",
      image: "https://via.placeholder.com/300x200?text=Forest+Retreat",
    },
    {
      name: "Lakeside Cabin",
      description: "A charming cabin by the serene lake.",
      image: "https://via.placeholder.com/300x200?text=Lakeside+Cabin",
    },
    {
      name: "Village Inn",
      description: "A traditional inn located in the heart of the village.",
      image: "https://via.placeholder.com/300x200?text=Village+Inn",
    },
  ];

  return (
    <>
      <NextSeo
        title={locale === "mk" ? "Сместување | Ростуше Треилс" : "Accommodation | Rostushe Trails"}
        description={
          locale === "mk"
            ? "Истражете ги препорачаните сместувања околу Ростуше за време на трките."
            : "Explore recommended accommodations near Rostushe during the trail races."
        }
        openGraph={{
          url: `https://rostushetrails.com/${locale}/accommodation`,
          title: locale === "mk" ? "Сместување | Ростуше Треилс" : "Accommodation | Rostushe Trails",
          description:
            locale === "mk"
              ? "Препорачани хотели, кабини и планинарски одморалишта близу до патеките."
              : "Recommended hotels, cabins, and trail-side stays near the event routes.",
          images: [
            {
              url: "https://rostushetrails.com/trail-run-logo.png",
              width: 1200,
              height: 630,
              alt: "Rostushe Trails Accommodation"
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
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          {t("title")}
        </h1>
        <p className="text-center text-gray-800 font-medium mb-12">
          {t("description")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={accommodation.image}
                alt={accommodation.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {t(`accommodations.${index}.name`, {
                    defaultValue: accommodation.name,
                  })}
                </h2>
                <p className="text-gray-700 font-medium">
                  {t(`accommodations.${index}.description`, {
                    defaultValue: accommodation.description,
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
