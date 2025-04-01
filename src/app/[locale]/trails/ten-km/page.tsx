import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("ten-km");

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      {/* Rules and Regulations */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("rules.title")}</h2>
        <p className="text-gray-700 mb-4">{t("rules.description")}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("rules.point1")}</li>
          <li>{t("rules.point2")}</li>
          <li>{t("rules.point3")}</li>
        </ul>
      </section>

      {/* Registration Process */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("registration.title")}</h2>
        <p className="text-gray-700 mb-4">{t("registration.description")}</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("registration.step1")}</li>
          <li>{t("registration.step2")}</li>
          <li>{t("registration.step3")}</li>
        </ul>
      </section>

      {/* Mandatory Equipment */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("equipment.title")}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("equipment.item1")}</li>
          <li>{t("equipment.item2")}</li>
          <li>{t("equipment.item3")}</li>
        </ul>
      </section>

      {/* GPX File and Route */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("route.title")}</h2>
        <p className="text-gray-700 mb-4">{t("route.description")}</p>
        <a
          href="/files/ten-km-route.gpx"
          download
          className="text-blue-500 hover:underline"
        >
          {t("route.download")}
        </a>
        <div className="mt-4">
          <img
            src="/images/ten-km-route.jpg"
            alt={t("route.image_alt")}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Registration Form */}
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t("form.title")}</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              {t("form.name")}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={t("form.name_placeholder")}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              {t("form.email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={t("form.email_placeholder")}
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-700 font-medium mb-1">
              {t("form.age")}
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder={t("form.age_placeholder")}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white font-medium py-2 rounded-md hover:bg-green-800 transition"
          >
            {t("form.submit")}
          </button>
        </form>
      </section>
    </div>
  );
}