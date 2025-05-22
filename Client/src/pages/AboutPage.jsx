import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Users, ShieldCheck, Building, User, Briefcase, Check, Globe, Zap } from 'lucide-react';

// Reusable SectionTitle component (similar to ProductPage.jsx)
const SectionTitle = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left px-4 sm:px-0'}`}> {/* Added px-4 sm:px-0 for padding on small screens */}
      {subtitle && <h3 className="text-primary font-medium mb-2 text-sm sm:text-base">{subtitle}</h3>} {/* Responsive subtitle */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold">{title}</h2> {/* Responsive title */}
      <div className={`mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-24 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

// Reusable ValueCard component
const ValueCard = ({ icon: Icon, title, description, delay = 0 }) => {
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

// Reusable TeamMemberCard component
const TeamMemberCard = ({ imageSrc, name, role, description, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        ) : (
          <User className="w-16 h-16 sm:w-20 sm:h-20 text-primary opacity-50" /> // Placeholder Icon
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-primary font-medium mb-2 text-sm">{role}</p>
      <p className="text-gray-600 text-sm max-w-xs mx-auto">{description}</p>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="about-page">
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
              About <span className="text-primary">Our Company</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8" /* Adjusted font sizes */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover our mission, vision, and the dedicated team driving innovation at Deepnex.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle subtitle="Our Journey" title="Welcome to DeepNex" align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Responsive gap */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base sm:text-lg text-gray-700 mb-4">Deepnex is a next-generation AI product company, proudly built in India and scaled for the world. From mental health to personal finance, from smart classrooms to intelligent hospitals — we create powerful, deeply integrated AI systems that transform how people live, work, and grow.</p> {/* Responsive text */}
              <p className="text-base sm:text-lg text-gray-700 mb-4">At the core of Deepnex lies a bold vision:
              To become the world’s most trusted AI product company — born in India, built for the globe.</p> {/* Responsive text */}
              <p className="text-base sm:text-lg text-gray-700">We believe the future belongs to those who build it — and at Deepnex, we’re building what’s next.</p> {/* Responsive text */}
            </motion.div>
            <motion.div 
              className="bg-secondary/70 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" /* Responsive padding */
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 sm:mb-6 flex items-center justify-center"> {/* Responsive margin */}
                <Building className="w-12 h-12 sm:w-16 sm:h-16 text-primary opacity-30" /> {/* Responsive Icon */}
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">Our Mission</h3> {/* Responsive title */}
              <p className="text-gray-600 mb-4 text-sm sm:text-base">To engineer the future through AI.
              We build intelligent, scalable, and deeply human-centric products that harness the power of AI, blockchain, and next-gen technologies  transforming how the world learns, heals, trades, and grows.</p> {/* Responsive text */}
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">Our Vision</h3> {/* Responsive title */}
              <p className="text-gray-600 text-sm sm:text-base">To become the world’s most trusted AI product company  born in India, built for the globe.
We envision a world where every doctor, teacher, manufacturer, and individual is empowered by seamless, intuitive AI systems driving progress through deep technology and purposeful design.
</p> {/* Responsive text */}
            </motion.div>
          </div>
        </div>
      </section>



      {/* Core Values Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Our Principles"
            title="Guiding Our Every Action"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"> {/* Responsive grid and gap */}
            <ValueCard 
              icon={Lightbulb}
              title="Deep Innovation"
              description="We solve real-world problems with meaningful, cutting-edge technologies."
              delay={0}
            />
            <ValueCard  
              icon={Users} // Represents Human-Centered Design
              title="Human-Centered Design"
              description="Technology should feel effortless. Every solution is designed for clarity, usability, and impact."
              delay={0.1}
            />
            <ValueCard 
              icon={Globe} // Represents Global Thinking, Indian Roots
              title="Global Thinking, Indian Roots"
              description="Proudly built in India, with ambition and scale to serve global markets."
              delay={0.2}
            />
            <ValueCard 
              icon={ShieldCheck} // Represents Ethical AI
              title="Ethical AI"
              description="We innovate responsibly — with transparency, safety, and integrity at every level."
              delay={0.3}
            />
            <ValueCard 
              icon={Zap} // Represents Next-Gen Excellence
              title="Next-Gen Excellence"
              description="We don’t just ship software. We ship revolutions — product by product."
              delay={0.4}
            />
          </div>
        </div>
      </section>





      {/* Join Our Team Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Responsive gap */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle subtitle="Careers at Deepnex" title="Become Part of Our Story" align="left" />
              <p className="text-base sm:text-lg text-gray-700 mb-6">We're always looking for talented individuals who share our passion for innovation and excellence. Join us to build the future of technology.</p> {/* Responsive text */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8"> {/* Responsive spacing */}
                {[{
                  text: "Collaborative and inclusive work environment"
                }, {
                  text: "Opportunities for professional growth"
                }, {
                  text: "Competitive compensation and benefits"
                }, {
                  text: "Work on cutting-edge technology"
                }].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-1" /> {/* Responsive check icon */}
                    <span className="text-gray-700 text-sm sm:text-base">{item.text}</span> {/* Responsive text */}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contact" // Assuming careers page might be contact or a dedicated one
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white px-5 py-3 sm:px-6 sm:py-2.5 rounded-md font-medium hover:bg-accent transition-all duration-300 hover:scale-105 text-sm sm:text-base" /* Adjusted padding for mobile */
              >
                View Open Positions <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </motion.div>
            <motion.div 
              className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex items-center justify-center" /* Responsive padding */
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9 w-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[300px]"> {/* Responsive min-height */}
                <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary opacity-40" /> {/* Responsive icon */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Build the Future With Us?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore opportunities at Deepnex and become part of our innovative team.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/careers" // Assuming a careers page
              className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 flex items-center justify-center text-sm sm:text-base"
            >
              View Open Positions <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white text-primary border border-primary px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105 flex items-center justify-center text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;