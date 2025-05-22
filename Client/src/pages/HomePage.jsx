import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Star, Users, Zap, Shield, BarChart3 } from 'lucide-react'; // Added Shield, BarChart3
import MorphingText from '../components/MorphingText';
import Globe from '../components/Globe';


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
      url: 'https://niveshpath.deepnex.com' // Example URL
    },
    {
      icon: Shield,
      title: 'StressBudddy AI - Stress Buddy AI',
      description: 'Your AI psychiatrist. Round-the-clock support for mental health and emotional well-being.',
      features: [
        'Confidential chat support',
        'Stress management techniques',
        'Mood tracking and analysis',
        'Personalized coping strategies'
      ],
      url: 'https://stressbuddy.deepnex.com' // Example URL
    },
    {
      icon: BarChart3,
      title: 'AI Student Support',
      description: 'An intelligent learning companion for students. Assistance with studies, assignments, and career guidance.',
      features: [
        'Personalized learning paths',
        'Instant doubt resolution',
        'Assignment help and feedback',
        'Skill development resources'
      ],
      url: 'https://studentsupport.deepnex.com' // Example URL
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
      url: 'https://stockanalysis.deepnex.com' // Example URL
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
          <div className="absolute inset-0 opacity-70">
            {/* Orbiting Circles removed */}
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center lg:text-left">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h1 className="font-heloveta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="block text-accent mb-2">Building the Future</span>
                  <MorphingText 
                    texts={["of Technology", "of Innovation", "of AI", "of Tomorrow"]} 
                    interval={2000} 
                    className="text-primary"
                  />
                </h1>
                <div className="mt-4 w-32 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse mx-auto lg:mx-0"></div>
              </motion.div>
              
              <motion.p 
                className="text-base sm:text-lg mb-8 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Innovative solutions that transform industries and drive growth in the digital era. Our platform connects and optimizes technology stacks for businesses of all sizes.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link to="/services" className="w-full sm:w-auto bg-primary text-white px-6 py-3 sm:px-5 sm:py-2.5 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 flex items-center justify-center text-base sm:text-sm md:text-base">
                  Our Service  <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
                {/* <Link to="/investors" className="w-full sm:w-auto bg-white text-primary border border-primary px-6 py-3 sm:px-5 sm:py-2.5 rounded-md font-medium transition-all duration-300 hover:bg-secondary/20 hover:scale-105 flex items-center justify-center text-base sm:text-sm md:text-base">
                  Investor Deck
                </Link> */}
              </motion.div>
            </div>
            <div className="hidden lg:flex justify-center items-center relative w-full max-w-md mx-auto lg:max-w-none lg:mx-0 aspect-square mt-12 lg:mt-0 lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <Globe className="!left-1/2 !-translate-x-1/2 !bottom-0" />
              <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 md:h-64 bg-gradient-to-t from-primary/10 via-secondary/10 to-transparent dark:from-background/20 dark:via-background/10 z-10 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionTitle
            subtitle="What We Offer"
            title="Powerful Features for Your Business"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Lightning Fast"
              description="Our platform is optimized for speed, ensuring your business operates at maximum efficiency."
            />
            <FeatureCard
              icon={Users}
              title="Team Collaboration"
              description="Seamlessly work together with your team members in real-time with our collaborative tools."
            />
            <FeatureCard
              icon={Star}
              title="Premium Support"
              description="Get 24/7 support from our dedicated team of experts to help you succeed."
            />
          </div>
        </div>
      </section>

      {/* Discover Our Innovations Section (New) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Explore Our Solutions"
            title="Discover Our Innovations"
          />
          <p className="text-gray-600 md:text-lg max-w-3xl mx-auto mb-10 md:mb-16 text-center px-4 sm:px-0">
            At Deepnex, we are dedicated to developing cutting-edge AI solutions that address real-world challenges. Our products are designed to simplify, enhance, and transform your life and business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => (
              <FeatureCard
                key={index}
                icon={product.icon}
                title={product.title}
                description={product.description}
                features={product.features}
                exploreUrl={product.url}
              />
            ))}
          </div>
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

export default HomePage;