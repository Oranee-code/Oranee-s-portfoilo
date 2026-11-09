import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectSlot from './ProjectSlot'
import Reveal from './Reveal'
import { ArrowLeftIcon, ArrowRightIcon } from './icons'

const buttonStyles =
  'group inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-line disabled:hover:text-ink'

/**
 * One project at a time, stepped through with previous/next controls. The card
 * remounts on each step, so it fades in again and the change is easy to follow.
 */
export default function ProjectCarousel() {
  const [index, setIndex] = useState(0)
  const total = projects.length
  const project = projects[index]

  if (!project) return null

  return (
    <div>
      <Reveal key={project.id}>
        {project.placeholder || !project.title ? (
          <ProjectSlot index={index} />
        ) : (
          <ProjectCard project={project} index={index} />
        )}
      </Reveal>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <p aria-live="polite" className="text-[0.62rem] uppercase tracking-[0.2em] text-muted">
          Project {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            disabled={index === 0}
            aria-label="Previous project"
            className={buttonStyles}
          >
            <ArrowLeftIcon className="transition-transform duration-300 ease-editorial group-hover:-translate-x-0.5" />
            Previous
          </button>

          <button
            type="button"
            onClick={() => setIndex((current) => Math.min(total - 1, current + 1))}
            disabled={index === total - 1}
            aria-label="Next project"
            className={buttonStyles}
          >
            Next
            <ArrowRightIcon className="transition-transform duration-300 ease-editorial group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
