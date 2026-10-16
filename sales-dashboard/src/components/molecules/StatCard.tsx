interface Props {
  label: string;
  value: string;
  color: string;
}

export default function StatCard({ label, value, color }: Props) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200" style={{ borderTop: `4px solid ${color}` }}>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  );
}
