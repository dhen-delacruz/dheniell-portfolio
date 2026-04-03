import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { navLinks } from '../assets/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="dark:bg-[#080c10] bg-gray-50 border-t dark:border-white/5 border-black/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,198,167,0.4)]">
                <span className="font-display font-bold text-white text-lg">D</span>
              </div>
              <span className="font-display font-bold text-lg dark:text-white text-gray-900">Dheniell</span>
            </div>
            <p className="font-body text-sm dark:text-gray-400 text-gray-500 leading-relaxed max-w-xs">
              Building fast, modern, and responsive web experiences with React, Vite, and a lot of passion.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-display font-bold text-sm dark:text-white text-gray-800 mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    className="cursor-pointer font-body text-sm dark:text-gray-400 text-gray-500 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm dark:text-white text-gray-800 mb-4 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <FiGithub size={18} />, href: 'https://github.com/dheniell', label: 'GitHub' },
                { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <FiMail size={18} />, href: 'mailto:dheniell@email.com', label: 'Email' },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl dark:bg-white/5 bg-black/5 flex items-center justify-center
                             dark:text-gray-400 text-gray-500 hover:text-accent hover:border-accent/40
                             border dark:border-white/5 border-black/5 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <p className="font-mono text-xs dark:text-gray-600 text-gray-400 mt-4">
              📍 Philippines
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t dark:border-white/5 border-black/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-sm dark:text-gray-500 text-gray-400 flex items-center gap-1.5">
            © {year} Dheniell Dela Cruz. Made with
            <FiHeart size={13} className="text-accent fill-accent" />
            using React & Vite.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs dark:text-gray-500 text-gray-400">Deployed on Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
