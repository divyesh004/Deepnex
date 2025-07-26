import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook, Send, ArrowRight, ChevronRight } from 'lucide-react'; // Added Send icon and ArrowRight and ChevronRight

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

const ContactPage = () => {
  return (
    <div className="contact-page">
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
              <span className="text-primary">Get In</span> Touch
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8" /* Adjusted font sizes */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We're here to help. Reach out to us for any inquiries or support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Button Section */}
      <section className="section py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heloveta font-bold text-primary mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              Have questions or want to discuss a project? Click the button below to reach out to us via our contact form.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSd3djhqDUQVGrK6UDXomLZphGA2qBpfpQzDAgDTPVSDJ-5oGA/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 text-lg inline-flex items-center justify-center"
            >
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Common Questions"
            title="Frequently Asked Questions"
          />
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6"> {/* Responsive spacing */}
            {[{
              q: "How can I request a product demo?",
              a: "You can request a product demo by filling out the contact form above or by emailing us directly at demos@deepnex.com. Our team will get back to you within 24 hours to schedule a personalized demonstration."
            }, {
              q: "What industries do you serve?",
              a: "Deepnex serves a wide range of industries including healthcare, finance, retail, manufacturing, and technology. Our platform is designed to be flexible and adaptable to the unique needs of different sectors."
            }, {
              q: "How long does implementation typically take?",
              a: "Implementation timelines vary depending on the complexity of your existing systems and specific requirements. However, most clients are up and running within 2-4 weeks, with some basic integrations completed in as little as 48 hours."
            }, {
              q: "Do you offer technical support?",
              a: "Yes, we offer comprehensive technical support to all our clients. Our support team is available 24/7 to address any issues or questions you may have. We also provide extensive documentation and training resources."
            }].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" /* Responsive padding */
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-bold text-md sm:text-lg md:text-xl text-gray-800 mb-2 sm:mb-3">{faq.q}</h3> {/* Responsive text & margin */}
                <p className="text-sm sm:text-base text-gray-600">{faq.a}</p> {/* Responsive text */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   

    
    </div>
  );
};

export default ContactPage;