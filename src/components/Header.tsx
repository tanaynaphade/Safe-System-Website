
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-5">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Safe System</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="font-medium hover:text-blue-100 transition-colors">About</a>
            <a href="#projects" className="font-medium hover:text-blue-100 transition-colors">Projects</a>
            <a href="#solutions" className="font-medium hover:text-blue-100 transition-colors">Solutions</a>
            <a href="#industries" className="font-medium hover:text-blue-100 transition-colors">Industries</a>
            <a href="#contact" className="font-medium hover:text-blue-100 transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
