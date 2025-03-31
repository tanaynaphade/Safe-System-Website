
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[500px] flex flex-col justify-center items-center text-center text-white px-4">
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
      ></div>
      <div className="z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Ensuring Safety, Security & Innovation</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Advanced integrated security solutions for businesses and homes with cutting-edge technology and expert implementation</p>
        <a 
          href="#projects" 
          className="bg-pink-500 text-white px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-maroon-500 transition-colors"
        >
          View Our Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
