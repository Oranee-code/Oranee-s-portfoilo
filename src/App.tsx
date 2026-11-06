import Footer from './components/Footer'
import Header from './components/Header'
import PageGrid from './components/PageGrid'
import About from './components/sections/About'
import Career from './components/sections/Career'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface text-ink">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <PageGrid />
      <div aria-hidden="true" className="grain-overlay" />

      <Header />

      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Career />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
