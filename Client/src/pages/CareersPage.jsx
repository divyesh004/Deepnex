import React from 'react'; // Removed useState and ApplicationForm import
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Check, Users, DollarSign, Award } from 'lucide-react';

// Reusable SectionTitle component (similar to other pages)
const SectionTitle = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left px-4 sm:px-0'}`}> {/* Added px-4 sm:px-0 for padding on small screens */}
      {subtitle && <h3 className="text-primary font-medium mb-2 text-sm sm:text-base">{subtitle}</h3>} {/* Responsive subtitle */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold">{title}</h2> {/* Responsive title */}
      <div className={`mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-24 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

// Reusable BenefitCard component
const BenefitCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center md:text-left" // md:p-8 removed for consistent padding
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0"> {/* Responsive icon container */}
        <Icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" /> {/* Responsive icon */}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{title}</h3> {/* Responsive title */}
      <p className="text-gray-600 text-sm sm:text-base">{description}</p> {/* Responsive description */}
    </motion.div>
  );
};

const CareersPage = () => {
  // Removed isFormOpen, selectedJobTitle, handleOpenForm, and handleCloseForm states and functions

  const openPositions = [
    // {
    //   title: 'Senior AI Engineer',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   // link: '/contact?subject=Senior%20AI%20Engineer' // Replaced with Apply Now button
    //   // Add Google Form specific details if needed, e.g.:
    //   // googleFormUrl: 'YOUR_SPECIFIC_GOOGLE_FORM_URL_FOR_AI_ENGINEER',
    //   // fieldName: 'entry.xxxxxx', // etc.
    // },
    // {
    //   title: 'Frontend Developer (React)',
    //   location: 'San Francisco, CA',
    //   type: 'Full-time',
    //   // link: '/contact?subject=Frontend%20Developer%20(React)'
    // },
    // {
    //   title: 'Cloud Solutions Architect',
    //   location: 'Remote',
    //   type: 'Full-time',
    //   // link: '/contact?subject=Cloud%20Solutions%20Architect'
    // },
    {
      title: 'Digitel Marketing',
      location: 'Surat',
      type: 'Full-time',
      // link: '/contact?subject=Cybersecurity%20Analyst'
    },
  ];

  return (
    <div className="careers-page">
      {/* ApplicationForm component and related logic removed */}

      {/* Hero Section */}
      <section className="hero bg-secondary relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 pt-28 sm:pt-32 md:pt-36"> {/* Adjusted top padding */}
        {/* Static Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }}></div>
        </div>
        
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
              Join Our <span className="text-primary">Team</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8" /* Adjusted font sizes */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Be part of a dynamic team shaping the future of technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="section bg-white py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle subtitle="Our Culture" title="Why Work at Deepnex?" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Responsive gap */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-gray-700 mb-4">At Deepnex, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our employees to reach their full potential and make a real impact.</p> {/* Responsive text */}
              <p className="text-base sm:text-lg text-gray-700 mb-4">We offer a challenging and rewarding work environment where you can contribute to cutting-edge projects and grow your career alongside talented professionals.</p> {/* Responsive text */}
              <p className="text-base sm:text-lg text-gray-700">Join us and be part of a company that is shaping the future of technology.</p> {/* Responsive text */}
            </motion.div>
            <motion.div 
              className="bg-secondary/70 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex items-center justify-center" /* Responsive padding */
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"> {/* Responsive min-height */}
                <Users className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary opacity-40" /> {/* Responsive icon */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Perks & Growth"
            title="Benefits of Working With Us"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"> {/* Responsive grid and gap */}
            <BenefitCard 
              icon={DollarSign}
              title="Competitive Compensation"
              description="We offer attractive salaries and performance-based bonuses."
            />
            <BenefitCard 
              icon={Award}
              title="Professional Development"
              description="Opportunities for training, certifications, and career advancement."
              delay={0.2}
            />
            <BenefitCard 
              icon={Briefcase}
              title="Work-Life Balance"
              description="Flexible work arrangements and generous paid time off."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="section bg-white py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Opportunities"
            title="Current Open Positions"
          />
          {/* Center the card(s) horizontally */}
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-4xl mx-auto"> {/* Changed from grid to flex */}
            {openPositions.map((position, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-md flex flex-col items-center" // Center content in card
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-full text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{position.title}</h3> {/* Responsive title */}
                  <p className="text-gray-600 text-sm sm:text-base mb-2">{position.location} • {position.type}</p> {/* Responsive text */}
                </div>
                <a 
                  href="https://forms.gle/zAG7AzDroCuTwvEDA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent transition-all duration-300 text-base flex items-center justify-center mx-auto"
                >
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {openPositions.length === 0 && (
            <motion.p 
              className="text-center text-gray-600 text-lg mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              No open positions currently. Check back soon!
            </motion.p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Added responsive padding */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold mb-4 text-primary" /* Responsive text */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Make an Impact?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto" /* Responsive text */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our open positions and find your next career opportunity at Deepnex.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6" /* Responsive gap */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="#open-positions" // Changed to <a> for same-page link
              className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 flex items-center justify-center text-sm sm:text-base" /* Responsive padding & text */
            >
              View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3djhqDUQVGrK6UDXomLZphGA2qBpfpQzDAgDTPVSDJ-5oGA/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary border border-primary px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105 flex items-center justify-center text-sm sm:text-base" /* Responsive padding & text */
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;