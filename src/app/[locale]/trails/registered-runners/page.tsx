"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface Runner {
  id: number;
  email: string;
  age: number;
  trail: string;
  country: string;
}

export default function Page() {
  const t = useTranslations("registered-runners");
  const [runners, setRunners] = useState<Runner[]>([]);

  useEffect(() => {
    debugger
    const fetchRunners = async () => {
      const res = await fetch("/api/runners");
      const data = await res.json();
      setRunners(data);
    };

    fetchRunners();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">{t("table.number")}</th>
              <th className="border px-4 py-2">{t("table.name")}</th>
              <th className="border px-4 py-2">{t("table.age")}</th>
              <th className="border px-4 py-2">{t("table.race")}</th>
              <th className="border px-4 py-2">{t("table.country")}</th>
            </tr>
          </thead>
          <tbody>
            {runners.length > 0 ? (
              runners.map((runner) => (
                <tr key={runner.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{runner.id}</td>
                  <td className="border px-4 py-2">{runner.email}</td>
                  <td className="border px-4 py-2">{runner.age}</td>
                  <td className="border px-4 py-2">{runner.trail}</td>
                  <td className="border px-4 py-2">{runner.country}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-4 text-gray-500">
                  {t("no_runners")}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
