import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo-section">
        <div className="animated-logo" />
        <span className="site-name">CloudOpsMaster</span>
      </div>
      <nav className="nav-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>Portfolio</Link>
        <Link to="/quest" className={location.pathname === "/quest" ? "active" : ""}>Quest</Link>
      </nav>
    </header>
  );
}