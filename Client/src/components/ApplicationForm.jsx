import React, { useState } from 'react';
import { X } from 'lucide-react';

const ApplicationForm = ({ jobTitle, googleFormUrl, fieldName, fieldEmail, fieldResume, fieldCoverLetter, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Construct the data payload for Google Forms
    // IMPORTANT: Replace 'YOUR_GOOGLE_FORM_ENTRY_ID_FOR_NAME', etc.
    // with the actual 'entry.xxxxxx' IDs from your Google Form's pre-filled link.
    const googleFormData = new FormData();
    googleFormData.append(fieldName || 'entry.YOUR_GOOGLE_FORM_ENTRY_ID_FOR_NAME', formData.name);
    googleFormData.append(fieldEmail || 'entry.YOUR_GOOGLE_FORM_ENTRY_ID_FOR_EMAIL', formData.email);
    googleFormData.append(fieldResume || 'entry.YOUR_GOOGLE_FORM_ENTRY_ID_FOR_RESUME', formData.resumeLink);
    googleFormData.append(fieldCoverLetter || 'entry.YOUR_GOOGLE_FORM_ENTRY_ID_FOR_COVER_LETTER', formData.coverLetter);
    // You might want to add the job title as a hidden field or part of another field
    // googleFormData.append('entry.YOUR_GOOGLE_FORM_ENTRY_ID_FOR_JOB_TITLE', jobTitle);

    try {
      // IMPORTANT: Replace 'YOUR_GOOGLE_FORM_ACTION_URL' with your Google Form's action URL
      // It usually ends with '/formResponse'
      const response = await fetch(googleFormUrl || 'YOUR_GOOGLE_FORM_ACTION_URL/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors', // Important for submitting to Google Forms to avoid CORS issues
      });

      // Since 'no-cors' mode means we can't read the response, we assume success if no error is thrown.
      setSubmitMessage('Application submitted successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', resumeLink: '', coverLetter: '' });
      setTimeout(() => {
        onClose();
        setSubmitMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('An error occurred. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Apply for {jobTitle || 'Position'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {submitMessage && (
          <div className={`p-3 rounded-md mb-4 text-sm ${submitMessage.includes('error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {submitMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Your Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV Link</label>
            <input
              type="url"
              name="resumeLink"
              id="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="https://linkedin.com/in/yourprofile or Google Drive link"
            />
            <p className="mt-1 text-xs text-gray-500">Please provide a link to your resume (e.g., LinkedIn, Google Drive, Dropbox). Ensure sharing permissions are set correctly.</p>
          </div>
          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter (Optional)</label>
            <textarea
              name="coverLetter"
              id="coverLetter"
              rows="4"
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Tell us why you're a great fit for this role..."
            ></textarea>
          </div>
          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </button>
          </div>
        </form>
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Your information will be handled in accordance with our privacy policy.</p>
          <p className="mt-2"><strong>Important:</strong> This form submits data to a Google Form. Please replace placeholder URLs and field names in the component's code with your actual Google Form details for it to work correctly.</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;