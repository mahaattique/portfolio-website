import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../styles/Hero.css';


export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Hero Title */}
        <h2 className="hero-title">Hello, I'm Maha!</h2>
        <p className="hero-subtitle">A Professional Developer</p>

        {/* Social Links */}
        <div className="hero-social-links">
          <a
            href="https://www.linkedin.com/in/mahaattique/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/mahaattique"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="mailto:attique.maha@gmail.com"
            aria-label="Send me an email"
          >
            <FaEnvelope className="icon" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn" aria-label="View my work">
            View My Work
          </a>
          <a
            href="path-to-your-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            aria-label="View my resume"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
