import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home, Box, Info, DollarSign, Mail, Menu, X, Briefcase } from 'lucide-react';
import DeepnexLogo from '../images/Deepnex-Logo.png';

// Simplified button component
const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent transition-all duration-300 relative overflow-hidden group ${className}`}
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/10 rounded-md"></span>
      <div className="relative z-10">{children}</div>
    </button>
  );
};

// Simplified dock icon component
const DockIcon = ({ icon: Icon, label, to, active, onClick }) => { // Added onClick prop
  return (
    <Link 
      to={to} 
      onClick={onClick} // Added onClick handler to the Link
      className="group flex flex-col items-center justify-center px-2 sm:px-3 flex-1 min-w-0"
    >
      <div className={`p-2.5 rounded-full ${active ? 'bg-primary text-white' : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70'} transition-all duration-300 transform group-hover:scale-110 shadow-md relative overflow-hidden`}>
        {active && (
          <span className="absolute inset-0 bg-primary animate-pulse opacity-20 rounded-full"></span>
        )}
        <Icon className="w-5 h-5 relative z-10" />
      </div>
      <span className="mt-1 text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-all whitespace-nowrap truncate">{label}</span>
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const activePath = location.pathname;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Logo Bar */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-2 px-4   flex justify-between items-center ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-sm'}`}>
        <Link to="/" className="logo-container group flex items-center relative overflow-hidden">
          <img 
            src={DeepnexLogo} 
            alt="Deepnex Logo" 
            className="logo-image w-auto h-14 sm:h-20 transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" 
          />
          <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-all duration-500"></div>
        </Link>

        {/* Mobile Menu Toggle - Visible on small screens, hidden on md and up */}
        <div className="md:hidden ml-auto"> 
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-primary bg-gray-100 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Desktop Navigation - Only visible on medium screens and above */}
        <div className="hidden md:flex items-center space-x-10 bg-gray-50/80 px-6 py-2 rounded-full shadow-inner">
          <Link to="/" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              <Home className="w-4 h-4 mr-1" />
              Home
            </span>
          </Link>
          <Link to="/services" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/services' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              {/* Placeholder for Services Icon, replace with actual if available */}
              <Briefcase className="w-4 h-4 mr-1" /> 
              Services
            </span>
          </Link>
          <Link to="/product" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/product' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              <Box className="w-4 h-4 mr-1" />
              Product
            </span>
          </Link>
          <Link to="/about" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/about' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              <Info className="w-4 h-4 mr-1" />
              About
            </span>
          </Link>
          {/* <Link to="/investors" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/investors' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 mr-1" />
              Investors
            </span>
          </Link> */}
          <Link to="/contact" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/contact' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 mr-1" />
              Contact
            </span>
          </Link>
          <Link to="/careers" className={`relative font-medium text-sm transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/careers' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4 mr-1" />
              Careers
            </span>
          </Link>
        </div>
        
        {/* CTA Button - Hidden on mobile, visible on md and up */}
        <div className="hidden md:block ml-4">
          <Link to="/contact">
            <PrimaryButton className="px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base shadow-lg hover:shadow-primary/30">
              <span className="flex items-center gap-1">
                Get Started
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </PrimaryButton>
          </Link>
        </div>
      </div>

      {/* Mobile Dock Navigation - Only visible on small screens */}
      <nav className={`
        mobile-dock md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100] 
        bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl shadow-black/40 
        px-3 py-3 flex items-center justify-around space-x-1 
        border border-gray-700/50 w-[90%] max-w-md mx-auto
        transition-all duration-300 ease-out 
        ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
      `}>
        {/* Close menu when a link is clicked */}
        {/* We'll wrap DockIcon or add onClick to each Link within DockIcon if needed */}
        {/* For simplicity, let's assume clicking a DockIcon should close the menu */}
        {/* This requires passing toggleMobileMenu to DockIcon or handling it here */}
        <DockIcon icon={Home} label="Home" to="/" active={activePath === '/'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} />
          <DockIcon icon={Briefcase} label="Services" to="/services" active={activePath === '/services'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} />
        <DockIcon icon={Box} label="Product" to="/product" active={activePath === '/product'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} />
        <DockIcon icon={Info} label="About" to="/about" active={activePath === '/about'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} />
        {/* <DockIcon icon={DollarSign} label="Investors" to="/investors" active={activePath === '/investors'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} />*/}
        <DockIcon icon={Mail} label="Contact" to="/contact" active={activePath === '/contact'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} /> 
        <DockIcon icon={Briefcase} label="Careers" to="/careers" active={activePath === '/careers'} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined} />
      </nav>
    </>  
  );
};

export default Navbar;