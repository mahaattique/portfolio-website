import React from 'react';
import '../styles/Skills.css';


const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'Machine Learning', level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Title */}
        <h2 className="skills-title">Skills</h2>

        {/* Skills List */}
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-background">
                <div
                  className="skill-bar"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
