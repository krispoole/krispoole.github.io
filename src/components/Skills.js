import React from 'react';
import './Skills.css';

const categories = [
  {
    icon: '🤖',
    name: 'AI & Machine Learning',
    pills: [
      { label: 'LLMs (Claude, GPT-4)', accent: true },
      { label: 'LangChain', accent: true },
      { label: 'Multi-Agent Systems', accent: true },
      { label: 'RAG Pipelines', accent: true },
      { label: 'Vector Databases', accent: true },
      { label: 'AWS Bedrock', accent: true },
      { label: 'Prompt Engineering' },
      { label: 'Databricks' },
    ],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    pills: [
      { label: 'AWS' },
      { label: 'EC2 / S3 / Lambda' },
      { label: 'RDS' },
      { label: 'Docker' },
      { label: 'Jenkins' },
      { label: 'Splunk' },
      { label: 'Git' },
    ],
  },
  {
    icon: '⚙️',
    name: 'Backend',
    pills: [
      { label: 'Java' },
      { label: 'Spring Boot' },
      { label: 'REST APIs' },
      { label: 'Microservices' },
      { label: 'Node.js' },
      { label: 'MySQL' },
      { label: 'SQL' },
    ],
  },
  {
    icon: '🖥️',
    name: 'Frontend',
    pills: [
      { label: 'React' },
      { label: 'JavaScript' },
      { label: 'TypeScript' },
      { label: 'HTML / CSS' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="skills">
    <div className="section__header">
      <p className="section__label">Tech Stack</p>
      <h2 className="section__title">Skills & Tools</h2>
    </div>

    <div className="skills__grid">
      {categories.map(({ icon, name, pills }) => (
        <div key={name} className="skill-card">
          <div className="skill-card__top">
            <span className="skill-card__icon">{icon}</span>
            <span className="skill-card__name">{name}</span>
          </div>
          <div className="skill-card__pills">
            {pills.map(({ label, accent }) => (
              <span key={label} className={`pill${accent ? ' pill--accent' : ''}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
