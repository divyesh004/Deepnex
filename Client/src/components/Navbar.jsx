import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home, Box, Info, DollarSign, Mail, X, Briefcase, Menu } from 'lucide-react';
import { IoMenu } from 'react-icons/io5';
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
const DockIcon = ({ icon: Icon, label, to, active }) => {
  const [bounce, setBounce] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const handleMouseEnter = () => {
    setBounce(true);
    setShowTooltip(true);
    // Reset bounce animation after it completes
    setTimeout(() => setBounce(false), 500);
  };
  
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <Link 
      to={to}
      className="flex flex-col items-center justify-center px-1 sm:px-2 flex-1 min-w-0 relative"
    >
      {/* Icon container with hover effect only on the icon */}
      <div 
        className="icon-container relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div className={`p-1.5 sm:p-2 rounded-lg ${active ? 'bg-primary text-white' : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/70'} transition-all duration-300 transform hover:scale-110 shadow-md relative overflow-hidden ${bounce ? 'dock-icon-bounce' : ''}`}>
          {active && (
            <span className="absolute inset-0 bg-primary animate-pulse opacity-20 rounded-lg"></span>
          )}
          <Icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
          <span className="absolute inset-0 bg-primary/20 scale-0 hover:scale-100 rounded-lg transition-transform duration-300"></span>
        </div>
        
        {/* Tooltip/label for mobile screens on hover */}
        <span 
          className={`sm:hidden absolute -top-12 left-1/2 -translate-x-1/2 mt-1 text-sm font-medium bg-gray-800 text-white px-3 py-1.5 rounded-md transition-all duration-300 scale-0 whitespace-nowrap pointer-events-none z-20 shadow-lg before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-5 before:border-transparent before:border-t-gray-800 ${showTooltip ? 'opacity-100 scale-100' : 'opacity-0'}`}
          style={{ animation: bounce && showTooltip ? 'tooltip-appear 0.3s ease forwards' : 'none' }}
        >
          {label}
        </span>
      </div>
      
      {/* Show label below icon on medium screens and up, hide on mobile */}
      <span className="hidden md:block text-xs font-medium text-gray-300 mt-1 text-center leading-tight">
        {label}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDockOpen, setIsDockOpen] = useState(false);
  const location = useLocation();
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

  const toggleDock = () => {
    setIsDockOpen(!isDockOpen);
  };

  return (
    <>
      {/* Top Logo Bar */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-0 px-4 flex justify-between items-center ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-sm'}`}>
        <Link to="/" className="logo-container group flex items-center relative overflow-hidden">
          <img 
            src={DeepnexLogo} 
            alt="Deepnex Logo" 
            className="logo-image w-auto h-16 sm:h-18 md:h-20 transform transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" 
          />
          <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-all duration-500"></div>
        </Link>
        
        {/* Menu Toggle Button - Visible on mobile and medium screens */}
       <div className="lg:hidden ml-auto"> 
          <button
            onClick={toggleDock}
            className="p-2 rounded-md text-primary bg-gray-100 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200 z-50"
            aria-label="Toggle menu"
          >
            {isDockOpen  ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      
       
        {/* Desktop Navigation - Only visible on large screens and above */}
        <div className="hidden lg:flex items-center space-x-10 bg-gray-50/80 px-4 py-2 rounded-full shadow-inner">
          <Link to="/" className={`relative font-medium text-sm  transition-all duration-300 px-4 py-2 rounded-full ${activePath === '/' ? 'text-white bg-primary shadow-md' : 'text-gray-700 hover:text-primary hover:bg-primary/10'} group`}>
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
        
        {/* CTA Button - Hidden on mobile and tablet, visible on lg and up */}
        <div className="hidden lg:block ml-4">
          <Link to="/contact">
            <PrimaryButton className="px-5 py-2.5 sm:px-6 sm:py-3 lg:hidden xl:flex text-sm sm:text-base  shadow-lg hover:shadow-primary/30">
              <span className="flex items-center gap-1">
                Get Started
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </PrimaryButton>
          </Link>
        </div>
      </div>

      {/* Mobile dock navigation - Toggleable on mobile and medium screens */}
      <nav className={`
        mobile-dock lg:hidden fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-[100] 
        bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-2xl 
        shadow-[0_8px_32px_rgba(0,0,0,0.4),_0_0_0_1px_rgba(255,255,255,0.1)_inset] 
        px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-evenly space-x-1 sm:space-x-2 
        border border-gray-700/30 w-[95%] sm:w-[90%] max-w-sm sm:max-w-md mx-auto
        transition-all duration-500 ease-out 
        ${isDockOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'}
        before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-primary/10 before:via-transparent before:to-accent/10 before:opacity-50
      `}>
        {/* Dock Indicator - Shows when dock is open */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-white/30 rounded-full transition-all duration-300 ${isDockOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        {/* Navigation Icons */}
        <DockIcon icon={Home} label="Home" to="/" active={activePath === '/'} />
        <DockIcon icon={Briefcase} label="Services" to="/services" active={activePath === '/services'} />
        <DockIcon icon={Box} label="Product" to="/product" active={activePath === '/product'} />
        <DockIcon icon={Info} label="About" to="/about" active={activePath === '/about'} />
        <DockIcon icon={Mail} label="Contact" to="/contact" active={activePath === '/contact'} /> 
        <DockIcon icon={Briefcase} label="Careers" to="/careers" active={activePath === '/careers'} />
      </nav>
    </>  
  );
};

export default Navbar;
