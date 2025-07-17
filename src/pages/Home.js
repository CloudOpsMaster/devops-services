import React from 'react';
import './Home.css';
import logo from '../assets/logo.png';

const technologies = [
  "AWS", "EKS", "Terraform", "Helm", "Ansible", "Jenkins",
  "GitLab CI/CD", "GitHub Actions", "Prometheus", "Grafana",
  "Linux", "Bash", "Python", "Nginx", "SonarQube"
];

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt="Logo" className="logo" />

      <div className="tech-slider">
        <div className="tech-slide-track">
          {technologies.concat(technologies).map((tech, index) => (
            <div key={index} className="tech-slide">{tech}</div>
          ))}
        </div>
      </div>

      <h1>DevOps Services by Vadym Pyrozhenko</h1>
      <p>
        I help teams build scalable, secure, and automated infrastructure.
        With 4+ years of hands-on DevOps experience, I specialize in AWS, Kubernetes, and CI/CD automation.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h3>AWS Infrastructure</h3>
          <p>Design and implementation of scalable, secure cloud solutions using EC2, S3, VPC, EKS, and IAM.</p>
        </div>
        <div className="service-card">
          <h3>Kubernetes & Helm</h3>
          <p>Cluster setup (EKS/OKD), CI/CD deployment with Helm, autoscaling, monitoring, and legacy migration.</p>
        </div>
        <div className="service-card">
          <h3>CI/CD Automation</h3>
          <p>Automated pipelines with Jenkins, GitLab CI/CD, and GitHub Actions — build, test, deploy.</p>
        </div>
        <div className="service-card">
          <h3>Infrastructure as Code</h3>
          <p>Provisioning with Terraform and Ansible, including reusable modules and multi-environment support.</p>
        </div>
        <div className="service-card">
          <h3>Monitoring & SRE</h3>
          <p>Monitoring with Prometheus + Grafana, alerting systems, SRE principles for high availability.</p>
        </div>
        <div className="service-card">
          <h3>Linux & Scripting</h3>
          <p>Shell/Bash/Python scripting, log analysis, system optimization, server automation and hardening.</p>
        </div>
        <div className="service-card">
          <h3>Legacy System Modernization</h3>
          <p>Migration from on-prem to AWS, containerization of monoliths, CI/CD enablement for legacy apps.</p>
        </div>
      </div>

      <p>If you're looking for a DevOps engineer to build, optimize, or automate your infrastructure — I'm here to help.</p>

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
