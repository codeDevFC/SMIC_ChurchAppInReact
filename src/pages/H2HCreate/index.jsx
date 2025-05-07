// src/pages/H2HCreate/index.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function LocationMarker({ position, setPosition }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position ? <Marker position={position} /> : null;
}

function H2HCreate() {
  const { t, i18n } = useTranslation(['translation', 'h2h']);
  const currentLang = i18n.language;
  const navigate = useNavigate();
  
  // Stockholm coordinates for map center
  const stockholmPosition = [59.334591, 18.063240];
  const [position, setPosition] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    leaderEn: '',
    leaderSv: '',
    contactEmail: '',
    meetingTimeEn: '',
    meetingTimeSv: '',
    focusEn: '',
    focusSv: '',
    description: '',
    address: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, this would send the data to an API
    console.log('Form submitted:', { ...formData, coordinates: position });
    
    // Redirect back to H2H main page after submission
    alert(currentLang === 'en' 
      ? 'Group created successfully! (This is just a demo)'
      : 'Grupp skapad framgångsrikt! (Detta är bara en demo)');
    
    navigate(`/\${currentLang}/h2h`);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">
            {currentLang === 'en' ? 'Create a New H2H Group' : 'Skapa en Ny Hemgrupp'}
          </h1>
          <p className="max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Fill out the form below to start a new Heart to Heart community group.'
              : 'Fyll i formuläret nedan för att starta en ny Hjärta till Hjärta-grupp.'}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">
              {currentLang === 'en' ? 'Basic Information' : 'Grundläggande Information'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Group Name' : 'Gruppnamn'}*
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={currentLang === 'en' ? 'e.g., H2H Uppsala' : 't.ex. H2H Uppsala'}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Group Address' : 'Gruppadress'}*
                </label>
                <input 
                  type="text" 
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={currentLang === 'en' ? 'Meeting location address' : 'Mötesplatsens adress'}
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Leader Name (English)' : 'Ledarnamn (Engelska)'}*
                </label>
                <input 
                  type="text" 
                  name="leaderEn"
                  value={formData.leaderEn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Leader Name (Swedish)' : 'Ledarnamn (Svenska)'}*
                </label>
                <input 
                  type="text" 
                  name="leaderSv"
                  value={formData.leaderSv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Contact Email' : 'Kontakt E-post'}*
                </label>
                <input 
                  type="email" 
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Meeting Time (English)' : 'Mötestid (Engelska)'}*
                </label>
                <input 
                  type="text" 
                  name="meetingTimeEn"
                  value={formData.meetingTimeEn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Tuesday 7:00 PM"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Meeting Time (Swedish)' : 'Mötestid (Svenska)'}*
                </label>
                <input 
                  type="text" 
                  name="meetingTimeSv"
                  value={formData.meetingTimeSv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="t.ex., Tisdag 19:00"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Focus (English)' : 'Fokus (Engelska)'}*
                </label>
                <input 
                  type="text" 
                  name="focusEn"
                  value={formData.focusEn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Bible study & prayer"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Focus (Swedish)' : 'Fokus (Svenska)'}*
                </label>
                <input 
                  type="text" 
                  name="focusSv"
                  value={formData.focusSv}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="t.ex., Bibelstudier & bön"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">
              {currentLang === 'en' ? 'Group Description' : 'Gruppbeskrivning'}
            </h2>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {currentLang === 'en' ? 'Description' : 'Beskrivning'}*
              </label>
              <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder={currentLang === 'en' 
                  ? 'Describe your group, its purpose, and what people can expect...'
                  : 'Beskriv din grupp, dess syfte och vad människor kan förvänta sig...'
                }
                required
              ></textarea>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">
              {currentLang === 'en' ? 'Group Location' : 'Gruppplats'}
            </h2>
            <p className="mb-4">
              {currentLang === 'en' 
                ? 'Click on the map to set your group\'s meeting location.'
                : 'Klicka på kartan för att ställa in din grupps mötesplats.'
              }
            </p>
            
            <div className="h-96 rounded-lg overflow-hidden mb-4">
              <MapContainer 
                center={stockholmPosition} 
                zoom={11}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationMarker position={position} setPosition={setPosition} />
              </MapContainer>
            </div>
            
            {position && (
              <div className="text-center text-green-600 font-medium">
                {currentLang === 'en' 
                  ? 'Location selected! Coordinates: ' 
                  : 'Plats vald! Koordinater: '
                }
                {position[0].toFixed(4)}, {position[1].toFixed(4)}
              </div>
            )}
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90"
              disabled={!position}
            >
              {currentLang === 'en' ? 'Create Group' : 'Skapa Grupp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default H2HCreate;
