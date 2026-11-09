export type Project = {
  id: string
  title: string
  summary: string | string[]
  tech: string[]
  year?: string
  image?: string
  liveUrl?: string
  repoUrl?: string
 
  placeholder?: boolean
}

export const projects: Project[] = [
  {
    id: 'project-01',
    title: 'Auranie Studio',
    summary:
      'A modern web design studio website built to showcase digital design and development services.',
    tech: [''],
    year: '',
    image: '/auranie.png',
    liveUrl: 'https://www.auraniestudio.com/',
    repoUrl: '',
  },
  {
    id: 'project-02',
    title: 'Apatite Salesforce CRM ',
    summary: [
      'Specialise in Salesforce implementation and support, and custom-built CRM solutions',
      'for businesses whose needs go beyond what off-the-shelf products can offer.',
    ],
    tech: [''],
    year: '',
    image: '/apatite.png',
    liveUrl: 'https://apatite.io/',
    repoUrl: '',
  },
  {
    id: 'project-03',
    title: 'Lumière Restaurant',
    summary:
      'A refined dining experience in the heart of the city',
    tech: [''],
    year: '',
    image: '/lumiere.png',
    liveUrl: 'https://restaurant-lumiere-ten.vercel.app/',
    repoUrl: '',
  },
  // { id: 'project-02', title: '', summary: '', tech: [], placeholder: true },
  // { id: 'project-03', title: '', summary: '', tech: [], placeholder: true },
]
