export default function About() {
  // const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';

  return (
    <section id="about" className="py-20 bg-primary-light section-animation">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-primary typing-animation">About Me</h2>
        <div className="max-w-3xl mx-auto bg-primary p-8 rounded-lg shadow-lg">
          <p className="text-lg text-text-light leading-relaxed">
            I am a passionate developer with a keen eye for creating impactful projects and solving real-world problems. 
            With expertise in web development and a strong foundation in design principles, I strive to build intuitive 
            and efficient solutions that make a difference.
          </p>
        </div>
      </div>
    </section>
  )
}

