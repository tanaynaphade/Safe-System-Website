
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Metrics from '@/components/Metrics';
import USP from '@/components/USP';
import Projects from '@/components/Projects';
import Industries from '@/components/Industries';
import Solutions from '@/components/Solutions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Metrics />
      <USP />
      <Projects />
      <Industries />
      <Solutions />
      <Footer />
    </div>
  );
};

export default Index;
