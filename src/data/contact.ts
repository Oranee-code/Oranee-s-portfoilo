
export const contact = {
  email: 'oranee.ks99@gmail.com',

  linkedin: {
    name: 'Oranee Kasem',
    url: 'https://www.linkedin.com/in/oraneekasem/',
  },

  github: 'https://github.com/Oranee-code',

  location: 'Wellington, New Zealand',

  headline: 'Have a project?',
  ctaLabel: 'Email me',

  studio: {
    name: 'www.auraniestudio.com',
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
    href: `mailto:${contact.email}`,
  },
  {
    label: 'LinkedIn',
    value: contact.linkedin.name,
    href: contact.linkedin.url,
  },
  {
    label: 'GitHub',
    value: contact.github || 'Oranee-code',
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
