# Cailin Mining & Civil

Marketing and booking website for [Cailin Mining & Civil](https://www.cailinminingcivil.com) — a Perth-based RTO (46489) offering 1:1 live mine site machine operator training.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS 3, shadcn/ui (Radix primitives) |
| Routing | React Router v6 |
| Backend | Supabase (Postgres, Auth, Edge Functions, Storage) |
| Data fetching | TanStack React Query |
| Forms | React Hook Form + Zod |
| Email | Resend (via Supabase Edge Function) |
| Booking | Bookeo (embedded widget) |
| Reviews | Google Places API (via Supabase Edge Function) |

## Getting Started

### Prerequisites

- Node.js >= 18
- npm
- A Supabase project (see [Environment Variables](#environment-variables))

### Install & Run

```sh
npm install
npm run dev
```

Dev server starts at `http://localhost:5173`.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Development build (unminified) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_PROJECT_ID=your-project-id
```

The following secrets must be set in **Supabase Dashboard > Edge Functions > Secrets**:

| Secret | Used by |
|--------|---------|
| `GOOGLE_PLACES_API_KEY` | `google-reviews` edge function |
| `RESEND_API_KEY` | `notify-submission` edge function |

## Project Structure

```
src/
├── assets/              # Images and photos
├── components/
│   ├── layout/          # Navbar, Footer, Layout wrapper
│   └── ui/              # shadcn/ui component library
├── data/                # Static data (image library)
├── hooks/               # Custom hooks (toast)
├── integrations/
│   └── supabase/        # Client init + types
├── lib/                 # Utility functions
├── pages/
│   └── courses/
│       └── machines/    # Individual machine course pages
├── App.tsx              # Router config
├── index.css            # Tailwind base + custom styles
└── main.tsx             # Entry point

supabase/
├── config.toml          # Supabase project config
├── functions/
│   ├── google-reviews/  # Fetches Google Places reviews
│   └── notify-submission/ # Sends contact form emails via Resend
└── migrations/          # SQL migrations (tables, RLS, triggers)

public/                  # Static assets (favicon, OG image, robots.txt)
```

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero, stats, course overview, reviews |
| `/courses` | All course categories |
| `/courses/short-courses` | Quick certifications |
| `/courses/bundles` | Training bundles |
| `/courses/full-day` | Unlimited return training |
| `/courses/rpl` | Recognition of Prior Learning |
| `/courses/voc` | Verification of Competency |
| `/courses/excavator` | Excavator training |
| `/courses/wheel-loader` | Wheel loader training |
| `/courses/moxy` | Articulated dump truck training |
| `/courses/roller` | Roller training |
| `/courses/watercart` | Water cart training |
| `/book` | Booking (Bookeo widget) |
| `/blog` | Blog listing |
| `/blog/:slug` | Blog post |
| `/contact` | Contact form |
| `/about` | About the company |
| `/discovery-call` | Free consultation |
| `/ctf-funding` | Government funding info |

## Database

Managed via Supabase migrations in `supabase/migrations/`.

### Tables

**`blog_posts`** — Blog content (public read for published posts)
- `id`, `title`, `slug`, `excerpt`, `content`, `featured_image`, `category`, `published`, `published_at`, `created_at`, `updated_at`

**`contact_submissions`** — Contact form entries (public insert, triggers email notification)
- `id`, `name`, `email`, `phone`, `message`, `created_at`, `read`

### Storage

**`rpl-documents`** — Private bucket for RPL assessment document uploads.

### Edge Functions

- **`google-reviews`** — Proxies Google Places API to fetch live reviews. Called client-side via React Query.
- **`notify-submission`** — Triggered by a Postgres webhook on new `contact_submissions` rows. Sends a formatted HTML email to `info@cailinminingcivil.com` via Resend.

## Deployment

This is a static SPA — build and deploy `dist/` to any static hosting provider.

```sh
npm run build
```

For Supabase Edge Functions, deploy with the Supabase CLI:

```sh
supabase functions deploy google-reviews
supabase functions deploy notify-submission
```

Database migrations:

```sh
supabase db push
```
