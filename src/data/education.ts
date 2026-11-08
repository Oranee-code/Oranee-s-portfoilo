export type EducationItem = {
  qualification: string
  level?: string
  period?: string
  focus?: string | string[]
  status?: string
}


export const education: EducationItem[] = [
  {
    qualification: 'Diploma in Cloud Engineering',
    level: '(NZQA Level 7)',
    period: '',
    focus: [
      'Cloud Infrastructure and Modern Architecture',
      'AI Driven Cloud Engineering',
      'Cloud-Native DevOps and Platform Engineering',
      'Multi–Cloud Automation and Emerging Technologies'
    ],
    status: 'Expected May 2027',
  },
  {
    qualification: 'Diploma in Cloud Computing & Cybersecurity',
    level: '(NZQA Level 6)',
    period: '',
    focus: [
      'Public Cloud Administration',
      'Data Engineering in the Public Cloud',
      'Cyber Security in the Cloud',
      'Multi-Cloud Security'
    ],
    status: '2026',
  },
  {
    qualification: 'Certificate in Applied Software Development',
    level: '(NZQA Level 6)',
    period: '',
    focus: [
      'Software quality measures such as accessibility, performance, and security',
      'An intensive, hands-on training bootcamp',
      'Over 700 hours, contributed to multiple collaborative coding projects',
    ],
    status: '2025',
  },
  {
    qualification: 'Certificate in Information Technology',
    level: '(NZQA Level 5)',
    period: '',
    focus: [
      'Hardware and Operating Systems',
      'Scripting for Systems Administrators',
      'Networking for System Administrators',
    ],
    status: '2024',
  },
  {
    qualification: 'AWS Academy',
    level: 'Graduate -Training Badge',
    period: '',
    focus: [
      'Cloud Foundations',
      'Cloud Architecting',
      'Cloud Operations',
      'Data Engineering',
    ],
    status: '2026',
  },
]


