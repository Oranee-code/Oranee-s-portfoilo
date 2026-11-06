# Oranee — personal portfolio

A single-page portfolio for a full stack developer with cloud engineering knowledge,
built with React, TypeScript, Tailwind CSS and Vite.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build
npm run preview    # serve the production build
```

## Editing content

All copy lives in `src/data/`. No component edits are needed for ordinary updates.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, role, intro, location, availability, portrait |
| `src/data/about.ts` | About paragraphs, pull quote, career path |
| `src/data/skills.ts` | Skill groups, section note |
| `src/data/projects.ts` | Featured projects (placeholder slots until filled) |
| `src/data/experience.ts` | Roles, dates, highlights |
| `src/data/education.ts` | Qualifications, providers, dates, status |
| `src/data/contact.ts` | Email, LinkedIn, GitHub, location, CTA copy |
| `src/data/navigation.ts` | Header links |

### Adding a real project

Replace one placeholder entry in `src/data/projects.ts`:

```ts
{
  id: 'inventory-app',
  title: 'Inventory app',
  summary: 'Stock and roster tool for small retail teams.',
  tech: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
  year: '2025',
  image: '/projects/inventory-app.jpg',   // file in public/projects/
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/handle/inventory-app',
}
```

The three slots currently shipping are deliberately empty: no project, employer or
link has been invented. Empty contact values render as clear placeholders rather
than broken links.

### Portrait

Drop the image in `public/` (e.g. `public/portrait.jpg`, ideally 640×800 or larger,
compressed) and set `portrait: '/portrait.jpg'` in `src/data/profile.ts`.

## Structure

```
src/
  components/          shared UI (Header, Footer, Reveal, ArrowLink, icons…)
  components/sections/ one file per page section
  data/                editable content, typed
  hooks/               theme + active-section tracking
  index.css            design tokens, base styles, grain/grid utilities
```

## Design decisions

- **Two-tone editorial layout.** Oversized headings against generous white space,
  hairline rules instead of rounded cards, and one accent colour (champagne) used
  sparingly. The horizontal and vertical rules follow the reference layout language.
- **Colour is tokenised.** `src/index.css` defines CSS variables for surface, ink,
  line and accent; `tailwind.config.js` maps them to Tailwind colours. Dark and light
  modes therefore swap one set of tokens, which also makes the theme transition
  smooth and keeps a single source of truth for the palette.
  Light mode uses a slightly deeper champagne for text so it stays readable on warm
  white; the brand `#B9A47C` is unchanged.
- **Two typefaces only.** Inter for UI and body, Instrument Serif italic for editorial
  contrast. Both load from Google Fonts with system fallbacks, so the page is still
  readable if the fonts fail.
- **Motion is CSS, not a library.** A small `Reveal` component uses an
  `IntersectionObserver` once per element; everything else is hover/colour transition.
  All of it is disabled under `prefers-reduced-motion`.
- **No icon library, no animation library.** The handful of icons are inline SVG in
  `components/icons.tsx`, which keeps the bundle small.
- **Accessible by default.** Semantic landmarks, one `h1`, labelled sections, a skip
  link, visible focus rings, `aria-current` on the active nav item, and an
  accessible mobile menu that closes on Escape.
- **SEO.** Descriptive title and meta description, Open Graph/Twitter tags and
  `Person` structured data in `index.html`.

## Theme

Dark is the default; the choice is stored in `localStorage` and an inline script in
`index.html` applies it before first paint, so there is no flash of the wrong theme.
