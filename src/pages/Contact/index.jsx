import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact form submitted:', { name, email, subject, message });
    setSubmitted(true);
  };
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {currentLang === 'en' ? 'Contact Us' : 'Kontakta Oss'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'We\'d love to hear from you'
              : 'Vi skulle gärna höra från dig'}
          </p>
        </div>
      </div>
      
      {/* Contact Info & Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-6">
                {currentLang === 'en' ? 'Contact Information' : 'Kontaktinformation'}
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">
                    {currentLang === 'en' ? 'Address' : 'Adress'}
                  </h3>
                  <address className="not-italic">
                    <p>Stockholm Mission International Church</p>
                    <p>123 Example Street</p>
                    <p>Stockholm, Sweden</p>
                  </address>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">
                    {currentLang === 'en' ? 'Service Times' : 'Gudstjänsttider'}
                  </h3>
                  <p>
                    {currentLang === 'en' ? 'Sabbath School:' : 'Sabbatsskola:'} 10:00 AM
                  </p>
                  <p>
                    {currentLang === 'en' ? 'Worship Service:' : 'Gudstjänst:'} 11:30 AM
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">
                    {currentLang === 'en' ? 'Get in Touch' : 'Kontakta Oss'}
                  </h3>
                  <p>Email: info@smic.example</p>
                  <p>Phone: +46 123 456 789</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">
                {currentLang === 'en' ? 'Send Us a Message' : 'Skicka Oss ett Meddelande'}
              </h2>
              
              {submitted ? (
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">
                    {currentLang === 'en' ? 'Message Sent!' : 'Meddelande Skickat!'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {currentLang === 'en' 
                      ? 'Thank you for contacting us. We\'ll respond to your message as soon as possible.'
                      : 'Tack för att du kontaktade oss. Vi kommer att svara på ditt meddelande så snart som möjligt.'}
                  </p>
                  <button
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setSubject('');
                      setMessage('');
                      setSubmitted(false);
                    }}
                    className="text-primary hover:underline font-medium"
                  >
                    {currentLang === 'en' ? 'Send another message' : 'Skicka ett nytt meddelande'}
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          {currentLang === 'en' ? 'Your Name' : 'Ditt Namn'}
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          {currentLang === 'en' ? 'Email Address' : 'E-postadress'}
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">
                        {currentLang === 'en' ? 'Subject' : 'Ämne'}
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-gray-700 font-medium mb-2">
                        {currentLang === 'en' ? 'Your Message' : 'Ditt Meddelande'}
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="6"
                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-primary text-white py-2 px-6 rounded-md font-medium hover:bg-opacity-90"
                    >
                      {currentLang === 'en' ? 'Send Message' : 'Skicka Meddelande'}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Find Us' : 'Hitta Oss'}
          </h2>
          
          <div className="max-w-5xl mx-auto h-96 bg-gray-300 rounded-lg overflow-hidden">
            {/* Placeholder for Map - would be replaced with actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-600">
                {currentLang === 'en' ? 'Map will be displayed here' : 'Kartan kommer att visas här'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;