"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("registered-runners");

  // Placeholder state for runners data
  interface Runner {
    id: number;
    name: string;
    age: number;
    race: string;
    country: string;
  }

  const [runners, setRunners] = useState<Runner[]>([]);

  // Simulate fetching data from a database (replace with actual API call in the future)
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: "John Doe", age: 25, race: "10km", country: "USA" },
        { id: 2, name: "Jane Smith", age: 30, race: "24km", country: "UK" },
        { id: 3, name: "Ivan Petrov", age: 28, race: "10km", country: "Russia" },
      ];
      setRunners(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      {/* Dynamic Table */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">{t("table.number")}</th>
              <th className="border border-gray-300 px-4 py-2 text-left">{t("table.name")}</th>
              <th className="border border-gray-300 px-4 py-2 text-left">{t("table.age")}</th>
              <th className="border border-gray-300 px-4 py-2 text-left">{t("table.race")}</th>
              <th className="border border-gray-300 px-4 py-2 text-left">{t("table.country")}</th>
            </tr>
          </thead>
          <tbody>
            {runners.length > 0 ? (
              runners.map((runner, index) => (
                <tr key={runner.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{runner.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{runner.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{runner.race}</td>
                  <td className="border border-gray-300 px-4 py-2">{runner.country}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="border border-gray-300 px-4 py-2 text-center text-gray-500"
                >
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