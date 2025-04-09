"use client";

import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("sponsors");

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
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
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
  );
}