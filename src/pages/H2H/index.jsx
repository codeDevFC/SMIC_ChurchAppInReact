import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import groups from the shared data file
import { groups } from '../../data/h2hGroups';

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function H2H() {
  const { t, i18n } = useTranslation(['translation', 'h2h']);
  const currentLang = i18n.language;
  const [selectedGroup, setSelectedGroup] = useState(null);
  
  // Stockholm coordinates for map center
  const stockholmPosition = [59.334591, 18.063240];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {t('h2h:title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('h2h:description')}
          </p>
        </div>
      </div>
      
      {/* Map and Groups Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Map */}
            <div className="w-full lg:w-2/3 h-96 mb-8 lg:mb-0 lg:pr-8">
              <MapContainer 
                center={stockholmPosition} 
                zoom={9} // Zoomed out to show more of the region
                style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                
                {groups.map(group => (
                  <Marker 
                    key={group.id} 
                    position={group.coordinates}
                    eventHandlers={{
                      click: () => setSelectedGroup(group)
                    }}
                  >
                    <Popup>
                      <div>
                        <h3 className="font-bold">{group.name}</h3>
                        <p>{currentLang === 'en' ? group.focusEn : group.focusSv}</p>
                        <p className="mt-1 text-sm">
                          {currentLang === 'en' ? 'Members:' : 'Medlemmar:'} {group.memberCount}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            
            {/* Group List */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl font-bold mb-4">
                {currentLang === 'en' ? 'Our H2H Groups' : 'Våra Hemgrupper'}
              </h2>
              
              {/* List container with improved scrollbar visibility */}
              <div className="relative">
                <div className="h-96 overflow-y-auto border border-gray-300 rounded-lg shadow-inner bg-gray-50">
                  {/* Visual indicator that there's more content */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
                  
                  <div className="space-y-3 p-3">
                    {groups.map(group => (
                      <div 
                        key={group.id}
                        className={`p-4 rounded-lg cursor-pointer transition shadow-sm \${
                          selectedGroup && selectedGroup.id === group.id
                            ? 'bg-primary text-white'
                            : 'bg-white hover:bg-gray-100'
                        }`}
                        onClick={() => setSelectedGroup(group)}
                      >
                        <h3 className="font-bold text-lg">{group.name}</h3>
                        <p className="text-sm">
                          {currentLang === 'en' ? group.focusEn : group.focusSv}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs opacity-80">
                            {currentLang === 'en' ? 'Members:' : 'Medlemmar:'} {group.memberCount}
                          </span>
                          <Link 
                            to={`/${currentLang}/h2h/${group.id}`}
                            className={`text-xs px-2 py-1 rounded \${
                              selectedGroup && selectedGroup.id === group.id
                                ? 'bg-white text-primary'
                                : 'bg-primary text-white'
                            }`}
                          >
                            {currentLang === 'en' ? 'Visit Group' : 'Besök Grupp'}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Scroll indicator text */}
                <p className="text-center text-sm text-gray-500 mt-2">
                  {currentLang === 'en' ? 'Scroll to see more groups' : 'Scrolla för att se fler grupper'}
                </p>
                
                {/* Scroll down arrow indicator */}
                <div className="text-center mt-1">
                  <svg className="inline-block w-5 h-5 text-gray-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Selected Group Details */}
          {selectedGroup && (
            <div className="mt-8 p-6 bg-gray-100 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">{selectedGroup.name}</h2>
                <Link 
                  to={`/${currentLang}/h2h/${selectedGroup.id}`}
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
                >
                  {currentLang === 'en' ? 'Visit Group Page' : 'Besök Gruppsida'}
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-lg mb-2">
                      {currentLang === 'en' ? 'Group Details' : 'Gruppdetaljer'}
                    </h3>
                    <p className="mb-2">
                      <strong>{currentLang === 'en' ? 'Focus:' : 'Fokus:'}</strong> {currentLang === 'en' ? selectedGroup.focusEn : selectedGroup.focusSv}
                    </p>
                    <p className="mb-2">
                      <strong>{currentLang === 'en' ? 'Meeting Time:' : 'Mötestid:'}</strong> {currentLang === 'en' ? selectedGroup.meetingTimeEn : selectedGroup.meetingTimeSv}
                    </p>
                    <p className="mb-2">
                      <strong>{currentLang === 'en' ? 'Members:' : 'Medlemmar:'}</strong> {selectedGroup.memberCount}
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow-sm mt-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {currentLang === 'en' ? 'Group Leader' : 'Gruppledare'}
                    </h3>
                    <p>{currentLang === 'en' ? selectedGroup.leaderEn : selectedGroup.leaderSv}</p>
                    <p className="text-primary">{selectedGroup.contactEmail}</p>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <div className="bg-white p-4 rounded shadow-sm h-full">
                    <h3 className="font-semibold text-lg mb-2">
                      {currentLang === 'en' ? 'Join This Group' : 'Gå Med I Denna Grupp'}
                    </h3>
                    <p className="mb-4">
                      {currentLang === 'en' 
                        ? `Join our \${selectedGroup.name} community and grow in your faith together with others in your area.`
                        : `Gå med i vår \${selectedGroup.name} gemenskap och väx i din tro tillsammans med andra i ditt område.`}
                    </p>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          {currentLang === 'en' ? 'Your Name' : 'Ditt Namn'}
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          {currentLang === 'en' ? 'Email Address' : 'E-postadress'}
                        </label>
                        <input 
                          type="email" 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          required
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                          {currentLang === 'en' ? 'Message (Optional)' : 'Meddelande (Valfritt)'}
                        </label>
                        <textarea 
                          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                          rows="3"
                        ></textarea>
                      </div>
                      
                      <div className="md:col-span-2">
                        <button
                          type="submit"
                          className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
                        >
                          {currentLang === 'en' ? 'Join This Group' : 'Gå Med I Denna Grupp'}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Find Your Group Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Find Your Perfect H2H Group' : 'Hitta Din Perfekta Hemgrupp'}
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
            <p className="text-center mb-6">
              {currentLang === 'en' 
                ? 'Not sure which group to join? Fill out this form and we\'ll help you find the perfect match for your needs and location.'
                : 'Osäker på vilken grupp du ska gå med i? Fyll i detta formulär så hjälper vi dig att hitta den perfekta matchen för dina behov och plats.'}
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Your Name' : 'Ditt Namn'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Email Address' : 'E-postadress'}
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Phone Number' : 'Telefonnummer'}
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Your Area' : 'Ditt Område'}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={currentLang === 'en' ? 'e.g., Uppsala, Tensta, etc.' : 't.ex. Uppsala, Tensta, etc.'}
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Group Preferences' : 'Grupppreferenser'}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-primary" />
                    {currentLang === 'en' ? 'Bible Study' : 'Bibelstudier'}
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-primary" />
                    {currentLang === 'en' ? 'Prayer' : 'Bön'}
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-primary" />
                    {currentLang === 'en' ? 'Family Focus' : 'Familjefokus'}
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-primary" />
                    {currentLang === 'en' ? 'Young Adults' : 'Unga Vuxna'}
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-primary" />
                    {currentLang === 'en' ? 'Worship' : 'Lovsång'}
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 text-primary" />
                    {currentLang === 'en' ? 'Outreach' : 'Utåtriktad Verksamhet'}
                  </label>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  {currentLang === 'en' ? 'Additional Information' : 'Ytterligare Information'}
                </label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                  placeholder={currentLang === 'en' ? 'Tell us more about what you\'re looking for in a group...' : 'Berätta mer om vad du söker i en grupp...'}
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90"
                >
                  {currentLang === 'en' ? 'Find My Group' : 'Hitta Min Grupp'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default H2H;
