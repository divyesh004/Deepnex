import React from 'react';

const PrivacyPolicyPage = () => {
  const lastUpdatedDate = "[24-05-2025]"; // Remember to update this
  const legalAddress = "[Shop No 31 , 3 floor Aatman Madhuram 2 , Madhuram Circle Dindoli Surat - 394210]"; // Remember to update this

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="bg-white shadow-xl rounded-lg p-6 md:p-10 prose prose-lg max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
          <p className="text-sm text-gray-500 text-center mb-8">Last Updated: {lastUpdatedDate}</p>

          <p className="lead text-gray-700">
            At Deepnex Technologies, privacy isn’t an afterthought — it’s our foundation. Whether you’re using our AI Psychiatrist, Finance Advisor, or any of our next-generation web applications, we design every product with your privacy, control, and data security at the core.
          </p>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">1. Who We Are</h2>
            <p>
              Deepnex Technologies Pvt. Ltd. is a product-driven technology company headquartered in India. We build AI-powered web applications and software that revolutionize industries — from mental health and education to finance and international trade — with a strong commitment to ethical innovation.
            </p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">2. Our Privacy Commitment</h2>
            <p>We believe:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
              <li>Privacy is a fundamental digital right</li>
              <li>AI must never compromise your personal data</li>
              <li>Transparency is not optional — it’s our standard</li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">3. What We Collect</h2>
            <p>The type of data we collect depends on the product and features you use. This may include:</p>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="text-lg font-medium text-gray-700">a. Basic Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                  <li>Name or nickname</li>
                  <li>Email address</li>
                  <li>Country or region (optional)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">b. AI Interaction Data</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                  <li>Conversations with our AI tools</li>
                  <li>Uploaded files (if applicable)</li>
                  <li>Feedback, mood inputs, or financial preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-700">c. Device & Usage Data</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                  <li>IP address</li>
                  <li>Browser and device type</li>
                  <li>Usage patterns (used strictly to improve performance)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">4. Why We Collect Data</h2>
            <p>We collect only the necessary data to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
              <li>Personalize and enhance your AI experience</li>
              <li>Improve app performance and train models responsibly</li>
              <li>Ensure security and detect abuse</li>
              <li>Share updates and provide support (only if you opt in)</li>
            </ul>
            <p className="mt-2 font-semibold text-gray-700">We never sell your data. We do not use it for targeted advertising. Ever.</p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">5. How Your Data Is Protected</h2>
            <p>We prioritize security through:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
              <li>End-to-end encryption of sensitive data</li>
              <li>ISO, GDPR, and India DPDP-aligned servers</li>
              <li>Strict access control — only authorized personnel may access data, and only with your permission</li>
              <li>Anonymous/Guest Mode on selected products</li>
            </ul>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">6. Your Rights</h2>
            <p>You have complete control over your data. You may:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Edit:</strong> Update your personal details</li>
              <li><strong>Delete:</strong> Permanently delete your account and data</li>
              <li><strong>Withdraw Consent:</strong> Opt-out of data collection or certain features</li>
            </ul>
            <p className="mt-2">To exercise your rights, contact us at: <a href="mailto:privacy@deepnex.ai" className="text-primary hover:underline">privacy@deepnex.ai</a></p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">7. Data Retention</h2>
            <p>We retain your data only as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
              <li>Provide and improve our services</li>
              <li>Comply with legal obligations</li>
              <li>Enhance AI functionality (in an anonymized form)</li>
            </ul>
            <p className="mt-2">Inactive or deleted accounts are fully removed within 30–60 days.</p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">8. Children’s Privacy</h2>
            <p>Our services are not intended for children under 13. We do not knowingly collect data from minors without verifiable parental consent.</p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy to reflect changes in technology, regulation, or features. Major changes will be communicated via email or in-app notifications.</p>
            <p className="mt-2 text-sm text-gray-500">Last major update: {lastUpdatedDate}</p>
          </section>

          <section className="my-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">10. Contact Us</h2>
            <p>For any questions or concerns regarding this Privacy Policy or your data:</p>
            <address className="not-italic mt-2 text-gray-600">
              Deepnex Technologies Pvt. Ltd.<br />
              📧 Email: <a href="mailto:privacy@deepnex.ai" className="text-primary hover:underline">privacy@deepnex.ai</a><br />
              📍 Registered Office: {legalAddress}
            </address>
          </section>

          <p className="mt-10 text-center font-semibold text-gray-700">
            At Deepnex, privacy is more than a policy — it’s our promise.
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;