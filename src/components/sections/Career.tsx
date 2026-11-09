
import EducationList from '../EducationList'
import Reveal from '../Reveal'
import SectionHeader from '../SectionHeader'

export default function Career() {
  return (
    <section
      id="education"
      aria-labelledby="career-heading"
      className="relative py-24 md:py-32"
    >
      <div className="shell">
        <SectionHeader
          index="04"
          label="Education"
          headingId="career-heading"
          title={
            <>
              Built on learning, <em className="font-display italic">driven by curiosity.</em>
            </>
          }
        />

        <Reveal className="mt-10">
          <div className="border border-line bg-raised px-4 py-5 sm:px-6 md:px-8 md:py-6">
            <EducationList />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
