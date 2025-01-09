// import React from 'react';
// import '../styles/Projects.css';


// const projects = [
//   {
//     title: 'Project 1',
//     description: 'An innovative web application leveraging cutting-edge technologies to solve complex problems.',
//     image: '/placeholder.svg',
//   },
//   {
//     title: 'Project 2',
//     description: 'A mobile-first design that prioritizes user experience and performance across all devices.',
//     image: '/placeholder.svg',
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="projects-container">
//         {/* Section Title */}
//         <h2 className="projects-title">My Projects</h2>

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="project-image"
//               />
//               <div className="project-content">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-description">{project.description}</p>
//                 <button className="project-button">Learn More</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Project 1',
    description: 'An innovative web application leveraging cutting-edge technologies to solve complex problems.',
    image: '/placeholder.svg',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'A mobile-first design that prioritizes user experience and performance across all devices.',
    image: '/placeholder.svg',
    link: 'https://example.com/project2',
  },
  {
    title: 'Project 3',
    description: 'A data visualization platform to analyze large datasets effectively and efficiently.',
    image: '/placeholder.svg',
    link: 'https://example.com/project3',
  },
];

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setExpanded(false);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setExpanded(false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Title */}
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Heres some of my work 👩🏽‍🔬: 
        </p>

        {/* Projects Carousel */}
        <div className="projects-carousel">
          <button className="carousel-arrow left" onClick={handlePrev}>
            ◀
          </button>

          <div className={`project-card ${expanded ? 'expanded' : ''}`}>
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{currentProject.title}</h3>
              <p className="project-description">
                {expanded ? currentProject.description : ''}
              </p>
              <div className="project-actions">
                <button className="project-button" onClick={toggleExpand}>
                  {expanded ? 'Collapse' : 'Learn More'}
                </button>
                {expanded && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Visit Project
                  </a>
                )}
              </div>
            </div>
          </div>

          <button className="carousel-arrow right" onClick={handleNext}>
            ▶
          </button>
        </div>

        {/* Progress Dots */}
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                index === currentProjectIndex ? 'active' : ''
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
