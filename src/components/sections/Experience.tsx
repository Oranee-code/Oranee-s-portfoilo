import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'
import { experience, experienceNote } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="04"
          label="Experience"
          headingId="experience-heading"
          title={
            <>
              Leading teams, <em className="font-display italic">solving problems</em> — then
              writing code.
            </>
          }
          lede="The transferable part of a hospitality career is not a detour: it is where the judgement comes from."
        />

        <ol className="mt-14 border-t border-line">
          {experience.map((item) => (
            <li key={item.role} className="border-b border-line">
              <Reveal>
                <div className="grid gap-6 py-9 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <p className="text-sm tabular-nums text-muted">
                      {item.period?.trim() || '—'}
                    </p>
                    {item.context ? (
                      <p className="eyebrow mt-2 text-accent">{item.context}</p>
                    ) : null}
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-xl font-normal tracking-[-0.015em] md:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted">
                      {item.organisation?.trim() || 'Employer to be added'}
                    </p>
                  </div>

                  <ul className="space-y-2.5 md:col-span-5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted">{experienceNote}</p>
      </div>
    </section>
  )
}
