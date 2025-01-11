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
      title: 'Software Development 👩🏽‍💻',
      detail: 'I specialize in building user-friendly websites and android apps.',
    },
    {
      title: 'Machine Learning & AI 🤖',
      detail: 'Researching how data and algorithms can be used to predict the future.',
    },
    {
      title: 'Sustainable, Equitable Tech 🌳',
      detail: 'Creating tech solutions that are kind to the people and the planet.',
    },
    
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-heading">Get to know me :) </h2>
        <p className="about-subtitle">
          I enjoy building things, especially if I can learn something new in the process!! 
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
