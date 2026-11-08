export type Project = {
  id: string
  title: string
  summary: string
  tech: string[]
  year?: string
  image?: string
  /** Full URL, e.g. 'https://example.com'. Leave empty until the site is live. */
  liveUrl?: string
  /** Full repository URL. Leave empty until it is public. */
  repoUrl?: string
 
  placeholder?: boolean
}

export const projects: Project[] = [
  { id: 'project-01', title: '', summary: '', tech: [], placeholder: true , liveUrl: 'https://www.auraniestudio.com/', repoUrl: ''},
  { id: 'project-02', title: '', summary: '', tech: [], placeholder: true },
  { id: 'project-03', title: '', summary: '', tech: [], placeholder: true },
]
