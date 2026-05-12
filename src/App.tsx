import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
