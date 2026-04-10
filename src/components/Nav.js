// React Component — functional component using hooks and router
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  // React Hooks — useEffect for scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      background: scrolled ? 'rgba(245,242,237,0.85)' : 'transparent',
      transition: 'all 0.4s ease',
    }}>
      <NavLink to="/" className="nav-logo">Lumiere</NavLink>
      <ul className="nav-links">
        {/* React Routing — NavLink provides active class */}
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink></li>
        <li><NavLink to="/work" className={({ isActive }) => isActive ? 'active' : ''}>Work</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
