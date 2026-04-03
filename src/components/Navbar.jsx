import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMoon, HiSun, HiMenuAlt3, HiX } from 'react-icons/hi'
import { navLinks } from '../assets/data'

export default function Navbar({ isDark, setIsDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 backdrop-blur-xl bg-white/80 dark:bg-[#0d1117]/80 shadow-lg shadow-black/5 border-b border-black/5 dark:border-white/5'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth duration={600} className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,198,167,0.5)]">
                <span className="font-display font-bold text-white text-lg leading-none">D</span>
              </div>
              <span className="font-display font-bold text-lg dark:text-white text-gray-900">
                Dheniell
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                spy
                onSetActive={() => setActive(link.to)}
                className="cursor-pointer relative px-4 py-2 font-body font-medium text-sm transition-colors duration-200 dark:text-gray-300 text-gray-600 hover:text-accent dark:hover:text-accent group"
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                  active === link.to ? 'w-4' : 'w-0 group-hover:w-4'
                }`} />
              </Link>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-full flex items-center justify-center dark:bg-white/10 bg-black/5 dark:text-yellow-300 text-gray-600 hover:bg-accent hover:text-white transition-all duration-300"
              aria-label="Toggle dark mode"
            >
              {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
            </motion.button>

            {/* Hire Me btn - desktop */}
            <Link to="contact" smooth duration={600} className="hidden md:block cursor-pointer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-xs px-5 py-2"
              >
                Hire Me
              </motion.button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center dark:bg-white/10 bg-black/5 dark:text-white text-gray-700"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 backdrop-blur-xl bg-white/95 dark:bg-[#0d1117]/95" />
            <div className="relative flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer font-display font-bold text-3xl dark:text-white text-gray-900 hover:text-accent dark:hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
