import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'; // Adjusted path
import { cn } from '../lib/utils'; // Adjusted path
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 to-maroon-500 text-white py-5 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Safe System</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}
                    onClick={() => scrollToSection('about')}
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}
                    onClick={() => scrollToSection('projects')}
                  >
                    Projects
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}
                    onClick={() => scrollToSection('solutions')}
                  >
                    Solutions
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}
                    onClick={() => scrollToSection('industries')}
                  >
                    Industries
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="focus:outline-none text-white" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 space-y-3">
            <a href="#about" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={() => { toggleMenu(); scrollToSection('about'); }}>About</a>
            <a href="#projects" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={() => { toggleMenu(); scrollToSection('projects'); }}>Projects</a>
            <a href="#solutions" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={() => { toggleMenu(); scrollToSection('solutions'); }}>Solutions</a>
            <a href="#industries" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={() => { toggleMenu(); scrollToSection('industries'); }}>Industries</a>
            <a href="#contact" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={() => { toggleMenu(); scrollToSection('contact'); }}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
