export type Year = "2022" | "2023" | "2024";
export type ChartType = "bar" | "line" | "pie";

export interface MonthlySales {
  month: string;
  "2022": number;
  "2023": number;
  "2024": number;
}

/** A row after filtering; values below the threshold become null. */
export interface FilteredRow {
  month: string;
  "2022": number | null;
  "2023": number | null;
  "2024": number | null;
}

export interface YearTotal {
  year: Year;
  total: number;
}
