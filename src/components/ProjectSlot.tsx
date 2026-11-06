type ProjectSlotProps = {
  index: number
}


export default function ProjectSlot({ index }: ProjectSlotProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <article className="group border-t border-line pt-8">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border border-line bg-raised transition-colors duration-500 group-hover:border-accent/50">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, rgb(var(--line) / 0.45) 0 1px, transparent 1px 34px)',
              }}
            />
            <div className="relative text-center">
              <p aria-hidden="true" className="font-display text-6xl leading-none text-line">
                {number}
              </p>
              <p className="mt-5 text-[0.6rem] uppercase tracking-[0.22em] text-muted">
                Reserved for a project
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:col-span-4">
          <p className="eyebrow text-accent">Project {number}</p>
          <h3 className="mt-4 text-2xl font-normal tracking-[-0.015em] md:text-[1.7rem]">
            Add your project
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Name, summary, stack, screenshot and links all live in{' '}
            <code className="text-ink">src/data/projects.ts</code>. This slot becomes a full project
            preview as soon as that entry is filled in.
          </p>

          <dl className="mt-8 space-y-2 border-t border-line pt-4 text-[0.6rem] uppercase tracking-[0.16em] text-muted">
            <div className="flex justify-between gap-4">
              <dt>Live site</dt>
              <dd aria-hidden="true">—</dd>
            </div>
            
            
          </dl>
        </div>
      </div>
    </article>
  )
}
