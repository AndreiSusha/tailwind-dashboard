# Tailwind Dashboard

A responsive analytics dashboard for a B2B SaaS-style admin panel, built with React and Tailwind CSS. It brings together KPI cards, interactive charts, data tables, and animated page transitions across a multi-page layout — a frontend portfolio piece focused on data visualisation and clean component architecture.

## Features

- **Multi-page layout** with sidebar navigation and client-side routing (React Router) — Dashboard, Products, Customers, Analytics, Feedback, Profile, and Support pages
- **KPI cards** summarising key metrics (customer happiness, MRR, conversions, churn)
- **Interactive charts** built with Recharts — line, bar, area, and pie visualisations for sales, revenue, client activity, and demographics
- **Data tables** for customers and products
- **Animated transitions** using Framer Motion for a polished feel
- **Responsive design** — adapts from mobile to desktop with Tailwind's utility classes
- **Profile settings** section with notification, security, and account-management UI

## Tech stack

| Layer        | Choice                              |
| ------------ | ----------------------------------- |
| Framework    | React 18                            |
| Build tool   | Vite                                |
| Styling      | Tailwind CSS                        |
| Charts       | Recharts                            |
| Animation    | Framer Motion                       |
| Routing      | React Router                        |
| Icons        | Lucide React, React Icons           |

## Getting started

Prerequisites: **Node.js 18+** and npm.

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Other scripts

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── App.jsx                 # routes and layout shell
├── pages/                  # one component per route
│   ├── HomePage.jsx        # main dashboard with KPI cards and charts
│   ├── ProductsPage.jsx
│   ├── CustomersPage.jsx
│   ├── AnalyticsPage.jsx
│   ├── FeedbackPage.jsx
│   ├── ProfilePage.jsx
│   └── SupportPage.jsx
└── components/
    ├── global/             # Sidebar, Header, shared KPI card
    ├── charts/             # Recharts visualisations
    ├── tables/             # customer and product tables
    └── profile/            # profile settings UI
```

## Notes

The dashboard uses static sample data to focus on the frontend: layout, charting, responsiveness, and component structure. It's designed as a showcase of building a data-rich admin interface with a modern React toolchain.
