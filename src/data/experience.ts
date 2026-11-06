export type ExperienceItem = {
  role: string
  /** Employer name — leave empty until you want it shown. */
  organisation?: string
  /** e.g. '2021 — 2024'. Leave empty to show a dash. */
  period?: string
  /** Short context label, e.g. 'Hospitality & retail'. */
  context?: string
  highlights: string[]
}

/**
 * Professional experience, most recent first. Only roles actually held are
 * listed; the software entries describe study and projects, not employment.
 */
export const experience: ExperienceItem[] = [
  {
    role: 'Store Manager',
    organisation: '',
    period: '',
    context: 'Hospitality & retail',
    highlights: [
      'Led and rostered a small team, covering opening and closing the store.',
      'Trained new starters and kept standards consistent across shifts.',
      'Owned stock, ordering and day-to-day operations in a customer-facing environment.',
      'Worked through system and process problems directly, rather than passing them on.',
    ],
  },
  {
    role: 'Assistant Store Manager',
    organisation: '',
    period: '',
    context: 'Hospitality & retail',
    highlights: [
      'Supported the manager with staff training, scheduling and daily operations.',
      'Handled customer issues and escalations calmly and in person.',
      'Kept the team organised through busy periods and staff changes.',
    ],
  },
  {
    role: 'Software development — study and projects',
    organisation: '',
    period: '',
    context: 'Career transition',
    highlights: [
      'Full stack training across React, TypeScript, Node.js and SQL.',
      'Building personal projects from the database up, including deployment.',
      'Studying cloud architecture, networking and identity on AWS and Azure.',
    ],
  },
]

export const experienceNote =
  'Employer names and dates are intentionally left out until they are confirmed. Fill them in at src/data/experience.ts.'
