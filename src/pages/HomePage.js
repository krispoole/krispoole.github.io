import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const HomePage = () => (
  <>
    <Nav />
    <main id="top">
      <Hero />
      <Skills />
      <Experience />
    </main>
    <Footer />
  </>
);

export default HomePage;
