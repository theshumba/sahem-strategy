# Sahem Strategy — Website

Static marketing site for Sahem Strategy. Deployed on Vercel at **sahemstrategy.com**.

## Stack

Plain HTML + Tailwind (via CDN) + vanilla JS. No build step.

## Local preview

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>.

## Deploy

Pushes to `main` auto-deploy on Vercel. Manual deploy:

```sh
npx vercel --prod
```

## Editing content

- Service detail pages — `service/<slug>/index.html`
- Case study — `case-study/wildmotion/index.html`
- FAQs are duplicated on `index.html`, `service/index.html`, and `contact/index.html` — edit all three when changing.
- Shared nav + footer are inlined per page (no build step). When changing, update across all 11 pages.

## Contact form

Wired to Formspree (`xpwlqygw`). Update the `action` URL in `contact/index.html` to swap providers.
