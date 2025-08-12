import React, { useState } from "react";
import "./Home.css";

const translations = {
  en: {
    title: "Professional DevOps Services",
    subtitle:
      "With over 4 years of experience driving cloud transformation and automation, I help businesses build scalable, secure, and efficient infrastructure.",
    services: [
      {
        title: "AWS Infrastructure Design & Management",
        description:
          "Design, implementation, and support of scalable, secure AWS infrastructure (EC2, S3, VPC, IAM, EKS).",
      },
      {
        title: "Kubernetes & Helm Orchestration",
        description:
          "Cluster setup (EKS, OKD), Helm chart development, autoscaling, and migrations.",
      },
      {
        title: "CI/CD Automation & Pipeline Development",
        description:
          "Automation of build, test, and deploy pipelines using Jenkins, GitLab CI/CD, GitHub Actions.",
      },
      {
        title: "Infrastructure as Code (Terraform & Ansible)",
        description:
          "IaC with reusable modules, multi-environment support, and automated deployments.",
      },
      {
        title: "Monitoring, Alerting & SRE Practices",
        description:
          "Setup monitoring (Prometheus, Grafana), alerting, and applying SRE principles for high availability.",
      },
      {
        title: "Linux Administration & Scripting",
        description:
          "Server optimization, Bash/Python scripting, log analysis, automation, and security hardening.",
      },
      {
        title: "Legacy System Modernization & Cloud Migration",
        description:
          "Migration of legacy systems to AWS, containerization, and introducing modern DevOps workflows.",
      },
    ],
    ctaText:
      "Looking for a reliable DevOps engineer to optimize, automate, or build your infrastructure? Let's connect and elevate your projects!",
    ctaButton: "📩 Request a Free Consultation",
  },
  uk: {
    title: "Професійні послуги DevOps",
    subtitle:
      "Понад 4 роки досвіду у впровадженні хмарних трансформацій і автоматизації. Допомагаю будувати масштабовану, безпечну та ефективну інфраструктуру.",
    services: [
      {
        title: "Проєктування та управління інфраструктурою AWS",
        description:
          "Проєктування, впровадження та підтримка масштабованої, безпечної інфраструктури AWS (EC2, S3, VPC, IAM, EKS).",
      },
      {
        title: "Оркестрація Kubernetes та Helm",
        description:
          "Налаштування кластерів (EKS, OKD), розробка Helm-чартів, автоскейлінг, міграції.",
      },
      {
        title: "Автоматизація CI/CD та розробка пайплайнів",
        description:
          "Автоматизація процесів збірки, тестування та деплою з Jenkins, GitLab CI/CD, GitHub Actions.",
      },
      {
        title: "Інфраструктура як код (Terraform та Ansible)",
        description:
          "IaC з використанням модулів, підтримка кількох середовищ, автоматичне розгортання.",
      },
      {
        title: "Моніторинг, оповіщення та практики SRE",
        description:
          "Налаштування моніторингу (Prometheus, Grafana), систем оповіщення, застосування SRE для високої доступності.",
      },
      {
        title: "Адміністрування Linux та скриптування",
        description:
          "Оптимізація серверів, скрипти Bash/Python, аналіз логів, автоматизація, підвищення безпеки.",
      },
      {
        title: "Модернізація легасі систем та міграція в хмару",
        description:
          "Міграція старих систем у AWS, контейнеризація, впровадження сучасних DevOps-процесів.",
      },
    ],
    ctaText:
      "Шукаєте надійного DevOps інженера для оптимізації, автоматизації чи побудови інфраструктури? Зв’яжіться зі мною!",
    ctaButton: "📩 Замовити безкоштовну консультацію",
  },
  ru: {
    title: "Профессиональные услуги DevOps",
    subtitle:
      "Более 4 лет опыта в облачной трансформации и автоматизации. Помогаю строить масштабируемую, безопасную и эффективную инфраструктуру.",
    services: [
      {
        title: "Проектирование и управление инфраструктурой AWS",
        description:
          "Проектирование, внедрение и поддержка масштабируемой, безопасной инфраструктуры AWS (EC2, S3, VPC, IAM, EKS).",
      },
      {
        title: "Оркестрация Kubernetes и Helm",
        description:
          "Настройка кластеров (EKS, OKD), разработка Helm-чартов, автоскейлинг, миграции.",
      },
      {
        title: "Автоматизация CI/CD и разработка пайплайнов",
        description:
          "Автоматизация процессов сборки, тестирования и деплоя с Jenkins, GitLab CI/CD, GitHub Actions.",
      },
      {
        title: "Инфраструктура как код (Terraform и Ansible)",
        description:
          "IaC с использованием модулей, поддержка нескольких сред, автоматическое развертывание.",
      },
      {
        title: "Мониторинг, оповещения и практики SRE",
        description:
          "Настройка мониторинга (Prometheus, Grafana), систем оповещения, применение SRE для высокой доступности.",
      },
      {
        title: "Администрирование Linux и скриптование",
        description:
          "Оптимизация серверов, скрипты Bash/Python, анализ логов, автоматизация, повышение безопасности.",
      },
      {
        title: "Модернизация легаси систем и миграция в облако",
        description:
          "Миграция старых систем в AWS, контейнеризация, внедрение современных DevOps-процессов.",
      },
    ],
    ctaText:
      "Ищете надежного DevOps инженера для оптимизации, автоматизации или построения инфраструктуры? Свяжитесь со мной!",
    ctaButton: "📩 Заказать бесплатную консультацию",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");

  const t = translations[lang];

  return (
    <main className="home-container" lang={lang}>
      <div className="language-switcher">
        <button
          className={lang === "en" ? "active" : ""}
          onClick={() => setLang("en")}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          className={lang === "uk" ? "active" : ""}
          onClick={() => setLang("uk")}
          aria-label="Переключити на українську"
        >
          УКР
        </button>
        <button
          className={lang === "ru" ? "active" : ""}
          onClick={() => setLang("ru")}
          aria-label="Переключить на русский"
        >
          РУС
        </button>
      </div>

      <h1 className="home-title">{t.title}</h1>
      <p className="home-subtitle">{t.subtitle}</p>

      <section className="services-section">
        {t.services.map(({ title, description }, idx) => (
          <article key={idx} className="service-card">
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <p className="home-cta-text">{t.ctaText}</p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScnvM_iWlMPqTBiFwoU0DBkFL1WRy4V2ll6EIRv6S_ICOe00A/viewform?usp=header"
        target="_blank"
        rel="noreferrer"
        className="cta-link"
      >
        {t.ctaButton}
      </a>
    </main>
  );
}
