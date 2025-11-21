'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Logo from './icons/Logo'

const Navbar = () => {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navLinks = [
    { name: 'About', url: '/#about' },
    { name: 'Experience', url: '/#jobs' },
    { name: 'Work', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ]

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 z-50 w-full bg-navy/90 backdrop-blur-sm h-24 px-6 sm:px-12 flex items-center justify-between shadow-lg"
    >
      <nav className="w-full flex justify-between items-center">
        <div className="logo" tabIndex="-1">
          <Link href="/" aria-label="home">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <ol className="hidden md:flex gap-5 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={link.url} className="text-lightest-slate hover:text-green font-mono text-sm p-2.5 transition-colors">
                  <span className="text-green mr-1">0{i + 1}.</span>
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-green border border-green rounded px-4 py-3 font-mono text-sm hover:bg-green-tint transition-colors">
              Resume
            </Link>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}

export default Navbar

