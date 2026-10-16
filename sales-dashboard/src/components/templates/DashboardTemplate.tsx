"use client";

import { useMemo, useState } from "react";
import ChartTypeSwitcher from "@/components/molecules/ChartTypeSwitcher";
import ThresholdFilter from "@/components/molecules/ThresholdFilter";
import SalesChart from "@/components/organisms/SalesChart";
import SummaryCards from "@/components/organisms/SummaryCards";
import { salesData } from "@/data/salesData";
import { filterSales, totalsByYear } from "@/lib/filterSales";
import type { ChartType } from "@/types/sales";

export default function DashboardTemplate() {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [threshold, setThreshold] = useState("");

  const numericThreshold = Math.max(0, Number(threshold) || 0);
  const rows = useMemo(() => filterSales(salesData, numericThreshold), [numericThreshold]);
  const totals = useMemo(() => totalsByYear(rows), [rows]);

  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 py-8">
      <header>
        <h1 className="text-3xl font-bold">Sales Dashboard</h1>
        <p className="mt-1 text-slate-600">Monthly sales for 2022, 2023 and 2024.</p>
      </header>

      <div className="flex flex-col gap-4 rounded-xl bg-white p-4 ring-1 ring-slate-200 sm:flex-row sm:items-end sm:justify-between">
        <ChartTypeSwitcher value={chartType} onChange={setChartType} />
        <ThresholdFilter value={threshold} onChange={setThreshold} />
      </div>

      {numericThreshold > 0 && (
        <p className="text-sm text-slate-600">
          Showing only monthly sales of ${numericThreshold.toLocaleString()} or more.
        </p>
      )}

      <SummaryCards totals={totals} />
      <SalesChart type={chartType} rows={rows} totals={totals} />
    </main>
  );
}
