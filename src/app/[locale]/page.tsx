import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import trailImage from "../../assets/images/planina.jpg"; // Replace with actual image path
import rulesImage from "../../assets/images/uludag_haris2.jpg"; // Replace with actual image path

export default async function Home() {
  const t = await getTranslations("home");
  const currentLocale = await getLocale();
  
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Welcome Section */}
      <div className="flex flex-col items-center gap-4 py-16 px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{t("welcome")}</h1>
        <p className="text-gray-600">{t("description")}</p>
      </div>

      {/* Trails Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8">
        <a
          href={`/${currentLocale}/trails/ten-km`}
          className="block bg-white shadow-md rounded-lg p-6 text-gray-800 hover:shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold">{t("ten_km_trail.title")}</h2>
          <p>{t("ten_km_trail.description")}</p>
        </a>
        <a
          href={`/${currentLocale}/trails/twentyfour-km`}
          className="block bg-white shadow-md rounded-lg p-6 text-gray-800 hover:shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold">{t("twentyfour_km_trail.title")}</h2>
          <p>{t("twentyfour_km_trail.description")}</p>
        </a>
      </div>

      {/* Mountain Trail Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 py-16 px-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={trailImage}
            alt={t("mountain_trail_image_alt")}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            {t("mountain_trail.title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t("mountain_trail.description")}</p>
        </div>
      </div>

      {/* Rules Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 py-16 px-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={rulesImage}
            alt={t("rules_image_alt")}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-full lg:w-1/2">
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