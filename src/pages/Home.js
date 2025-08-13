import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

const translations = {
  en: {
    heroTitle: "Scaling, Securing & Automating Cloud Infrastructure",
    heroSubtitle: "DevOps Engineer with expertise in building reliable and efficient cloud solutions.",
    servicesTitle: "Core Expertise",
    services: [
      { title: "AWS Cloud Solutions", desc: "Design and manage scalable, secure AWS infrastructure." },
      { title: "Kubernetes & Containers", desc: "Cluster setup, orchestration, and Helm chart development." },
      { title: "CI/CD Automation", desc: "Streamlining deployments with Jenkins, GitLab CI, and GitHub Actions." },
      { title: "Infrastructure as Code", desc: "Terraform and Ansible for fully automated deployments." },
      { title: "Monitoring & Reliability", desc: "Prometheus, Grafana, and SRE best practices." },
      { title: "Linux & Scripting", desc: "Performance tuning, Bash/Python automation, and security hardening." },
    ],
    ctaText: "Need a reliable DevOps engineer for your project?",
    ctaButton: "📩 Request a Free Consultation",
  },
  uk: {
    heroTitle: "Масштабована, безпечна та автоматизована інфраструктура",
    heroSubtitle: "DevOps-інженер з професійним досвідом у надійних та ефективних хмарних рішеннях.",
    servicesTitle: "Ключова експертиза",
    services: [
      { title: "AWS Рішення", desc: "Проєктування та управління масштабованою, безпечною AWS інфраструктурою." },
      { title: "Kubernetes та Контейнери", desc: "Налаштування кластерів, оркестрація та розробка Helm-чартів." },
      { title: "Автоматизація CI/CD", desc: "Оптимізація деплойментів з Jenkins, GitLab CI та GitHub Actions." },
      { title: "Інфраструктура як Код", desc: "Terraform та Ansible для повної автоматизації." },
      { title: "Моніторинг та Надійність", desc: "Prometheus, Grafana та кращі практики SRE." },
      { title: "Linux та Скрипти", desc: "Оптимізація, автоматизація Bash/Python та підвищення безпеки." },
    ],
    ctaText: "Потрібен надійний DevOps інженер для вашого проєкту?",
    ctaButton: "📩 Замовити безкоштовну консультацію",
  },
  ru: {
    heroTitle: "Масштабируемая, безопасная и автоматизированная инфраструктура",
    heroSubtitle: "DevOps-инженер с опытом создания надежных и эффективных облачных решений.",
    servicesTitle: "Ключевая экспертиза",
    services: [
      { title: "AWS Решения", desc: "Проектирование и управление масштабируемой, безопасной AWS инфраструктурой." },
      { title: "Kubernetes и Контейнеры", desc: "Настройка кластеров, оркестрация и разработка Helm-чартов." },
      { title: "Автоматизация CI/CD", desc: "Оптимизация деплоев с Jenkins, GitLab CI и GitHub Actions." },
      { title: "Инфраструктура как Код", desc: "Terraform и Ansible для полной автоматизации." },
      { title: "Мониторинг и Надежность", desc: "Prometheus, Grafana и лучшие практики SRE." },
      { title: "Linux и Скрипты", desc: "Оптимизация, автоматизация Bash/Python и усиление безопасности." },
    ],
    ctaText: "Нужен надежный DevOps инженер для вашего проекта?",
    ctaButton: "📩 Заказать бесплатную консультацию",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];
  const sectionsRef = useRef([]);
  const iconRefs = useRef([]);

  // Fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Floating/parallax icons
  useEffect(() => {
    const handleScroll = () => {
      iconRefs.current.forEach((icon, i) => {
        if (icon) {
          const speed = (i % 3 + 1) * 0.2;
          const offset = window.scrollY * speed;
          icon.style.transform = `translateY(${offset}px)`;
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setRefs = (el, index) => {
    sectionsRef.current[index] = el;
  };
  const setIconRefs = (el, index) => {
    iconRefs.current[index] = el;
  };

  // Use public SVG icons
  const heroIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg",
  ];

  return (
    <main className="home-container" lang={lang}>
      <div className="language-switcher">
        {["en", "uk", "ru"].map((code) => (
          <button
            key={code}
            className={lang === code ? "active" : ""}
            onClick={() => setLang(code)}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <section ref={(el) => setRefs(el, 0)} className="fade-section hero">
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSubtitle}</p>
        <div className="hero-icons">
          {heroIcons.map((src, i) => (
            <div key={i} ref={(el) => setIconRefs(el, i)} className="icon-wrapper">
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section ref={(el) => setRefs(el, 1)} className="fade-section services">
        <h2>{t.servicesTitle}</h2>
        <div className="services-grid">
          {t.services.map((s, i) => (
            <div className="service-card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section ref={(el) => setRefs(el, 2)} className="fade-section experience">
        <p>{t.experience}</p>
      </section>

      <section ref={(el) => setRefs(el, 3)} className="fade-section cta">
        <p>{t.ctaText}</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScnvM_iWlMPqTBiFwoU0DBkFL1WRy4V2ll6EIRv6S_ICOe00A/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
          className="cta-button"
        >
          {t.ctaButton}
        </a>
      </section>
    </main>
  );
}
