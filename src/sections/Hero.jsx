import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 dark:bg-[#0d1117] bg-[#f8f7f4]"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 dark:mesh-gradient mesh-gradient-light pointer-events-none" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 rounded-full bg-accent/8 blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,198,167,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,198,167,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-accent">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.2)}
              className="font-display font-bold leading-tight mb-4"
            >
              <span className="block text-5xl md:text-6xl xl:text-7xl dark:text-white text-gray-900 mb-2">
                Hi, I'm
              </span>
              <span className="block text-5xl md:text-6xl xl:text-7xl gradient-text glow-text">
                Dheniell Dela Cruz
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.35)}
              className="font-mono text-lg md:text-xl dark:text-gray-400 text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Web Developer{' '}
              <span className="text-accent">|</span>{' '}
              React & Vite Enthusiast
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.45)}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Link to="projects" smooth duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-base px-8 py-4 gap-2"
                >
                  View My Work
                  <span>↓</span>
                </motion.button>
              </Link>
              <Link to="contact" smooth duration={600}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline text-base px-8 py-4"
                >
                  Let's Talk
                </motion.button>
              </Link>
            </motion.div>

            {/* Socials */}
            <motion.div
              {...fadeUp(0.55)}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com/dheniell', label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FiMail size={20} />, href: 'mailto:dheniell@email.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, color: '#00C6A7' }}
                  whileTap={{ scale: 0.9 }}
                  className="dark:text-gray-400 text-gray-500 hover:text-accent transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
              <div className="h-px w-12 dark:bg-white/10 bg-black/10" />
              <span className="font-mono text-xs dark:text-gray-500 text-gray-400">@dheniell</span>
            </motion.div>
          </div>

          {/* Avatar / Code Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-2xl animate-pulse-slow" />

              {/* Avatar circle */}
              <div className="relative w-full h-full rounded-full border-2 border-accent/30 dark:bg-[#161b22] bg-gray-100 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Code snippet decoration */}
                <div className="text-center px-4">
                  <div className="font-mono text-xs leading-relaxed dark:text-gray-400 text-gray-500">
                    <div className="text-accent font-bold text-2xl mb-2">{'<DC />'}</div>
                    <div className="text-left space-y-1">
                      <p><span className="text-purple-400">const</span> <span className="text-blue-400">dev</span> = {'{'}</p>
                      <p className="pl-3"><span className="text-green-400">name</span>: <span className="text-accent">"Dheniell"</span>,</p>
                      <p className="pl-3"><span className="text-green-400">role</span>: <span className="text-accent">"Full Stack"</span>,</p>
                      <p className="pl-3"><span className="text-green-400">stack</span>: [<span className="text-accent">"React"</span>],</p>
                      <p>{'}'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-accent text-white text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg shadow-accent/30"
              >
                React ⚛️
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 dark:bg-[#161b22] bg-white border border-accent/20 text-accent text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-lg"
              >
                Vite 🚀
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs dark:text-gray-500 text-gray-400 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-accent"
          >
            <HiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
