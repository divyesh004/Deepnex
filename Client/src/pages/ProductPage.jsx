import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Shield, BarChart3, Zap } from 'lucide-react';

// Reusable components
const SectionTitle = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left px-4 sm:px-0'}`}> {/* Added px-4 sm:px-0 for padding on small screens */}
      {subtitle && <h3 className="text-primary font-medium mb-2 text-sm sm:text-base">{subtitle}</h3>} {/* Responsive subtitle */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold">{title}</h2> {/* Responsive title */}
      <div className={`mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-24 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, features }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" // md:p-8 removed for consistent padding
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4"> {/* Responsive icon container */}
        <Icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" /> {/* Responsive icon */}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3> {/* Responsive title */}
      <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p> {/* Responsive description */}
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" /> {/* Responsive check icon */}
            <span className="text-gray-700 text-sm sm:text-base">{feature}</span> {/* Responsive feature text */}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ProductPage = () => {
  const products = [
    {
      icon: Zap, // Placeholder icon, can be changed
      title: 'Niveshpath AI - Investment Path AI',
      description: 'Your personal finance assistant. Manage investments, budgets, and financial goals effortlessly.',
      features: [
        'Personalized investment advice',
        'Automated budget tracking',
        'Goal-based planning',
        'AI-powered financial insights'
      ]
    },
    {
      icon: Shield, // Placeholder icon
      title: 'StressBudddy AI - Stress Buddy AI',
      description: 'Your AI psychiatrist. Round-the-clock support for mental health and emotional well-being.',
      features: [
        'Confidential chat support',
        'Stress management techniques',
        'Mood tracking and analysis',
        'Personalized coping strategies'
      ]
    },
    {
      icon: BarChart3, // Placeholder icon
      title: 'AI Student Support',
      description: 'An intelligent learning companion for students. Assistance with studies, assignments, and career guidance.',
      features: [
        'Personalized learning paths',
        'Instant doubt resolution',
        'Assignment help and feedback',
        'Skill development resources'
      ]
    },
    {
      icon: Check, // Placeholder icon
      title: 'Stock Analysis',
      description: 'AI-powered stock market analysis tool. In-depth insights for making informed investment decisions.',
      features: [
        'Real-time market data',
        'Predictive analytics',
        'Portfolio optimization',
        'Risk assessment tools'
      ]
    }
  ];

  return (
    <div className="product-page">
      {/* Hero Section Updated */}
      <section className="hero bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 pt-28 sm:pt-32 md:pt-36"> {/* Adjusted top padding and background */}
        {/* Removed static background gradient, using Tailwind gradient above */}
        {/* <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }}></div>
        </div> */}
        
        {/* Orbiting Circles - Hidden on small screens (below md), visible from md upwards. Adjusted for subtlety. */}
        <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
          {/* Large outer circle */}
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] border border-primary/5 rounded-full animate-slow-spin" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-primary/10 rounded-full"></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 -mt-2 bg-accent/5 rounded-full"></div>
          </div>
          {/* Medium middle circle */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] border border-accent/5 rounded-full animate-slow-spin-reverse" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="absolute bottom-0 left-1/2 w-4 h-4 -ml-2 bg-primary/10 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 -mt-1 bg-accent/10 rounded-full"></div>
          </div>
          {/* Small inner circle */}
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border border-primary/5 rounded-full animate-slow-spin" style={{ transform: 'translate(-50%, -50%)', animationDuration: '15s' }}>
            <div className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 bg-primary/15 rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Added responsive padding */}
          <motion.div 
            className="hero-content max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-heloveta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative inline-block" /* Adjusted font sizes */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-primary">Revolutionary</span> Integration Platform
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8" /* Adjusted font sizes */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Seamlessly connect and optimize your technology stack with our cutting-edge solution.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6" /* Ensure items-center for vertical alignment on sm screens if buttons have different heights */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                to="/contact" 
                className="w-full sm:w-auto bg-primary text-white px-5 py-3 sm:px-6 sm:py-2.5 rounded-md font-medium hover:bg-accent transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base" /* Adjusted padding for mobile */
              >
                Contact Us <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <a 
                href="#features" 
                className="w-full sm:w-auto bg-white text-primary border border-primary px-5 py-3 sm:px-6 sm:py-2.5 rounded-md font-medium hover:bg-secondary/20 transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base" /* Adjusted padding for mobile, hover bg */
              >
                Explore Features
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Product Showcase Section */}
      <section id="products-showcase" className="section bg-white py-16 sm:py-20"> {/* Changed background to white for better card contrast & ID */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Our Innovations"
            title="Our Key Products"
          />
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 text-center px-4 sm:px-0">
            At Deepnex, we are dedicated to developing cutting-edge AI solutions that address real-world challenges. Our products are designed to simplify, enhance, and transform your life and business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> {/* Changed to 2 columns for better display of 4 products */}
            {products.map((product, index) => (
              <FeatureCard 
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                features={product.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="How It Works"
            title="Simple Integration Process"
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative"> {/* Responsive grid and gap */}
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 md:top-24 left-0 md:left-[calc(16.67%+8px)] right-0 md:right-[calc(16.67%+8px)] h-0.5 md:h-0.5 bg-primary/20 transform md:-translate-y-1/2"></div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center relative z-10" // md:p-8 removed
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"> {/* Responsive circle */}
                  <span className="text-primary font-bold text-lg sm:text-xl">1</span> {/* Responsive number */}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3">Connect</h3> {/* Responsive title */}
                <p className="text-gray-600 text-sm sm:text-base">Link your existing systems with our one-click connectors</p> {/* Responsive text */}
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center relative z-10" // md:p-8 removed
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"> {/* Responsive circle */}
                  <span className="text-primary font-bold text-lg sm:text-xl">2</span> {/* Responsive number */}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3">Configure</h3> {/* Responsive title */}
                <p className="text-gray-600 text-sm sm:text-base">Set up your workflows with our intuitive drag-and-drop interface</p> {/* Responsive text */}
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center relative z-10" // md:p-8 removed
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"> {/* Responsive circle */}
                  <span className="text-primary font-bold text-lg sm:text-xl">3</span> {/* Responsive number */}
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3">Launch</h3> {/* Responsive title */}
                <p className="text-gray-600 text-sm sm:text-base">Go live with your integrated systems and start seeing results</p> {/* Responsive text */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

{/* CTA Section from HomePage.jsx */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heloveta font-bold text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Join Deepnex today and experience the future of technology integration.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 text-lg"
            >
              Get Started Now <ArrowRight className="inline-block ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;