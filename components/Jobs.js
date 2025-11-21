'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Jobs = ({ jobs }) => {
  const [activeTabId, setActiveTabId] = useState(0)

  // Hide section if no jobs data
  if (!jobs || jobs.length === 0) {
    return null
  }

  return (
    <section id="jobs" className="max-w-[700px] mx-auto py-24 px-6 sm:px-12 md:px-24">
      <h2 className="flex items-center text-2xl sm:text-3xl font-semibold text-lightest-slate mb-10 whitespace-nowrap after:content-[''] after:block after:relative after:top-[-5px] after:w-[300px] after:h-[1px] after:bg-lightest-navy after:ml-5">
        <span className="text-green font-mono text-xl mr-2">02.</span> Where I've Worked
      </h2>

      <div className="flex flex-col md:flex-row gap-5">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-lightest-navy w-full md:w-max">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTabId(i)}
              className={`px-5 py-3 font-mono text-xs text-left whitespace-nowrap transition-all duration-200 hover:bg-light-navy hover:text-green border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px] ${
                activeTabId === i
                  ? 'text-green border-green bg-light-navy'
                  : 'text-slate border-transparent'
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full pt-2 md:pt-0 md:pl-5 min-h-[300px]">
          {jobs.map((job, i) => (
            activeTabId === i && (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-medium text-lightest-slate mb-1">
                  <span>{job.title}</span>
                  <span className="text-green"> @ <a href={job.url} target="_blank" rel="noreferrer" className="hover:underline">{job.company}</a></span>
                </h3>
                <p className="font-mono text-xs text-light-slate mb-5">
                  {job.range}
                </p>

                <div 
                  className="text-slate text-base leading-relaxed [&>ul]:list-none [&>ul>li]:relative [&>ul>li]:pl-7 [&>ul>li]:mb-3 [&>ul>li]:before:content-['▹'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-green"
                  dangerouslySetInnerHTML={{ __html: job.contentHtml }} 
                />
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default Jobs

