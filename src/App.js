import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import PortfolioPage from './pages/Portfolio/Portfolio';
import './App.css'; // Global styles

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}> {/* Crucial for GitHub Pages */}
      <nav className="navbar">
        <div className="navbar-brand">
          {/* You can replace this with an SVG logo if preferred */}
          <span className="logo-text">DevOps Solutions</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} DevOps Solutions. All rights reserved.</p>
        <p>Built with ❤️ and dedication to efficiency.</p>
      </footer>
    </Router>
  );
}

export default App;