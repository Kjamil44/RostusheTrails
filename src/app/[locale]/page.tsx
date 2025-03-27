import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 py-16 px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{t("welcome")}</h1>
        <p className="text-gray-600">
          Discover the beauty of nature and the excitement of our trails.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-8">
        <a
          href="/trails/ten-km"
          className="block bg-white shadow-md rounded-lg p-6 text-gray-800 hover:shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold">10 Km Trail</h2>
          <p>Explore the short trail through scenic landscapes.</p>
        </a>
        <a
          href="/trails/twentyfour-km"
          className="block bg-white shadow-md rounded-lg p-6 text-gray-800 hover:shadow-lg hover:scale-105 transition"
        >
          <h2 className="text-2xl font-semibold">24 Km Trail</h2>
          <p>Challenge yourself with the extended adventure.</p>
        </a>
      </div>
    </div>
  );
}
