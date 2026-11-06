import type { ReactNode } from 'react'
import Reveal from './Reveal'

type SectionHeaderProps = {
  /** Two-digit section number, e.g. '01'. */
  index: string
  label: string
  title: ReactNode
  lede?: string
  headingId: string
}

export default function SectionHeader({ index, label, title, lede, headingId }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="border-t border-line pt-6">
        <p className="eyebrow text-accent">
          {index} — {label}
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10">
          <h2
            id={headingId}
            className="text-[clamp(2rem,4.4vw,3.5rem)] font-normal leading-[1.04] tracking-[-0.025em] lg:col-span-7"
          >
            {title}
          </h2>
          {lede ? (
            <p className="max-w-sm text-sm leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
              {lede}
            </p>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}
