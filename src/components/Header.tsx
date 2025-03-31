
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
                  <Link to="/#about">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#projects">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}>
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#solutions">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}>
                      Solutions
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#industries">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}>
                      Industries
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/#contact">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-pink-400/20 text-white"
                    )}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
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
            <a href="#about" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={toggleMenu}>About</a>
            <a href="#projects" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#solutions" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={toggleMenu}>Solutions</a>
            <a href="#industries" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={toggleMenu}>Industries</a>
            <a href="#contact" className="block py-2 px-4 text-white hover:bg-pink-400/20 rounded transition-colors" onClick={toggleMenu}>Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
