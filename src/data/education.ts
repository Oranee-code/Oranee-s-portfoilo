export type EducationItem = {
  qualification: string
  level?: string
  period?: string
  focus?: string
  status?: string
}


export const education: EducationItem[] = [
  {
    qualification: 'Diploma in Cloud Engineering',
    level: '(NZQA Level 7)',
    period: '',
    focus: 'Cloud architecture, storage, networking and identity',
    status: 'Expected April 2027',
  },
  {
    qualification: 'Diploma in Cloud Computing & Cybersecurity',
    level: '(NZQA Level 7)',
    period: '',
    focus: 'Cloud architecture, storage, networking and identity',
    status: 'Expected April 2027',
  },
  {
    qualification: 'Full Stack Software Development',
    level: '',
    period: '',
    focus: 'Front-end, back-end, databases and REST APIs',
    status: '',
  },
  {
    qualification: 'Information Technology',
    level: '(NZQA Level 5)',
    period: '',
    focus: 'IT fundamentals',
    status: '',
  },
  {
    qualification: 'AWS & Microsoft Azure learning',
    level: '',
    period: '',
    focus: 'Applied cloud services and certification study',
    status: '',
  },
]

export const educationNote = `* Education and study are ongoing. Dates and details are subject to change.`
