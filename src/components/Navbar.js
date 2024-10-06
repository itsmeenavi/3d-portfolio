// src/components/Navbar.js
import React from 'react';

function Navbar({ activePage, setActivePage }) {
  const pages = [
    'Home',
    'About Me',
    'Projects',
    'Skills',
    'Experience',
    'Certificates',
    'Resume',
    'Contact',
  ];

  return (
    <nav className="navbar">
      <ul>
        {pages.map((page, index) => (
          <li
            key={index}
            className={activePage === page ? 'active' : ''}
            onClick={() => setActivePage(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
