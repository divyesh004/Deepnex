import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Users, Zap, Shield, BarChart3 } from 'lucide-react'; // Added Shield, BarChart3
import MorphingText from '../components/MorphingText';
import Globe from '../components/Globe';
import niveshpathImage from '../images/niveshpath.jpg';
import stressBuddyImage from '../images/20250524_1403_Digital Peaceful Support_simple_compose_01jw0prj86fdsafy7z62zwj4xg.png';
import aiStudentSupportImage from '../images/20250524_1407_AI Student Empowerment_simple_compose_01jw0pyh32erwtverfzsz01qzv.png';
import stockAnalysisImage from '../images/generate-a-detailed-image-creation-prompt-that-wil (1).png';


// Reusable components
const SectionTitle = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h3 className="text-primary font-medium mb-2">{subtitle}</h3>
      <h2 className="text-3xl md:text-4xl font-heloveta font-bold">{title}</h2>
      <div className={`mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-24 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, features, exploreUrl }) => { // Added features and exploreUrl prop and updated styling
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      {exploreUrl && (
        <div className="mt-6 text-center">
          <Link 
            to={exploreUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-accent transition-colors duration-300"
          >
            Explore <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      )}
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, company, image, quote }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-600">{role}, {company}</p>
        </div>
      </div>
      <div className="absolute -top-3 -left-2 text-primary text-5xl opacity-30">"</div>
      <p className="text-gray-700 relative z-10">{quote}</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
    </motion.div>
  );
};

// New UseCaseCard Component
const UseCaseCard = ({ icon: Icon, title, description, tags }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 self-start">
        <Icon className="text-primary w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto pt-4 border-t border-gray-100">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs bg-secondary/50 text-primary px-2 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const HomePage = () => {
  const products = [
    {
      icon: Zap,
      title: 'Niveshpath AI - Investment Path AI',
      description: 'Your personal finance assistant. Manage investments, budgets, and financial goals effortlessly.',
      features: [
        'Personalized investment advice',
        'Automated budget tracking',
        'Goal-based planning',
        'AI-powered financial insights'
      ],
      url: 'https://niveshpath.deepnex.in/',
      imageSrc: niveshpathImage
    },
    {
      icon: Shield,
      title: 'MindCare - AI Mental Health Support',
      description: 'Your AI psychiatrist. Round-the-clock support for mental health and emotional well-being.',
      features: [
        'Confidential chat support',
        'Stress management techniques',
        'Mood tracking and analysis',
        'Personalized coping strategies'
      ],
      url: 'https://mindcare.deepnex.in/',
      imageSrc: stressBuddyImage
    },
    {
      icon: BarChart3,
      title: 'EduNex - AI Learning Companion',
      description: 'An intelligent learning companion for students. Assistance with studies, assignments, and career guidance.',
      features: [
        'Personalized learning paths',
        'Instant doubt resolution',
        'Assignment help and feedback',
        'Skill development resources'
      ],
      url: 'https://edunex.deepnex.in/',
      imageSrc: aiStudentSupportImage
    },
    {
      icon: Check, 
      title: 'Stock Analysis',
      description: 'AI-powered stock market analysis tool. In-depth insights for making informed investment decisions.',
      features: [
        'Real-time market data',
        'Predictive analytics',
        'Portfolio optimization',
        'Risk assessment tools'
      ],
      url: null, // Coming Soon - no URL
      imageSrc: stockAnalysisImage
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="absolute inset-0 opacity-70">
            {/* Orbiting Circles removed */}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center md:text-center lg:text-left">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="font-heloveta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="block text-accent mb-2 mt-16">Building the Future</span>
                  <MorphingText 
                    texts={["of Technology", "of Innovation", "of AI", "of Tomorrow"]} 
                    interval={2000} 
                    className="text-primary"
                  />
                </h1>
                <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse mx-auto md:mx-auto lg:mx-0"></div>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg mb-8 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                 Deepnex is a product-first, AI-native tech company built in Surat, India. We develop software that combines deep technologies like AI, blockchain, and IoT — with deep purpose.</motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/services" className="w-fit mx-auto sm:mx-0 sm:w-auto bg-primary text-white px-6 py-3 sm:px-5 sm:py-2.5 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 flex items-center justify-center text-base sm:text-sm md:text-base">
                  Our Service  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:flex justify-center items-center relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-square mt-12 lg:mt-0 lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <Globe className="!left-1/2 !-translate-x-1/2 !bottom-0" />
              <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 md:h-64 bg-gradient-to-t from-primary/10 via-secondary/10 to-transparent dark:from-background/20 dark:via-background/10 z-10 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

   
      {/* What Are We Building Section (Full-Width Alternating Layout) */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Explore Our Solutions
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heloveta font-bold mb-6">
              What Are We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">Building</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              At DeepNex, we blend innovation with expertise to deliver cutting-edge AI solutions that empower businesses and individuals to thrive in the digital age.
            </p>
            <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Full-Width Alternating Product Cards */}
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                {/* Full-Width Card with Alternating Layout */}
                <div className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-primary/20 overflow-hidden flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto">
                    <div className="h-full relative">
                      {/* Background Image */}
                      {product.imageSrc ? (
                        <img
                          src={product.imageSrc}
                          alt={product.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <p className="text-gray-500">Image coming soon</p>
                        </div>
                      )}
                      
                      {/* Overlay with gradient and content */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-secondary/40 flex items-center justify-center">
                        <div className="relative z-10 text-center p-4">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                            <product.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                          </div>
                          <div className="text-white font-bold text-lg sm:text-xl opacity-90">
                            {product.title.split(' - ')[0]}
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements (optional: adjust for mobile) */}
                      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                    {/* Product Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4 w-fit">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      AI Product
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features Grid */}
                    {product.features && product.features.length > 0 && (
                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-800 mb-4">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.features.map((feature, fIndex) => (
                            <motion.div 
                              key={fIndex} 
                              className="flex items-center text-sm text-gray-700 bg-gray-50 rounded-lg p-3 hover:bg-primary/5 transition-colors duration-200"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: 0.1 + fIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              <span className="font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      {product.url ? (
                        <Link 
                          to={product.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group/btn"
                        >
                          <span>Explore Product</span>
                          <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      ) : (
                        <div className="inline-flex items-center justify-center px-8 py-4 bg-gray-400 text-white font-semibold rounded-xl cursor-not-allowed">
                          <span>Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Animation */}
                <motion.div
                  className="absolute inset-0 -z-10"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: index * 0.8,
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-2xl opacity-30"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Discover how our AI solutions can revolutionize your workflow and drive unprecedented growth.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/services" 
                  className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  View All Services
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 border border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle 
            subtitle="How Deepnex Helps"
            title="Real-World Use Cases"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard 
              icon={Zap} // Example Icon, replace with appropriate one
              title="Automated E-commerce Operations"
              description="Streamline your online store's backend processes, from inventory management to order fulfillment, reducing manual work and errors."
              tags={["E-commerce", "Automation", "Efficiency"]}
            />
            <UseCaseCard 
              icon={Users} // Example Icon
              title="Cross-Platform Data Synchronization"
              description="Ensure consistent and up-to-date data across all your business applications, CRMs, and marketing tools for a single source of truth."
              tags={["Data Sync", "Integration", "CRM"]}
            />
            <UseCaseCard 
              icon={Star} // Example Icon
              title="Enhanced Customer Support Systems"
              description="Integrate helpdesk software with internal databases and communication channels to provide faster, more personalized customer support."
              tags={["Customer Support", "Helpdesk", "CX"]}
            />
          </div>
        </div>
      </section>



      {/* CTA Section */}
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
            <a 
              href="https://docs.google.com/forms/d/1aJONgNCV9yAuKaGXJLbGZBDxcxhP3ZXirKjtmC-OaE4/formResponse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 text-lg"
            >
              Contact Us <ArrowRight className="inline-block ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;