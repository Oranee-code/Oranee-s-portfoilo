import ProjectCarousel from '../ProjectCarousel'
import SectionHeader from '../SectionHeader'

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

        <div className="mt-14">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  )
}
