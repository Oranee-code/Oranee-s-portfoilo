import type { ReactNode } from 'react'
import { ArrowUpRightIcon } from './icons'

type ArrowLinkProps = {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  external?: boolean
  className?: string
}

/**
 * The one button used across the site: a label with a diagonal arrow that
 * nudges on hover. Rendered as an anchor because every instance is a link.
 */
export default function ArrowLink({
  href,
  children,
  variant = 'solid',
  external = false,
  className = '',
}: ArrowLinkProps) {
  const styles =
    variant === 'solid'
      ? 'bg-ink text-surface hover:bg-accent hover:text-[#111111]'
      : 'border border-line text-ink hover:border-accent hover:text-accent'

  const externalProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}

  return (
    <a
      href={href}
      {...externalProps}
      className={`group inline-flex min-w-[11.5rem] items-center justify-between gap-6 px-5 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRightIcon className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  )
}
