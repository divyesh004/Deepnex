import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, BarChart2, CheckCircle } from 'lucide-react';

const SectionTitle = ({ subtitle, title, align = 'center' }) => {
  return (
    <div className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : 'text-left px-4 sm:px-0'}`}>
      {subtitle && <h3 className="text-primary font-medium mb-2 text-sm sm:text-base">{subtitle}</h3>}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold">{title}</h2>
      <div className={`mt-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-24 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
        <Icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base flex-grow">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ quote, author, company, image }) => {
  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {image && <img src={image} alt={author} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-primary" />}
      <p className="text-gray-700 italic mb-4 text-center text-sm sm:text-base">"{quote}"</p>
      <div className="text-center">
        <p className="font-semibold text-primary text-sm sm:text-base">{author}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{company}</p>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Website Development',
      description: 'We create modern, responsive, and user-friendly websites tailored to your needs. Our expertise extends to e-commerce solutions, custom web applications, and corporate websites.'
    },
    {
      icon: BarChart2,
      title: 'Digital Marketing',
      description: 'Enhance your online presence with our comprehensive digital marketing strategies. We offer SEO, social media marketing, PPC advertising, and content marketing to help you reach your target audience.'
    },
    {
      icon: Users,
      title: 'AI Solutions',
      description: 'Leverage the power of artificial intelligence to transform your business operations. We develop custom AI models, data analytics, and machine learning solutions.'
    }
  ];

  const testimonials = [
    {
      quote: "Deepnex exceeded our expectations and delivered a fantastic website. Their team is professional, creative, and works on time.",
      author: "Priya Sharma",
      company: "CEO, TechSolutions Ltd.",
      // image: "/path/to/priya-sharma.jpg" // Uncomment and add path if you have images
    },
    {
      quote: "Their digital marketing services have significantly improved our lead generation. We are very happy with the results!",
      author: "Rohan Verma",
      company: "Marketing Head, Innovate Hub",
      // image: "/path/to/rohan-verma.jpg"
    },
    {
      quote: "The AI solution streamlined our workflow and increased efficiency. Working with Deepnex has been a great experience.",
      author: "Anjali Mehta",
      company: "Operations Manager, FutureAI Corp",
      // image: "/path/to/anjali-mehta.jpg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-secondary relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 pt-28 sm:pt-32 md:pt-36">
        {/* Static Background Gradient */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
          <div className="w-full h-full" style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)' }}></div>
        </div>
        
        {/* Orbiting Circles - Hidden on small screens (below md), visible from md upwards. Adjusted for subtlety. */}
        <div className="absolute inset-0 z-0 overflow-hidden hidden md:block">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] border border-primary/5 rounded-full animate-slow-spin" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-primary/10 rounded-full"></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 -mt-2 bg-accent/5 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] border border-accent/5 rounded-full animate-slow-spin-reverse" style={{ transform: 'translate(-50%, -50%)' }}>
            <div className="absolute bottom-0 left-1/2 w-4 h-4 -ml-2 bg-primary/10 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 -mt-1 bg-accent/10 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border border-primary/5 rounded-full animate-slow-spin" style={{ transform: 'translate(-50%, -50%)', animationDuration: '15s' }}>
            <div className="absolute top-1/2 right-0 w-3 h-3 -mt-1.5 bg-primary/15 rounded-full"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="hero-content max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-heloveta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Expert <span className="text-primary">Services</span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover how Deepnex can elevate your business with cutting-edge technology and tailored solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="services-page-content bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        <SectionTitle 
          subtitle="Our Expertise"
          title="What Services We Offer"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>

        <SectionTitle 
          subtitle="What Our Clients Say"
          title="Success Stories"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              quote={testimonial.quote} 
              author={testimonial.author} 
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>

        {/* Why Deepnex Section */}
        <section className="why-deepnex-section py-12 md:py-16">
          <SectionTitle 
            subtitle="Our Advantage"
            title="Why Choose Deepnex?"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CheckCircle, // You can choose a more specific icon if available
                title: "Innovative Solutions",
                description: "We leverage cutting-edge AI and technology to deliver forward-thinking products and services."
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                description: "Your success is our priority. We work closely with you to understand your needs and deliver tailored solutions."
              },
              {
                icon: Briefcase, // Or a 'Zap' icon for expertise/speed
                title: "Expert Team",
                description: "Our team comprises experienced professionals passionate about technology and innovation."
              },
              {
                icon: BarChart2, // Or a 'TrendingUp' icon for results
                title: "Proven Results",
                description: "We have a track record of delivering impactful solutions that drive growth and efficiency for our clients."
              },
              {
                icon: CheckCircle, // Or 'ShieldCheck' for reliability
                title: "Reliability & Trust",
                description: "Built on a foundation of trust and transparency, we ensure reliable and secure services."
              },
              {
                icon: Users, // Or 'Globe' for global reach/standards
                title: "Comprehensive Support",
                description: "We offer end-to-end support, from consultation to implementation and beyond."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col text-center md:text-left"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 flex-shrink-0 mx-auto md:mx-0">
                  <item.icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div 
          className="mt-16 md:mt-24 text-center bg-white p-8 md:p-12 rounded-xl shadow-xl border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-6" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready for Your Project?</h3>
          <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Let's discuss how we can turn your ideas into reality. Contact us today for expert consultation and solutions tailored to your business goals.
          </p>
          <a 
              href="https://docs.google.com/forms/d/1aJONgNCV9yAuKaGXJLbGZBDxcxhP3ZXirKjtmC-OaE4/formResponse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 text-lg"
            >
              Contact Us 
            </a>
        </motion.div>
        </div>
      </div>
    </>
  );
};
    
 

export default ServicesPage;