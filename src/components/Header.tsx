import React from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

function Header({ setActiveSection, isMenuOpen, toggleMenu }: HeaderProps) {
  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'About', section: 'about' },
    { name: 'Services', section: 'services' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <span 
            className="text-2xl font-bold cursor-pointer flex items-center gap-2" 
            onClick={() => setActiveSection('home')}
          >
            <ShoppingBag className="w-8 h-8" />
            Ecom Savvy
          </span>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => setActiveSection(item.section)}
                className="hover:text-blue-200 transition duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => {
                  setActiveSection(item.section);
                  toggleMenu();
                }}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-200 hover:bg-blue-700 transition duration-300 w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;