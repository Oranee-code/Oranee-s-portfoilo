export type Project = {
  id: string
  title: string
  summary: string
  tech: string[]
  year?: string
  /** Screenshot in /public, e.g. '/projects/example.jpg'. */
  image?: string
  /** Full URL, e.g. 'https://example.com'. Leave empty until the site is live. */
  liveUrl?: string
  /** Full repository URL. Leave empty until it is public. */
  repoUrl?: string
  /** Placeholder slots render as reserved spaces instead of fake projects. */
  placeholder?: boolean
}

/**
 * Featured projects — shown in order, full width.
 *
 * To publish a real project, replace a placeholder entry with your own:
 *
 * {
 *   id: 'inventory-app',
 *   title: 'Inventory app',
 *   summary:
 *     'A stock and roster tool for small retail teams: React front end, Express API, PostgreSQL.',
 *   tech: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
 *   year: '2025',
 *   image: '/projects/inventory-app.jpg',
 *   liveUrl: 'https://example.com',
 *   repoUrl: 'https://github.com/your-handle/inventory-app',
 * }
 *
 * Nothing here is invented: placeholders stay placeholders until you fill them in.
 */
export const projects: Project[] = [
  { id: 'project-01', title: '', summary: '', tech: [], placeholder: true },
  { id: 'project-02', title: '', summary: '', tech: [], placeholder: true },
  { id: 'project-03', title: '', summary: '', tech: [], placeholder: true },
]
