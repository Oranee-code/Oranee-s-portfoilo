import Reveal from './Reveal'
import { experience, experienceNote } from '../data/experience'

/** The Experience panel inside the combined Experience & education section. */
export default function ExperienceList() {
  return (
    <>
      <ol>
        {experience.map((item) => (
          <li key={item.role} className="border-b border-line last:border-b-0">
            <Reveal>
              <div className="grid gap-5 py-7 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <p className="text-sm tabular-nums text-muted">{item.period?.trim() || '—'}</p>
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
                    <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted">
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

      <p className="mt-5 text-xs leading-relaxed text-muted">{experienceNote}</p>
    </>
  )
}
