import Reveal from './Reveal'
import { education } from '../data/education'


export default function EducationList() {
  return (
    <>
      <ul className="grid gap-x-10 sm:grid-cols-2">
        {education.map((item, index) => (
          <li key={item.qualification} className="border-b border-line py-6">
            <Reveal delay={index * 40}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-normal tracking-[-0.01em]">{item.qualification}</h3>
                <span className="eyebrow shrink-0 text-muted">{item.period?.trim() || '—'}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted">
                {item.level?.trim() || 'Level to be added'}
              </p>
              {item.focus ? (
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.focus}</p>
              ) : null}
              {item.status ? (
                <p className="mt-4 inline-block border border-accent/40 px-2 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-accent">
                  {item.status}
                </p>
              ) : null}
            </Reveal>
          </li>
        ))}
      </ul>

     
    </>
  )
}
