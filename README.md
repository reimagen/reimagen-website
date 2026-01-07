# Reimagen Website

The official Reimagen site highlights the company’s AI services, tools, and experiments. It centralizes our product stack, portfolio, and contact flows in a single experience.

## What the site includes

- **Solutions overview** – Current applications, agents, and custom GPT offerings.
- **Gallery** – Curated AI-generated imagery and video produced by the team.
- **Toolkit** – Recommended IDEs, CLIs, orchestration platforms, and workflows for different builders.
- **Contact hub** – Direct path to reach the Reimagen team across social channels or via the form.

## Tech stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS (via PostCSS)
- **Build & tooling:** Node.js, ESLint, Vite dev server
- **Deployment:** Static site hosting (e.g. Netlify/Vercel)

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Production build

```bash
npm run build
npm run preview
```

This generates an optimized production bundle in `dist/`.

## Deployment

The site builds as a static bundle via Vite. Hosting targets Netlify, Vercel, or any static host that can serve the `dist/` directory. Configure environment variables (if any) through your hosting provider’s dashboard.

## SEO / crawl

- `public/robots.txt` allows all and points to the sitemap.
- `public/llms.txt` allows all (AI crawlers) and points to the sitemap.
- `public/sitemap.xml` generated for https://www.reimagen.ai (update `scripts/generate-sitemap.cjs` if routes change).
- Pages use `useDocumentHead` for title, description, and OG/Twitter tags. Set `ogImage` per page in the call.

## Notes

Bootstrapped with the React + Vite template. Refer to the Vite docs for advanced configuration: https://vitejs.dev/guide/
