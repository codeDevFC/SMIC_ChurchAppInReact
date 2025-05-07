import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function VolunteerSignupForm() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  
  // Areas where people can volunteer
  const volunteerAreas = [
    {
      id: 'worship',
      nameEn: 'Worship Team',
      nameSv: 'Lovsångsteam',
    },
    {
      id: 'welcome',
      nameEn: 'Welcome Team',
      nameSv: 'Välkomstteam',
    },
    {
      id: 'children',
      nameEn: 'Children\'s Ministry',
      nameSv: 'Barnministry',
    },
    {
      id: 'tech',
      nameEn: 'Tech & Media',
      nameSv: 'Teknik & Media',
    },
    {
      id: 'h2h',
      nameEn: 'H2H Group Leader',
      nameSv: 'H2H Gruppledare',
    },
  ];
  
  const handleAreaChange = (areaId) => {
    if (selectedAreas.includes(areaId)) {
      setSelectedAreas(selectedAreas.filter(id => id !== areaId));
    } else {
      setSelectedAreas([...selectedAreas, areaId]);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Volunteer signup submitted:', { name, email, phone, selectedAreas });
    setSubmitted(true);
  };
  
  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-bold mb-2">
          {currentLang === 'en' ? 'Thank You for Volunteering!' : 'Tack för att du vill bli volontär!'}
        </h3>
        <p className="text-gray-600 mb-4">
          {currentLang === 'en' 
            ? 'We appreciate your willingness to serve. A ministry leader will contact you soon.'
            : 'Vi uppskattar din vilja att tjäna. En ledare kommer att kontakta dig snart.'}
        </p>
        <button
          onClick={() => {
            setName('');
            setEmail('');
            setPhone('');
            setSelectedAreas([]);
            setSubmitted(false);
          }}
          className="text-primary hover:underline font-medium"
        >
          {currentLang === 'en' ? 'Return to form' : 'Återgå till formuläret'}
        </button>
      </div>
    );
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">
        {currentLang === 'en' ? 'Volunteer Sign-up' : 'Anmäl dig som volontär'}
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
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            {currentLang === 'en' ? 'Phone Number' : 'Telefonnummer'}
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            {currentLang === 'en' ? 'Areas of Interest' : 'Intresseområden'}
          </label>
          <p className="text-sm text-gray-600 mb-3">
            {currentLang === 'en' 
              ? 'Select all areas where you would like to serve:'
              : 'Välj alla områden där du vill tjäna:'}
          </p>
          
          <div className="space-y-2">
            {volunteerAreas.map((area) => (
              <div key={area.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={area.id}
                  checked={selectedAreas.includes(area.id)}
                  onChange={() => handleAreaChange(area.id)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor={area.id} className="ml-2 block text-gray-700">
                  {currentLang === 'en' ? area.nameEn : area.nameSv}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-opacity-90"
          disabled={selectedAreas.length === 0}
        >
          {currentLang === 'en' ? 'Submit' : 'Skicka'}
        </button>
      </form>
    </div>
  );
}

export default VolunteerSignupForm;