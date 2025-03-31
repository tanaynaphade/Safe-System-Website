
import React from 'react';

const industries = [
  'Commercial',
  'Residential',
  'IT & Data Centers',
  'Healthcare',
  'Hospitality',
  'Education',
  'Financial',
  'Government'
];

const Industries = () => {
  return (
    <section id="industries" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-gray-100 p-6 rounded-lg text-center font-bold hover:bg-blue-500 hover:text-white transition-colors"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
