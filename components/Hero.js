'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  const items = [
    <h1 key="1" className="text-green font-mono text-sm mb-5 ml-1">Hi, my name is</h1>,
    <h2 key="2" className="text-lightest-slate font-sans font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-4">
      Kim SungJoo.
    </h2>,
    <h3 key="3" className="text-slate font-sans font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-5">
      I build AI systems for production.
    </h3>,
    <p key="4" className="text-slate font-sans text-lg max-w-[540px] mb-12 leading-relaxed">
      I’m an AI Engineer specializing in Computer Vision and Machine Learning. Currently, I’m focused on building end-to-end ML pipelines from research to production deployment.
    </p>,
    <Link key="5" href="https://kimmaru.com" target="_blank" rel="noreferrer" className="inline-block text-green border border-green rounded px-7 py-4 font-mono text-sm hover:bg-green-tint transition-colors duration-300">
      View My Portfolio
    </Link>
  ]

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-start max-w-[1000px] mx-auto px-6 sm:px-12 md:px-24 py-24">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
        >
          {item}
        </motion.div>
      ))}
    </section>
  )
}

export default Hero

