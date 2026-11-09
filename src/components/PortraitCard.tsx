import { profile } from '../data/profile'


export default function PortraitCard() {
  return (
    <figure className="relative">
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-raised">
      
          <img
            src="/pic.jpg"
            alt="Oranee portrait"
            width={640}
            height={800}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        : (
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
            <span aria-hidden="true" className="absolute inset-4 border border-line/70" />
            <span aria-hidden="true" className="font-display text-[2.75rem] italic leading-none text-accent/80">
              {profile.name}
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-line" />
            
          </div>
        )
      </div>
      <figcaption className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.2em] text-muted">
        <span>{profile.location}</span>
        <span className="text-accent">Portfolio</span>
      </figcaption>
    </figure>
  )
}
