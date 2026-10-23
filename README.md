# BeninTravel

A travel-booking front end for trips across Benin: browse 20 curated offers, filter them, read the details and book a stay through a short reservation flow.

**Live demo:** https://benin-travel-tau.vercel.app

## Features

- **Search and filters** — keyword (offer name or destination), budget range in FCFA, trip type, minimum rating, minimum group size and earliest departure date.
- **Offer pages** — gallery, description, inclusions and the average rating with its review count.
- **Reservation form** — departure and return dates (no past dates, return after departure) and number of travelers (capped to the offer's group size), with a live price.
- **Cart and confirmation** — a cart summary with taxes and fees (5 %), and a confirmation page with a generated booking number.
- **Responsive** layout built mobile first.

## Tech stack

React 19 · TypeScript · Vite 7 · Tailwind CSS 4 · React Router 7 · lucide-react

State is handled with React Context (`VoyageContext`) and a custom hook (`useVoyageFilters`). Offers are served from a local data file, so there is no backend: reservations live in memory and are lost on refresh.

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # type-check and production build
npm run lint     # ESLint
npm run preview  # preview the production build
```

## Project structure

```
src/
├── VoyagesData.js          # the 20 offers
├── constants.ts            # shared constants (tax rate)
├── context/                # VoyageContext: offers, filters, reservation, cart
├── hooks/                  # useVoyageFilters
├── routes.tsx              # /, /deals, /about, /shop, /confirm
└── components/
    ├── Utils/              # Button, Card, NavBar, SafeImage
    └── pages/              # Home, Details, Shop, About, ConfirmCommande
```

## Known limitations

- Offer images are hot-linked from external sources; when one fails to load, a placeholder is shown instead of a broken image. Replacing them with files in `public/` would make the gallery reliable.
- Customer reviews are not implemented yet; only the aggregated rating is displayed.
- No payment or persistence — this is a front-end project.

## Author

Built by [Eunock Yvan Aïhounhin](https://github.com/Eunock-web).
