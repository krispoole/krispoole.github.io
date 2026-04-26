import React from 'react';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="experience">
    <div className="section__header">
      <p className="section__label">Career</p>
      <h2 className="section__title">Experience</h2>
    </div>

    <div className="experience__list">
      {/* Boeing */}
      <div className="exp-card">
        <div className="exp-card__header">
          <span className="exp-card__company">Boeing</span>
          <span className="exp-card__period">2019 – Present</span>
        </div>

        <div className="exp-card__roles">
          <div>
            <p className="exp-role__title">AI Architecture Engineer</p>
            <p className="exp-role__desc">
              Designing and implementing AI-driven systems for aerospace
              applications — including LLM integrations, multi-agent
              orchestration pipelines, and RAG-based tooling for internal
              engineering workflows.
            </p>
            <div className="exp-role__tags">
              {['LLMs', 'LangChain', 'AWS Bedrock', 'Multi-Agent', 'RAG', 'Python'].map(t => (
                <span key={t} className="exp-tag">{t}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="exp-role__title">Software Engineer</p>
            <p className="exp-role__desc">
              Built and maintained Spring Boot RESTful microservices
              supporting space launch and aerospace programs. Led backend
              architecture decisions across distributed cloud systems.
            </p>
            <div className="exp-role__tags">
              {['Java', 'Spring Boot', 'AWS', 'Databricks', 'Jenkins', 'Splunk', 'Docker'].map(t => (
                <span key={t} className="exp-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Prior */}
      <div className="exp-card">
        <div className="exp-card__header">
          <span className="exp-card__company">Prior Experience</span>
          <span className="exp-card__period">2015 – 2019</span>
        </div>

        <div className="exp-card__roles">
          <div>
            <p className="exp-role__title">Software Engineer</p>
            <p className="exp-role__desc">
              4+ years across fintech, communications, and space launch
              industries — building full-stack web applications, data
              pipelines, and API platforms.
            </p>
            <div className="exp-role__tags">
              {['Java', 'React', 'Node.js', 'REST APIs', 'MySQL', 'AWS'].map(t => (
                <span key={t} className="exp-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/krispoole"
          target="_blank"
          rel="noreferrer"
          className="exp-card__link"
        >
          Full history on LinkedIn →
        </a>
      </div>
    </div>
  </section>
);

export default Experience;
