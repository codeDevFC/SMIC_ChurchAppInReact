import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeroBanner from '../../components/HeroBanner';

function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Sample announcements
  const announcements = [
    {
      id: 1,
      title: currentLang === 'en' ? 'Special Service Next Sabbath' : 'Speciell gudstjänst nästa sabbat',
      content: currentLang === 'en' ? 'Join us for a special communion service.' : 'Var med oss för en speciell nattvardsgudstjänst.'
    },
    {
      id: 2,
      title: currentLang === 'en' ? 'New H2H Group Starting' : 'Ny hemgrupp startar',
      content: currentLang === 'en' ? 'A new group is forming in the Kista area.' : 'En ny grupp bildas i Kista-området.'
    }
  ];
  
  // Sample upcoming events
  const events = [
    {
      id: 1,
      title: currentLang === 'en' ? 'Youth Retreat' : 'Ungdomsretreat',
      date: '2023-06-10',
      time: currentLang === 'en' ? '9:00 AM - 5:00 PM' : '09:00 - 17:00',
      language: ['en', 'sv']
    },
    {
      id: 2,
      title: currentLang === 'en' ? 'Bible Study' : 'Bibelstudium',
      date: '2023-06-15',
      time: currentLang === 'en' ? '7:00 PM' : '19:00',
      language: ['en']
    },
    {
      id: 3,
      title: currentLang === 'en' ? 'Prayer Meeting' : 'Bönmöte',
      date: '2023-06-18',
      time: currentLang === 'en' ? '6:30 PM' : '18:30',
      language: ['sv']
    }
  ];

  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Announcements Bar */}
      <div className="bg-accent text-gray-800 py-3">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-lg mb-2">{currentLang === 'en' ? 'Announcements' : 'Meddelanden'}</h2>
          <div className="space-y-2">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white p-3 rounded shadow">
                <h3 className="font-semibold">{announcement.title}</h3>
                <p>{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Welcome Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t('hero.welcome')}</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-6">
              {currentLang === 'en' 
                ? 'We are a diverse, multilingual community of believers dedicated to sharing God\'s love in Stockholm.'
                : 'Vi är en mångfaldig, flerspråkig gemenskap av troende som är dedikerade till att dela Guds kärlek i Stockholm.'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to={`/\${currentLang}/sabbath`} 
                className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
              >
                {t('buttons.learnMore')}
              </Link>
              <Link 
                to={`/\${currentLang}/media`} 
                className="bg-secondary text-white px-6 py-2 rounded hover:bg-opacity-90"
              >
                {t('buttons.watchLive')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Upcoming Events' : 'Kommande händelser'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded shadow">
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-gray-600">
                  {new Date(event.date).toLocaleDateString(currentLang === 'en' ? 'en-US' : 'sv-SE')}
                </p>
                <p>{event.time}</p>
                <div className="mt-3 flex space-x-2">
                  {event.language.includes('en') && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">EN</span>
                  )}
                  {event.language.includes('sv') && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">SV</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to={`/\${currentLang}/events`}
              className="text-primary font-medium hover:underline"
            >
              {currentLang === 'en' ? 'See all events' : 'Se alla händelser'} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
