import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="section-divider" />
        <Work />
        <hr className="section-divider" />
        <Skills />
        <hr className="section-divider" />
        <Experience />
        <hr className="section-divider" />
        <Contact />
      </main>
    </>
  )
}
