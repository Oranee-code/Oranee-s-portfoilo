/**
 * Contact details. Leave a value empty to show a clear placeholder instead of
 * a broken link — no addresses or profiles are invented.
 */
export const contact = {
  /** e.g. 'orannee@example.com' */
  email: '',
  /** Full profile URL, e.g. 'https://www.linkedin.com/in/your-handle' */
  linkedin: '',
  /** Full profile URL, e.g. 'https://github.com/your-handle' */
  github: '',
  location: 'Wellington, New Zealand',
  headline: 'Have a role, a project, or a problem worth solving?',
  body:
    'I am looking for a junior-to-intermediate developer role where I can keep learning across the front end, back end and cloud. I am also happy to talk about a specific project, a system that needs fixing, or what cloud engineering looks like day to day.',
  ctaLabel: 'Email me',
  /** Your freelance studio, linked from the contact section and the footer. */
  studio: {
    name: 'Auranie Studio',
    url: 'https://www.auraniestudio.com/',
  },
}

export type ContactChannel = {
  label: string
  value: string
  href?: string
  note?: string
}

export const contactChannels: ContactChannel[] = [
  {
    label: 'Email',
    value: contact.email,
    href: contact.email ? `mailto:${contact.email}` : undefined,
    note: 'Add your email in src/data/contact.ts',
  },
  {
    label: 'LinkedIn',
    value: contact.linkedin,
    href: contact.linkedin || undefined,
    note: 'Add your profile URL in src/data/contact.ts',
  },
  {
    label: 'GitHub',
    value: contact.github,
    href: contact.github || undefined,
    note: 'Add your profile URL in src/data/contact.ts',
  },
  {
    label: 'Studio',
    value: contact.studio.name,
    href: contact.studio.url,
  },
  {
    label: 'Location',
    value: contact.location,
  },
]
