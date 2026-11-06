/**
 * Contact details. Leave a value empty to show a clear placeholder instead of
 * a broken link — no addresses or profiles are invented.
 */
export const contact = {
  /** e.g. 'orannee@example.com' */
  email: 'oranee.ks99@gmail.com',
  /** Full profile URL, e.g. 'https://www.linkedin.com/in/your-handle' */
  linkedin: 'www.linkedin.com/in/oraneekasem',
  /** Full profile URL, e.g. 'https://github.com/your-handle' */
  github: '',
  location: 'Wellington, New Zealand',
  headline: 'Have a project?',
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
  },
  {
    label: 'LinkedIn',
    value: contact.linkedin,
    href: contact.linkedin || undefined, 
  },
  {
    label: 'GitHub',
    value: contact.github,
    href: contact.github || undefined,
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
