import ArrowLink from '../ArrowLink'
import Reveal from '../Reveal'
import { contact, contactChannels } from '../../data/contact'

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-accent-strong/[0.09] py-24 md:py-32"
    >
      <div className="shell">
        <div className="border-t border-line pt-6">
          <p className="eyebrow text-accent">05 — Contact</p>
        </div>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                id="contact-heading"
                className="max-w-2xl text-[clamp(2.1rem,4.8vw,3.9rem)] font-normal leading-[1.03] tracking-[-0.03em]"
              >
                {contact.headline}
              </h2>
              <p className="mt-6 max-w-lg text-[0.98rem] leading-relaxed text-muted">
                {contact.body}
              </p>

              <div className="mt-9">
                {contact.email ? (
                  <ArrowLink href={`mailto:${contact.email}`}>{contact.ctaLabel}</ArrowLink>
                ) : (
                  <p className="inline-flex items-center border border-dashed border-line px-5 py-3.5 text-sm text-muted">
                    Email address to be added
                  </p>
                )}
              </div>

              <p className="mt-6 text-sm text-muted">
                Freelance &amp; client work:{' '}
                <a
                  href={contact.studio.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-ink underline decoration-line underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent"
                >
                  {contact.studio.name}
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="border-t border-line">
              {contactChannels.map((channel) => (
                <div
                  key={channel.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <dt className="eyebrow text-muted">{channel.label}</dt>
                  <dd className="max-w-[15rem] text-right text-sm">
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.label === 'Email'
                          ? {}
                          : { target: '_blank', rel: 'noreferrer noopener' })}
                        className="break-words transition-colors duration-300 hover:text-accent"
                      >
                        {channel.value.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                      </a>
                    ) : channel.value ? (
                      <span className="text-sm text-ink">{channel.value}</span>
                    ) : (
                      <span className="text-xs leading-relaxed text-muted">To be added</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-[0.6rem] uppercase leading-relaxed tracking-[0.16em] text-muted">
              Details marked &ldquo;to be added&rdquo; live in src/data/contact.ts
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
