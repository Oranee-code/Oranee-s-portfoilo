import { useRef, useState, type KeyboardEvent } from 'react'
import EducationList from '../EducationList'
import ExperienceList from '../ExperienceList'
import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'
import { education } from '../../data/education'
import { experience } from '../../data/experience'

type TabId = 'experience' | 'education'

const tabs: { id: TabId; label: string; count: string }[] = [
  { id: 'experience', label: 'Experience', count: `${experience.length} roles` },
  { id: 'education', label: 'Education', count: `${education.length} qualifications` },
]

/**
 * Experience and education share one section: a single framed panel with a
 * two-button toggle, so the page carries one career story instead of two
 * separate blocks.
 */
export default function Career() {
  const [activeTab, setActiveTab] = useState<TabId>('experience')
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({})

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

    event.preventDefault()
    const next: TabId = activeTab === 'experience' ? 'education' : 'experience'
    setActiveTab(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="experience" aria-labelledby="career-heading" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="04"
          label="Experience & education"
          headingId="career-heading"
          title={
            <>
              Leadership first, <em className="font-display italic">then the build.</em>
            </>
          }
          lede="The roles that shaped how I work, and the training I am building on — one view each."
        />

        <Reveal className="mt-12">
          <div className="border border-line bg-raised">
            <div
              role="tablist"
              aria-label="Experience and education"
              onKeyDown={handleKeyDown}
              className="flex flex-wrap items-center gap-2 border-b border-line p-2"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id

                return (
                  <button
                    key={tab.id}
                    ref={(node) => {
                      tabRefs.current[tab.id] = node
                    }}
                    type="button"
                    role="tab"
                    id={`career-tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`career-panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'bg-accent-strong text-[#111111]'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    {tab.label}
                  </button>
                )
              })}

              <span className="ml-auto hidden pr-3 text-[0.6rem] uppercase tracking-[0.18em] text-muted sm:block">
                {tabs.find((tab) => tab.id === activeTab)?.count}
              </span>
            </div>

            <div
              role="tabpanel"
              id="career-panel-experience"
              aria-labelledby="career-tab-experience"
              hidden={activeTab !== 'experience'}
              className="px-4 py-5 sm:px-6 md:px-8 md:py-6"
            >
              <ExperienceList />
            </div>

            <div
              role="tabpanel"
              id="career-panel-education"
              aria-labelledby="career-tab-education"
              hidden={activeTab !== 'education'}
              className="px-4 py-5 sm:px-6 md:px-8 md:py-6"
            >
              <EducationList />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
