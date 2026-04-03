import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from 'react-icons/fi'

const socials = [
  {
    icon: <FiGithub size={22} />,
    label: 'GitHub',
    value: '@dheniell',
    href: 'https://github.com/dhen-delacruz',
    color: '#6e40c9',
  },
  {
    icon: <FiLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'Dheniell Dela Cruz',
    href: 'https://www.linkedin.com/in/dheniell-dela-cruz/',
    color: '#0077b5',
  },
  {
    icon: <FiMail size={22} />,
    label: 'Email',
    value: 'dhenielldelacruz123@email.com',
    href: 'mailto:dhenielldelacruz123@email.com',
    color: '#00C6A7',
  },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
    setForm({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 dark:bg-[#080c10] bg-white relative overflow-hidden"
    >
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label block mb-3">04. Contact</span>
          <h2 className="section-heading dark:text-white text-gray-900">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="font-body dark:text-gray-400 text-gray-500 mt-4 max-w-lg mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl dark:text-white text-gray-900 mb-2">
                Get In Touch
              </h3>
              <p className="font-body dark:text-gray-400 text-gray-500 text-sm leading-relaxed">
                I'm currently open to freelance opportunities and full-time roles.
                Whether you have a question or a project to discuss, my inbox is always open!
              </p>
            </div>

            <div className="space-y-4">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 rounded-xl
                             dark:bg-white/5 bg-gray-50 border dark:border-white/5 border-black/5
                             hover:border-accent/30 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm dark:text-white text-gray-800">{s.label}</div>
                    <div className="font-body text-sm dark:text-gray-400 text-gray-500">{s.value}</div>
                  </div>
                  <div className="ml-auto text-accent opacity-0 group-hover:opacity-100 transition-opacity">→</div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl border border-accent/20 dark:bg-accent/5 bg-accent/3">
              <span className="flex h-3 w-3 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-sm text-accent">Available for new projects</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4 border border-accent/30">
                  <FiCheck size={28} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl dark:text-white text-gray-900 mb-2">Message Sent!</h3>
                <p className="font-body dark:text-gray-400 text-gray-500 text-sm mb-6">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-sm"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-8 rounded-2xl dark:bg-[#0d1117] bg-gray-50 border dark:border-white/5 border-black/5"
              >
                {/* Name */}
                <div>
                  <label className="block font-display font-semibold text-sm dark:text-gray-300 text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 rounded-xl font-body text-sm
                               dark:bg-[#161b22] bg-white dark:text-white text-gray-900
                               border transition-all duration-200 outline-none
                               focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,198,167,0.1)]
                               placeholder:dark:text-gray-600 placeholder:text-gray-400
                               ${errors.name ? 'border-red-400' : 'dark:border-white/10 border-black/10'}`}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block font-display font-semibold text-sm dark:text-gray-300 text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 rounded-xl font-body text-sm
                               dark:bg-[#161b22] bg-white dark:text-white text-gray-900
                               border transition-all duration-200 outline-none
                               focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,198,167,0.1)]
                               placeholder:dark:text-gray-600 placeholder:text-gray-400
                               ${errors.email ? 'border-red-400' : 'dark:border-white/10 border-black/10'}`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-display font-semibold text-sm dark:text-gray-300 text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="How Can I Help You"
                    className={`w-full px-4 py-3 rounded-xl font-body text-sm resize-none
                               dark:bg-[#161b22] bg-white dark:text-white text-gray-900
                               border transition-all duration-200 outline-none
                               focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,198,167,0.1)]
                               placeholder:dark:text-gray-600 placeholder:text-gray-400
                               ${errors.message ? 'border-red-400' : 'dark:border-white/10 border-black/10'}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FiSend size={16} />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
