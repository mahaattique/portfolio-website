import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'An innovative web application leveraging cutting-edge technologies to solve complex problems.',
    image: '/placeholder.svg',
  },
  {
    title: 'Project 2',
    description: 'A mobile-first design that prioritizes user experience and performance across all devices.',
    image: '/placeholder.svg',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Title */}
        <h2 className="projects-title">My Projects</h2>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <button className="project-button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
