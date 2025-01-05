import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Header() {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio-website' : '';

  return (
    <header className="bg-text-dark text-primary-light sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Maha Attique</h1>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-4">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                   href={`${basePath}/#${item.toLowerCase()}`}
                  
                  className="text-primary-light hover:text-accent transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

