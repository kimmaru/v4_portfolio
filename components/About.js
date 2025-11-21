import Image from 'next/image'

const About = () => {
  const skills = ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'scikit-learn', 'AWS', 'Docker', 'MLflow']

  return (
    <section id="about" className="max-w-[900px] mx-auto py-24 px-6 sm:px-12 md:px-24">
      <h2 className="flex items-center text-2xl sm:text-3xl font-semibold text-lightest-slate mb-10 whitespace-nowrap after:content-[''] after:block after:relative after:top-[-5px] after:w-[300px] after:h-[1px] after:bg-lightest-navy after:ml-5">
        <span className="text-green font-mono text-xl mr-2">01.</span> About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
        <div className="text-slate text-lg leading-relaxed">
          <p className="mb-4">
            Hello! My name is Kim SungJoo and I am an AI Engineer specializing in Computer Vision and Machine Learning. My passion lies in building end-to-end ML pipelines, from initial research and experimentation to robust production deployment.
          </p>
          <p className="mb-4">
            I have extensive experience in developing advanced classification systems, pixel-level semantic segmentation for medical images, and environmental AI systems for waste classification. My expertise also includes data-centric AI approaches for OCR and optimizing multimodal large language models for efficiency and performance.
          </p>
          <p className="mb-4">
            I am always eager to explore new challenges and contribute to innovative projects in the AI domain.
          </p>
          <p className="mb-5">Here are a few technologies I’ve been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {skills.map((skill, i) => (
              <li key={i} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto md:mx-0 max-w-[300px]">
          <div className="relative w-full h-auto z-10 group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] transition-transform duration-300">
            <div className="absolute inset-0 bg-green mix-blend-screen rounded transition-all duration-300 group-hover:bg-transparent"></div>
            <Image
              src="/images/profile-v2.jpg?v=2"
              alt="Kim SungJoo"
              width={300}
              height={300}
              className="rounded grayscale hover:filter-none transition-all duration-300 object-cover"
              priority
              unoptimized
            />
          </div>
          <div className="absolute top-5 left-5 w-full h-full border-2 border-green rounded -z-10 group-hover:translate-x-[5px] group-hover:translate-y-[5px] transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  )
}

export default About

