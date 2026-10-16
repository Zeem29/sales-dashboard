import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#14213d",
        brand: "#2a6f97",
        paper: "#f5f7fa",
      },
    },
  },
  plugins: [],
};
export default config;
