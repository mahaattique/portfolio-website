// import React from 'react';
// import '../styles/About.css';

// export default function About() {
//   return (
//     <section id="about" className="about-section">
//       <div className="container">
//         <h2 className="about-heading">About Me</h2>
//         <div className="about-content">
//           <p className="about-text">
//             I am a passionate developer with a keen eye for creating impactful projects and solving real-world problems.
//             With expertise in web development and a strong foundation in design principles, I strive to build intuitive
//             and efficient solutions that make a difference.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import '../styles/About.css';

export default function About() {
  const [activeBubble, setActiveBubble] = useState(null);

  const toggleBubble = (index) => {
    setActiveBubble(activeBubble === index ? null : index);
  };

  const bubbles = [
    {
      title: 'Web Development',
      detail: 'I specialize in building responsive, user-friendly websites.',
    },
    {
      title: 'Design Principles',
      detail: 'I value intuitive and aesthetic designs.',
    },
    {
      title: 'Problem Solving',
      detail: 'I enjoy tackling challenging problems with innovative solutions.',
    },
    {
      title: 'Collaboration',
      detail: 'I excel in team settings to achieve goals effectively.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-heading">About Me</h2>
        <p className="about-subtitle">
          Passionate about building impactful projects and creating intuitive solutions.
        </p>
        <div className="mind-map">
          {bubbles.map((bubble, index) => (
            <div
              key={index}
              className={`bubble ${activeBubble === index ? 'active' : ''}`}
              onClick={() => toggleBubble(index)}
            >
              <span className="bubble-title">{bubble.title}</span>
              {activeBubble === index && <p className="bubble-detail">{bubble.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
