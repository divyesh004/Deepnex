import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChartBar, TrendingUp, Users, Briefcase, PieChart, Globe, Building } from 'lucide-react';

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

const StatCard = ({ value, title, description }) => {
  return (
    <motion.div 
      className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300" // Responsive padding
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2">{value}</h3> {/* Responsive title */}
      <p className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{title}</p> {/* Responsive text */}
      <p className="text-xs sm:text-sm">{description}</p> {/* Responsive description */}
    </motion.div>
  );
};

const StrategyCard = ({ icon: Icon, title, description, items, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300" // Responsive padding
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-primary mb-3 sm:mb-4">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12" /> {/* Responsive icon */}
      </div>
      <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">{title}</h3> {/* Responsive title */}
      <p className="mb-3 sm:mb-4 text-sm sm:text-base">{description}</p> {/* Responsive description */}
      <ul className="space-y-1.5 sm:space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-xs sm:text-sm"> {/* Responsive list item text */}
            <span className="text-primary mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const InvestorsPage = () => {
  return (
    <div className="investors-page">
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
              <span className="text-primary">Partner</span> with Deepnex
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8" /* Adjusted font sizes */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore investment opportunities and join us in shaping the future of enterprise technology.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6" /* Ensure items-center for vertical alignment on sm screens if buttons have different heights */
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                to="/contact#investor-relations" 
                className="w-full sm:w-auto bg-primary text-white px-5 py-3 sm:px-6 sm:py-2.5 rounded-md font-medium hover:bg-accent transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base" /* Adjusted padding for mobile */
              >
                Contact Investor Relations <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
              <a 
                href="#financials" 
                className="w-full sm:w-auto bg-white text-primary border border-primary px-5 py-3 sm:px-6 sm:py-2.5 rounded-md font-medium hover:bg-secondary/20 transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base" /* Adjusted padding for mobile, hover bg */
              >
                View Financials
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section id="investment" className="section bg-white py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"> {/* Responsive gap */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                subtitle="Opportunity"
                title="Investment Opportunity"
                align="left"
              />
              <p className="text-base sm:text-lg text-gray-700 mb-4">Deepnex represents a unique opportunity to invest in the rapidly growing enterprise integration market, projected to reach $120B by 2025.</p> {/* Responsive text */}
              <p className="text-base sm:text-lg text-gray-700 mb-4">Our proprietary technology platform addresses critical pain points for businesses of all sizes, with a scalable solution that delivers measurable ROI.</p> {/* Responsive text */}
              <p className="text-base sm:text-lg text-gray-700">With our experienced leadership team and proven traction, we're positioned for significant growth in the coming years.</p> {/* Responsive text */}
            </motion.div>
            <motion.div 
              className="bg-secondary/70 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" /* Responsive padding & styling */
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4">Key Investment Highlights</h3> {/* Responsive title */}
              <ul className="space-y-2 sm:space-y-3"> {/* Responsive spacing */}
                <li className="flex items-start text-sm sm:text-base"> {/* Responsive list item text */}
                  <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                  <span><strong>Massive Market:</strong> $120B TAM with 42% YoY growth in our target segment</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                  <span><strong>Proprietary Technology:</strong> Patent-pending integration platform with AI capabilities</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                  <span><strong>Strong Unit Economics:</strong> 85% gross margins with 3.2x LTV:CAC ratio</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                  <span><strong>Experienced Team:</strong> Leadership with successful exits and deep industry expertise</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Market Analysis"
            title="Market Opportunity"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"> {/* Responsive grid and gap */}
            <StatCard 
              value="$120B"
              title="Total Addressable Market"
              description="The global market for enterprise integration solutions is projected to reach $120 billion by 2025"
            />
            <StatCard 
              value="42%"
              title="Annual Growth Rate"
              description="Our target segment is growing at 42% year-over-year, outpacing the broader industry"
            />
            <StatCard 
              value="500K+"
              title="Target Customers"
              description="Mid-market and enterprise companies actively seeking integration solutions"
            />
          </div>
          
          <motion.div 
            className="mt-12 p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300" // Responsive padding
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-xl sm:text-2xl mb-4">Market Drivers</h3> {/* Responsive title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"> {/* Responsive gap */}
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-2">Industry Trends</h4> {/* Responsive title */}
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base"> {/* Responsive list item text and spacing */}
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Accelerated digital transformation initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Growing adoption of cloud-native technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Increasing demand for seamless data integration</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-2">Our Advantage</h4> {/* Responsive title */}
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base"> {/* Responsive list item text and spacing */}
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Proprietary AI-driven integration technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>First-mover advantage in key verticals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Strategic partnerships with major technology providers</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Highlights Section */}
      <section id="financials" className="section bg-white py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Financial Performance"
            title="Financial Highlights"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"> {/* Responsive gap */}
            <motion.div 
              className="bg-secondary/70 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" /* Responsive padding & styling */
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-4">Revenue Growth</h3> {/* Responsive title */}
              <div className="h-48 sm:h-64 bg-white rounded-lg mb-4 overflow-hidden"> {/* Responsive height */}
                {/* Placeholder for revenue chart */}
                <div className="flex items-center justify-center h-full">
                  <ChartBar className="w-12 h-12 sm:w-16 sm:h-16 text-primary/30" /> {/* Responsive icon */}
                  <span className="text-gray-500 ml-2 text-sm sm:text-base">Revenue Chart (YoY growth)</span> {/* Responsive text */}
                </div>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base"> {/* Responsive list item text and spacing */}
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                  <span><strong>215% YoY Growth</strong> in Annual Recurring Revenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                  <span><strong>$4.2M ARR</strong> as of Q2 2023</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-secondary/70 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" /* Responsive padding & styling */
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-4">Key Metrics</h3> {/* Responsive title */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6"> {/* Responsive gap */}
                <motion.div 
                  className="bg-white p-3 sm:p-4 rounded-lg"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-bold text-base sm:text-lg text-primary">85%</h4> {/* Responsive text */}
                  <p className="text-xs sm:text-sm">Gross Margin</p> {/* Responsive text */}
                </motion.div>
                <motion.div 
                  className="bg-white p-3 sm:p-4 rounded-lg"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-bold text-base sm:text-lg text-primary">3.2x</h4> {/* Responsive text */}
                  <p className="text-xs sm:text-sm">LTV:CAC Ratio</p> {/* Responsive text */}
                </motion.div>
                <motion.div 
                  className="bg-white p-3 sm:p-4 rounded-lg"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-bold text-base sm:text-lg text-primary">$42K</h4> {/* Responsive text */}
                  <p className="text-xs sm:text-sm">Avg. Contract Value</p> {/* Responsive text */}
                </motion.div>
                <motion.div 
                  className="bg-white p-3 sm:p-4 rounded-lg"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-bold text-base sm:text-lg text-primary">118%</h4> {/* Responsive text */}
                  <p className="text-xs sm:text-sm">Net Revenue Retention</p> {/* Responsive text */}
                </motion.div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">*Figures based on Q2 2023 financial data</p> {/* Responsive text */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Strategy Section */}
      <section className="section bg-gray-50 py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <SectionTitle 
            subtitle="Future Plans"
            title="Growth Strategy"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"> {/* Responsive grid and gap */}
            <StrategyCard 
              icon={Briefcase}
              title="Product Expansion"
              description="Expanding our platform capabilities to address additional use cases and customer segments"
              items={[
                "Launch advanced analytics module in Q3",
                "Develop industry-specific solutions"
              ]}
            />
            
            <StrategyCard 
              icon={Globe}
              title="Market Expansion"
              description="Strategically entering new markets to capture global opportunities"
              items={[
                "European expansion in Q4 2023",
                "APAC market entry planned for 2024"
              ]}
              delay={0.2}
            />
            
            <StrategyCard 
              icon={Users}
              title="Strategic Partnerships"
              description="Forming alliances to accelerate growth and enhance our offering"
              items={[
                "Technology partnerships with major cloud providers",
                "Channel partnerships with system integrators"
              ]}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Current Funding Round Section */}
      <section className="section bg-white py-16 sm:py-20"> {/* Adjusted padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <motion.div 
            className="max-w-3xl mx-auto bg-secondary/70 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100" /* Responsive padding & styling */
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="font-heloveta text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Current Funding Round</h2> {/* Responsive title */}
              <p className="text-base sm:text-lg">Series A - $15M</p> {/* Responsive text */}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8"> {/* Responsive gap */}
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Use of Funds</h3> {/* Responsive title */}
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base"> {/* Responsive list item text and spacing */}
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span><strong>40%</strong> - Product Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span><strong>35%</strong> - Sales & Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span><strong>15%</strong> - International Expansion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span><strong>10%</strong> - Operations & Working Capital</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3">Target Milestones</h3> {/* Responsive title */}
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base"> {/* Responsive list item text and spacing */}
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Reach $12M ARR by end of 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Launch 3 new product modules</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Expand team to 75+ employees</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 mt-1 flex-shrink-0">•</span>
                    <span>Achieve 200 enterprise customers</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-white px-5 py-3 sm:px-6 sm:py-2.5 rounded-md font-medium hover:bg-accent transition-all duration-300 hover:scale-105 text-sm sm:text-base" /* Adjusted padding for mobile */
              >
                Contact Us for Details <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section bg-secondary py-16 sm:py-20"> {/* Adjusted padding & background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Added responsive padding */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-heloveta font-bold mb-4 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Invest?
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join us in shaping the future of enterprise technology. Contact our investor relations team or download our pitch deck to learn more about this exciting opportunity.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-accent hover:scale-105 flex items-center justify-center text-sm sm:text-base"
            >
              Contact Investor Relations <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a 
              href="/pitch-deck.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary border border-primary px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium transition-all duration-300 hover:bg-primary/10 hover:scale-105 flex items-center justify-center text-sm sm:text-base"
            >
              Download Pitch Deck
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InvestorsPage;