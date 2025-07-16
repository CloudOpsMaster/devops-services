import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div className='container'>
      <header className='header'>
        <h1>{t('title')}</h1>
        <p>AWS · Kubernetes · Terraform · Jenkins · CI/CD · Monitoring</p>
      </header>
      <section className='section'>
        <h2>{t('services')}</h2>
        <ul>
          <li>AWS Infrastructure Deployment</li>
          <li>Infrastructure as Code – Terraform, Ansible</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
