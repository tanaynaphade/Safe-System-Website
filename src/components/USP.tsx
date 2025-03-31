
import React from 'react';
import { Star, Users, Clock, Search, Settings, Phone } from 'lucide-react';

const usps = [
  {
    icon: <Star className="w-12 h-12 text-pink-500 mx-auto" />,
    title: 'Industry Leadership',
    description: '20 years of security expertise ensures excellence in every installation.'
  },
  {
    icon: <Users className="w-12 h-12 text-pink-500 mx-auto" />,
    title: 'Expert Team',
    description: 'Our specialized professionals deliver comprehensive, efficient implementations.'
  },
  {
    icon: <Clock className="w-12 h-12 text-pink-500 mx-auto" />,
    title: 'Reliable Delivery',
    description: 'We commit to punctual project completion with consistent quality.'
  },
  {
    icon: <Search className="w-12 h-12 text-pink-500 mx-auto" />,
    title: 'Advanced Technology',
    description: 'Cutting-edge security solutions with future-proof designs from day one.'
  },
  {
    icon: <Settings className="w-12 h-12 text-pink-500 mx-auto" />,
    title: 'Technical Excellence',
    description: 'Certified engineers dedicated to seamless implementation and support.'
  },
  {
    icon: <Phone className="w-12 h-12 text-pink-500 mx-auto" />,
    title: 'Responsive Support',
    description: 'Consistent, competent service with 24/7 monitoring capabilities.'
  },
];

const USP = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our USPs - Your Ultimate Security Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="text-center p-6 transition-transform hover:transform hover:scale-105">
              <div className="mb-4">{usp.icon}</div>
              <h3 className="text-xl font-bold mb-3">{usp.title}</h3>
              <p>{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
