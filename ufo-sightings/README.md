# UFO Sightings Web App (Skeleton)

This repository contains a **Next.js** skeleton implementing the high‑level architecture described for a UFO sightings analytics portal. The goal of this skeleton is to provide a sensible starting point for further development rather than a finished product. It embraces the **App Router** introduced in Next.js 13, uses **TypeScript** throughout, and comes pre‑wired with **Tailwind CSS** for styling.

## Project structure

```
ufo-sightings/
├── app/                 # App Router entry points and route segments
│   ├── page.tsx         # Home page
│   ├── layout.tsx       # Root layout wrapping all pages
│   ├── globals.css      # Global Tailwind imports and base styles
│   ├── sightings/       # `/sightings` route and views (card/table/map)
│   │   ├── layout.tsx   # Layout with side panel and dynamic content
│   │   ├── page.tsx     # Landing page for sightings
│   │   ├── card/page.tsx
│   │   ├── table/page.tsx
│   │   └── map/page.tsx
│   ├── analytics/       # `/analytics` hub with sub‑views
│   │   ├── page.tsx
│   │   ├── overview/page.tsx
│   │   ├── temporal/page.tsx
│   │   ├── shapes/page.tsx
│   │   ├── geographic/page.tsx
│   │   ├── confidence/page.tsx
│   │   ├── duration/page.tsx
│   │   └── custom/page.tsx
│   ├── parks/page.tsx
│   ├── timeline/page.tsx
│   ├── methodology/page.tsx
│   ├── notes/page.tsx
│   ├── legal/page.tsx
│   └── about/page.tsx
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SidePanel.tsx
│   ├── DataProvider.tsx
│   ├── KPIStatCard.tsx
│   ├── MapView.tsx
│   ├── ChartWrapper.tsx
│   └── ... (placeholders for further expansion)
├── data/                # Raw CSV data and derived JSON (placeholder)
│   └── sightings.csv
├── scripts/             # Data preprocessing scripts
│   └── preprocess.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Getting started

This project hasn't been fully wired up with dependencies (because the environment this skeleton is built in cannot fetch packages from the public npm registry). To work on it locally you should:

1. Ensure you have Node.js ≥16 installed.
2. Install dependencies with `npm install`.
3. Run the development server with `npm run dev`.
4. Open `http://localhost:3000` to view the app.

The CSV file expected in `data/sightings.csv` and the preprocessing script in `scripts/preprocess.ts` are intentionally left as stubs. You should replace them with your own data ingestion pipeline that reads the CSV, normalises records and writes an aggregated JSON file into `.next/cache/data` during the build step.

## Notes

* **TypeScript strictness**: The `tsconfig.json` enables strict type checking to catch potential issues early.
* **Tailwind**: Base dark colour tokens are defined in `tailwind.config.js` to evoke a cosmic theme. You are encouraged to iterate on these values.
* **Layouts and pages**: Each route file exports a React component. Layout files wrap nested routes and define shared UI (e.g. sidebars). The current implementation contains only placeholder content.
* **Components**: Reusable pieces like the `Header`, `Footer` and `SidePanel` are placed under `components/`. These are minimal and you will want to flesh them out with actual markup and logic.

Feel free to expand this skeleton to meet all requirements outlined in the project specification.