"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
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

export default function Page() {
  const t = useTranslations("registered-runners");
  const currentLocale = useLocale();
  const [runners, setRunners] = useState<Runner[]>([]);

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
          trail: r.trail === "24km" ? "24km" : "10km",
          country: r.country,
        }));

        const formattedRemote: Runner[] = remoteData.map((r: any) => ({
          bibNumber: parseInt(r.bib, 10) || 0,
          fullName: r.name.trim(),
          club: r.club || "",
          trail: r.package?.toLowerCase().includes("24") ? "24km" : "10km",
          country: r.country,
        }));

        const merged = [...formattedLocal, ...formattedRemote]
          .filter((r) => r.bibNumber) // remove empty bibs
          .sort((a, b) => a.bibNumber - b.bibNumber);

        setRunners(merged);
      } catch (err) {
        console.error(err);
        toast.error(t("fetch_error"));
      }
    }
    fetchAll();
  }, [currentLocale, t]);

  const columns: GridColDef[] = [
    {
      field: "bibNumber",
      headerName: t("table.bibNumber"),
      width: 120,
      sortable: true,
    },
    { field: "fullName", headerName: t("table.name"), width: 250 },
    { field: "club", headerName: t("table.club"), width: 200 },
    { field: "trail", headerName: t("table.race"), width: 150 },
    {
      field: "country",
      headerName: t("table.country"),
      width: 120,
      flex: 1,
      renderCell: (params) => {
        const countryName = params.value as string;
        const alpha2 = countries.alpha3ToAlpha2(countryName);
        if (!alpha2) return countryName;
        return (
          <div className="flex items-center gap-2">
            <WorldFlag
              code={alpha2}
              style={{ width: 24, height: 16, borderRadius: 2 }}
            />
            <span>{countryName}</span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col items-center font-sans">
      <h1 className="text-5xl font-extrabold text-green-700  mb-10 text-center">
        {t("title")}
      </h1>

      <div className="w-full max-w-7xl bg-white shadow-md rounded-xl p-6 mb-12">
        <DataGrid
          rows={runners}
          columns={columns}
          getRowId={(row) => row.bibNumber}
          initialState={{
            sorting: {
              sortModel: [{ field: "bibNumber", sort: "asc" }],
            },
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          pageSizeOptions={[5, 10, 20]}
          disableColumnMenu
          autoHeight
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          sx={{
            fontSize: "1rem",
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { outline: "none", padding: "16px" },
            "& .MuiDataGrid-toolbarContainer": {
              justifyContent: "flex-end",
              gap: "1rem",
              paddingBottom: "1rem",
            },
            "& .MuiButton-root": {
              backgroundColor: "#065f46",
              color: "white",
              textTransform: "none",
              "&:hover": { backgroundColor: "#047857" },
            },
            "& .MuiDataGrid-columnHeader": { backgroundColor: "#e6f4ea" },
          }}
        />
      </div>

      {/* CTA Section */}
      <section className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 text-center mt-10">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          {t("cta.title", {
            defaultValue: "Want to be part of the list? Join us now!",
          })}
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={`/${currentLocale}/trails/twentyfour-km`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold text-lg py-3 px-6 rounded-lg shadow-md transition-all"
          >
            {t("cta.krchin", { defaultValue: "Explore Krchin 24K" })}
          </Link>
          <Link
            href={`/${currentLocale}/trails/ten-km`}
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-bold text-lg py-3 px-6 rounded-lg shadow-md transition-all"
          >
            {t("cta.bagrem", { defaultValue: "Explore Bagrem 10K" })}
          </Link>
        </div>
      </section>
    </div>
  );
}
