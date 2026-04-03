import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'
import { animateScroll as scroll } from 'react-scroll'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll.scrollToTop({ duration: 600, smooth: true })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-accent text-white
                     flex items-center justify-center shadow-lg shadow-accent/30
                     hover:shadow-[0_0_25px_rgba(0,198,167,0.5)] transition-shadow"
        >
          <HiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
