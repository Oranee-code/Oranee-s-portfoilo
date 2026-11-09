import type { Project } from '../data/projects'
import { ArrowUpIcon} from './icons'
import { Globe } from 'lucide-react'

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="group border-t border-line pt-10">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
      <div className="max-w-[30rem] lg:col-span-5 lg:max-w-none">

          <div className="relative aspect-[18/10] w-full overflow-hidden border border-line bg-raised">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} — project screenshot`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-col lg:col-span-7">
          <div className="flex items-baseline justify-between gap-4">
            <p className="eyebrow text-accent">Project {number}</p>
            {/* {project.year ? (
              // <p className="text-xs tabular-nums text-muted">{project.year}</p>
            ) : null} */}
          </div>

          <h3 className="mt-4 text-2xl font-normal tracking-[-0.015em] md:text-[1.7rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

          {/* {project.tech.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="border border-line px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null} */}

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-4 text-sm">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-ink transition-colors duration-300 hover:text-accent"
              >
                Live site
                <Globe size={18} strokeWidth={1.5} />
              </a>
            ) : (
              <span className="text-xs uppercase tracking-[0.14em] text-muted">Live link —</span>
            )}

            {/* {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-ink transition-colors duration-300 hover:text-accent"
              >
                Repository
                <ArrowUpIcon />
              </a>
            ) : (
              <span className="text-xs uppercase tracking-[0.14em] text-muted">Repository —</span>
            )} */}
          </div>
        </div>
      </div>
    </article>
  )
}
