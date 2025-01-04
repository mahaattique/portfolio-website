import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="bg-primary-light text-text-dark py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4 animate-fadeIn">Hello, I'm Maha!</h2>
        <p className="text-2xl mb-4 animate-slideIn">A Professional Developer</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://www.linkedin.com/in/mahaattique/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-accent transition duration-300" />
          </a>
          <a href="https://github.com/mahaattique" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-accent transition duration-300" />
          </a>
          <a href="mailto:attique.maha@gmail.com">
            <FaEnvelope className="text-2xl hover:text-accent transition duration-300" />
          </a>
        </div>
        <div className="space-x-4">
          <Link 
            href="#projects" 
            as={`${process.env.NODE_ENV === 'production' ? '/portfolio-website' : ''}/#projects`}
            className="bg-accent hover:bg-accent/80 text-text-dark font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </Link>
          <a 
            href="/path-to-your-resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/80 text-text-dark font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  )
}

