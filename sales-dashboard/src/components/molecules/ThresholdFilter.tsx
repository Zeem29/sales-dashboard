import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ThresholdFilter({ value, onChange }: Props) {
  return (
    <div className="w-full sm:w-64">
      <Label htmlFor="threshold">Minimum monthly sales ($)</Label>
      <Input
        id="threshold"
        type="number"
        min={0}
        step={100}
        inputMode="numeric"
        placeholder="e.g. 7000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
