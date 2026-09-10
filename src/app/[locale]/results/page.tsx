"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

countries.registerLocale(enLocale);

interface Result {
  bib: string;
  place: string;
  name: string;
  nationality: string;
  cp1?: string;
  cp2?: string;
  cp3?: string;
  finish: string;
}

type Edition = 2026 | 2025;

interface EditionUrls {
  bagrem: string;
  krchin: string;
}

const EDITION_URLS: Record<Edition, EditionUrls> = {
  2026: {
    bagrem:
      "https://my4.raceresult.com/416018/results/list?key=7813eaf7841533ef623f072001624d6a&listname=Result%20Lists%7C011%20K%20Results%20details%20split-ranks&page=results&contest=1&r=all&l=0&openedGroups=%7B%7D&term=",
    krchin:
      "https://my4.raceresult.com/416018/results/list?key=7813eaf7841533ef623f072001624d6a&listname=Result%20Lists%7C027%20K%20Results%20details%20split-ranks&page=results&contest=2&r=all&l=0&openedGroups=%7B%7D&term=",
  },

  2025: {
    bagrem:
      "https://my1.raceresult.com/352768/RRPublish/data/list?key=ff9ebc0129cadc00afa122cd25262fca&listname=Result%20Lists%7C011%20K%20Results%20details%20split-ranks&page=results&contest=1&r=all&l=0",
    krchin:
      "https://my1.raceresult.com/352768/RRPublish/data/list?key=ff9ebc0129cadc00afa122cd25262fca&listname=Result%20Lists%7C027%20K%20Results%20details%20split-ranks&page=results&contest=2&r=all&l=0",
  },
};

const manualOverrides: Record<string, string> = {
  GER: "DE",
  KOS: "XK",
  MKD: "MK",
  SUI: "CH",
  ENG: "GB",

  // RaceResult / IOC codes
  NED: "NL",
  ALG: "DZ",
  GRE: "GR",
  POR: "PT",
  CRO: "HR",
};

