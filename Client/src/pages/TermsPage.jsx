import React from 'react';

const TermsPage = () => (
  <div className="min-h-screen bg-white pt-32 pb-10 px-4 sm:px-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-primary">Terms of Service</h1>
      <p className="text-gray-500 mb-8">Last updated: May 2024</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">Welcome to Deepnex. By accessing or using our website, you agree to be bound by these Terms of Service. Please read them carefully.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <p className="text-gray-700">You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others or restrict their use and enjoyment of the site.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p className="text-gray-700">All content, trademarks, and data on this site, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of Deepnex or its licensors.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Limitation of Liability</h2>
        <p className="text-gray-700">Deepnex will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its services.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Changes to Terms</h2>
        <p className="text-gray-700">We reserve the right to update or change these Terms at any time. Changes will be posted on this page with an updated revision date.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Contact Information</h2>
        <p className="text-gray-700">If you have any questions about these Terms, please contact us at <a href="mailto:info@Deepnex.com" className="text-primary underline">info@Deepnex.com</a>.</p>
      </section>
    </div>
  </div>
);

export default TermsPage;