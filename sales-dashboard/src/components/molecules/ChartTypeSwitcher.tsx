import Button from "@/components/atoms/Button";
import type { ChartType } from "@/types/sales";

const OPTIONS: { value: ChartType; label: string }[] = [
  { value: "bar", label: "Bar chart" },
  { value: "line", label: "Line chart" },
  { value: "pie", label: "Pie chart" },
];

interface Props {
  value: ChartType;
  onChange: (type: ChartType) => void;
}

export default function ChartTypeSwitcher({ value, onChange }: Props) {
  return (
    <div role="group" aria-label="Chart type" className="flex flex-wrap gap-2">
      {OPTIONS.map((o) => (
        <Button key={o.value} active={value === o.value} onClick={() => onChange(o.value)}>
          {o.label}
        </Button>
      ))}
    </div>
  );
}
