# Sales Dashboard

A Next.js 15 dashboard that shows mock sales data for **2022, 2023 and 2024**.

## What it does

- `/dashboard` shows monthly sales for three years.
- Buttons switch between **Bar**, **Line** and **Pie** charts (Recharts).
- A **minimum sales threshold** input filters the data live. Bar and line charts hide monthly values below the threshold. The pie chart shows yearly totals of the remaining values.
- Summary cards show each year's total for the current filter.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Recharts

## Folder structure (Atomic Design)

```
src/
├── app/
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Redirects / to /dashboard
│   ├── globals.css           # Tailwind setup
│   └── dashboard/page.tsx    # Dashboard route
├── components/
│   ├── atoms/                # Smallest UI pieces: Button, Input, Label
│   ├── molecules/            # Atoms combined: ChartTypeSwitcher, ThresholdFilter, StatCard
│   ├── organisms/            # Complex sections: SalesChart, SummaryCards
│   └── templates/            # Page layout and state: DashboardTemplate
├── data/salesData.ts         # Mock sales data
├── lib/filterSales.ts        # Threshold filtering and totals
└── types/sales.ts            # Shared TypeScript types
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. It redirects to `/dashboard`.

Production check:

```bash
npm run build
npm start
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: sales dashboard"
git branch -M main
git remote add origin https://github.com/<your-username>/sales-dashboard.git
git push -u origin main
```

Create the empty `sales-dashboard` repo on github.com first (set it to **Public**).

## Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import the `sales-dashboard` repo.
3. Keep the defaults (Framework: Next.js) and click **Deploy**.
4. Your live URL appears when the build finishes. Every `git push` to `main` redeploys automatically.

Or with the CLI:

```bash
npm i -g vercel
vercel --prod
```
