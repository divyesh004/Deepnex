import React from 'react';
import MeteorShower from './MeteorShower';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-sm text-gray-200 hover:text-white transition-colors duration-300">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <li>
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center"
      aria-label={label}
    >
      <Icon size={24} /> {/* Increased icon size for better visibility without text */}
    </a>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-gray-200 py-16 sm:py-20 relative overflow-hidden "> {/* Added relative and overflow-hidden for meteor effect */}
      <MeteorShower theme="dark" count={20} /> {/* Added MeteorShower component */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          {/* Column 1: Brand & Call to Action */} 
          <div className="col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">Deepnex</h3>
            <p className="text-sm text-gray-300 mb-6">
              Revolutionizing enterprise integration with cutting-edge AI solutions.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-accent transition-colors duration-300 shadow-lg hover:shadow-primary/40 transform hover:scale-105"
            >
              Join Our Waitlist
            </Link>
          </div>

          {/* Column 2: Quick Links */} 
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-primary pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/product">Product</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/investors">For Investors</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Contact Info */} 
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-primary pb-2 inline-block">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@deepnex.in" className="text-gray-200 hover:text-white transition-colors">info@deepnex.in</a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:+916355338791" className="text-gray-200 hover:text-white transition-colors">+91 63553-38791</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-200">Shop No 31 , 3 floor Aatman Madhuram 2 , Madhuram Circle Dindoli Surat - 394210 </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */} 
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-white mb-6 border-b-2 border-primary pb-2 inline-block">Connect With Us</h3>
            <ul className="flex space-x-5 sm:space-x-6 items-center">
              <SocialLink href="https://linkedin.com/company/deepnex" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/deepnex.in?igsh=bjJ1bjUybXozZmh6" icon={Instagram} label="Instagram" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */} 
        <div className="border-t border-gray-700 pt-8 sm:pt-10 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {currentYear} Deepnex. All rights reserved. 
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <Link to="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;