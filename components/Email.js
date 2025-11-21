const Email = () => {
  return (
    <div className="hidden md:block fixed bottom-0 right-10 z-10 text-light-slate">
      <div className="flex flex-col items-center gap-5 after:content-[''] after:block after:w-[1px] after:h-[90px] after:bg-light-slate after:mt-5">
        <a href="mailto:kimmaru@example.com" className="font-mono text-xs tracking-widest hover:-translate-y-1 hover:text-green transition-all duration-200 p-2.5 vertical-rl">
          kimmaru@example.com
        </a>
      </div>
    </div>
  )
}

export default Email

