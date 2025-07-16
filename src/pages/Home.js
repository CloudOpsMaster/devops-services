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
      <div className="tech-slider">
        <div className="tech-slide-track">
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className="tech-slide">{tech}</div>
          ))}
        </div>
      </div>

      <h1>DevOps Services</h1>
      <p>I provide end-to-end infrastructure and automation services using modern DevOps technologies:</p>

      <div className="services-grid">
        <div className="service-card"><h3>AWS</h3><p>Infrastructure as Code, EC2, S3, VPC, RDS, scaling.</p></div>
        <div className="service-card"><h3>Kubernetes</h3><p>Cluster setup (EKS), deployment, Helm, autoscaling.</p></div>
        <div className="service-card"><h3>Docker</h3><p>Containerization, Dockerfile optimization, multi-stage builds.</p></div>
        <div className="service-card"><h3>Helm</h3><p>Reusable charts for microservices deployment.</p></div>
        <div className="service-card"><h3>Ansible</h3><p>Provisioning, configuration, and app deployment automation.</p></div>
        <div className="service-card"><h3>Jenkins</h3><p>CI/CD pipelines, Git integration, quality gates.</p></div>
        <div className="service-card"><h3>GitHub Actions</h3><p>Automated workflows, builds, and testing on push.</p></div>
        <div className="service-card"><h3>GitLab CI/CD</h3><p>Full CI/CD with environments and GitOps practices.</p></div>
        <div className="service-card"><h3>Prometheus + Grafana</h3><p>Monitoring, alerting, and beautiful dashboards.</p></div>
      </div>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScnvM_iWlMPqTBiFwoU0DBkFL1WRy4V2ll6EIRv6S_ICOe00A/viewform?usp=header"
        target="_blank"
        rel="noreferrer"
      >
        <button className="cta-button">📩 Request a Free Consultation</button>
      </a>

    </div>
  );
}