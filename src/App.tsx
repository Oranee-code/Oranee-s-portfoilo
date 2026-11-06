import Footer from './components/Footer'
import Header from './components/Header'
import PageGrid from './components/PageGrid'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
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
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
