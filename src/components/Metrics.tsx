
import React from 'react';

const metrics = [
  { number: '85,000+', text: 'Satisfied clients worldwide' },
  { number: '620+', text: 'Projects executed to perfection' },
  { number: '60+', text: 'Security experts at your service' },
  { number: '20', text: 'Years of industry leadership' },
];

const Metrics = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Numbers, Your Assurance of Excellence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">{metric.number}</div>
              <div className="text-lg">{metric.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
