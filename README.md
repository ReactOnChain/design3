# design3.xyz

Curated directory of Web3 / crypto design systems, rebrands, UI components, and social content. Built to be community-driven and open source.

## Table of Contents

- [Project Goals](#project-goals)
- [Stack](#stack)
- [Security](#security)
- [Quick Start](#quick-start)
- [How to Contribute](#how-to-contribute)
  - [Submitting Rebrands](#submitting-rebrands)
  - [Submitting Design Systems](#submitting-design-systems)
  - [Submitting Social Videos or Graphics](#submitting-social-videos-or-graphics)
  - [Suggesting New Categories or Features](#suggesting-new-categories-or-features)
- [Content Style Guide](#content-style-guide)
- [Review & Merge Process](#review--merge-process)
- [Project Structure](#project-structure)
- [License](#license)

## Project Goals

- Showcase world-class Web3 design and branding work
- Provide a structured directory that is easy to explore and expand
- Keep the project lightweight and easy to self-host
- Foster community contributions from designers, curators, and devs

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 4
- Geist font family

## Security

This site is static-only. There are **no runtime secrets** or server credentials in this repo. Security steps taken:

- No environment variables are committed
- No third-party scripts beyond Twitter widgets (optional embeds)
- All external links open in new tabs with `rel="noopener noreferrer"`
- No `dangerouslySetInnerHTML` usage
- Assets are served from the `public/` folder only

Before launching or accepting contributions:

- Review PRs for suspicious code or added dependencies
- Ensure new images come from trusted sources
- Keep dependencies up-to-date (`npm audit` recommended before deployments)

## Quick Start

```bash
git clone https://github.com/yourusername/design3.git
cd design3
npm install
npm run dev
```

Visit `http://localhost:3000` to preview.

## How to Contribute

We welcome contributions! Please open an issue or pull request when adding content or features.

1. Fork this repository and create a new branch from `main`.
2. Make your changes.
3. Run linting/formatting checks:
   ```bash
   npm run lint
   ```
4. Commit with clear messages (`feat:` / `fix:` / `docs:` etc.).
5. Open a PR describing your changes, screenshots encouraged for UI changes.

### Submitting Rebrands

1. Add the rebrand entry in `src/data/rebrands.ts`. Follow the existing interface and keep fields consistent.
2. Include before/after assets in `public/images/rebrands/<slug>/`.
3. Use lowercase directory names (e.g. `1inch`).
4. Provide color palette hex codes, sector, year, and context.
5. Add a source link (tweet/blog) in `announcementTweet` if available.

### Submitting Design Systems

1. Add new entries to `src/data/designSystems.ts`.
2. Save thumbnails under `public/images/design-systems/`.
3. Include info: type (live/figma), organization, categories, link.

### Submitting Social Videos or Graphics

Currently hidden by default. Contributions are welcome but will be reviewed before publishing to ensure performance and embed behavior is acceptable.

1. Update `src/data/socialVideos.ts` or `src/data/socialGraphics.ts`.
2. Provide thumbnails under `public/images/videos/` or `public/images/social/`.
3. Links should be public and accessible (Twitter/X, YouTube, etc.).

### Suggesting New Categories or Features

Open an issue describing the idea. Include:

- Short description
- Expected data schema changes (if any)
- Example entries or mockups

## Content Style Guide

- Use sentence case for titles (e.g. “Safe Design System”)
- Keep descriptions concise (1–2 sentences)
- Prefer SVG logos where possible
- Images should be optimized (<500KB) and properly licensed

## Review & Merge Process

1. Maintainer reviews PR for data accuracy, code style, and security.
2. If feedback is required, we’ll comment on the PR.
3. Once approved, PR is merged into `main` and deployed.
4. Contributors are credited in release notes or the Contributors section (coming soon).

## Project Structure

- `src/app` – Next.js routes and layouts
- `src/components` – UI components
- `src/data` – Static data sources for rebrands, design systems, etc.
- `public/images` – Static assets

## License

MIT — see `LICENSE` for details.

All brand assets belong to their respective owners. By contributing assets you confirm you have permission to share them.
