import { profile } from '../../data/profile'
import ArrowLink from '../ArrowLink'
import PortraitCard from '../PortraitCard'
import TypewriterText from '../TypewriterText'

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[90svh] flex-col justify-between overflow-hidden pt-12 md:pt-10"
    >
      <div aria-hidden="true" className="rule-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="shell relative z-10 grid flex-1 items-center gap-12 py-12 lg:grid-cols-12 lg:gap-10 lg:py-8">
        <div className="lg:col-span-7">
          <p className="eyebrow flex items-center gap-4 text-accent">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-accent" />
            {profile.eyebrow}
          </p>

          <h1
            id="hero-heading"
            className="mt-7 text-[clamp(3.5rem,10vw,8.5rem)] font-medium leading-[0.86] tracking-[-0.05em]"
          >
            <TypewriterText text={profile.name} /> 
            <span className="mt-5 block font-display text-[clamp(1.6rem,4vw,3.1rem)] font-normal italic leading-[1.08] tracking-[-0.01em] text-muted">
            
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-[1.02rem] leading-relaxed text-muted md:text-[1.08rem]">
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

        <div className="lg:col-span-4 lg:pl-4">
          <PortraitCard />
        </div>
      
      </div>
    </section>
  )
}
