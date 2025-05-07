import { useTranslation } from 'react-i18next';

function Sabbath() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Schedule data
  const scheduleItems = [
    {
      time: '10:00 AM',
      titleEn: 'Sabbath School',
      titleSv: 'Sabbatsskola',
      descriptionEn: 'Bible study in small groups',
      descriptionSv: 'Bibelstudier i små grupper'
    },
    {
      time: '11:30 AM',
      titleEn: 'Worship Service',
      titleSv: 'Gudstjänst',
      descriptionEn: 'Praise, prayer, and sermon',
      descriptionSv: 'Lovsång, bön och predikan'
    },
    {
      time: '13:30 PM',
      titleEn: 'Fellowship Lunch',
      titleSv: 'Gemenskapslunch',
      descriptionEn: 'Join us for a vegetarian potluck',
      descriptionSv: 'Var med på en vegetarisk knytis'
    }
  ];
  
  // What to expect content
  const expectationsEn = [
    'Warm and friendly atmosphere',
    'Contemporary and traditional worship music',
    'Practical, Bible-based sermons',
    'Children\'s Sabbath School for ages 0-12',
    'Translation services available'
  ];
  
  const expectationsSv = [
    'Varm och vänlig atmosfär',
    'Samtida och traditionell lovsångsmusik',
    'Praktiska, bibelbaserade predikningar',
    'Barnsabbatsskola för åldrar 0-12',
    'Översättningstjänster tillgängliga'
  ];

  const expectations = currentLang === 'en' ? expectationsEn : expectationsSv;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {currentLang === 'en' ? 'Sabbath Services' : 'Sabbatsgudstjänster'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Join us every Saturday as we worship together and study God\'s Word'
              : 'Var med oss varje lördag när vi tillber tillsammans och studerar Guds Ord'}
          </p>
        </div>
      </div>
      
      {/* Schedule Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Weekly Schedule' : 'Veckoschema'}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-3 px-4 text-left">{currentLang === 'en' ? 'Time' : 'Tid'}</th>
                    <th className="py-3 px-4 text-left">{currentLang === 'en' ? 'Activity' : 'Aktivitet'}</th>
                    <th className="py-3 px-4 text-left">{currentLang === 'en' ? 'Description' : 'Beskrivning'}</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleItems.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 font-medium">{item.time}</td>
                      <td className="py-3 px-4">{currentLang === 'en' ? item.titleEn : item.titleSv}</td>
                      <td className="py-3 px-4">{currentLang === 'en' ? item.descriptionEn : item.descriptionSv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* What to Expect Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {currentLang === 'en' ? 'What to Expect' : 'Vad Du Kan Förvänta Dig'}
            </h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                {expectations.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Livestream Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Watch Live' : 'Se Live'}
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-lg overflow-hidden aspect-video mb-4">
              {/* Placeholder for YouTube embed */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>{currentLang === 'en' ? 'Livestream will appear here' : 'Livestream visas här'}</p>
              </div>
            </div>
            
            <p className="text-center text-gray-600">
              {currentLang === 'en' 
                ? 'We stream our services every Sabbath at 11:30 AM'
                : 'Vi streamar våra gudstjänster varje sabbat kl 11:30'}
            </p>
            
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="text-primary hover:underline"
              >
                {currentLang === 'en' ? 'View Sermon Archives' : 'Se Predikningsarkiv'} →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sabbath;