export default function ResultsPage() {
  const t = useTranslations("results");

  const [edition, setEdition] = useState<Edition>(2026);

  const [krchinFemale, setKrchinFemale] = useState<Result[]>([]);
  const [krchinMale, setKrchinMale] = useState<Result[]>([]);
  const [bagremFemale, setBagremFemale] = useState<Result[]>([]);
  const [bagremMale, setBagremMale] = useState<Result[]>([]);

  const [tabIndex, setTabIndex] = useState(0);
  const [genderFilter, setGenderFilter] = useState("all");
  const [filterName, setFilterName] = useState("");
  const [filterBib, setFilterBib] = useState("");

  const [sortKey, setSortKey] = useState<keyof Result | null>(null);
  const [sortAsc, setSortAsc] = useState(true);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRaceResults() {
      try {
        setLoading(true);
        setError(false);

        const urls = EDITION_URLS[edition];

        const [bagremRes, krchinRes] = await Promise.all([
          fetch(urls.bagrem).then((res) => {
            if (!res.ok) {
              throw new Error(`Bagrem request failed: ${res.status}`);
            }

            return res.json();
          }),

          fetch(urls.krchin).then((res) => {
            if (!res.ok) {
              throw new Error(`Krchin request failed: ${res.status}`);
            }

            return res.json();
          }),
        ]);

        const getResults = (
          block: any,
          trail: "krchin" | "bagrem"
        ): Result[] => {
          return (Object.values(block || {}) as any[]).map((r: any[]) => ({
            bib: r[0],
            place: r[2],
            name: r[3],
            nationality: r[4],
            cp1: r[5],
            cp2: trail === "krchin" ? r[6] : undefined,
            cp3: trail === "krchin" ? r[7] : undefined,
            finish: trail === "bagrem" ? r[6] : r[8],
          }));
        };

        setBagremMale(
          getResults(
            bagremRes?.data?.["#1_Bagrem Trail 11KM"]?.["#2_Male"],
            "bagrem"
          )
        );

        setBagremFemale(
          getResults(
            bagremRes?.data?.["#1_Bagrem Trail 11KM"]?.["#1_Female"],
            "bagrem"
          )
        );

        setKrchinMale(
          getResults(
            krchinRes?.data?.["#1_Krchin Trail 27KM"]?.["#2_Male"],
            "krchin"
          )
        );

        setKrchinFemale(
          getResults(
            krchinRes?.data?.["#1_Krchin Trail 27KM"]?.["#1_Female"],
            "krchin"
          )
        );
      } catch (err) {
        console.error("Failed to fetch race results:", err);

        setBagremMale([]);
        setBagremFemale([]);
        setKrchinMale([]);
        setKrchinFemale([]);

        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchRaceResults();
  }, [edition]);

  const handleEditionChange = (selectedEdition: Edition) => {
    if (selectedEdition === edition) return;

    setEdition(selectedEdition);

    setGenderFilter("all");
    setFilterName("");
    setFilterBib("");
    setSortKey(null);
    setSortAsc(true);
  };

  const raceTabs = [
    {
      name: t("tab.krchin"),
      female: krchinFemale,
      male: krchinMale,
      trail: "krchin" as const,
    },
    {
      name: t("tab.bagrem"),
      female: bagremFemale,
      male: bagremMale,
      trail: "bagrem" as const,
    },
  ];

  const handleSort = (key: keyof Result) => {
    if (sortKey === key) {
      setSortAsc((previous) => !previous);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  function timeToSeconds(time: string): number {
    if (!time) return Infinity;

    const parts = time.split(":").map(Number);

    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }

    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }

    return Infinity;
  }

  const getCountryCode = (nationality: string) => {
    if (!nationality) return null;

    const code = nationality.trim().toUpperCase();

    return (
      manualOverrides[code] ||
      countries.alpha3ToAlpha2(code) ||
      null
    );
  };

  const renderTable = (
    data: Result[],
    trail: "krchin" | "bagrem"
  ) => {
    const filteredData = data.filter(
      (r) =>
        r.name.toLowerCase().includes(filterName.toLowerCase()) &&
        r.bib.toLowerCase().includes(filterBib.toLowerCase())
    );

    let normalizedData: Result[] = [];

    if (genderFilter === "all") {
      const finished = filteredData.filter(
        (r) => r.finish && /^\d/.test(r.finish)
      );

      const notFinished = filteredData.filter(
        (r) => !r.finish || !/^\d/.test(r.finish)
      );

      const sortedFinished = [...finished]
        .sort(
          (a, b) =>
            timeToSeconds(a.finish) - timeToSeconds(b.finish)
        )
        .map((runner, i) => ({
          ...runner,
          place: `${i + 1}.`,
        }));

      normalizedData = [...sortedFinished, ...notFinished];
    } else {
      normalizedData = filteredData;
    }

    const sortedData = [...normalizedData].sort((a, b) => {
      if (!sortKey) return 0;

      const valA = a[sortKey] ?? "";
      const valB = b[sortKey] ?? "";

      const isNumeric =
        sortKey === "place" || sortKey === "bib";

      const isSpecial = (value: string) =>
        isNaN(Number(value.replace(".", "")));

      if (isNumeric) {
        const numA = isSpecial(valA)
          ? Infinity
          : Number(valA.replace(".", ""));

        const numB = isSpecial(valB)
          ? Infinity
          : Number(valB.replace(".", ""));

        return sortAsc ? numA - numB : numB - numA;
      }

      return sortAsc
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

    return (
      <>
        {/* FILTERS */}
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="w-full md:w-2/5">
            <input
              type="search"
              placeholder={t("filter.name")}
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div className="w-full md:w-1/4">
            <input
              type="search"
              placeholder={t("filter.bib")}
              value={filterBib}
              onChange={(e) => setFilterBib(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm shadow-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-200"
            />
          </div>

          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-green-200"
          >
            <option value="all">
              {t("filter.all")}
            </option>

            <option value="female">
              {t("table.gender.female")}
            </option>

            <option value="male">
              {t("table.gender.male")}
            </option>
          </select>
        </div>

        {/* SORTING - same family as Registered Runners */}
        <div className="mb-4 flex flex-wrap gap-2 rounded-lg bg-white px-3 py-3 shadow-sm">
          {[
            "place",
            "bib",
            "name",
            "nationality",
            "cp1",
            "finish",
          ].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() =>
                handleSort(key as keyof Result)
              }
              className={clsx(
                "rounded-md px-3 py-2 text-sm font-medium transition",
                sortKey === key
                  ? "bg-green-50 text-green-700"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              {t(`table.${key}`)}{" "}
              {sortKey === key
                ? sortAsc
                  ? "▲"
                  : "▼"
                : ""}
            </button>
          ))}
        </div>

        {/* RESULTS TABLE */}
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-emerald-50/70">
                  <th className="px-4 py-3 text-left text-sm font-bold text-emerald-900">
                    {t("table.place")}
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold text-emerald-900">
                    {t("table.bib")}
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold text-emerald-900">
                    {t("table.name")}
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold text-emerald-900">
                    {t("table.nationality")}
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold text-emerald-900">
                    {t("table.cp1")}
                  </th>

                  <th className="px-4 py-3 text-left text-sm font-bold text-emerald-900">
                    {t("table.finish")}
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {sortedData.map((runner, i) => {
                  const alpha2 = getCountryCode(
                    runner.nationality
                  );

                  const cpLabel =
                    trail === "krchin"
                      ? [
                        "CP Kutel",
                        "CP Krchin",
                        "CP Lokuv",
                      ]
                      : ["CP Jance"];

                  const cpTimes =
                    trail === "krchin"
                      ? [
                        runner.cp1,
                        runner.cp2,
                        runner.cp3,
                      ]
                      : [runner.cp1];

                  return (
                    <tr
                      key={`${runner.bib}-${i}`}
                      className="transition hover:bg-green-50"
                    >
                      {/* Place - unique Results styling */}
                      <td className="px-4 py-3">
                        <span
                          className={clsx(
                            "inline-flex min-w-[38px] items-center justify-center rounded-lg px-2.5 py-1.5 font-bold",
                            runner.place === "1."
                              ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                              : runner.place === "2."
                                ? "bg-slate-100 text-slate-600 ring-1 ring-slate-200"
                                : runner.place === "3."
                                  ? "bg-orange-50 text-orange-700 ring-1 ring-orange-200"
                                  : "text-gray-700"
                          )}
                        >
                          {runner.place}
                        </span>
                      </td>

                      <td className="px-4 py-3 font-semibold text-gray-700">
                        {runner.bib}
                      </td>

                      <td className="px-4 py-3 font-medium text-gray-900">
                        {runner.name}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {alpha2 && (
                            <img
                              src={`https://flagcdn.com/w40/${alpha2.toLowerCase()}.png`}
                              alt={runner.nationality}
                              className="h-4 w-6 rounded-sm object-cover"
                            />
                          )}

                          <span>
                            {runner.nationality}
                          </span>
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        <div className="space-y-1">
                          {cpTimes
                            .filter(Boolean)
                            .map((cp, cpIndex) => (
                              <div
                                key={cpIndex}
                                className="text-sm"
                              >
                                <span className="mr-1 font-medium text-gray-500">
                                  {cpLabel[cpIndex]}:
                                </span>

                                <span className="font-medium text-gray-800">
                                  {cp}
                                </span>
                              </div>
                            ))}
                        </div>
                      </td>

                      {/* Finish highlighted */}
                      <td className="px-4 py-3">
                        <span className="inline-flex rounded-lg bg-emerald-50 px-3 py-1.5 font-bold text-emerald-700">
                          {runner.finish}
                        </span>
                      </td>
                    </tr>
                  );
                })}

                {sortedData.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      No results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  };

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
          {/* Small label */}
          <p className="text-sm font-medium opacity-80">
            Rostushe Trails
          </p>

          {/* Title */}
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-green-700 sm:text-5xl">
            {t("title")}
          </h1>

          {/* Unique Results edition selector */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-gray-500">
              {t("edition")}
            </span>

            <div className="inline-flex rounded-2xl border border-emerald-200/70 bg-white/80 p-1 shadow-sm backdrop-blur">
              {([2026, 2025] as Edition[]).map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => handleEditionChange(year)}
                  className={clsx(
                    "min-w-[88px] rounded-xl px-5 py-2.5 text-sm font-bold transition-all",
                    edition === year
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-emerald-50 hover:text-emerald-700"
                  )}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-t-2 border-b-2 border-green-600" />
          </div>
        ) : error ? (
          <div className="rounded-xl bg-white p-10 text-center shadow-md">
            <p className="font-semibold text-red-600">
              Failed to load results.
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Please try again later.
            </p>
          </div>
        ) : (
          <Tab.Group
            selectedIndex={tabIndex}
            onChange={setTabIndex}
          >
            {/* RACE SELECTOR */}
            <div className="mb-5">
              <Tab.List className="flex w-full flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:inline-flex sm:w-auto sm:flex-row">
                {raceTabs.map((tab, i) => (
                  <Tab
                    key={i}
                    className={({ selected }) =>
                      clsx(
                        "rounded-xl px-6 py-3 text-sm font-semibold outline-none transition-all sm:min-w-[190px]",
                        selected
                          ? "bg-green-700 text-white shadow-sm"
                          : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                      )
                    }
                  >
                    {tab.name}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            {/* RACE INFORMATION BAR */}
            <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                 {t("edition")} {edition}
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  {raceTabs[tabIndex].name}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  {t("official_results")}
                </span>
              </div>
            </div>

            <Tab.Panels>
              {raceTabs.map((tab, i) => {
                const all = [
                  ...tab.female,
                  ...tab.male,
                ];

                const dataToShow =
                  genderFilter === "female"
                    ? tab.female
                    : genderFilter === "male"
                      ? tab.male
                      : all;

                return (
                  <Tab.Panel key={i}>
                    {renderTable(
                      dataToShow,
                      tab.trail
                    )}
                  </Tab.Panel>
                );
              })}
            </Tab.Panels>
          </Tab.Group>
        )}
      </section>
    </main>
  );
}