export type EducationItem = {
  qualification: string
  /** School, provider or platform — leave empty until confirmed. */
  institution?: string
  /** e.g. '2024 — 2025'. Leave empty to show a dash. */
  period?: string
  focus?: string
  /** e.g. 'In progress' or 'Completed'. */
  status?: string
}

/**
 * Education and study. Keep names and dates editable here; anything not yet
 * confirmed is left blank and renders as a dash.
 */
export const education: EducationItem[] = [
  {
    qualification: 'Full Stack Software Development',
    institution: '',
    period: '',
    focus: 'Front-end, back-end, databases and REST APIs',
    status: '',
  },
  {
    qualification: 'Information Technology qualification',
    institution: '',
    period: '',
    focus: 'IT fundamentals',
    status: '',
  },
  {
    qualification: 'Cloud Engineering studies',
    institution: '',
    period: '',
    focus: 'Cloud architecture, storage, networking and identity',
    status: '',
  },
  {
    qualification: 'AWS & Microsoft Azure learning',
    institution: '',
    period: '',
    focus: 'Applied cloud services and certification study',
    status: '',
  },
]

export const educationNote =
  'Provider names, dates and statuses are yours to add — blanks show as dashes in src/data/education.ts.'
