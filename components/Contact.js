const Contact = () => {
  return (
    <section id="contact" className="max-w-[600px] mx-auto py-24 px-6 sm:px-12 md:px-24 text-center mb-24">
      <p className="text-green font-mono text-base mb-5">04. What’s Next?</p>
      <h2 className="text-4xl sm:text-5xl font-semibold text-lightest-slate mb-5">Get In Touch</h2>
      <p className="text-slate text-lg mb-12 leading-relaxed">
        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="mailto:kimmaru@example.com" className="inline-block text-green border border-green rounded px-7 py-4 font-mono text-sm hover:bg-green-tint transition-colors duration-300">
        Say Hello
      </a>
    </section>
  )
}

export default Contact

