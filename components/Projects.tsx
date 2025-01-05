import Image from 'next/image'

const projects = [
  { title: "Project 1", description: "An innovative web application leveraging cutting-edge technologies to solve complex problems.", image: "/placeholder.svg" },
  { title: "Project 2", description: "A mobile-first design that prioritizes user experience and performance across all devices.", image: "/placeholder.svg" }
]

export default function Projects() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';

  return (
    <section id="projects" className="py-20 bg-primary-light section-animation">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-dark typing-animation">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-accent rounded-lg shadow-lg overflow-hidden card-animation">
              <Image src={project.image} alt={project.title} width={500} height={300} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">{project.title}</h3>
                <p className="text-text-dark">{project.description}</p>
                <button className="mt-4 bg-primary hover:bg-primary/80 text-text-light font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

