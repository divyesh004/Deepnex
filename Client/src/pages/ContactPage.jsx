import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';

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

      {/* Contact Form Section */}
      <section className="section bg-secondary py-16 sm:py-20"> {/* Adjusted padding & background */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"> {/* Responsive gap */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                subtitle="Connect With Us"
                title="Get In Touch"
                align="left"
              />
              <p className="text-base sm:text-lg text-gray-700 mb-8">Have questions about our product or services? Fill out the form and our team will get back to you within 24 hours. You can also reach us via the contact details below.</p> {/* Responsive text */}
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0"> {/* Responsive margin & padding */}
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" /> {/* Responsive icon */}
                  </div>
                  <div>
                    <h3 className="font-bold text-md sm:text-lg text-gray-800">Email</h3> {/* Responsive text */}
                    <a href="mailto:info@deepnex.in" className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors break-all">info@deepnex.in</a> {/* Responsive text & break-all for long emails */}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0"> {/* Responsive margin & padding */}
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" /> {/* Responsive icon */}
                  </div>
                  <div>
                    <h3 className="font-bold text-md sm:text-lg text-gray-800">Phone</h3> {/* Responsive text */}
                    <a href="tel:+916355338791" className="text-sm sm:text-base text-gray-600 hover:text-primary transition-colors">+91 63553-38791</a> {/* Responsive text */}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0"> {/* Responsive margin & padding */}
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" /> {/* Responsive icon */}
                  </div>
                  <div>
                    <h3 className="font-bold text-md sm:text-lg text-gray-800">Office</h3> {/* Responsive text */}
                    <p className="text-sm sm:text-base text-gray-600">Shop No 31 , 3 floor Aatman Madhuram 2 ,<br />Madhuram Circle Dindoli Surat - 394210</p> {/* Responsive text */}
                  </div>
                </div>
              </div>
              
              {/* Social Media Links - Can be added here if desired, similar to AboutPage */}

            </motion.div>
            
            <motion.div 
              className="bg-secondary/70 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100" /* Responsive padding */
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-bold text-xl sm:text-2xl text-gray-800 mb-6 text-center">Send Us a Message</h3> {/* Responsive text */}
              {/* TODO: अपने गूगल फॉर्म का एक्शन URL यहाँ डालें */}
              {/* उदाहरण: action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse" */}
              <form action="https://docs.google.com/forms/d/1aJONgNCV9yAuKaGXJLbGZBDxcxhP3ZXirKjtmC-OaE4/formResponse" method="POST" target="_blank" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"> {/* Responsive gap */}
                  <div>
                    <label htmlFor="firstName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">First Name</label> {/* Responsive text */}
                    {/* TODO: गूगल फॉर्म में 'First Name' फ़ील्ड के लिए सही 'name' एट्रिब्यूट डालें (जैसे, name="entry.123456789") */}
                    <input type="text" id="firstName" name="entry.YOUR_FIRST_NAME_FIELD_ID" autoComplete="given-name" className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base" required /> {/* Responsive padding & text */}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Last Name</label> {/* Responsive text */}
                    {/* TODO: गूगल फॉर्म में 'Last Name' फ़ील्ड के लिए सही 'name' एट्रिब्यूट डालें */}
                    <input type="text" id="lastName" name="entry.YOUR_LAST_NAME_FIELD_ID" autoComplete="family-name" className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base" required /> {/* Responsive padding & text */}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email Address</label> {/* Responsive text */}
                  {/* TODO: गूगल फॉर्म में 'Email Address' फ़ील्ड के लिए सही 'name' एट्रिब्यूट डालें */}
                  <input type="email" id="email" name="entry.YOUR_EMAIL_FIELD_ID" autoComplete="email" className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base" required /> {/* Responsive padding & text */}
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Company (Optional)</label> {/* Responsive text */}
                  {/* TODO: गूगल फॉर्म में 'Company' फ़ील्ड के लिए सही 'name' एट्रिब्यूट डालें (अगर यह फ़ील्ड गूगल फॉर्म में है) */}
                  <input type="text" id="company" name="entry.YOUR_COMPANY_FIELD_ID" autoComplete="organization" className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base" /> {/* Responsive padding & text */}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Subject</label> {/* Responsive text */}
                  {/* TODO: गूगल फॉर्म में 'Subject' फ़ील्ड के लिए सही 'name' एट्रिब्यूट डालें */}
                  <select id="subject" name="entry.YOUR_SUBJECT_FIELD_ID" className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white text-sm sm:text-base" required> {/* Responsive padding & text */}
                    <option value="">Select an option</option>
                    <option value="product">Product Inquiry</option>
                    <option value="demo">Request a Demo</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="investor">Investor Relations</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Message</label> {/* Responsive text */}
                  {/* TODO: गूगल फॉर्म में 'Message' फ़ील्ड के लिए सही 'name' एट्रिब्यूट डालें */}
                  <textarea id="message" name="entry.YOUR_MESSAGE_FIELD_ID" rows="5" className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm sm:text-base" required></textarea> {/* Responsive padding & text */}
                </div>
                
                <div className="flex items-start">
                  {/* TODO: गूगल फॉर्म में 'Privacy Policy Agreement' फ़ील्ड के लिए सही 'name' एट्रिब्यूट और 'value' डालें (अगर यह फ़ील्ड गूगल फॉर्म में है) */}
                  {/* गूगल फॉर्म में चेकबॉक्स के लिए, आपको value एट्रिब्यूट भी सेट करना पड़ सकता है जो गूगल फॉर्म में उस ऑप्शन के टेक्स्ट से मेल खाता हो */}
                  <input type="checkbox" id="privacy" name="entry.YOUR_PRIVACY_FIELD_ID" value="I agree" className="mt-1 mr-2 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary" required />
                  <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600">I agree to the <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and consent to being contacted by Deepnex.</label> {/* Responsive text */}
                </div>
                
                <button type="submit" className="w-full bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium hover:bg-accent transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base">
                  Send Message <Send className="ml-2 w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
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
   
      {/* CTA Section - Join Beta */}
      <section className="section bg-secondary py-16 sm:py-20"> {/* Adjusted padding & background */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> {/* Added responsive padding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heloveta text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"><span class="text-primary">Join</span> Our Beta Program</h2> {/* Responsive text & margin, updated text color */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">Be among the first to experience our revolutionary platform and help shape its future. Get exclusive access and provide valuable feedback.</p> {/* Responsive text & margin, updated text color */}
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center"> {/* Responsive gap */}
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-3 py-2.5 sm:px-4 sm:py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-colors w-full sm:w-auto text-sm sm:text-base" /* Responsive padding & text, updated focus ring */
                  aria-label="Email for beta program"
                />
                <button 
                  type="submit" 
                  className="bg-primary text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md font-medium hover:bg-accent transition-all duration-300 hover:scale-105 flex items-center justify-center w-full sm:w-auto whitespace-nowrap text-sm sm:text-base" /* Responsive padding & text, updated button style */
                >
                  Join Waitlist <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" /> {/* Responsive icon */}
                </button>
              </form>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 opacity-80">By joining, you agree to receive updates from Deepnex. You can unsubscribe at any time.</p> {/* Responsive text & margin, updated text color */}
            </div>
          </motion.div>
        </div>
      </section>
    
    </div>
  );
};

export default ContactPage;