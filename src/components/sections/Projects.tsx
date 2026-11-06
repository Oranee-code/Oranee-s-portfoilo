import ProjectCard from '../ProjectCard'
import ProjectSlot from '../ProjectSlot'
import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative py-24 md:py-32">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Selected work"
          headingId="work-heading"
          title={
            <>
              Work that shows <em className="font-display italic">how I think.</em>
            </>
          }
            />

        <div className="mt-14 space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              {project.placeholder || !project.title ? (
                <ProjectSlot index={index} />
              ) : (
                <ProjectCard project={project} index={index} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
