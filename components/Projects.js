import { useState } from 'react'
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Projects = ({ projects }) => {
  const [showMore, setShowMore] = useState(false)
  const GRID_LIMIT = 6
  const firstSix = projects.slice(0, GRID_LIMIT)
  const projectsToShow = showMore ? projects : firstSix

  return (
    <section className="max-w-[1000px] mx-auto py-24 px-6 sm:px-12 md:px-24 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-lightest-slate mb-10 text-center">
        Other Noteworthy Projects
      </h2>
      
      {/* <Link href="/archive" className="font-mono text-sm text-green mb-10 hover:underline">view the archive</Link> */}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mb-12">
        <AnimatePresence>
          {projectsToShow.map((project, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
              className="bg-light-navy h-full p-8 rounded shadow-lg hover:-translate-y-2 transition-transform duration-300 group"
            >
              <header className="flex justify-between items-center mb-8">
                <div className="folder text-green">
                  <FiFolder size={40} />
                </div>
                <div className="flex gap-4 text-slate">
                  {project.github && (
                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noreferrer" className="hover:text-green">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} aria-label="External Link" target="_blank" rel="noreferrer" className="hover:text-green">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </header>

              <h3 className="mb-2 text-xl font-semibold text-lightest-slate group-hover:text-green transition-colors">
                <a href={project.external || project.github || '#'} target="_blank" rel="noreferrer">{project.title}</a>
              </h3>

              <div className="text-light-slate text-sm mb-5" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />

              <footer className="mt-auto">
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-slate">
                  {project.tech && project.tech.map((tech, j) => (
                    <li key={j}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {projects.length > GRID_LIMIT && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-green border border-green rounded px-7 py-4 font-mono text-sm hover:bg-green-tint transition-colors duration-300"
        >
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </section>
  )
}

export default Projects

