import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.25,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 11.5 11.5 4.5M5.75 4.5h5.75v5.75" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M2.75 8h10.5M9.5 4.25 13.25 8 9.5 11.75" />
    </svg>
  )
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 2.75v10.5M4.25 9.5 8 13.25l3.75-3.75" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 13.25V2.75M4.25 6.5 8 2.75l3.75 3.75" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} viewBox="0 0 18 18" {...props}>
      <rect x="2.25" y="4.25" width="13.5" height="9.5" rx="1.25" />
      <path d="m2.9 5.4 6.1 4.4 6.1-4.4" />
    </svg>
  )
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg
      {...base}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="currentColor"
      stroke="none"
      {...props}
    >
      <path d="M3.4 6.7h2.15v7.9H3.4zM4.47 2.4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM7.15 6.7h2.06v1.08h.03c.32-.6 1.1-1.24 2.28-1.24 1.77 0 2.81 1.11 2.81 3.16v4.9h-2.16v-4.34c0-1.12-.4-1.86-1.37-1.86-.75 0-1.2.5-1.39.99-.07.17-.09.41-.09.65v4.56H7.15z" />
    </svg>
  )
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} viewBox="0 0 18 18" {...props}>
      <circle cx="9" cy="9" r="6.25" />
      <path d="M2.9 9h12.2M9 2.75c1.6 1.72 2.45 3.85 2.45 6.25S10.6 13.53 9 15.25c-1.6-1.72-2.45-3.85-2.45-6.25S7.4 4.47 9 2.75Z" />
    </svg>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} viewBox="0 0 18 18" {...props}>
      <circle cx="9" cy="9" r="3.25" />
      <path d="M9 1.5v1.75M9 14.75v1.75M1.5 9h1.75M14.75 9h1.75M3.7 3.7l1.25 1.25M13.05 13.05l1.25 1.25M14.3 3.7l-1.25 1.25M4.95 13.05 3.7 14.3" />
    </svg>
  )
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} viewBox="0 0 18 18" {...props}>
      <path d="M14.75 10.9A6.25 6.25 0 0 1 7.1 3.25a6.25 6.25 0 1 0 7.65 7.65Z" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} viewBox="0 0 18 18" {...props}>
      <path d="M2.5 6h13M2.5 12h13" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} width={18} height={18} viewBox="0 0 18 18" {...props}>
      <path d="M4.25 4.25l9.5 9.5M13.75 4.25l-9.5 9.5" />
    </svg>
  )
}

export function DashIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8h10" />
    </svg>
  )
}
