# Palnet Plants

Demo marketing site. Local only — it is not meant to be deployed.

SvelteKit + Tailwind so the stack stays fast to run and fast to change. The homepage is a generic plant-shop landing page. During the demo, point an agent at the focused Penpot frame and have it recode `src/routes/+page.svelte` (and layout chrome if the frame includes it).

## Run

```sh
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Layout

- `src/routes/+page.svelte` — homepage to replace from Penpot
- `src/routes/about/+page.svelte` and `src/routes/pricing/+page.svelte` — extra marketing pages
- `src/lib/components/` — header, footer, logo
- `src/lib/content.ts` — placeholder copy
