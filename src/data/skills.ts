export type SkillGroup = {
  category: string
  summary: string
  items: string[]
}

/**
 * Skills grouped by area. These are tools and technologies worked with in
 * training and personal projects — the section note below keeps that honest.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    summary: 'Interfaces, state and layout',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Next.js'],
  },
  {
    category: 'Backend',
    summary: 'APIs, data and persistence',
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'SQLite', 'Knex.js'],
  },
  {
    category: 'Cloud & infrastructure',
    summary: 'Architecture and delivery',
    items: ['AWS', 'Microsoft Azure', 'Cloud architecture', 'Storage', 'Networking', 'IAM', 'Docker'],
  },
  {
    category: 'Tools',
    summary: 'Day-to-day workflow',
    items: ['Git', 'GitHub', 'Vite', 'Vitest', 'Auth0'],
  },
]

export const skillsNote =
  'Technologies I have studied and used in training and personal projects. Where I have not used one professionally, I say so.'
