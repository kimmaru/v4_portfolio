import { getSortedPostsData } from '@/lib/markdown'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Jobs from '@/components/Jobs'
import Featured from '@/components/Featured'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Social from '@/components/Social'
import Email from '@/components/Email'

// Server Component
export default async function Home() {
  // Fetch data
  const featuredProjects = getSortedPostsData('featured')
  const otherProjects = getSortedPostsData('projects')
  const jobs = getSortedPostsData('jobs')

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <About />
          <Jobs jobs={jobs} />
          <Featured projects={featuredProjects} />
          <Projects projects={otherProjects} />
          <Contact />
        </main>
        <Social />
        <Email />
        <footer className="flex flex-col items-center justify-center p-4 bg-navy text-slate font-mono text-xs pb-10">
            <div className="flex md:hidden gap-5 mb-5">
                {/* Mobile social links could go here if Social component is hidden */}
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
      </div>
    </>
  )
}
