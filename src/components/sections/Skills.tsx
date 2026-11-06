import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'
import { skillGroups, skillsNote } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="02"
          label="Capabilities"
          headingId="skills-heading"
          title={
            <>
              Both sides of the wire,{' '}
              <em className="font-display italic">and the cloud</em> underneath.
            </>
          }
          lede="Grouped the way the work actually splits: what people use, what serves it, and where it runs."
        />

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 70}>
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-medium tracking-[-0.01em]">{group.category}</h3>
                  <span className="eyebrow text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{group.summary}</p>

                <ul className="mt-5 border-t border-line">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center justify-between gap-4 border-b border-line/70 py-2.5 text-sm text-muted transition-colors duration-300 hover:text-ink"
                    >
                      <span>{item}</span>
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="max-w-2xl border-t border-line pt-6 text-xs leading-relaxed text-muted">
            {skillsNote}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
