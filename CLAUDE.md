# Kafka Streams Topology Design (KSTD)

Open standard + Excalidraw component library for designing Kafka Streams topologies.
Website: https://kstd.thriving.dev | Repo: https://github.com/thriving-dev/kafka-streams-topology-design

## Repository Structure

- `lib/` - Excalidraw library files (`.excalidrawlib`), versioned releases
- `docs/` - Astro Starlight documentation website (the main codebase)
- `scripts/` - Publishing/release scripts
- `CHANGELOG.md` - Library version changelog

## Commands

All commands run from `docs/`:

```bash
cd docs
pnpm install         # Install dependencies
pnpm dev             # Start dev server at localhost:4321
pnpm build           # Type-check + build to docs/dist/
pnpm preview         # Preview production build locally
```

## Docs Site Architecture

- **Framework**: Astro v5 + Starlight (documentation theme) + Tailwind CSS v3
- **Output**: Static site, deployed to Vercel with web analytics
- **Content**: MDX files in `docs/src/content/docs/` (guide/ and notation/ sections)
- **Components**: Custom Astro components in `docs/src/components/`
  - `overrides/` - Starlight component overrides (OPageFrame, OFooter, OThemeProvider, etc.)
  - `notation/` - LibraryComponent.astro for rendering notation reference items
  - Root-level: Hero, Panel, Feature, Highlight, TwoCols, ThreeCols, SwiperGallery, AstroFancyCarousel, AstroFancybox
- **Global config**: `docs/src/globals.ts` holds version, URLs, and library download links
- **Sidebar**: Auto-generated from `guide/` and `notation/` content directories (configured in astro.config.mjs)

## Key Files

- `docs/astro.config.mjs` - Astro config: sidebar, component overrides, custom CSS, redirects, Vercel adapter
- `docs/src/globals.ts` - Central constants (latest version, GitHub/LinkedIn URLs, library download links)
- `docs/src/content/docs/index.mdx` - Landing page (splash template with custom layout)
- `docs/tailwind.config.mjs` - Tailwind config with Starlight plugin
- `docs/src/tailwind.css` - Tailwind entry point

## Code Patterns

- Starlight component overrides use `O` prefix (e.g., `OPageFrame.astro`, `OFooter.astro`)
- Content files use numeric prefixes for ordering (e.g., `01_getting-started.mdx`, `02_tutorial...`)
- Heavy use of inline Tailwind utility classes in MDX for layout customization
- Components are re-exported through `docs/src/components/index.ts` barrel file

## Deployment

- Hosted on Vercel (static output mode)
- Config in `docs/.vercel/` (gitignored)
- `docs/.vercelignore` controls deployment file exclusion

## Gotchas

- The `docs/` directory is the actual Astro project root; all pnpm/astro commands must run from there
- The root-level `README.md` is the GitHub repo readme, not part of the docs site
- Library `.excalidrawlib` files in `lib/` are large binary-like JSON files; avoid reading them
- `docs/x.pnpm-workspace.yaml` is an untracked scratch file, not in use
