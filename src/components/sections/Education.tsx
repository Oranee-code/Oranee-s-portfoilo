import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'
import { education, educationNote } from '../../data/education'

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="05"
          label="Education"
          headingId="education-heading"
          title={
            <>
              Still studying, <em className="font-display italic">deliberately.</em>
            </>
          }
          lede="Formal training in software development, IT foundations and cloud engineering — updated as I go."
        />

        <ul className="mt-14 grid gap-x-10 border-t border-line sm:grid-cols-2">
          {education.map((item, index) => (
            <li key={item.qualification} className="border-b border-line py-8">
              <Reveal delay={index * 50}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-normal tracking-[-0.01em]">{item.qualification}</h3>
                  <span className="eyebrow shrink-0 text-muted">
                    {item.period?.trim() || '—'}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-muted">
                  {item.institution?.trim() || 'Institution to be added'}
                </p>
                {item.focus ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.focus}</p>
                ) : null}
                {item.status ? (
                  <p className="mt-4 inline-block border border-line px-2 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-accent">
                    {item.status}
                  </p>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-xl text-xs leading-relaxed text-muted">{educationNote}</p>
      </div>
    </section>
  )
}
