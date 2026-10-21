# Lumenvale

**English** | [Русский](README.ru.md)

![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)
![Payload CMS 3](https://img.shields.io/badge/Payload_CMS-3-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![PostgreSQL 17](https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-2f7d32)

Corporate website and content management system for **Lumenvale Energy**, a company that runs
utility-scale solar and storage plants for their owners. The public site is built with Next.js,
and the people who run the company edit all of it in a Payload CMS admin that lives in the same
app: plants, services, team, vacancies, whole pages, contact routes and legal text.

> **Demo project.** Lumenvale Energy is fictional. The company, its plants, people, figures and
> contact details are invented, and every email address uses the reserved `.example` domain. The
> code is the real thing: a complete site with an editor-friendly CMS, built to be deployed.

![Homepage](docs/screenshots/home.png)

**Contents:** [Highlights](#highlights) · [Screenshots](#screenshots) · [Tech stack](#tech-stack) ·
[Getting started](#getting-started) · [Content model](#content-model) ·
[Architecture](#architecture) · [Testing](#testing) · [Deployment](#deployment) ·
[Project structure](#project-structure)

## Highlights

- **One app, two layers.** A statically rendered Next.js site and the Payload admin at `/admin`
  share a single deployment. Publishing in the admin refreshes the affected pages within seconds
  through `revalidatePath`; nothing is rebuilt.
- **Page builder with guard rails.** Editors assemble pages from 14 section blocks. Each block picks
  a background from a fixed list of _surfaces_, and the surface also decides the text colour, so
  no combination an editor can choose fails contrast or leaves the brand palette.
- **Live preview.** Drafts autosave while you type and the real page re-renders beside the form,
  at phone, tablet or desktop width. A draggable divider replaces Payload's fixed 40/60 split.
- **Case studies that lead with data.** Each plant page opens with performance: metric cards, a
  provenance line (period, source, size of the peer group) and a monthly yield-index chart drawn
  in plain SVG, with the same numbers available as an accessible table.
- **Forms that never lose a lead.** Enquiries go through server actions with validation, a
  honeypot, and the visitor's answers restored after a rejected submission. The record is saved
  before the notification email is attempted, so a mail outage costs an email, not an enquiry.
  Optional attachments are emailed and never stored.
- **An admin for non-developers.** Branded sign-in, an orientation panel on the dashboard, labels
  in plain English, wireframe thumbnails in the block picker, automatic clean-up of abandoned
  drafts, and a first account that is always an administrator.
- **Launch safety.** `robots.txt` and the robots meta tag share one `ALLOW_INDEXING` switch and are
  closed by default; `PREVIEW_MODE` hides the admin and API on preview deploys.
- **Accessibility.** Built to WCAG 2.1 AA and audited with axe-core at desktop and phone widths:
  keyboard support throughout, visible focus, `prefers-reduced-motion` respected.

## Screenshots

| Case study: metrics and yield index | Admin: editing with live preview |
| --- | --- |
| ![Plant case study with metric cards and a monthly yield index chart](docs/screenshots/case-study.png) | ![Plant editor in the admin with the live preview open beside the form](docs/screenshots/admin-live-preview.png) |

![Example monthly owner report, one of the page builder blocks](docs/screenshots/owner-report.png)

## Tech stack

| Layer     | Choice                                                            |
| --------- | ----------------------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack), React 19, TypeScript          |
| Styling   | Tailwind CSS 4 with design tokens in CSS                          |
| CMS       | Payload 3, embedded in the same Next.js app                       |
| Database  | PostgreSQL 17: Docker locally, any managed Postgres in production |
| Media     | Local disk in development, Vercel Blob when deployed              |
| Email     | Resend                                                            |
| Testing   | Vitest, Playwright, axe-core                                      |

## Getting started

Requirements: Node.js 20.9 or newer, and Docker.

```bash
docker compose up -d     # PostgreSQL on localhost:5434
cp .env.example .env     # then set PAYLOAD_SECRET, e.g. with: openssl rand -hex 24
npm install
npm run dev
```

In a second terminal, load the demo content:

```bash
npm run seed
```

Then open:

- the site at http://localhost:3000
- the admin at http://localhost:3000/admin, where the first account you create is always an
  administrator (or create one from the terminal with
  `npm run seed:user -- you@example.com 'a-strong-password'`)
- the brand sheet at http://localhost:3000/brand-kit, available in development only

In development Payload pushes the schema to the database automatically. Production applies the
migrations in `src/migrations` instead (`npm run migrate`), so keep separate databases for the two.

### Scripts

| Command                                | What it does                                              |
| -------------------------------------- | --------------------------------------------------------- |
| `npm run dev`                          | Development server                                        |
| `npm run build` / `npm start`          | Production build and server                               |
| `npm run seed`                         | Load the demo content; `npm run seed -- --force` overwrites it |
| `npm run seed:user -- <email> <password>` | Create an administrator from the terminal              |
| `npm run migrate`                      | Apply database migrations                                 |
| `npm run generate:types`               | Regenerate `src/payload-types.ts` after a schema change   |
| `npm run typecheck` / `npm run lint`   | TypeScript and ESLint                                     |
| `npm run test:int` / `npm run test:e2e` | Vitest and Playwright suites (see [Testing](#testing))   |

## Content model

| In the admin         | What it holds                                          | Where it appears                       |
| -------------------- | ------------------------------------------------------ | -------------------------------------- |
| **Plants**           | Case studies: identity, performance, scope, photos     | `/portfolio`, `/portfolio/[slug]`, homepage |
| **Services**         | Service lines with scope and reporting                 | `/services`, `/services/[slug]`, footer |
| **Team**             | Leadership profiles                                    | `/leadership`                          |
| **Careers**          | Open positions                                         | `/careers`                             |
| **Pages**            | Pages built from section blocks, optionally in the menu | `/[slug]`, header menu                |
| **Enquiries**        | Everything sent through the site's forms               | Admin only                             |
| **Media**            | Uploaded images with alt text and credits              | Wherever they are used                 |
| **Users**            | Admin accounts with Administrator or Editor role       | Admin only                             |
| **Site settings**    | Company name, tagline, contact routing, social links   | Header, footer, metadata on every page |
| **Homepage**         | Hero text, headline figures, extra sections            | `/`                                    |

Plants, services, team, careers, pages and both globals have drafts, autosave and live preview.

### Page builder blocks

| Shelf               | Blocks                                                                     |
| ------------------- | -------------------------------------------------------------------------- |
| Text and pictures   | Text, Text with image, Gallery, Long-form text                             |
| Panels and proof    | Cards, Details, Process, Figures, Owner report example, Quote, Questions and answers |
| Getting in touch    | Call to action, Enquiry panel, Contact routes                              |

The same palette can be added below the designed content of any plant, service or the homepage,
under **Extra sections**.

## Architecture

**Read layer.** Components never see raw Payload documents. `src/lib/cms.ts` maps them onto the
view types in `src/lib/types.ts`, so a schema change is absorbed in one place; the only exception
is page sections, which go straight to the block renderers in `src/blocks/Sections.tsx`. Every
read is wrapped in React's `cache`, so several components asking for site settings cost one query.

**Drafts and preview.** The live preview pane and the "View on site" button go through
`/next/preview`, which checks for an admin session and turns on Next's draft mode. The read layer
then returns drafts instead of published documents; no page has to know that preview exists.

**Revalidation.** Hooks in `src/hooks/revalidate.ts` clear a document's own page, the indexes
that list it, and the whole layout when the change affects every page (site settings, or a page
joining the menu). Autosaves are skipped, so typing does not throw the cache away.

**Surfaces and tokens.** `src/lib/surfaces.ts` pairs each background with the text tone that
works on it. Colours in `src/app/(frontend)/styles.css` are named by role (`primary`, `accent`),
so restyling the site is a change of values rather than a search and replace.

**Forms.** `src/actions/enquiry.ts` validates input, rejects bots with a honeypot, stores the
enquiry and only then sends the notification. Attachment rules live in `src/lib/attachments.ts`
as pure functions: an allowlist checked against both extension and media type, a total size cap,
and file names rebuilt so they cannot hide a different extension.

**Search engines.** `ALLOW_INDEXING=1` opens the site in both `robots.txt` and the robots meta
tag; everything else (preview deploys, laptops, copies of the database) stays closed by default.
The sitemap lists the coded routes plus every published page, plant and service.

## Testing

| Command                                | Covers                                                                  |
| -------------------------------------- | ----------------------------------------------------------------------- |
| `npm run typecheck`, `npm run lint`    | TypeScript in strict mode and ESLint                                    |
| `npm run test:int`                     | Attachment rules (allowlist, size cap, unsafe file names) and a Payload API smoke test |
| `npm run test:e2e`                     | Navigation, header and mobile menu, case-study rules (no empty metrics, provenance, chart and table in step), a rejected upload keeping the form's answers, the 404 page, admin dashboard, list and edit views |
| `node scripts/a11y.mjs / /portfolio`   | axe-core WCAG 2.1 AA audit at 1440 px and 390 px; exits non-zero on any violation |
| `node scripts/shots.mjs / .shots`      | Screenshots of every section at desktop and phone widths                |

The integration and end-to-end suites expect the database to be running and seeded. Playwright
starts the dev server itself if nothing is listening on port 3000. Both scripts in `scripts/`
accept `SHOT_BASE_URL` to run against a production build or a preview deploy.

## Deployment

The project targets Vercel with a managed Postgres database; `vercel.json` runs the migrations
before each build. What a deployment needs beyond local development:

| Variable                        | Purpose                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| `DATABASE_URL`                  | Managed Postgres (Neon, Supabase, RDS and so on)                 |
| `PAYLOAD_SECRET`                | Signs admin sessions; `openssl rand -hex 24`                     |
| `NEXT_PUBLIC_SITE_URL`          | The address that actually resolves; used in password-reset links |
| `BLOB_READ_WRITE_TOKEN`         | Vercel Blob store for uploads, injected when a store is linked   |
| `RESEND_API_KEY`, `EMAIL_FROM`  | Password resets and enquiry notifications                        |
| `ALLOW_INDEXING`                | `1` on the live production deployment only                       |
| `PREVIEW_MODE`                  | `1` on preview deployments; hides `/admin` and `/api`            |

Without `RESEND_API_KEY`, Payload writes emails to the log instead of sending them and still
reports success, so set it before anyone relies on password resets or enquiry notifications.

## Project structure

```
src/
  app/(frontend)/      public site, one directory per route
  app/(payload)/       Payload admin and REST/GraphQL endpoints
  actions/             server actions (enquiry forms)
  blocks/              section palette: block configs and their renderers
  collections/         Payload collections
  globals/             site settings and homepage
  components/          brand marks, layout, homepage sections, case study, admin UI
  hooks/               preview URLs, autosave, revalidation, draft clean-up
  lib/                 CMS read layer, domain types, surfaces, attachment rules
  seed/                demo content
  migrations/          database migrations
public/blocks/         wireframe thumbnails for the block picker
scripts/               accessibility audit and screenshot tools
tests/                 Vitest and Playwright suites
```

## License

[MIT](LICENSE)
