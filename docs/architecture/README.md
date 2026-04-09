# Architecture Notes

## Why Astro + React

- Astro keeps the site fast and static-hosting friendly.
- React is used only where motion or richer interactivity adds value.
- The project stays simpler than a full SPA while still feeling premium.

## Output model

- Source page: `src/pages/index.astro`
- Generated file after build: `dist/index.html`
- This keeps the authoring experience modern while preserving a plain `index.html` deploy artifact.

## Content strategy

- Long-lived editable content lives in `src/content/`.
- Components receive structured data instead of hardcoded copy where possible.
- Decap CMS writes directly into those content files.

## GitHub deployment path

- Suitable for GitHub Pages, Netlify, Cloudflare Pages, or static hosting.
- If GitHub Pages is used from a repository subpath, `astro.config.mjs` may need a `site` and `base` update.

## Decap CMS setup note

The starter uses placeholder GitHub config:

- `repo: your-github-user/trading-with-matt`
- `branch: main`

Before launch, replace these values and choose one auth path:

1. Netlify Identity + Git Gateway
2. Direct GitHub OAuth for Decap
3. Local workflow only during content prep

## Folder logic

- `docs/` explains why the project is shaped the way it is.
- `src/` contains build source.
- `public/` contains static assets and CMS admin files.
- `src/components/sections/` keeps the homepage modular by chapter.
