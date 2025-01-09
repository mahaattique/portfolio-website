// import React from 'react';
// import '../styles/Header.css';

// export default function Header() {
//   return (
//     <header className="header">
//       <div className="header-container">
//         {/* Branding */}
//         <div className="branding">
//           <div className="brand-icon">👩‍💻</div> {/* Person infographic */}
//           Maha Attique
//         </div>

//         {/* Navigation */}
//         <nav className="nav">
//           <ul className="nav-list">
//             {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
//               <li className="nav-item" key={item}>
//                 <a
//                   href={`#${item.toLowerCase()}`}
//                   aria-label={`Navigate to ${item}`}
//                   className="nav-link"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('About');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['About', 'Projects', 'Skills', 'Contact'];
      const scrollPos = window.scrollY + 200; // Adjust offset for accurate detection

      for (let section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li
                className={`nav-item ${
                  activeSection === item ? 'active-tab' : ''
                }`}
                key={item}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  aria-label={`Navigate to ${item}`}
                  className="nav-link"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

