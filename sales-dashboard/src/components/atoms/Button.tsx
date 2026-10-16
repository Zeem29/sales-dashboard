import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export default function Button({ active = false, className = "", ...props }: ButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
        active ? "bg-brand text-white" : "bg-white text-ink ring-1 ring-slate-300 hover:bg-slate-100"
      } ${className}`}
      {...props}
    />
  );
}
