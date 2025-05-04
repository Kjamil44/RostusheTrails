import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import trailImage from "../../assets/images/planina.jpg";
import rulesImage from "../../assets/images/uludag_haris2.jpg";
import villageImage from "../../assets/images/rostushe-naslovna.jpeg";

export default async function Home() {
  const t = await getTranslations("home");
  const currentLocale = await getLocale();

  return (

    <main className="min-h-screen flex flex-col items-center font-sans">
      {/* Welcome Section */}
      <section className="relative flex flex-col items-center text-center gap-8 py-24 px-6 md:px-12 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight tracking-tight">
          {t("welcome")}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 font-medium max-w-3xl animate-fadeIn delay-200">
          {t("description")}
        </p>
      </section>

      {/* Trails Section */}
      <section className="relative w-full flex justify-center mb-24">
        <div className="relative w-full max-w-7xl overflow-hidden rounded-3xl shadow-lg group">
          <Image
            src={villageImage}
            alt={t("village_image_alt")}
            className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
              <a
                href={`/${currentLocale}/trails/ten-km`}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl py-8 px-6 text-center shadow-md hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-2">{t("ten_km_trail.title")}</h2>
                <p className="text-base font-medium">{t("ten_km_trail.description")}</p>
              </a>
              <a
                href={`/${currentLocale}/trails/twentyfour-km`}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl py-8 px-6 text-center shadow-md hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-2xl font-bold mb-2">{t("twentyfour_km_trail.title")}</h2>
                <p className="text-base font-medium">{t("twentyfour_km_trail.description")}</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Trail Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 py-24 px-6 md:px-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2">
          <Image
            src={trailImage}
            alt={t("mountain_trail_image_alt")}
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6">{t("mountain_trail.title")}</h2>
          <p className="text-gray-800 text-lg leading-relaxed font-medium">{t("mountain_trail.description")}</p>
        </div>
      </section>

      {/* Rules Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 py-24 px-6 md:px-12 w-full max-w-7xl">
        <div className="w-full lg:w-1/2">
          <Image
            src={rulesImage}
            alt={t("rules_image_alt")}
            className="rounded-3xl shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-6">{t("rules.title")}</h2>
          <ul className="list-disc list-inside text-gray-800 font-medium space-y-4 text-lg">
            <li>{t("rules.point1")}</li>
            <li>{t("rules.point2")}</li>
            <li>{t("rules.point3")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
