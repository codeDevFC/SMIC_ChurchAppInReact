// src/pages/H2HTraining/index.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function H2HTraining() {
  const { t, i18n } = useTranslation(['translation', 'h2h']);
  const currentLang = i18n.language;
  
  const [activeModule, setActiveModule] = useState(1);
  const [completedModules, setCompletedModules] = useState([]);
  
  const modules = [
    {
      id: 1,
      title: {
        en: 'Foundations of H2H Leadership',
        sv: 'Grunder för H2H-ledarskap'
      },
      description: {
        en: 'Learn the core principles and values of leading a Heart to Heart group.',
        sv: 'Lär dig kärnprinciperna och värdena för att leda en Hjärta till Hjärta-grupp.'
      },
      duration: '45 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: 2,
      title: {
        en: 'Facilitating Meaningful Discussions',
        sv: 'Facilitera Meningsfulla Diskussioner'
      },
      description: {
        en: 'Techniques for creating engaging and transformative group conversations.',
        sv: 'Tekniker för att skapa engagerande och transformativa gruppdiskussioner.'
      },
      duration: '30 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: 3,
      title: {
        en: 'Building Community & Trust',
        sv: 'Bygga Gemenskap & Förtroende'
      },
      description: {
        en: 'Strategies for developing deep connections and trust among group members.',
        sv: 'Strategier för att utveckla djupa kopplingar och förtroende bland gruppmedlemmar.'
      },
      duration: '35 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: 4,
      title: {
        en: 'Effective Bible Study Methods',
        sv: 'Effektiva Bibelstudier Metoder'
      },
      description: {
        en: 'Learn practical approaches to studying and applying Scripture in your group.',
        sv: 'Lär dig praktiska tillvägagångssätt för att studera och tillämpa Skriften i din grupp.'
      },
      duration: '40 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    },
    {
      id: 5,
      title: {
        en: 'Leading Prayer & Spiritual Practices',
        sv: 'Leda Bön & Andliga Övningar'
      },
      description: {
        en: 'Guide your group in meaningful prayer and spiritual formation activities.',
        sv: 'Vägled din grupp i meningsfulla böner och andliga formationsaktiviteter.'
      },
      duration: '25 min',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // Placeholder
    }
  ];
  
  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };
  
  const activeModuleData = modules.find(m => m.id === activeModule);
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">
            {currentLang === 'en' ? 'H2H Leader Training' : 'H2H Ledarutbildning'}
          </h1>
          <p className="max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Equipping you to lead transformative Heart to Heart groups in your community.'
              : 'Utrustar dig att leda transformativa Hjärta till Hjärta-grupper i ditt samhälle.'}
          </p>
          
          <div className="mt-6 flex justify-center">
            <div className="bg-white text-primary rounded-lg px-4 py-2 font-medium">
              {completedModules.length} / {modules.length} {currentLang === 'en' ? 'Modules Completed' : 'Moduler Slutförda'}
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Module Navigation */}
          <div className="lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg sticky top-4">
              <h2 className="text-xl font-bold mb-4">
                {currentLang === 'en' ? 'Training Modules' : 'Utbildningsmoduler'}
              </h2>
              
              <div className="space-y-3">
                {modules.map(module => (
                  <button
                    key={module.id}
                    className={`w-full text-left p-3 rounded-lg flex items-center \${
                      activeModule === module.id 
                        ? 'bg-primary text-white' 
                        : 'bg-white hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveModule(module.id)}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 \${
                      completedModules.includes(module.id)
                        ? 'bg-green-500 text-white'
                        : activeModule === module.id
                          ? 'bg-white text-primary'
                          : 'bg-gray-200 text-gray-700'
                    }`}>
                      {completedModules.includes(module.id) ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : module.id}
                    </div>
                    <div>
                      <h3 className="font-medium">{module.title[currentLang]}</h3>
                      <p className={`text-sm \${activeModule === module.id ? 'text-gray-100' : 'text-gray-500'}`}>
                        {module.duration}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6">
                <Link 
                  to={`/\${currentLang}/h2h/resources`}
                  className="text-primary hover:underline flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  {currentLang === 'en' ? 'Additional Resources' : 'Ytterligare Resurser'}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Module Content */}
          <div className="lg:w-2/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold">{activeModuleData.title[currentLang]}</h2>
                  <p className="text-gray-600">{activeModuleData.duration}</p>
                </div>
                
                <button
                  className={`px-4 py-2 rounded \${
                    completedModules.includes(activeModuleData.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-primary text-white hover:bg-opacity-90'
                  }`}
                  onClick={() => handleModuleComplete(activeModuleData.id)}
                  disabled={completedModules.includes(activeModuleData.id)}
                >
                  {completedModules.includes(activeModuleData.id)
                    ? (currentLang === 'en' ? 'Completed' : 'Slutförd')
                    : (currentLang === 'en' ? 'Mark as Complete' : 'Markera som Slutförd')
                  }
                </button>
              </div>
              
              <p className="mb-6">{activeModuleData.description[currentLang]}</p>
              
              {/* Video Player */}
              <div className="aspect-w-16 aspect-h-9 mb-6 bg-black rounded-lg overflow-hidden">
                <iframe
                  src={activeModuleData.videoUrl}
                  title={activeModuleData.title[currentLang]}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Module Content */}
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">
                  {currentLang === 'en' ? 'Module Summary' : 'Modulsammanfattning'}
                </h3>
                
                <div className="prose max-w-none">
                  {activeModuleData.id === 1 && (
                    <>
                      <p>
                        {currentLang === 'en' 
                          ? 'In this module, we explore the core principles that make Heart to Heart groups effective spaces for spiritual growth and community formation.'
                          : 'I den här modulen utforskar vi kärnprinciperna som gör Hjärta till Hjärta-grupper till effektiva utrymmen för andlig tillväxt och gemenskapsbildning.'
                        }
                      </p>
                      <h4>
                        {currentLang === 'en' ? 'Key Takeaways:' : 'Viktiga Lärdomar:'}
                      </h4>
                      <ul>
                        <li>
                          {currentLang === 'en' 
                            ? 'Understanding the purpose and vision of H2H groups'
                            : 'Förstå syftet och visionen med H2H-grupper'
                          }
                        </li>
                        <li>
                          {currentLang === 'en' 
                            ? 'The biblical foundations for small group ministry'
                            : 'De bibliska grunderna för smågruppstjänst'
                          }
                        </li>
                        <li>
                          {currentLang === 'en' 
                            ? 'Creating a welcoming and inclusive environment'
                            : 'Skapa en välkomnande och inkluderande miljö'
                          }
                        </li>
                        <li>
                          {currentLang === 'en' 
                            ? 'Setting healthy group expectations and boundaries'
                            : 'Sätta hälsosamma gruppförväntningar och gränser'
                          }
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {activeModuleData.id === 2 && (
                    <>
                      <p>
                        {currentLang === 'en' 
                          ? 'This module focuses on how to facilitate meaningful discussions that lead to spiritual growth and personal transformation.'
                          : 'Denna modul fokuserar på hur man underlättar meningsfulla diskussioner som leder till andlig tillväxt och personlig omvandling.'
                        }
                      </p>
                      <h4>
                        {currentLang === 'en' ? 'Key Takeaways:' : 'Viktiga Lärdomar:'}
                      </h4>
                      <ul>
                        <li>
                          {currentLang === 'en' 
                            ? 'Asking powerful questions that promote reflection'
                            : 'Ställa kraftfulla frågor som främjar reflektion'
                          }
                        </li>
                        <li>
                          {currentLang === 'en' 
                            ? 'Creating space for everyone to participate'
                            : 'Skapa utrymme för alla att delta'
                          }
                        </li>
                        <li>
                          {currentLang === 'en' 
                            ? 'Handling difficult conversations and differing opinions'
                            : 'Hantera svåra samtal och olika åsikter'
                          }
                        </li>
                        <li>
                          {currentLang === 'en' 
                            ? 'Leading discussions that connect Scripture to daily life'
                            : 'Leda diskussioner som kopplar Skriften till det dagliga livet'
                          }
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {/* Content for other modules would go here */}
                  {activeModuleData.id > 2 && (
                    <p>
                      {currentLang === 'en' 
                        ? 'Content for this module will be provided during the training session.'
                        : 'Innehåll för denna modul kommer att tillhandahållas under utbildningstillfället.'
                      }
                    </p>
                  )}
                </div>
              </div>
              
              {/* Module Resources */}
              <div className="bg-white p-6 rounded-lg mt-6">
                <h3 className="text-xl font-bold mb-4">
                  {currentLang === 'en' ? 'Resources' : 'Resurser'}
                </h3>
                
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    <span>
                      {currentLang === 'en' ? 'Module Workbook' : 'Modularbetsbok'} (PDF)
                    </span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    <span>
                      {currentLang === 'en' ? 'Presentation Slides' : 'Presentationsbilder'} (PPTX)
                    </span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50"
                  >
                    <svg className="w-6 h-6 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <span>
                      {currentLang === 'en' ? 'Activity Guide' : 'Aktivitetsguide'} (PDF)
                    </span>
                  </a>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button 
                  className="px-4 py-2 border rounded hover:bg-gray-100 flex items-center"
                  onClick={() => setActiveModule(prev => Math.max(prev - 1, 1))}
                  disabled={activeModule === 1}
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  {currentLang === 'en' ? 'Previous Module' : 'Föregående Modul'}
                </button>
                
                <button 
                  className="px-4 py-2 border rounded hover:bg-gray-100 flex items-center"
                  onClick={() => setActiveModule(prev => Math.min(prev + 1, modules.length))}
                  disabled={activeModule === modules.length}
                >
                  {currentLang === 'en' ? 'Next Module' : 'Nästa Modul'}
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Certificate Section */}
      {completedModules.length === modules.length && (
        <div className="bg-green-700 text-white py-8 mt-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {currentLang === 'en' ? 'Congratulations!' : 'Grattis!'}
            </h2>
            <p className="mb-6">
              {currentLang === 'en' 
                ? 'You have completed all the H2H Leader Training modules.'
                : 'Du har slutfört alla H2H-ledarutbildningsmoduler.'
              }
            </p>
            <button 
              className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-opacity-90"
            >
              {currentLang === 'en' ? 'Download Certificate' : 'Ladda ner Certifikat'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default H2HTraining;
