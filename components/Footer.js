import { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter, FiStar, FiGitBranch } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 bg-navy text-slate font-mono text-xs pb-10">
      <div className="flex md:hidden gap-5 mb-5">
         <a href="https://github.com/kimmaru" aria-label="GitHub" target="_blank" rel="noreferrer" className="hover:text-green">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/kimmaru" aria-label="Linkedin" target="_blank" rel="noreferrer" className="hover:text-green">
            <FiLinkedin size={20} />
          </a>
      </div>

      <a 
        href="https://github.com/bchiang7/v4" 
        target="_blank" 
        rel="noreferrer"
        className="hover:text-green transition-colors mb-2 text-center leading-normal"
      >
        <div>Designed by Brittany Chiang</div>
        <div>Built with Next.js & Tailwind CSS by Kim SungJoo</div>
      </a>
    </footer>
  )
}

export default Footer

