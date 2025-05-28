
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is available

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="bg-gh-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                GH
              </div>
              <span className="font-bold text-xl text-gh-gray-800">GenuineHire</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gh-gray-600 hover:text-gh-blue transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="text-gh-gray-800 hover:text-gh-blue transition-colors px-3 py-2 rounded-md text-sm font-bold">
              Login
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-gh-gray-500 hover:text-gh-blue">
              <Search size={20} />
            </button>
            <Button className="bg-gh-blue hover:bg-gh-blue-dark text-white font-semibold text-sm rounded-lg px-6 py-2.5">
              Sign Up
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gh-gray-600 hover:text-gh-blue focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gh-gray-600 hover:text-gh-blue hover:bg-gh-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="#" className="text-gh-gray-800 hover:text-gh-blue hover:bg-gh-gray-50 block px-3 py-2 rounded-md text-base font-bold">
              Login
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gh-gray-200">
            <div className="flex items-center px-5 space-x-4">
              <button aria-label="Search" className="text-gh-gray-500 hover:text-gh-blue">
                <Search size={20} />
              </button>
              <Button className="w-full bg-gh-blue hover:bg-gh-blue-dark text-white font-semibold text-sm rounded-lg py-2.5">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
