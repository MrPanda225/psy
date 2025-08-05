import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo"><h1>Sahiré YAPI</h1></div>
      <button
        className="hamburger"
        onClick={() => setIsMenuOpen(o => !o)}
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/skill" onClick={() => setIsMenuOpen(false)}>Skill</Link></li>
          <li><Link to="/project" onClick={() => setIsMenuOpen(false)}>Project</Link></li>
          <li><Link to="/education" onClick={() => setIsMenuOpen(false)}>Éducation</Link></li>
        </ul>
      </nav>
    </header>
  );
}
