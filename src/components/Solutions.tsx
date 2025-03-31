
import React from 'react';
import { Home, Video, Lock, Star, AlertTriangle, Building, Zap, Cloud, Smartphone } from 'lucide-react';

const solutions = [
  {
    icon: <Home className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Smart Home Automation',
    description: 'Integrated control systems for residential properties'
  },
  {
    icon: <Video className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'AI-Powered Surveillance',
    description: 'Advanced CCTV with behavior analytics'
  },
  {
    icon: <Lock className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Access Control Systems',
    description: 'Biometric and multi-factor authentication solutions'
  },
  {
    icon: <AlertTriangle className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Fire Detection & Safety',
    description: 'Early warning systems with smart alerts'
  },
  {
    icon: <Star className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Emergency Communication',
    description: 'Public address and mass notification systems'
  },
  {
    icon: <Building className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Building Management',
    description: 'Comprehensive property monitoring and control'
  },
  {
    icon: <Zap className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Energy Management',
    description: 'Optimized consumption and sustainability solutions'
  },
  {
    icon: <Cloud className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Cloud Security Platform',
    description: 'Remote monitoring and management capabilities'
  },
  {
    icon: <Smartphone className="w-10 h-10 text-pink-500 mx-auto" />,
    title: 'Mobile Security Apps',
    description: 'Control your security systems from anywhere'
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
