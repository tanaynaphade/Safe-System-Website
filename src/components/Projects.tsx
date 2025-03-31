
import React from 'react';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Tech Park Plaza',
    location: 'Silicon Valley',
    type: 'Integrated Security Systems'
  },
  {
    image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Metropolitan Heights',
    location: 'Downtown',
    type: 'Smart Building Management'
  },
  {
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    title: 'Horizon Medical Center',
    location: 'Westside',
    type: 'Healthcare Security Solutions'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Ongoing Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-300">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-1">{project.location}</p>
                <p>{project.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded font-bold uppercase tracking-wide hover:bg-maroon-500 transition-colors"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
