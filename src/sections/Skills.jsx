import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../assets/data'

const categoryColors = {
  Frontend: 'text-blue-400 bg-blue-400/10',
  Tools: 'text-yellow-400 bg-yellow-400/10',
  Backend: 'text-green-400 bg-green-400/10',
  Deploy: 'text-purple-400 bg-purple-400/10',
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-28 dark:bg-[#0d1117] bg-[#f8f7f4] relative overflow-hidden"
    >
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-3">03. Skills</span>
          <h2 className="section-heading dark:text-white text-gray-900">
            My Tech <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="font-body dark:text-gray-400 text-gray-500 mt-4 max-w-lg mx-auto">
            Technologies I work with daily to craft fast, beautiful web experiences.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative rounded-2xl p-5 text-center
                         dark:bg-[#161b22] bg-white border dark:border-white/5 border-black/5
                         hover:border-accent/40 dark:hover:bg-[#1c2128] hover:bg-gray-50
                         hover:shadow-[0_0_30px_rgba(0,198,167,0.1)]
                         transition-all duration-300 cursor-default"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                   style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,198,167,0.08), transparent 70%)' }} />

              <div className="text-4xl mb-3">{skill.icon}</div>
              <div className="font-display font-bold text-sm dark:text-white text-gray-800 mb-2">
                {skill.name}
              </div>

            </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center font-mono text-xs dark:text-gray-600 text-gray-400 mt-10"
        >
          + Always learning new technologies 🚀
        </motion.p>
      </div>
    </section>
  )
}
