import React from 'react';
import './Portfolio.css';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: "Cloud Infrastructure on AWS",
    image: project1,
    description: "Designed and deployed scalable infrastructure using Terraform, EC2, S3, and VPC with complete CI/CD pipelines.",
    tech: ["AWS", "Terraform", "Jenkins"],
    link: "#"
  },
  {
    title: "Kubernetes Microservices Platform",
    image: project2,
    description: "Built production-ready Kubernetes platform with Helm charts, Ingress controllers, Prometheus, and Grafana monitoring.",
    tech: ["Kubernetes", "Helm", "Prometheus", "Grafana"],
    link: "#"
  },
  {
    title: "CI/CD Automation with GitLab",
    image: project3,
    description: "Implemented fully automated GitLab pipelines for multi-environment deployment and testing with GitOps principles.",
    tech: ["GitLab CI", "Docker", "Ansible"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((proj, index) => (
          <div className="portfolio-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <div className="portfolio-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <ul className="tech-tags">
                {proj.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
              <a href={proj.link} target="_blank" rel="noreferrer">
                <button className="view-button">View Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
