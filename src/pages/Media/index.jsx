import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Media() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [activeTab, setActiveTab] = useState('sermons');
  
  // Sample sermon data
  const sermons = [
    {
      id: 1,
      titleEn: 'The Power of Prayer',
      titleSv: 'Bönens Kraft',
      speaker: 'Pastor Michael Johnson',
      date: '2023-05-27',
      videoUrl: '#',
      thumbnailUrl: 'https://via.placeholder.com/300x169',
      languageTags: ['en'],
    },
    {
      id: 2,
      titleEn: 'Faith in Action',
      titleSv: 'Tro i Handling',
      speaker: 'Pastor Anna Svensson',
      date: '2023-05-20',
      videoUrl: '#',
      thumbnailUrl: 'https://via.placeholder.com/300x169',
      languageTags: ['sv'],
    },
    {
      id: 3,
      titleEn: 'The Good Shepherd',
      titleSv: 'Den Gode Herden',
      speaker: 'Pastor Michael Johnson',
      date: '2023-05-13',
      videoUrl: '#',
      thumbnailUrl: 'https://via.placeholder.com/300x169',
      languageTags: ['en', 'sv'],
    },
    {
      id: 4,
      titleEn: 'Living with Purpose',
      titleSv: 'Att Leva med Syfte',
      speaker: 'Guest Speaker David Lee',
      date: '2023-05-06',
      videoUrl: '#',
      thumbnailUrl: 'https://via.placeholder.com/300x169',
      languageTags: ['en'],
    },
  ];
  
  // Sample podcast episodes
  const podcasts = [
    {
      id: 1,
      titleEn: 'Weekly Devotional - Hope in Trials',
      titleSv: 'Veckans Andakt - Hopp i Prövningar',
      host: 'Pastor Michael Johnson',
      date: '2023-05-24',
      duration: '28:45',
      audioUrl: '#',
    },
    {
      id: 2,
      titleEn: 'Bible Study - Book of Romans',
      titleSv: 'Bibelstudium - Romarbrevet',
      host: 'Bible Study Group',
      date: '2023-05-17',
      duration: '45:12',
      audioUrl: '#',
    },
  ];
  
  // Sample photo albums
  const albums = [
    {
      id: 1,
      titleEn: 'Easter Service 2023',
      titleSv: 'Påskgudstjänst 2023',
      date: '2023-04-09',
      photoCount: 24,
      coverUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      titleEn: 'Baptism Ceremony',
      titleSv: 'Dopcermoni',
      date: '2023-03-18',
      photoCount: 36,
      coverUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {currentLang === 'en' ? 'Media Library' : 'Mediebibliotek'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Watch sermons, listen to podcasts, and browse our photo gallery'
              : 'Titta på predikningar, lyssna på poddar och bläddra i vårt fotogalleri'}
          </p>
        </div>
      </div>
      
      {/* Live Stream Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">
              {currentLang === 'en' ? 'Watch Live' : 'Se Live'}
            </h2>
            
            <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video mb-4">
              {/* Placeholder for YouTube embed */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>
                  {currentLang === 'en' 
                    ? 'Our next live stream begins on Saturday at 11:30 AM'
                    : 'Vår nästa livesändning börjar på lördag kl 11:30'}
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {currentLang === 'en' ? 'Next Live Service:' : 'Nästa Live Gudstjänst:'}
                </h3>
                <p>
                  {currentLang === 'en' 
                    ? 'Saturday, June 3rd at 11:30 AM'
                    : 'Lördag 3 juni kl 11:30'}
                </p>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center">
                <span className="mr-2">●</span>
                {currentLang === 'en' ? 'Get Notified' : 'Få Notifieringar'}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Media Library Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              className={`px-6 py-3 font-medium \${
                activeTab === 'sermons' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('sermons')}
            >
              {currentLang === 'en' ? 'Sermons' : 'Predikningar'}
            </button>
            <button
              className={`px-6 py-3 font-medium \${
                activeTab === 'podcasts' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('podcasts')}
            >
              {currentLang === 'en' ? 'Podcasts' : 'Poddar'}
            </button>
            <button
              className={`px-6 py-3 font-medium \${
                activeTab === 'photos' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('photos')}
            >
              {currentLang === 'en' ? 'Photo Gallery' : 'Fotogalleri'}
            </button>
          </div>
          
          {/* Sermons Tab Content */}
          {activeTab === 'sermons' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {currentLang === 'en' ? 'Recent Sermons' : 'Senaste Predikningar'}
                </h2>
                
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">
                    {currentLang === 'en' ? 'Filter by:' : 'Filtrera efter:'}
                  </label>
                  <select className="border rounded-md px-3 py-1 text-sm">
                    <option value="">{currentLang === 'en' ? 'All Languages' : 'Alla Språk'}</option>
                    <option value="en">English</option>
                    <option value="sv">Svenska</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sermons.map((sermon) => (
                  <div key={sermon.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="relative">
                      <img 
                        src={sermon.thumbnailUrl} 
                        alt={currentLang === 'en' ? sermon.titleEn : sermon.titleSv}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">
                        {currentLang === 'en' ? sermon.titleEn : sermon.titleSv}
                      </h3>
                      <p className="text-gray-600 mb-2">{sermon.speaker}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(sermon.date).toLocaleDateString(
                          currentLang === 'en' ? 'en-US' : 'sv-SE'
                        )}
                      </p>
                      
                      <div className="mt-3 flex space-x-2">
                        {sermon.languageTags.includes('en') && (
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">EN</span>
                        )}
                        {sermon.languageTags.includes('sv') && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">SV</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="text-primary hover:underline font-medium">
                  {currentLang === 'en' ? 'Load More Sermons' : 'Ladda Fler Predikningar'} →
                </button>
              </div>
            </div>
          )}
          
          {/* Podcasts Tab Content */}
          {activeTab === 'podcasts' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {currentLang === 'en' ? 'Podcast Episodes' : 'Poddavsnitt'}
                </h2>
                
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                    <svg className="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.414l-4.707-4.707 1.414-1.414 3.293 3.293 6.293-6.293 1.414 1.414-7.707 7.707z"/>
                    </svg>
                    Spotify
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary">
                    <svg className="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.414l-4.707-4.707 1.414-1.414 3.293 3.293 6.293-6.293 1.414 1.414-7.707 7.707z"/>
                    </svg>
                    Apple Podcasts
                  </a>
                </div>
              </div>
              
              <div className="space-y-4">
                {podcasts.map((podcast) => (
                  <div key={podcast.id} className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center">
                      <div className="h-16 w-16 bg-primary text-white rounded-lg flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01-.707-7.07m-2.829 9.9a9 9 0 010-12.728" />
                        </svg>
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-bold text-lg">
                          {currentLang === 'en' ? podcast.titleEn : podcast.titleSv}
                        </h3>
                        <p className="text-gray-600">{podcast.host}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span>
                            {new Date(podcast.date).toLocaleDateString(
                              currentLang === 'en' ? 'en-US' : 'sv-SE'
                            )}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{podcast.duration}</span>
                        </div>
                      </div>
                      
                      <button className="text-primary hover:text-primary-dark">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Photos Tab Content */}
          {activeTab === 'photos' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {currentLang === 'en' ? 'Photo Albums' : 'Fotoalbum'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album) => (
                  <div key={album.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="relative">
                      <img 
                        src={album.coverUrl} 
                        alt={currentLang === 'en' ? album.titleEn : album.titleSv}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded">
                        {album.photoCount} {currentLang === 'en' ? 'photos' : 'foton'}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-bold text-lg">
                        {currentLang === 'en' ? album.titleEn : album.titleSv}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(album.date).toLocaleDateString(
                          currentLang === 'en' ? 'en-US' : 'sv-SE'
                        )}
                      </p>
                      <button className="mt-3 text-primary hover:underline font-medium">
                        {currentLang === 'en' ? 'View Album' : 'Visa Album'} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Media;