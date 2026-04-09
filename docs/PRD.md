# Trading With Matt Rebuild PRD

## Project summary

Build a high-end personal brand and small business website for Trading With Matt that sells trading education, mentorship, and premium community access. The first release should feel cinematic and premium enough to communicate the future vision, while staying practical to edit and deploy on GitHub.

## Primary goals

- Position Matt as a disciplined, premium mentor rather than a loud trading influencer.
- Convert visitors into paid members through strong narrative, social proof, and clear offers.
- Make content easy to update without code using Decap CMS with Git-backed editing.
- Use Astro + React to keep the site fast, modular, and easy to expand.
- Maintain a folder structure that is obvious for both human editors and AI collaborators.

## Audience

- Aspiring traders frustrated by inconsistency.
- Intermediate traders seeking structure, trade filtering, and accountability.
- Buyers comparing Discord education communities and mentorship products.
- Visitors arriving from social content, Discord referrals, and organic search.

## Positioning

Trading With Matt should feel:

- Precise
- Calm under pressure
- Premium
- Strategic
- Experienced
- Cinematic rather than flashy

It should not feel:

- Cheap
- Meme-heavy
- Overhyped
- Casino-like
- Template-driven

## Experience principles

- Lead with emotional recognition of the visitor's frustration.
- Show discipline and process before showing pricing.
- Use immersive visuals and motion, but keep trust and readability ahead of spectacle.
- Repeat clear CTAs without feeling pushy.
- Let each section feel like a chapter in one controlled story.

## Tech stack

- Framework: Astro
- Interactive visual layer: React
- Styling: handcrafted CSS with design tokens in layout
- CMS: Decap CMS
- Hosting target: GitHub-friendly static deployment
- Content source: JSON files inside `src/content/`

## Information architecture

### Phase 1

- Homepage
- CMS admin
- Foundational content model
- Brand and architecture docs

### Phase 2

- Contact page
- Dedicated pricing page
- Legal pages
- Social proof media gallery
- Rich FAQ and education explainer sections

### Phase 3

- Blog or market insights hub
- Lead magnets
- Video embeds
- Member or application funnels

## Homepage section plan

1. Cinematic hero with premium positioning and immediate CTA
2. Trust strip with authority signals
3. Problem-to-process story block
4. Signature offers section
5. Results and testimonials
6. Guided process or what members get
7. FAQ
8. Final CTA

## CMS requirements

- Edit hero copy, button labels, offer text, FAQs, and CTAs from browser UI.
- Edit testimonials as individual entries.
- Keep content in Git so all changes are tracked.
- Use a configuration that can later connect to GitHub or Netlify auth.

## Visual direction

- Ultra-modern premium cinematic feel
- Dark base with metallic blue, glass highlights, and restrained warm accent
- Depth through layered gradients, subtle grid lines, glow, and glass panels
- Motion inspired by Apple-style restraint rather than aggressive trading hype
- 3D feeling achieved with lighting, layered panels, depth, and orbiting forms

## Success metrics

- Visitor understands the offer in under 10 seconds.
- CTA remains visible and repeated across the story.
- Design feels differentiated from common trading Discord landing pages.
- Updating content does not require touching code.
- Repository remains easy to navigate for future collaboration.

## Open implementation notes

- `src/pages/index.astro` will compile to `dist/index.html`, which satisfies the requirement that the landing page deploy as `index.html`.
- Decap GitHub backend values are placeholders until the final GitHub repo name is confirmed.
- Placeholder brand imagery should be replaced with licensed photo or video assets during the next pass.
