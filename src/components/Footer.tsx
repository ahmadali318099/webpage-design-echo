
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerLinks = {
    Support: [
      { name: 'Contact us', href: '#' },
      { name: 'User Guide', href: '#' },
      { name: 'Policy FAQs', href: '#' },
      { name: 'Technical Support', href: '#' },
    ],
    Products: [ // Changed 'Product' to 'Products' to match image more closely
      { name: 'Lorem ipsum', href: '#' },
      { name: 'Lorem ipsum', href: '#' },
      { name: 'Lorem ipsum', href: '#' },
      { name: 'Lorem ipsum', href: '#' },
    ],
    Resource: [
      { name: 'About us', href: '#' }, // Added 'About us' as it's common
      { name: 'Offers', href: '#' },
      { name: 'Partners', href: '#' }, // Added 'Partners'
      { name: 'Blog', href: '#' },
    ],
    Community: [ // Changed 'Comunity' to 'Community'
      { name: 'Lorem ipsum', href: '#' },
      { name: 'Lorem ipsum', href: '#' },
      { name: 'Lorem ipsum', href: '#' },
      { name: 'Lorem ipsum', href: '#' },
    ],
  };

  return (
    <footer className="bg-gh-gray-900 text-gh-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 mb-8 md:mb-0">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <div className="bg-gh-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                GH
              </div>
              <span className="font-bold text-xl text-white">GenuineHire</span>
            </a>
            <p className="text-sm text-gh-gray-400 mb-6">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Enter your e-mail" 
                className="bg-gh-gray-800 border-gh-gray-700 text-white placeholder-gh-gray-500 focus:ring-gh-blue focus:border-gh-blue flex-grow"
              />
              <Button type="submit" className="bg-gh-blue hover:bg-gh-blue-dark text-white font-semibold text-sm rounded-lg px-6 py-2.5 whitespace-nowrap">
                Sign up
              </Button>
            </form>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="font-semibold text-white mb-4">{title}</h5>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm hover:text-gh-blue transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gh-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gh-gray-400">
            Copyright &copy; {new Date().getFullYear()} GenuineHire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
