import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import trailImage from "../../assets/images/planina.jpg";
import rulesImage from "../../assets/images/uludag_haris2.jpg";

export default async function Home() {
  const t = await getTranslations("home");
  const currentLocale = await getLocale();

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Welcome Section */}
      <div className="flex flex-col items-center gap-4 py-16 px-4 md:px-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{t("welcome")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>

      {/* Trails Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-12 mb-16 w-full max-w-5xl">
        <a
          href={`/${currentLocale}/trails/ten-km`}
          className="mx-auto block bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg rounded-2xl py-6 px-8 text-center hover:from-green-600 hover:to-green-800 hover:scale-105 transition-all duration-300 w-full max-w-sm focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <h2 className="text-2xl font-bold mb-2">{t("ten_km_trail.title")}</h2>
          <p className="text-base">{t("ten_km_trail.description")}</p>
        </a>
        <a
          href={`/${currentLocale}/trails/twentyfour-km`}
          className="mx-auto block bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg rounded-2xl py-6 px-8 text-center hover:from-green-600 hover:to-green-800 hover:scale-105 transition-all duration-300 w-full max-w-sm focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <h2 className="text-2xl font-bold mb-2">{t("twentyfour_km_trail.title")}</h2>
          <p className="text-base">{t("twentyfour_km_trail.description")}</p>
        </a>
      </div>

      {/* Mountain Trail Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 py-16 px-4 md:px-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={trailImage}
            alt={t("mountain_trail_image_alt")}
            className="rounded-lg shadow-md w-full max-w-[750px] h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            {t("mountain_trail.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t("mountain_trail.description")}</p>
        </div>
      </div>

      {/* Rules Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 py-16 px-4 md:px-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={rulesImage}
            alt={t("rules_image_alt")}
            className="rounded-lg shadow-md w-full max-w-[750px] h-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">{t("rules.title")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>{t("rules.point1")}</li>
            <li>{t("rules.point2")}</li>
            <li>{t("rules.point3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}