
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              About Us
              <span className="absolute left-0 bottom-[-10px] w-10 h-0.5 bg-pink-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Solutions
              <span className="absolute left-0 bottom-[-10px] w-10 h-0.5 bg-pink-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Buildings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Industry Solutions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Resources
              <span className="absolute left-0 bottom-[-10px] w-10 h-0.5 bg-pink-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact
              <span className="absolute left-0 bottom-[-10px] w-10 h-0.5 bg-pink-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-gray-400">T. +1 (800) 555-0123</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">E. info@safesystem.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">E. support@safesystem.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>© 2025 Safe System – All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
