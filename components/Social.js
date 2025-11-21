import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from 'react-icons/fi'

const Social = () => {
  return (
    <div className="hidden md:block fixed bottom-0 left-10 z-10 text-light-slate">
      <ul className="flex flex-col items-center m-0 p-0 list-none gap-5 after:content-[''] after:block after:w-[1px] after:h-[90px] after:bg-light-slate after:mt-5">
        <li className="hover:-translate-y-1 hover:text-green transition-all duration-200">
          <a href="https://github.com/kimmaru" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2.5 block">
            <FiGithub size={20} />
          </a>
        </li>
        <li className="hover:-translate-y-1 hover:text-green transition-all duration-200">
          <a href="https://www.linkedin.com/in/kimmaru" aria-label="Linkedin" target="_blank" rel="noreferrer" className="p-2.5 block">
            <FiLinkedin size={20} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social

