import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../assets/data'

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true })
  const [hovered, setHovered] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="projects"
      ref={ref}
      className="py-28 dark:bg-[#080c10] bg-white relative overflow-hidden"
    >
      {/* BG element */}
      <div className="absolute left-0 top-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="section-label block mb-3">02. Projects</span>
            <h2 className="section-heading dark:text-white text-gray-900">
              Things I've <span className="gradient-text">Built</span>
            </h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onHoverStart={() => setHovered(project.id)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden dark:bg-[#0d1117] bg-gray-50
                         border dark:border-white/5 border-black/5 hover:border-accent/40 transition-all duration-300
                         hover:shadow-[0_0_40px_rgba(0,198,167,0.1)] cursor-pointer"
            >
              {/* Top color bar */}
              <div
                className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: project.color }}
              />

              {/* Thumbnail area */}
              <div
                className="relative h-44 flex items-center justify-center overflow-hidden dark:bg-[#161b22] bg-gray-100"
                style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
              >
                <motion.div
                  animate={hovered === project.id ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-6xl"
                >
                  {project.emoji}
                </motion.div>

              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-base dark:text-white text-gray-900 mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="font-body text-sm dark:text-gray-400 text-gray-500 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-full dark:bg-white/5 bg-black/5 dark:text-gray-400 text-gray-500 border dark:border-white/5 border-black/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0d1117] p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <div className="mb-6">
              <div className="text-6xl mb-4">{selectedProject.emoji}</div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {selectedProject.title}
              </h3>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
