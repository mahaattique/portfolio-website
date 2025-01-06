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

import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li className="nav-item" key={item}>
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
