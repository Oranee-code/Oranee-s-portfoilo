import { useEffect, useState } from 'react'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'
import { CloseIcon, MenuIcon } from './icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(navigation.map((item) => item.id))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-line bg-surface/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href="#top"
          className="group flex items-baseline gap-3"
          aria-label={`${profile.name} — back to top`}
        >
          <span className="font-display text-2xl leading-none tracking-tight">
            {profile.name}
            <span className="text-accent">.</span>
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.24em] text-muted sm:block">
            {profile.role}
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <nav aria-label="Sections" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => {
                const isActive = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group relative inline-block py-2 text-[0.8rem] tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ease-editorial ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <span aria-hidden="true" className="hidden h-4 w-px bg-line md:block" />

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors duration-300 hover:border-accent hover:text-accent md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="border-t border-line bg-surface md:hidden"
      >
        <nav aria-label="Sections" className="shell py-4">
          <ul>
            {navigation.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline justify-between border-b border-line py-4 text-lg tracking-[-0.01em]"
                >
                  <span>{item.label}</span>
                  <span className="text-[0.7rem] tabular-nums tracking-[0.08em] text-muted">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="pt-5 pb-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted">
            {profile.location} · {profile.availability}
          </p>
        </nav>
      </div>
    </header>
  )
}
