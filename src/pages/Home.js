import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';

const technologies = [
  "AWS", "Kubernetes", "Docker", "Helm", "Ansible", "Jenkins",
  "GitHub Actions", "GitLab CI/CD", "Prometheus + Grafana"
];

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>DevOps Services</h1>
      <p>I offer cloud and DevOps solutions to accelerate your development and deployment.</p>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScnvM_iWlMPqTBiFwoU0DBkFL1WRy4V2ll6EIRv6S_ICOe00A/viewform?usp=header" target="_blank" rel="noreferrer">
        <button className="cta-button">Request a Service</button>
      </a>
    </div>
  );
}