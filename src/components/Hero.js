import React from 'react';
import './Hero.css';

const Hero = () => (
  <section id="about" className="hero">
    <div className="hero__inner">
      <div className="hero__badge">
        <span className="hero__badge-dot" />
        Available for AI architecture roles
      </div>

      <h1 className="hero__name">Kris Poole</h1>

      <p className="hero__title">AI Architecture Engineer</p>

      <p className="hero__tagline">
        Building intelligent systems at the intersection of cloud
        infrastructure and machine learning. 9+ years of engineering
        experience across aerospace, fintech, and communications —
        now focused on LLM integration, multi-agent systems, and
        AI-driven microservices.
      </p>

      <div className="hero__ctas">
        <a href="#skills" className="btn btn--primary">
          View Work ↓
        </a>
        <a href="#contact" className="btn btn--outline">
          Get in Touch →
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
