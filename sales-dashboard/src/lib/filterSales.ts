import { YEARS } from "@/data/salesData";
import type { FilteredRow, MonthlySales, YearTotal } from "@/types/sales";

/** Keeps only values >= threshold. Months with no remaining values are dropped. */
export function filterSales(data: MonthlySales[], threshold: number): FilteredRow[] {
  return data
    .map((row) => {
      const out: FilteredRow = { month: row.month, "2022": null, "2023": null, "2024": null };
      YEARS.forEach((y) => {
        out[y] = row[y] >= threshold ? row[y] : null;
      });
      return out;
    })
    .filter((row) => YEARS.some((y) => row[y] !== null));
}

export function totalsByYear(rows: FilteredRow[]): YearTotal[] {
  return YEARS.map((year) => ({
    year,
    total: rows.reduce((sum, r) => sum + (r[year] ?? 0), 0),
  })).filter((t) => t.total > 0);
}

export const formatUSD = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
