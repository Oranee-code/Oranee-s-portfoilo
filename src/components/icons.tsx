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
