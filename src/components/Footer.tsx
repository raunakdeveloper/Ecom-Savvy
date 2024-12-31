import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

function Footer({ setActiveSection }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ecom Savvy</h3>
            <p className="text-gray-400 mb-6">
              Empowering your e-commerce journey with innovative solutions and expert guidance.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink onClick={() => setActiveSection('home')} text="Home" />
              <FooterLink onClick={() => setActiveSection('about')} text="About" />
              <FooterLink onClick={() => setActiveSection('services')} text="Services" />
              <FooterLink onClick={() => setActiveSection('contact')} text="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink onClick={() => setActiveSection('services')} text="Product Photography" />
              <FooterLink onClick={() => setActiveSection('services')} text="SEO Optimization" />
              <FooterLink onClick={() => setActiveSection('services')} text="Store Management" />
              <FooterLink onClick={() => setActiveSection('services')} text="Social Media Marketing" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Near Sanjay Gandhi Marg, Alambagh, Lucknow 226005</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+91 7510016618</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@ecomsavvy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ecom Savvy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a 
      href={href} 
      className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ onClick, text }) {
  return (
    <li>
      <button 
        onClick={onClick}
        className="text-gray-400 hover:text-blue-400 transition duration-300"
      >
        {text}
      </button>
    </li>
  );
}

export default Footer;