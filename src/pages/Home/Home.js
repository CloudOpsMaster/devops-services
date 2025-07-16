import React from 'react';
import './Home.css';
import { FaAws, FaKubernetes, FaDocker, FaAccessibleIcon, FaJenkins, FaGithub, FaGitlab } from 'react-icons/fa';
import { SiPrometheus, SiGrafana, SiHelm } from 'react-icons/si';

function HomePage() {
  const devOpsServices = [
    { name: 'AWS Cloud Services', icon: <FaAws className="service-icon" />, description: 'Leverage the full power of Amazon Web Services for scalable and resilient cloud infrastructure.' },
    { name: 'Kubernetes Orchestration', icon: <FaKubernetes className="service-icon" />, description: 'Automate deployment, scaling, and management of containerized applications with Kubernetes.' },
    { name: 'Docker Containerization', icon: <FaDocker className="service-icon" />, description: 'Streamline your development workflow by packaging applications and dependencies into Docker containers.' },
    { name: 'Helm Package Management', icon: <SiHelm className="service-icon" />, description: 'Simplify deployment and management of Kubernetes applications with Helm charts.' },
    { name: 'Ansible Automation', icon: <FaAccessibleIcon className="service-icon" />, description: 'Automate IT orchestration, configuration management, and application deployment with Ansible.' }, // Replaced with a more generic icon, as no specific Ansible icon in react-icons/fa
    { name: 'Jenkins CI/CD', icon: <FaJenkins className="service-icon" />, description: 'Implement robust continuous integration and continuous delivery pipelines with Jenkins.' },
    { name: 'GitHub Actions CI/CD', icon: <FaGithub className="service-icon" />, description: 'Automate, customize, and execute your software development workflows directly in your GitHub repository.' },
    { name: 'GitLab CI/CD', icon: <FaGitlab className="service-icon" />, description: 'Build, test, and deploy your applications with GitLab’s integrated CI/CD.' },
    { name: 'Prometheus Monitoring', icon: <SiPrometheus className="service-icon" />, description: 'Monitor your infrastructure and applications with the powerful open-source monitoring solution, Prometheus.' },
    { name: 'Grafana Dashboards', icon: <SiGrafana className="service-icon" />, description: 'Visualize your metrics and logs with interactive and customizable Grafana dashboards.' },
  ];

  return (
    <div className="page-container home-page">
      <header className="hero-section">
        <h1>Your Reliable DevOps Solutions Partner</h1>
        <p>We provide seamless integration, deployment, and monitoring to accelerate your business innovation.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScnvM_iWlMPqTBiFwoU0DBkFL1WRy4V2ll6EIRv6S_ICOe00A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
        >
          Get a Consultation
        </a>
      </header>

      <section className="services-section">
        <h2>Our Core DevOps Services</h2>
        <div className="services-grid">
          {devOpsServices.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${0.1 * index}s` }}>
              {service.icon}
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Transform Your Operations?</h2>
        <p>Let's discuss how our DevOps expertise can streamline your development and infrastructure.</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScnvM_iWlMPqTBiFwoU0DBkFL1WRy4V2ll6EIRv6S_ICOe00A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Request a Quote
        </a>
      </section>
    </div>
  );
}

export default HomePage;
