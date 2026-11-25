import { nav, profile } from './data.js'
import { useScrollProgress, useScrollSpy, useTheme, useToast } from './hooks.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import { Education, Training } from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import QuickBar from './components/QuickBar.jsx'

const ids = nav.map((n) => n[0])

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const pct = useScrollProgress()
  const active = useScrollSpy(ids)
  const [toast, say] = useToast()

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="bar" style={{ width: pct + '%' }} />
      {toast && <div className="toast" role="status">{toast}</div>}
      <Navbar active={active} theme={theme} onTheme={toggleTheme} />
      <main id="main">
        <div className="wrap">
          <Hero />
          <Stats />
        </div>
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Training />
        <Contact say={say} />
      </main>
      <footer>
        <div className="wrap">© {new Date().getFullYear()} {profile.name} · <a href="#main">Back to top</a></div>
      </footer>
      <QuickBar />
    </>
  )
}
