import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiDownload } from 'react-icons/hi'
import { FiCode, FiZap, FiLayers } from 'react-icons/fi'
import { projects } from '../assets/data'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '6', label: 'Projects Built' },
  { value: '100%', label: 'Vibe Coding' },
]

const highlights = [
  { icon: <FiCode size={20} />, title: 'Clean Code', desc: 'Readable, maintainable, and scalable.' },
  { icon: <FiZap size={20} />, title: 'Fast Delivery', desc: 'Performance-first development mindset.' },
  { icon: <FiLayers size={20} />, title: 'Modern Stack', desc: 'React, Vite, TailwindCSS & more.' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [showResume, setShowResume] = useState(false)
  const [resumeTab, setResumeTab] = useState('digital')

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
              I'm a passionate UI/UX, Web Dev focused on building{' '}
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
              <button
                type="button"
                onClick={() => {
                  setShowResume(true)
                  setResumeTab('digital')
                }}
                className="btn-primary gap-2"
              >
                <HiDownload size={18} />
                View Resume
              </button>
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

      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-[#0f1720] p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowResume(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <div className="mb-6 flex gap-2 rounded-full bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setResumeTab('digital')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${resumeTab === 'digital' ? 'bg-accent text-black' : 'text-gray-300 hover:text-white'}`}
              >
                Digital
              </button>
              <button
                type="button"
                onClick={() => setResumeTab('pdf')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${resumeTab === 'pdf' ? 'bg-white text-black' : 'text-gray-300 hover:text-white'}`}
              >
                PDF
              </button>
            </div>

            {resumeTab === 'digital' ? (
              <div className="space-y-6">
                <div>
                  <span className="section-label block mb-3">Resume</span>
                  <h3 className="text-3xl font-bold text-white">Dheniell Dela Cruz</h3>
                  <p className="text-sm text-gray-400">UI/UX Designer & Web Developer</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3 rounded-3xl bg-white/5 p-6 border border-white/10">
                    <h4 className="font-semibold text-white">Summary</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      Passionate web developer specializing in responsive UI, modern frontend architecture, and clean, maintainable code. Experienced with React, Vite, TailwindCSS, and deployment workflows.
                    </p>
                  </div>
                  <div className="space-y-3 rounded-3xl bg-white/5 p-6 border border-white/10">
                    <h4 className="font-semibold text-white">Contact</h4>
                    <p className="text-sm text-gray-300">Email: dheinell@email.com</p>
                    <p className="text-sm text-gray-300">Location: Philippines</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
                  <h4 className="font-semibold text-white mb-4">Skills</h4>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">HTML5</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">CSS3</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">JavaScript</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">React</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Tailwind</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Backend</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Node.js</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Express</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">MySQL</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Tools</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Git</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Figma</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Vercel</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">Vite</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Projects</h4>
                  <div className="space-y-4 text-gray-300">
                    {projects.map((project) => (
                      <div key={project.id}>
                        <p className="font-semibold text-white">{project.title}</p>
                        <p className="text-sm text-gray-400">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-[65vh] overflow-hidden rounded-3xl border border-white/10 bg-[#091118]">
                <iframe
                  src="/resume.pdf"
                  title="Resume PDF"
                  className="h-full w-full"
                />
              </div>
            )}

            <div className="flex flex-wrap gap-4 justify-end mt-6">
              <button
                type="button"
                onClick={() => setShowResume(false)}
                className="btn-outline"
              >
                Close
              </button>
              <a
                href="/resume.pdf"
                download="Dheniell_Dela_Cruz_Resume.pdf"
                className="btn-primary"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
