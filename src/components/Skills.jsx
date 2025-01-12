
import React from 'react';
import '../styles/Skills.css';
import Skill from './Skill';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', title: 'Python' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', title: 'Java' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', title: 'JavaScript' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', title: 'Go' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg', title: 'JSON' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain.svg', title: 'JUnit' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg', title: 'HTML' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg', title: 'CSS' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg', title: 'SQL' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', title: 'R' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg', title: 'Elixir' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prolog/prolog-plain-wordmark.svg', title: 'Prolog' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg', title: 'Visual Basic' },
      ],
    },
    {
      title: 'Technical Frameworks',
      skills: [
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-plain-wordmark.svg', title: 'Visual Code Studio' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg', title: 'React' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg', title: 'Node.js' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg', title: 'MongoDB' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg', title: 'GitHub' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', title: 'Linux' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg', title: 'Android Studio' },
        // { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg', title: 'Power BI' },
        // { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg', title: 'Tableau' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-plain-wordmark.svg', title: 'Arduino' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg', title: 'Docker' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-plain.svg', title: 'Heroku' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg', title: 'Jupyter' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg', title: 'Latex' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg', title: 'Mongoose' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ssh/ssh-original-wordmark.svg', title: 'ssh' },
      ],
    },
    {
      title: 'UX/UI & Web Development',
      skills: [
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg', title: 'Drupal' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', title: 'Tailwind CSS' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg', title: 'Canva' },
        { source: ' https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-line.svg', title: 'Illustrator' },
        { source: ' https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', title: 'Photoshop' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg', title: 'WordPress' },
        
      ],
    },
    {
      title: 'Data Science & ML/AI',
      skills: [
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original-wordmark.svg', title: 'Kaggle' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original-wordmark.svg', title: 'Keras' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg', title: 'Matplotlib' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg', title: 'NumPy' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg', title: 'Pandas' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg', title: 'RStudio' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', title: 'Scikit-learn' },
        { source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original-wordmark.svg', title: 'TensorFlow' },
       
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">Here are the technical skills I have experience with:</p>
        {categories.map((category, index) => (
          <div key={index} className="skills-category">
            <h3 className="skills-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <Skill
                  key={skillIndex}
                  source={skill.source || 'https://via.placeholder.com/120'}
                  alt={skill.title}
                  title={skill.title}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
