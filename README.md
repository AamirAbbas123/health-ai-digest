# Health AI Digest

A full-stack blog platform focused on Health AI articles, built with Next.js 14, Tailwind CSS, Prisma, and PostgreSQL.

## Features

- Grouped article categories (Clinical AI, Drug Discovery, Medical Imaging, AI Ethics, Wearables & Diagnostics, Policy & Regulation)
- Three-level content display (Full Article / Summary / Quick Read) via a global slider
- Admin backend for creating, editing, and managing articles
- Image upload support (Vercel Blob in production, local filesystem in dev)
- Dark mode (system preference + toggle)
- Responsive design (mobile-first)

## Tech Stack

- **Frontend:** Next.js 14 (App Router) + Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL via Prisma ORM (Vercel Postgres)
- **Image Storage:** Vercel Blob (production) / local filesystem (dev)
- **Auth:** Simple secret-key protected admin route

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

For local development with SQLite, you can change the schema back to SQLite or set up a local PostgreSQL database.

### 3. Start the development server

```bash
npm run dev
```

## Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Health AI Digest blog platform"
git remote add origin https://github.com/YOUR_USERNAME/health-ai-digest.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"** and import your repo
3. In the project settings, add the **Vercel Postgres** integration:
   - Go to **Storage** tab > **Create Database** > **Postgres**
   - This auto-populates `POSTGRES_PRISMA_URL` and `POSTGRES_URL_NON_POOLING`
4. Add the **Vercel Blob** integration:
   - Go to **Storage** tab > **Create Store** > **Blob**
   - This auto-populates `BLOB_READ_WRITE_TOKEN`
5. Add environment variable:
   - `ADMIN_SECRET` = your chosen admin password
6. Click **Deploy**

### 3. Run database migration

After the first deploy, run the migration from the Vercel dashboard or CLI:

```bash
npx vercel env pull .env.local
npx prisma migrate deploy
npx prisma db seed
```

Or via Vercel CLI:

```bash
vercel env pull .env.local
npx prisma db push
npx tsx prisma/seed.ts
```

## Project Structure

```
src/
  app/
    page.tsx              # Home page with article grid
    layout.tsx            # Root layout with navbar and providers
    articles/[id]/        # Article detail page
    admin/                # Admin panel
    api/
      articles/           # CRUD API for articles
      admin/              # Auth API (login/logout)
  components/             # Shared UI components
  context/                # React Context (ContentLevel)
  lib/                    # Utilities (prisma, categories, auth, upload)
prisma/
  schema.prisma           # Database schema (PostgreSQL)
  seed.ts                 # Seed data with real PubMed articles
```
