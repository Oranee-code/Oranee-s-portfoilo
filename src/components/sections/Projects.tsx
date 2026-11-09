import SectionHeader from '../SectionHeader'
import ProjectCarousel from '../ProjectCarousel'

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
            
            A collection of things  <em className="font-display italic">I've built.</em>
            </>
          }
            />

            <div className="mt-14">
            <ProjectCarousel />
        </div>
      </div>
    </section>
  )
}
