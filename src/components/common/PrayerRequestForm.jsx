import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function PrayerRequestForm() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [name, setName] = useState('');
  const [request, setRequest] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle prayer request submission
    console.log('Prayer request submitted:', { name, request, isPrivate });
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold mb-2">
          {currentLang === 'en' ? 'Prayer Request Received' : 'Bönebegäran Mottagen'}
        </h3>
        <p className="text-gray-600 mb-4">
          {currentLang === 'en' 
            ? 'Thank you for sharing your prayer request. Our prayer team will be praying for you.'
            : 'Tack för att du delar din bönebegäran. Vårt böneteam kommer att be för dig.'}
        </p>
        <button
          onClick={() => {
            setName('');
            setRequest('');
            setIsPrivate(true);
            setSubmitted(false);
          }}
          className="text-primary hover:underline font-medium"
        >
          {currentLang === 'en' ? 'Submit another request' : 'Skicka en till begäran'}
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">
        {currentLang === 'en' ? 'Submit a Prayer Request' : 'Skicka en Bönebegäran'}
      </h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {currentLang === 'en' ? 'Prayer Request' : 'Bönebegäran'}
          </label>
          <textarea
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="private"
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="private" className="ml-2 block text-sm text-gray-700">
              {currentLang === 'en' 
                ? 'Keep my request private (only shared with the prayer team)'
                : 'Håll min begäran privat (delas endast med böneteamet)'}
            </label>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-opacity-90"
        >
          {currentLang === 'en' ? 'Submit Request' : 'Skicka Begäran'}
        </button>
      </form>
    </div>
  );
}

export default PrayerRequestForm;