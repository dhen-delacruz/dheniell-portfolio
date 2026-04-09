import { useDarkMode } from './hooks/useDarkMode'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Chatbot from '../chatbot/Chatbot'
import Hero from './sections/Hero'
import About from './components/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

export default function App() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen dark:bg-[#0d1117] bg-[#f8f7f4] transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <Chatbot isDark={isDark} />
      </div>
    </div>
  )
}
