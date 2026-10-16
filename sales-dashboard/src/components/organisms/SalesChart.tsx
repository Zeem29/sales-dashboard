"use client";

import {
  Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { YEARS, YEAR_COLORS } from "@/data/salesData";
import { formatUSD } from "@/lib/filterSales";
import type { ChartType, FilteredRow, YearTotal } from "@/types/sales";

interface Props {
  type: ChartType;
  rows: FilteredRow[];
  totals: YearTotal[];
}

export default function SalesChart({ type, rows, totals }: Props) {
  if (rows.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center rounded-xl bg-white text-slate-500 ring-1 ring-slate-200">
        No sales meet this threshold. Lower the minimum to see data.
      </div>
    );
  }

  return (
    <div className="h-96 rounded-xl bg-white p-4 ring-1 ring-slate-200">
      <ResponsiveContainer width="100%" height="100%">
        {type === "bar" ? (
          <BarChart data={rows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip formatter={(v: number) => formatUSD(v)} />
            <Legend />
            {YEARS.map((y) => (
              <Bar key={y} dataKey={y} fill={YEAR_COLORS[y]} radius={[4, 4, 0, 0]} />
            ))}
          </BarChart>
        ) : type === "line" ? (
          <LineChart data={rows}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(v) => `$${v / 1000}k`} />
            <Tooltip formatter={(v: number) => formatUSD(v)} />
            <Legend />
            {YEARS.map((y) => (
              <Line key={y} type="monotone" dataKey={y} stroke={YEAR_COLORS[y]} strokeWidth={2.5} dot={{ r: 3 }} connectNulls />
            ))}
          </LineChart>
        ) : (
          <PieChart>
            <Tooltip formatter={(v: number) => formatUSD(v)} />
            <Legend />
            <Pie data={totals} dataKey="total" nameKey="year" outerRadius="75%" label={(e) => `${e.year}: ${formatUSD(e.total)}`}>
              {totals.map((t) => (
                <Cell key={t.year} fill={YEAR_COLORS[t.year]} />
              ))}
            </Pie>
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
