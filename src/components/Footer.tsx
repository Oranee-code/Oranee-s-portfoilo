import { contact, contactChannels } from '../data/contact'
import { profile } from '../data/profile'
import { ArrowUpIcon, GlobeIcon, LinkedinIcon, MailIcon } from './icons'

/** Footer channels are shown as icon links: email, LinkedIn and the studio site. */
const channelIcons = {
  Email: MailIcon,
  LinkedIn: LinkedinIcon,
  Studio: GlobeIcon,
}

const iconButtonClass =
  'inline-flex h-10 w-10 items-center justify-center border transition-colors duration-300'

export default function Footer() {
  const year = new Date().getFullYear()
  const links = contactChannels.filter((channel) => channel.label in channelIcons)

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl leading-none tracking-tight">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-muted">
            {profile.role} · {profile.location}
          </p>
        </div>

        <ul className="flex flex-wrap items-center gap-3">
          {links.map((channel) => {
            const Icon = channelIcons[channel.label as keyof typeof channelIcons]
            const accessibleLabel =
              channel.label === 'Studio' ? contact.studio.name : channel.label

            return (
              <li key={channel.label}>
                {channel.href ? (
                  <a
                    href={channel.href}
                    aria-label={accessibleLabel}
                    title={accessibleLabel}
                    {...(channel.label === 'Email'
                      ? {}
                      : { target: '_blank', rel: 'noreferrer noopener' })}
                    className={`${iconButtonClass} border-line text-muted hover:border-accent hover:text-accent`}
                  >
                    <Icon />
                  </a>
                ) : (
                  <span
                    title={`${channel.label} — to be added in src/data/contact.ts`}
                    className={`${iconButtonClass} border-dashed border-line text-muted/60`}
                  >
                    <Icon />
                    <span className="sr-only">{channel.label} — to be added</span>
                  </span>
                )}
              </li>
            )
          })}
        </ul>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start text-[0.62rem] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-ink md:self-auto"
        >
          Back to top
          <ArrowUpIcon className="transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="shell flex flex-col gap-2 border-t border-line py-5 text-[0.62rem] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with React, TypeScript &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
