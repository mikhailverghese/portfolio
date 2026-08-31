# Portfolio

Personal portfolio website built with Next.js.

## Stack

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- Vercel deployment via GitHub

## Development

```bash
npm install
npm run dev
```

## Deployment

This repo is intended to be public.

Rules:
- never commit real secrets
- keep secrets only in Vercel environment variables if we add any later
- only `NEXT_PUBLIC_*` values may be exposed to the browser

Recommended flow:
- push to GitHub
- Vercel auto-deploys from the connected repo
- `main` is production
- feature branches get preview deploys
