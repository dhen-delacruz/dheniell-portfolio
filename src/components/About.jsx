import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiDownload } from 'react-icons/hi'
import { FiCode, FiZap, FiLayers } from 'react-icons/fi'
import photo from '../assets/photo.jpg'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Built' },
  { value: '100%', label: 'Passion for Code' },
]

const highlights = [
  { icon: <FiCode size={20} />, title: 'Clean Code', desc: 'Readable, maintainable, and scalable.' },
  { icon: <FiZap size={20} />, title: 'Fast Delivery', desc: 'Performance-first development mindset.' },
  { icon: <FiLayers size={20} />, title: 'Modern Stack', desc: 'React, Vite, TailwindCSS & more.' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section
      id="about"
      ref={ref}
      className="py-28 dark:bg-[#0d1117] bg-[#f8f7f4] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label block mb-3">01. About Me</span>
          <h2 className="section-heading dark:text-white text-gray-900">
            The Person Behind{' '}
            <span className="gradient-text">The Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-0 rounded-2xl border-2 border-accent/20 translate-x-4 translate-y-4" />

              {/* Photo box */}
              <div className="relative rounded-2xl overflow-hidden dark:bg-[#161b22] bg-gray-100 border dark:border-white/5 border-black/5 aspect-square flex items-center justify-center">
                {/* Placeholder avatar */}
                <div className="text-center">
                  <div className="relative rounded-2xl overflow-hidden dark:bg-[#161b22] bg-gray-100 border dark:border-white/5 border-black/5 aspect-square flex items-center justify-center">
                      <img
                        src="/photo.jpg"
                        alt="Dheniell Dela Cruz"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-accent" />
                <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-accent/40" />
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 mt-8 justify-center lg:justify-start">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display font-bold text-2xl text-accent">{s.value}</div>
                  <div className="font-body text-xs dark:text-gray-500 text-gray-400">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-body text-lg leading-relaxed dark:text-gray-300 text-gray-600">
              I'm a passionate web developer focused on building{' '}
              <span className="text-accent font-medium">fast, modern, and responsive websites</span>{' '}
              using React, Vite, and modern deployment tools like Vercel.
            </p>
            <p className="font-body text-base leading-relaxed dark:text-gray-400 text-gray-500">
              Based in the Philippines, I thrive on turning complex problems into clean, elegant
              solutions. I'm constantly learning, building, and pushing the limits of what's possible
              on the web. Whether it's a pixel-perfect UI or an optimized backend integration, I bring
              dedication and creativity to every project.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl dark:bg-white/5 bg-black/3 border dark:border-white/5 border-black/5 hover:border-accent/30 transition-colors"
                >
                  <div className="text-accent mt-0.5">{h.icon}</div>
                  <div>
                    <div className="font-display font-semibold text-sm dark:text-white text-gray-800 mb-0.5">{h.title}</div>
                    <div className="font-body text-sm dark:text-gray-400 text-gray-500">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="pt-4 flex gap-4"
            >
              <a
                href="/resume.pdf"
                download="Dheniell_Dela_Cruz_Resume.pdf"
                className="btn-primary gap-2"
              >
                <HiDownload size={18} />
                Download Resume
              </a>
              <a
                href="mailto:dheniell@email.com"
                className="btn-outline gap-2"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
