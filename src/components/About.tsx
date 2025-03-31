
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 inline-block relative">
          About Us
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500"></span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Safe System is renowned for delivering sophisticated and user-friendly integrated security solutions that set industry standards. As innovators in the security sector, we were among the first to implement AI-powered surveillance systems, biometric access controls, and cloud-based security management platforms.
          </p>
          <p className="text-lg mb-8">
            Our reputation is built on reliability, innovation, and our ability to create tailored security ecosystems that address the unique challenges faced by our diverse clientele. With a forward-thinking approach, we continually evolve our offerings to stay ahead of emerging security threats.
          </p>
          <a 
            href="#" 
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-blue-600 transition-colors"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
