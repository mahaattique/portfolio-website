import React, { useState } from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Sentiment Analysis & Review Generation',
    technologies: ['Python', 'nltk', 'SVM', 'RNN', 'Transformers'],
    frameworks: ['TensorFlow', 'Scikit-learn', 'Matplotlib'],
    explanation: `
      This project analyzed a Kaggle dataset of 50,000 IMDB movie reviews. 
      Sentiment analysis was performed using a Support Vector Machine (SVM) to classify 
      reviews into binary sentiments (positive or negative) based on ratings. An RNN was 
      employed to classify reviews into one of eight emotion classes, leveraging movie 
      descriptions as a basis for emotion prediction.
    `,
    results: [
      'SVM achieved an average accuracy of 79% for sentiment classification.',
      'The RNN demonstrated 98% training accuracy but only 21% test accuracy due to the nuanced nature of emotion perception.',
    ],
    future: [
      'Develop a unified model to integrate binary sentiment and multi-class emotion classification.',
      'Leverage Transformer-based models like BERT for improved sentiment and emotion detection.',
      'Explore ensemble methods for classifier effectiveness and incorporate pre-made emotion lexicons for deeper analysis.',
    ],
    image: 'portfolio-website/public/images/sentiment_analysis.png',
    link: 'https://github.com/mahaattique/Movie-Data-Analytics---CS360',
  },
  {
    title: 'Predictive Music Genre Classification',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'NumPy'],
    frameworks: ['Naive Bayes', 'Information Gain', 'PCA'],
    explanation: `
      This project analyzed music genres using the "tracks.csv" and "genres.csv" datasets 
      from the FMA Music Dataset. Feature selection was performed using information gain 
      to identify relevant acoustic features for genre classification, followed by Naive Bayes 
      modeling. Principal Component Analysis (PCA) was employed for dimensionality reduction.
    `,
    results: [
      'Achieved 80% classification accuracy across reduced top-level music genres.',
      'Information gain significantly improved model interpretability and accuracy compared to other methods.',
    ],
    future: [
      'Incorporate additional acoustic features to refine genre classification accuracy.',
      'Develop deep learning models for end-to-end audio feature extraction and genre classification.',
    ],
    image: 'portfolio-website/public/images/musics_genre.png',
    link: 'https://github.com/mahaattique/MusicDataAnalysis',
  },
  {
    title: 'Common Room Reservation App',
    image: '/portfolio-website/public/images/application.png', // Replace with your image path
    technologies: ['Java', 'Android Studio', 'Node.js', 'MongoDB'],
    frameworks: ['Express.js', 'REST API'],
    explanation:
      'Developed an Android application for efficient space reservation at Bryn Mawr College. The solution streamlined the booking process through a responsive interface and robust database management.',
    results: [
      'Increased reservation efficiency by 40% with a unified platform.',
      'Simplified user experience with a seamless Android-to-web connection.',
    ],
    future: [
      'Introduce real-time notifications for reservations and cancellations.',
      'Enhance the application with AI-based suggestions for optimal room usage.',
    ],
     // Muted olive
    link: 'https://github.com/mahaattique/SWEProject-Android',
  },
  {
    title: 'Human-Centered Design - Accessible Web Redesign',
    image: '/images/design_journal.png', // Ensure you upload the image to public/images
    technologies: ['HTML', 'CSS', 'JavaScript'],
    frameworks: ['Google Sites', 'Responsive Web Design Principles'],
    explanation: `
      This ongoing project focuses on reimagining web accessibility and usability by redesigning 
      outdated, non-intuitive interfaces. The goal is to create a user-friendly experience 
      that prioritizes inclusivity, particularly for individuals using assistive technologies. 
      The process involves iterative prototyping, user testing, and refining layouts to ensure 
      a responsive and accessible web design.
    `,
    results: [
      'Redesigned initial layouts to simplify navigation and improve structure.',
      'Improved content hierarchy to enhance readability and user flow.',
      'Conducted preliminary tests with screen readers to identify usability issues.',
    ],
    future: [
      'Complete accessibility audits and refine designs based on user feedback.',
      'Implement dynamic elements to improve interactivity.',
      'Expand features to support multilingual content and personalized experiences.',
    ],
    link: 'https://sites.google.com/view/design-journal-mattique/home?authuser=0',
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
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Here's some of my work 👩🏽‍🔬:</p>

        <div className="projects-carousel">
          <button className="carousel-arrow left" onClick={handlePrev}>
            ◀
          </button>

          <div
            className={`project-card ${expanded ? 'expanded' : ''}`}
            style={{ backgroundColor: currentProject.color }}
          >
            {/* <img
              src={currentProject.image}
              alt={currentProject.title}
              className="project-image"
            /> */}
            <div className="project-content">
              <h3 className="project-title">{currentProject.title}</h3>
              {expanded ? (
                <div className="project-details">
                  <p>
                    <strong>Technologies:</strong> {currentProject.technologies.join(', ')}
                  </p>
                  <p>
                    <strong>Frameworks:</strong> {currentProject.frameworks.join(', ')}
                  </p>
                  <p>
                    <strong>Explanation:</strong> {currentProject.explanation}
                  </p>
                  <p>
                    <strong>Results:</strong>
                    <ul>
                      {currentProject.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </p>
                  <p>
                    <strong>Future Direction:</strong>
                    <ul>
                      {currentProject.future.map((future, index) => (
                        <li key={index}>{future}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              ) : (
                <p className="project-description">{currentProject.explanation}</p>
              )}
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
                    Go to Project
                  </a>
                )}
              </div>
            </div>
          </div>

          <button className="carousel-arrow right" onClick={handleNext}>
            ▶
          </button>
        </div>

        <div className="carousel-dots">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentProjectIndex ? 'active' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
