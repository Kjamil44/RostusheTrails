"use client";

import { useTranslations, useLocale } from "next-intl";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Page() {
  const t = useTranslations("sponsors");
  const locale = useLocale();

  const sponsors = [
     { logo: "/sponsors/mavrovorostushe.png", url: "https://www.mavrovoirostuse.gov.mk/", name: "OMiR" },
     { logo: "/sponsors/npmavrovo.png", url: "https://npmavrovo.org.mk/", name: "NPM" },
     { logo: "/sponsors/maya.png", url: "https://maya.mk/", name: "Maya" },
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

        {/* Sponsors Grid */}
        {Array.isArray(sponsors) && sponsors.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full mb-16">
            {sponsors.map((item: any, index: number) => {
              // Backward-compatible: allow either string or object
              const isString = typeof item === "string";
              const logo = isString ? item : item?.logo;
              const url = isString ? undefined : item?.url;
              const name = isString ? undefined : item?.name;

              const img = (
                <img
                  src={logo}
                  alt={
                    name
                      ? `${name} — ${t("sponsor_alt")} ${index + 1}`
                      : `${t("sponsor_alt")} ${index + 1}`
                  }
                  className="h-24 object-contain transition-transform duration-150 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              );

              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center group"
                >
                  {url ? (
                    <a
                      href={url}
                      target={/^https?:\/\//i.test(url) ? "_blank" : undefined}
                      rel={/^https?:\/\//i.test(url) ? "noopener noreferrer" : undefined}
                      aria-label={name ? `${name} — ${t("sponsor_alt")}` : t("sponsor_alt")}
                      className="inline-flex"
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </div>
              );
            })}
          </div>
        )}


        {/* CTA remains visible regardless */}
        <div className="text-center max-w-2xl">
          <Link
            href={`/${locale}/contact`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white text-lg font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md"
          >
            {t("contact_us", { defaultValue: "Contact us for sponsorship" })}
          </Link>
        </div>
      </div>
    </>
  );
}
