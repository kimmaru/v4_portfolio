import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Featured = ({ projects }) => {
  return (
    <section id="projects" className="max-w-[1000px] mx-auto py-24 px-6 sm:px-12 md:px-24">
      <h2 className="flex items-center text-2xl sm:text-3xl font-semibold text-lightest-slate mb-10 whitespace-nowrap after:content-[''] after:block after:relative after:top-[-5px] after:w-[300px] after:h-[1px] after:bg-lightest-navy after:ml-5">
        <span className="text-green font-mono text-xl mr-2">03.</span> Some Things I’ve Built
      </h2>

      <ul className="list-none p-0 m-0">
        {projects.map((project, i) => {
            // Resolve image path based on project ID (folder name)
            // We copied images to public/images/featured/{id}.png
            const imagePath = `/images/featured/${project.id}.png`

            return (
            <li key={i} className="relative grid grid-cols-12 items-center gap-2.5 mb-24 last:mb-0">
                {/* Image */}
                <div className={`col-span-12 md:col-span-7 row-span-1 row-start-1 relative h-full ${i % 2 !== 0 ? 'md:col-start-6' : 'md:col-start-1'}`}>
                <a href={project.external || project.github} target="_blank" rel="noreferrer" className="block w-full h-full bg-green rounded md:hover:bg-transparent transition-colors duration-300 relative before:content-[''] before:absolute before:inset-0 before:bg-navy before:mix-blend-screen before:transition-all before:duration-300 hover:before:bg-transparent z-10">
                    <div className="relative w-full aspect-[16/9] md:h-full grayscale mix-blend-multiply hover:mix-blend-normal hover:filter-none transition-all duration-300 rounded overflow-hidden">
                        {/* Use a reliable placeholder if image fails, or conditional render */}
                        <div className="w-full h-full bg-light-navy flex items-center justify-center text-slate">
                             <span className="text-4xl">Featured Project</span>
                        </div>
                        {/* 
                        <Image 
                            src={imagePath} 
                            alt={project.title} 
                            fill 
                            className="object-cover"
                        /> 
                        */}
                    </div>
                </a>
                </div>

                {/* Content */}
                <div className={`col-span-12 md:col-span-7 row-span-1 row-start-1 relative z-20 flex flex-col justify-center h-full ${i % 2 !== 0 ? 'md:col-start-1 text-left md:items-start' : 'md:col-start-6 text-right md:items-end'} p-6 md:p-0 bg-navy/90 md:bg-transparent`}>
                <p className="text-green font-mono text-xs mb-2">Featured Project</p>
                <h3 className="text-lightest-slate text-2xl font-semibold mb-5">
                    <a href={project.external || project.github} target="_blank" rel="noreferrer" className="hover:text-green">{project.title}</a>
                </h3>

                <div className="bg-light-navy text-light-slate text-sm p-6 rounded shadow-xl mb-5 hover:shadow-2xl transition-shadow" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />

                <ul className={`flex flex-wrap gap-5 mb-5 font-mono text-xs text-light-slate ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                    {project.tech && project.tech.map((tech, j) => (
                    <li key={j}>{tech}</li>
                    ))}
                </ul>

                <div className={`flex items-center gap-5 text-lightest-slate ${i % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
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
                </div>
            </li>
            )
        })}
      </ul>
    </section>
  )
}

export default Featured

