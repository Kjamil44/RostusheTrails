import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import trailImage from "../../assets/images/planina.jpg";
import rulesImage from "../../assets/images/uludag_haris2.jpg";
import villageImage from "../../assets/images/rostushe-naslovna.jpeg";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("home");
  const currentLocale = await getLocale();

  return (
    <main className="min-h-screen flex flex-col items-center font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center gap-8 py-24 md:px-12 animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-700 leading-tight tracking-tight">
          {t("welcome")}
        </h1>
        <p className="text-lg md:text-xl text-gray-800 font-medium max-w-3xl animate-fadeIn delay-200">
          {t("description")}
        </p>
      </section>

      {/* Trails Buttons Section */}
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

      {/* Quick Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24 max-w-6xl w-full px-6 text-center">
        {/* 24KM Card */}
        <div className="bg-white rounded-2xl shadow p-6 transform transition duration-700 hover:scale-105 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition">
              <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L4 20h16L12 2z" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-green-700 mb-2">24KM</p>
          <p className="text-gray-800 font-medium">{t("stats.krchin")}</p>
        </div>

        {/* 10KM Card */}
        <div className="bg-white rounded-2xl shadow p-6 transform transition duration-700 hover:scale-105 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition">
              <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 4 6 4 6s4.13 4 8 4 8-4 8-4-4.13-4-8-4zM4 18c0-2 4-6 8-6s8 4 8 6v2H4v-2z" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-green-700 mb-2">10KM</p>
          <p className="text-gray-800 font-medium">{t("stats.bagrem")}</p>
        </div>

        {/* Runners Card */}
        <div className="bg-white rounded-2xl shadow p-6 transform transition duration-700 hover:scale-105 group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full group-hover:bg-green-200 transition">
              <svg className="w-8 h-8 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V20h14v-3.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C15.64 13.91 18 15.22 18 16.5V20h4v-3.5c0-2.33-4.67-3.5-6-3.5z" />
              </svg>
            </div>
          </div>
          <p className="text-4xl font-extrabold text-green-700 mb-2">150+</p>
          <p className="text-gray-800 font-medium">{t("stats.runners")}</p>
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

      {/* Community CTA */}
      <section className="w-full bg-green-700 py-16 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">{t("cta.title", { defaultValue: "Be part of the trail community" })}</h2>
        <p className="max-w-xl mx-auto font-medium mb-6">{t("cta.description", { defaultValue: "Join runners from all over the region and take on the mountains of Mavrovo." })}</p>
        <Link
          href={`/${currentLocale}/contact`}
          className="inline-block bg-white text-green-700 font-bold py-3 px-6 rounded-xl shadow hover:bg-gray-100 transition-all"
        >
          {t("cta.join", { defaultValue: "Contact Us" })}
        </Link>
      </section>
    </main>
  );
}
