import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("guide");

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      {/* Introduction */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("introduction.title")}</h2>
        <p className="text-gray-700">{t("introduction.description")}</p>
      </section>

      {/* GPX Files */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("gpx.title")}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <a
              href="/files/twentyfour-km-route.gpx"
              download
              className="text-blue-500 hover:underline"
            >
              {t("gpx.twentyfour_km")}
            </a>
          </li>
          <li>
            <a
              href="/files/ten-km-route.gpx"
              download
              className="text-blue-500 hover:underline"
            >
              {t("gpx.ten_km")}
            </a>
          </li>
        </ul>
      </section>

      {/* Placeholder for Pictures */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("pictures.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
            <span className="text-gray-600">{t("pictures.placeholder")}</span>
          </div>
          <div className="bg-gray-300 rounded-lg h-48 flex items-center justify-center">
            <span className="text-gray-600">{t("pictures.placeholder")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}