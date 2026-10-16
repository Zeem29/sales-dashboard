import StatCard from "@/components/molecules/StatCard";
import { YEAR_COLORS } from "@/data/salesData";
import { formatUSD } from "@/lib/filterSales";
import type { YearTotal } from "@/types/sales";

export default function SummaryCards({ totals }: { totals: YearTotal[] }) {
  if (totals.length === 0) return null;
  return (
    <section aria-label="Yearly totals" className="grid gap-4 sm:grid-cols-3">
      {totals.map((t) => (
        <StatCard key={t.year} label={`${t.year} total sales`} value={formatUSD(t.total)} color={YEAR_COLORS[t.year]} />
      ))}
    </section>
  );
}
