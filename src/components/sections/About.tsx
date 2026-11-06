import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'
import { about } from '../../data/about'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="01"
          label="About"
          headingId="about-heading"
          title={
            <>
              A hospitality background,{' '}
              <em className="font-display italic">a developer&rsquo;s</em> direction.
            </>
          }
          lede="From running shifts to shipping software — the same instinct, applied to a different kind of system."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Reveal>
              <figure className="lg:sticky lg:top-28">
                <blockquote className="border-l border-accent pl-6">
                  <p className="font-display text-[1.45rem] leading-snug text-ink md:text-[1.65rem]">
                    {about.quote}
                  </p>
                </blockquote>
                <figcaption className="eyebrow mt-5 pl-6 text-muted">In my own words</figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 text-[0.98rem] leading-relaxed text-muted">
              {about.paragraphs.map((paragraph, index) => (
                <Reveal key={paragraph.slice(0, 24)} delay={index * 50}>
                  <p className={index === 0 ? 'text-[1.08rem] text-ink' : undefined}>{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <ol className="border-t border-line">
                {about.path.map((step) => (
                  <li
                    key={step.title}
                    className="grid gap-2 border-b border-line py-5 sm:grid-cols-[7.5rem_1fr] sm:gap-6"
                  >
                    <span className="eyebrow pt-1 text-accent">{step.stage}</span>
                    <div>
                      <h3 className="text-base font-medium tracking-[-0.01em]">{step.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
