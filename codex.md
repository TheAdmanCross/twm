# Codex Routing Map

This file is the quickest way to understand where the project lives, which files matter, and what each area is responsible for.

## Core project map

- `siteInfo.md`
  Existing site audit and business brief copied from the live website.
- `docs/PRD.md`
  Product requirements document for the rebuild.
- `docs/brand/README.md`
  Brand voice, visual tone, and content direction.
- `docs/architecture/README.md`
  Technical architecture, deployment notes, and CMS strategy.
- `src/pages/index.astro`
  Main landing page entry that compiles to `index.html`.
- `src/layouts/BaseLayout.astro`
  Shared page shell, fonts, metadata, and global styling.
- `src/components/sections/`
  Home page sections split into maintainable components.
- `src/components/ui/ScenePortal.tsx`
  React-driven cinematic hero visual with layered motion.
- `src/content/settings/home.json`
  Primary editable homepage content for hero, offers, FAQ, and CTA copy.
- `src/content/testimonials/*.json`
  Individual testimonial entries editable through Decap CMS.
- `public/admin/index.html`
  Decap CMS editor app.
- `public/admin/config.yml`
  Decap CMS collections and GitHub-backed editing config.
- `public/assets/`
  Local image and SVG assets safe for GitHub deployment.
- `public/assets/images/matt-logo.png`
  Reserved path for Matt's exact logo asset. If this file exists, the header will use it automatically without altering the image.

## Editing rules

- Update structured site copy in `src/content/` before editing component markup.
- Use `docs/brand/README.md` to keep new sections aligned with the premium cinematic tone.
- Keep new sections modular in `src/components/sections/` so the page stays easy to expand.
- When deployment details change, update `docs/architecture/README.md` and `public/admin/config.yml` together.

## Next build priorities

1. Replace placeholder images and SVG atmospherics with final brand photography or licensed stock.
2. Connect live offers, checkout destinations, and Discord, YouTube, and TikTok links.
3. Configure Decap GitHub OAuth or Netlify Identity depending on hosting choice.
4. Add secondary pages for contact, legal, and long-form education content.
