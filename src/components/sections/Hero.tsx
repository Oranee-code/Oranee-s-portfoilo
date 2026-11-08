import { profile } from '../../data/profile'
import ArrowLink from '../ArrowLink'
import PortraitCard from '../PortraitCard'
import { ArrowDownIcon } from '../icons'

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pt-24 md:pt-32"
    >
      <div aria-hidden="true" className="rule-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="shell relative z-10 grid flex-1 items-center gap-12 pb-20 pt-6 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-8">
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-accent">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-accent" />
            {profile.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-7 text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.05em]"
          >
            {profile.name}
            <span className="mt-5 block font-display text-[clamp(1.6rem,4vw,3.1rem)] font-normal italic leading-[1.08] tracking-[-0.01em] text-muted">
              {profile.role}, {profile.specialty.toLowerCase()}.
            </span>
          </h1>

          <p className="mt-9 max-w-xl text-[1.02rem] leading-relaxed text-muted md:text-[1.08rem]">
            {profile.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ArrowLink href="#work">View my work</ArrowLink>
            <ArrowLink href="#contact" variant="outline">
              Contact me
            </ArrowLink>
          </div>

          <p className="mt-8 flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {profile.availability}
          </p>
        </div>

        <div className="lg:col-span-5 lg:pl-4">
          <PortraitCard />
        </div>
      </div>

      <div className="relative z-10 border-t border-line">
        <div className="shell flex flex-col gap-4 py-5 text-[0.62rem] uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {profile.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-ink"
          >
            Scroll
            <ArrowDownIcon className="transition-transform duration-300 ease-editorial group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
