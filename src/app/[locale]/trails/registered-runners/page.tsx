"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { GridColDef } from "@mui/x-data-grid";
import countries from "i18n-iso-countries";
import WorldFlag from "react-world-flags";
import Link from "next/link";

interface Runner {
  bibNumber: number;
  fullName: string;
  club: string;
  trail: string;
  country: string;
}

type SortKey = keyof Runner;
type SortDirection = "asc" | "desc";

export default function Page() {
  const t = useTranslations("registered-runners");
  const currentLocale = useLocale();
  const [runners, setRunners] = useState<Runner[]>([]);
  const [trailFilter, setTrailFilter] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("bibNumber");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        const resLocal = await fetch("/api/runners", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-locale": currentLocale,
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
          },
        });

        const resRemote = await fetch(
          "https://runnerspot.com/api/runner/getrunnersforevent?eventId=43"
        );

        const localData = resLocal.ok ? await resLocal.json() : [];
        const remoteData = resRemote.ok ? await resRemote.json() : [];

        const formattedLocal: Runner[] = localData.map((r: any) => ({
          bibNumber: r.bibNumber,
          fullName: r.fullName,
          club: r.club || "",
          trail: r.trail.toLowerCase().includes("24") || r.trail.toLowerCase().includes("27") ? "27km" : "11km",
          country: r.country,
        }));

        const formattedRemote: Runner[] = remoteData.map((r: any) => ({
          bibNumber: parseInt(r.bib, 10) || 0,
          fullName: r.name.trim(),
          club: r.club || "",
          trail: r.package?.toLowerCase().includes("24") || r.package?.toLowerCase().includes("27") ? "27km" : "11km",
          country: r.country,
        }));

        const merged = [...formattedLocal, ...formattedRemote]
          .filter((r) => r.bibNumber);

        setRunners(merged);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        toast.error(t("fetch_error"));
      }
    }
    fetchAll();
  }, [currentLocale, t]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filtered = trailFilter === "all"
    ? runners
    : runners.filter(r => r.trail === trailFilter);

  const sorted = [...filtered].sort((a, b) => {
    const aValue = a[sortKey];
    const bValue = b[sortKey];
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen p-6 flex flex-col items-center font-sans">
      <h1 className="text-5xl font-extrabold text-green-700  mb-10 text-center">
        {t("title")}
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between w-full max-w-7xl mb-6 gap-4">
        <div className="flex gap-4 items-center">
          <label htmlFor="trailFilter" className="font-medium text-gray-700">
            {t("filter.trail", { defaultValue: "Filter by trail:" })}
          </label>
          <select
            id="trailFilter"
            value={trailFilter}
            onChange={(e) => setTrailFilter(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          >
            <option value="all">{t("filter.all", { defaultValue: "All" })}</option>
            <option value="11km">{t("filter.11km")}</option>
            <option value="27km">{t("filter.27Km")}</option>
          </select>
        </div>
      </div>

      {/* Table or Loading Spinner */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
        </div>
      ) : (
        <div className="w-full max-w-7xl bg-white shadow-md rounded-xl p-6 mb-12 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 font-sans">
            <thead className="bg-green-100">
              <tr>
                {(["bibNumber", "fullName", "club", "trail", "country"] as SortKey[]).map((key) => (
                  <th
                    key={key}
                    onClick={() => handleSort(key)}
                    className="px-4 py-3 text-left text-sm font-bold text-gray-700 uppercase cursor-pointer select-none"
                  >
                    {t(`table.${key}`)} {sortKey === key ? (sortDirection === "asc" ? "▲" : "▼") : ""}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {sorted.map((runner) => {
                const manualOverrides: { [key: string]: string } = {
                  GER: "DE",
                  KOS: "XK",
                  MKD: "MK",
                  SUI: "CH",
                  ENG: "GB",
                };

                const alpha2 = manualOverrides[runner.country] || countries.alpha3ToAlpha2(runner.country);

                return (
                  <tr key={runner.bibNumber}>
                    <td className="px-4 py-3 font-semibold text-gray-800">{runner.bibNumber}</td>
                    <td className="px-4 py-3 text-gray-700">{runner.fullName}</td>
                    <td className="px-4 py-3 text-gray-700">{runner.club || "-"}</td>
                    <td className="px-4 py-3 text-gray-700">{runner.trail}</td>
                    <td className="px-4 py-3 text-gray-700 flex items-center gap-2">
                      {alpha2 && (
                        <img
                          src={`https://flagcdn.com/w40/${alpha2.toLowerCase()}.png`}
                          alt={runner.country}
                          className="w-5 h-3 rounded-sm"
                        />
                      )}
                      {runner.country}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* CTA Section */}
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 text-center mt-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          {t("cta.title", {
            defaultValue: "Want to be part of the list? Join us now!",
          })}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/${currentLocale}/trails/twentyseven-km`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold text-lg py-3 px-6 rounded-lg shadow-md transition-all"
          >
            {t("cta.krchin", { defaultValue: "Explore Krchin 27K" })}
          </Link>
          <Link
            href={`/${currentLocale}/trails/eleven-km`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold text-lg py-3 px-6 rounded-lg shadow-md transition-all"
          >
            {t("cta.bagrem", { defaultValue: "Explore Bagrem 11К" })}
          </Link>
        </div>
      </section>
    </div>
  );
}
