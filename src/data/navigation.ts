export type NavItem = {
  id: string
  label: string
}

/** Section ids must match the `id` on each <section>. */
export const navigation: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
