"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import toast from "react-hot-toast";
import {
  DataGrid,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import countries from "i18n-iso-countries";
import WorldFlag from "react-world-flags";

interface Runner {
  id: number;
  fullName: string;
  age: number;
  trail: string;
  country: string;
}

export default function Page() {
  const t = useTranslations("registered-runners");
  const [runners, setRunners] = useState<Runner[]>([]);
  const currentLocale = useLocale();

  useEffect(() => {
    const fetchRunners = async () => {
      try {
        const res = await fetch("/api/runners", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-locale": currentLocale,
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
          },
        });

        if (res.ok) {
          const data = await res.json();
          setRunners(data);
        } else {
          const error = await res.json();
          toast.error(`${error.error}`);
        }
      } catch (err) {
        toast.error(t("fetch_error"));
      }
    };

    fetchRunners();
  }, [currentLocale, t]);

  const columns: GridColDef[] = [
    { field: "id", headerName: t("table.number"), width: 100 },
    { field: "fullName", headerName: t("table.name"), width: 200 },
    { field: "age", headerName: t("table.age"), width: 120, type: "number" },
    { field: "trail", headerName: t("table.race"), width: 160 },
    {
      field: "country",
      headerName: t("table.country"),
      width: 200,
      flex: 1,
      renderCell: (params) => {
        const countryName = params.value;
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
    <div className="min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-700 mb-8">{t("title")}</h1>

      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
        <DataGrid
          rows={runners}
          columns={columns}
          pageSizeOptions={[5, 10, 20]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10, page: 0 } },
          }}
          disableColumnMenu
          autoHeight
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          sx={{
            fontSize: "1rem",
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              outline: "none",
              padding: "16px",
            },
            "& .MuiDataGrid-toolbarContainer": {
              justifyContent: "flex-end",
              gap: "1rem",
              paddingBottom: "1rem",
            },
            "& .MuiButton-root": {
              backgroundColor: "#065f46", // Dark green
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#047857", // Slightly lighter green on hover
              },
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#e6f4ea", // Light green background for headers
            },
          }}
        />
      </div>
    </div>
  );
}
