import React from 'react';

function Navbar() {
  return (
    // Your responsive navbar JSX here
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/contact">Contact</a></li>
        <li className="nav-item"><a href="/more">More</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
