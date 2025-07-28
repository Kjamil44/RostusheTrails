// ResultsPage2025.tsx
"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
countries.registerLocale(enLocale);

import { Tab } from "@headlessui/react";
import clsx from "clsx";

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

const BAGREM_URL =
  "https://my1.raceresult.com/352768/RRPublish/data/list?key=ff9ebc0129cadc00afa122cd25262fca&listname=Result%20Lists%7C011%20K%20Results%20details%20split-ranks&page=results&contest=1&r=all&l=0";
const KRCHIN_URL =
  "https://my1.raceresult.com/352768/RRPublish/data/list?key=ff9ebc0129cadc00afa122cd25262fca&listname=Result%20Lists%7C027%20K%20Results%20details%20split-ranks&page=results&contest=2&r=all&l=0";

const manualOverrides: { [key: string]: string } = {
  GER: "DE",
  KOS: "XK",
  MKD: "MK",
  SUI: "CH",
  ENG: "GB",
};

export default function ResultsPage() {
  const t = useTranslations("results");
  const locale = useLocale();

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

  useEffect(() => {
    async function fetchRaceResults() {
      const [bagremRes, krchinRes] = await Promise.all([
        fetch(BAGREM_URL).then((res) => res.json()),
        fetch(KRCHIN_URL).then((res) => res.json()),
      ]);

      const getResults = (block: any, trail: "krchin" | "bagrem"): Result[] => {
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

      setBagremMale(getResults(bagremRes?.data?.["#1_Bagrem Trail 11KM"]?.["#2_Male"], "bagrem"));
      setBagremFemale(getResults(bagremRes?.data?.["#1_Bagrem Trail 11KM"]?.["#1_Female"], "bagrem"));
      setKrchinMale(getResults(krchinRes?.data?.["#1_Krchin Trail 27KM"]?.["#2_Male"], "krchin"));
      setKrchinFemale(getResults(krchinRes?.data?.["#1_Krchin Trail 27KM"]?.["#1_Female"], "krchin"));
      setLoading(false);
    }
    fetchRaceResults();
  }, []);

  const raceTabs = [
    { name: "Krchin Trail 27KM", female: krchinFemale, male: krchinMale, trail: "krchin" },
    { name: "Bagrem Trail 11KM", female: bagremFemale, male: bagremMale, trail: "bagrem" },
  ];

  const handleSort = (key: keyof Result) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const renderTable = (data: Result[], trail: "krchin" | "bagrem") => {
    const filteredData = data.filter(
      (r) =>
        r.name.toLowerCase().includes(filterName.toLowerCase()) &&
        r.bib.toLowerCase().includes(filterBib.toLowerCase())
    );

    let normalizedData: Result[] = [];

    if (genderFilter === "all") {
      normalizedData = [...filteredData]
        .filter((r) => r.finish && /^\d/.test(r.finish))
        .sort((a, b) => a.finish.localeCompare(b.finish))
        .map((runner, index) => ({ ...runner, place: `${index + 1}.` }))
        .concat(
          filteredData.filter((r) => !r.finish || !/^\d/.test(r.finish))
        );
    } else {
      normalizedData = [...filteredData];
    }

    const sortedData = [...normalizedData].sort((a, b) => {
      if (!sortKey) return 0;
      const valA = a[sortKey] ?? "";
      const valB = b[sortKey] ?? "";
      const isNumeric = sortKey === "place" || sortKey === "bib";
      const isSpecial = (v: string) => isNaN(Number(v));

      if (isNumeric) {
        const numA = isSpecial(valA) ? Infinity : Number(valA);
        const numB = isSpecial(valB) ? Infinity : Number(valB);
        return sortAsc ? numA - numB : numB - numA;
      } else {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
    });

    return (
      <div className="overflow-x-auto">
        <div className="flex flex-wrap gap-4 mb-4 items-center">
          <input
            type="text"
            placeholder={t("filter.name")}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <input
            type="text"
            placeholder={t("filter.bib")}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={filterBib}
            onChange={(e) => setFilterBib(e.target.value)}
          />
          <select
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="all">{t("filter.all")}</option>
            <option value="female">{t("table.gender.female")}</option>
            <option value="male">{t("table.gender.male")}</option>
          </select>
        </div>
        <table className="min-w-full divide-y divide-gray-200 text-sm text-left font-sans bg-white shadow">
          <thead className="bg-green-100 text-green-900 font-bold">
            <tr>
              {["place", "bib", "name", "nationality", "cp1", "finish"].map((key) => (
                <th
                  key={key}
                  onClick={() => handleSort(key as keyof Result)}
                  className="p-3 cursor-pointer hover:underline select-none"
                >
                  {t(`table.${key}`)} {sortKey === key ? (sortAsc ? "▲" : "▼") : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {sortedData.map((runner, i) => {
              const alpha2 =
                manualOverrides[runner.nationality] ||
                countries.alpha3ToAlpha2(runner.nationality) ||
                null;

              const cpLabel = trail === "krchin"
                ? ["CP Kutel", "CP Krchin", "CP Lokuv"]
                : ["CP Jance"];

              const cpTimes = trail === "krchin"
                ? [runner.cp1, runner.cp2, runner.cp3]
                : [runner.cp1];

              return (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="p-3 font-bold">{runner.place}</td>
                  <td className="p-3">{runner.bib}</td>
                  <td className="p-3">{runner.name}</td>
                  <td className="p-3 flex items-center gap-2">
                    {alpha2 && (
                      <img
                        src={`https://flagcdn.com/w40/${alpha2.toLowerCase()}.png`}
                        alt={runner.nationality}
                        className="w-5 h-3 rounded-sm"
                      />
                    )}
                    {runner.nationality}
                  </td>
                  <td className="p-3 space-y-1">
                    {cpTimes.filter(Boolean).map((cp, i) => (
                      <div key={i}>
                        <span className="font-medium text-gray-600 mr-1">{cpLabel[i]}:</span>
                        {cp}
                      </div>
                    ))}
                  </td>
                  <td className="p-3">{runner.finish}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <main className="min-h-screen p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center">
        {t("title")}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-green-600"></div>
        </div>
      ) : (
        <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <Tab.List className="flex justify-center gap-4 mb-8">
            {raceTabs.map((tab, i) => (
              <Tab
                key={i}
                className={({ selected }: { selected: boolean }) =>
                  clsx(
                    "px-6 py-2 rounded-xl font-bold text-lg shadow transition",
                    selected
                      ? "bg-green-700 text-white"
                      : "bg-green-100 text-green-800 hover:bg-green-200"
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="space-y-16">
            {raceTabs.map((tab, i) => {
              const all = [...tab.female, ...tab.male];
              const dataToShow = genderFilter === "female" ? tab.female : genderFilter === "male" ? tab.male : all;

              return (
                <Tab.Panel key={i}>{renderTable(dataToShow, tab.trail as "krchin" | "bagrem")}</Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      )}
    </main>
  );
}
