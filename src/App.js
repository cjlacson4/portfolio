import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import ProjectPage from './components/ProjectPage/ProjectPage'
import { projects } from './portfolio'
import './App.css'

const getProjectSlug = (project) =>
  project.slug ||
  project.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

const getProjectFromHash = () => {
  const projectPrefix = '#project/'

  if (!window.location.hash.startsWith(projectPrefix)) return null

  const slug = window.location.hash.replace(projectPrefix, '')

  return projects.find((project) => getProjectSlug(project) === slug) || null
}

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  const [selectedProject, setSelectedProject] = useState(getProjectFromHash)

  useEffect(() => {
    const handleHashChange = () => setSelectedProject(getProjectFromHash())

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      {selectedProject ? (
        <ProjectPage project={selectedProject} />
      ) : (
        <main>
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      )}

      <ScrollToTop />
    </div>
  )
}

export default App
