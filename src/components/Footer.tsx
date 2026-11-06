import { contactChannels } from '../data/contact'
import { profile } from '../data/profile'
import { ArrowUpIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()
  const links = contactChannels.filter((channel) => channel.href)

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl leading-none tracking-tight">
            {profile.name} {profile.last}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {links.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.label === 'Email'
                  ? {}
                  : { target: '_blank', rel: 'noreferrer noopener' })}
                className="text-muted transition-colors duration-300 hover:text-accent"
              >
                {channel.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#home"
          className="group inline-flex items-center gap-2 self-start text-[0.62rem] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-ink md:self-auto"
        >
          Back to top
          <ArrowUpIcon className="transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="shell flex-col gap-2 border-t border-line py-5 text-[0.62rem] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {profile.name}{profile.last}. All rights reserved.
        </span>
        
      </div>
    </footer>
  )
}
