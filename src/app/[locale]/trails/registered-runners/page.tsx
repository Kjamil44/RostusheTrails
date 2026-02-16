'use client';

import { useEffect, useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import countries from "i18n-iso-countries";
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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey>("bibNumber");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      try {
        //IMPORTANT INFO: LOCAL API IS DISABLED TEMPORARILY: Uncomment when needed
        // const resLocal = await fetch("/api/runners", {
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "x-locale": currentLocale,
        //     "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
        //   },
        // });

        const resRemote = await fetch("/api/runners?eventId=43", {
          method: "GET",
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
          },
        });

        // const localData = resLocal.ok ? await resLocal.json() : [];
        const remoteData = resRemote.ok ? await resRemote.json() : [];

        // const formattedLocal: Runner[] = localData.map((r: any) => ({
        //   bibNumber: r.bibNumber,
        //   fullName: r.fullName,
        //   club: r.club || "",
        //   trail: r.trail.toLowerCase().includes("24") || r.trail.toLowerCase().includes("27") ? "27km" : "11km",
        //   country: r.country,
        // }));

        const formattedRemote: Runner[] = remoteData.map((r: any) => ({
          bibNumber: parseInt(r.bib, 10) || 0,
          fullName: r.name.trim(),
          club: r.club || "",
          trail: r.package?.toLowerCase().includes("24") || r.package?.toLowerCase().includes("27") ? "27km" : "11km",
          country: r.country,
        }));

        // const merged = [...formattedLocal, ...formattedRemote]
        const merged = [...formattedRemote].filter((r) => r.bibNumber);

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

  const filtered = useMemo(() => {
    const byTrail =
      trailFilter === "all" ? runners : runners.filter((r) => r.trail === trailFilter);

    const s = searchTerm.trim().toLowerCase();
    if (!s) return byTrail;

    return byTrail.filter(
      (r) =>
        String(r.bibNumber).includes(s) ||
        r.fullName.toLowerCase().includes(s) ||
        (r.club || "").toLowerCase().includes(s) ||
        (r.country || "").toLowerCase().includes(s)
    );
  }, [runners, trailFilter, searchTerm]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortDirection]);

  return (
    <main className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute -bottom-40 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(currentColor 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 sm:pb-14 sm:pt-16">
          <p className="text-sm font-medium opacity-80">
            {t("subtitle")}
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
            {t("title")}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 pb-16">

        {/* Filters + Search */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
          <select
            value={trailFilter}
            onChange={(e) => setTrailFilter(e.target.value)}
            className="border border-gray-300 bg-white rounded-md px-3 py-2 text-sm shadow-sm focus:ring-2 focus:ring-green-200"
          >
            <option value="all">{t("filter.all")}</option>
            <option value="11km">{t("filter.11km")}</option>
            <option value="27km">{t("filter.27Km")}</option>
          </select>

          <div className="ml-auto w-full md:w-1/2">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t("search_placeholder")}
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white shadow-sm text-sm focus:ring-2 focus:ring-green-200"
            />
          </div>
        </div>

        {/* Sorting */}
        <div className="bg-white rounded-lg shadow-sm px-3 py-3 mb-4 flex flex-wrap gap-2">
          {(["bibNumber", "fullName", "club", "trail", "country"] as SortKey[]).map((key) => (
            <button
              key={key}
              onClick={() => handleSort(key)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${sortKey === key
                ? "bg-green-50 text-green-700"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              {t(`table.${key}`)}{" "}
              {sortKey === key ? (sortDirection === "asc" ? "▲" : "▼") : ""}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-bold">
                      {t("table.bibNumber")}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-bold">
                      {t("table.fullName")}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-bold">
                      {t("table.club")}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-bold">
                      {t("table.trail")}
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-bold">
                      {t("table.country")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((runner) => {
                    const manualOverrides: { [key: string]: string } = {
                      GER: "DE",
                      KOS: "XK",
                      MKD: "MK",
                      SUI: "CH",
                      ENG: "GB",
                    };

                    const alpha2 =
                      manualOverrides[runner.country] ||
                      countries.alpha3ToAlpha2(runner.country);

                    return (
                      <tr key={runner.bibNumber} className="hover:bg-green-50">
                        <td className="px-4 py-3 font-semibold">
                          {runner.bibNumber}
                        </td>
                        <td className="px-4 py-3">{runner.fullName}</td>
                        <td className="px-4 py-3">{runner.club || "-"}</td>
                        <td className="px-4 py-3">{runner.trail}</td>
                        <td className="px-4 py-3 flex items-center gap-2">
                          {alpha2 && (
                            <img
                              src={`https://flagcdn.com/w20/${alpha2.toLowerCase()}.png`}
                              alt={runner.country}
                              className="w-6 h-4 rounded-sm"
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
        </div>

        {/* CTO */}
        <div className="mt-12 overflow-hidden rounded-3xl border bg-background/70 ring-1 ring-emerald-500/25">
          <div className="relative p-6 sm:p-8">
            {/* glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 right-[-5rem] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
              <div className="absolute -bottom-24 left-[-5rem] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />
            </div>

            <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">
                  {t("cta.title")}
                </h3>
                <p className="mt-1 max-w-2xl text-sm opacity-80">
                  {t("cta.subtitle")}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                  href={`/${currentLocale}/trails/twentyseven-km`}
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  {t("cta.krchin")}
                </Link>

                <Link
                  href={`/${currentLocale}/trails/eleven-km`}
                  className="inline-flex items-center justify-center rounded-2xl bg-white border border-emerald-200 px-5 py-3 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-50"
                >
                  {t("cta.bagrem")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
