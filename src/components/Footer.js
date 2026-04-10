// React Component — functional footer component
import React from 'react';
import { Link } from 'react-router-dom';

// React Props — no props needed; self-contained component
const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Lumiere</div>
      <div className="footer-center">
        &copy; {new Date().getFullYear()} — All rights reserved
      </div>
      <div className="footer-right">
        <Link to="/work" className="footer-link">Work</Link>
        <Link to="/about" className="footer-link">About</Link>
        <a href="mailto:hello@lumiere.com" className="footer-link">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
