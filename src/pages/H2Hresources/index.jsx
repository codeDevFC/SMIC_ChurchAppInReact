// src/pages/H2HResources/index.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function H2HResources() {
  const { t, i18n } = useTranslation(['translation', 'h2h']);
  const currentLang = i18n.language;
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Mock resources data
  const resources = [
    {
      id: 1,
      title: {
        en: 'H2H Leader\'s Guide',
        sv: 'H2H Ledarguide'
      },
      description: {
        en: 'A comprehensive guide for leading an effective H2H group with best practices and tips.',
        sv: 'En omfattande guide för att leda en effektiv H2H-grupp med bästa praxis och tips.'
      },
      type: 'guide',
      fileUrl: '/resources/h2h-leaders-guide.pdf',
      thumbnail: '/resources/thumbnails/leaders-guide.jpg'
    },
    {
      id: 2,
      title: {
        en: 'Bible Study Template',
        sv: 'Mall för Bibelstudier'
      },
      description: {
        en: 'A template for structuring your Bible study sessions with discussion questions.',
        sv: 'En mall för att strukturera dina bibelstudiesessioner med diskussionsfrågor.'
      },
      type: 'template',
      fileUrl: '/resources/bible-study-template.docx',
      thumbnail: '/resources/thumbnails/bible-study.jpg'
    },
    {
      id: 3,
      title: {
        en: 'Prayer Guide',
        sv: 'Böneguide'
      },
      description: {
        en: 'A guide for leading powerful prayer sessions in your H2H group.',
        sv: 'En guide för att leda kraftfulla bönesessioner i din H2H-grupp.'
      },
      type: 'guide',
      fileUrl: '/resources/prayer-guide.pdf',
      thumbnail: '/resources/thumbnails/prayer.jpg'
    },
    {
      id: 4,
      title: {
        en: 'Ice Breaker Activities',
        sv: 'Isbrytaraktiviteter'
      },
      description: {
        en: '50 ice breaker ideas to help members get to know each other better.',
        sv: '50 isbrytaridéer för att hjälpa medlemmar att lära känna varandra bättre.'
      },
      type: 'activity',
      fileUrl: '/resources/ice-breakers.pdf',
      thumbnail: '/resources/thumbnails/ice-breakers.jpg'
    },
    {
      id: 5,
      title: {
        en: 'Group Registration Form',
        sv: 'Gruppregistreringsformulär'
      },
      description: {
        en: 'Form for registering new members in your H2H group.',
        sv: 'Formulär för att registrera nya medlemmar i din H2H-grupp.'
      },
      type: 'form',
      fileUrl: '/resources/registration-form.pdf',
      thumbnail: '/resources/thumbnails/form.jpg'
    },
    {
      id: 6,
      title: {
        en: 'H2H Promotional Flyer',
        sv: 'H2H Reklamblad'
      },
      description: {
        en: 'Customizable flyer to promote your H2H group in your community.',
        sv: 'Anpassningsbart flygblad för att marknadsföra din H2H-grupp i ditt samhälle.'
      },
      type: 'marketing',
      fileUrl: '/resources/h2h-flyer.docx',
      thumbnail: '/resources/thumbnails/flyer.jpg'
    },
    {
      id: 7,
      title: {
        en: 'Outreach Planning Guide',
        sv: 'Guide för Utåtriktad Planering'
      },
      description: {
        en: 'A step-by-step guide for planning community outreach activities.',
        sv: 'En steg-för-steg-guide för att planera utåtriktade aktiviteter i samhället.'
      },
      type: 'guide',
      fileUrl: '/resources/outreach-planning.pdf',
      thumbnail: '/resources/thumbnails/outreach.jpg'
    },
    {
      id: 8,
      title: {
        en: 'H2H Worship Song List',
        sv: 'H2H Lovsångslista'
      },
      description: {
        en: 'A curated list of worship songs suitable for H2H group settings.',
        sv: 'En kurerad lista över lovsånger som passar för H2H-gruppinställningar.'
      },
      type: 'music',
      fileUrl: '/resources/worship-songs.pdf',
      thumbnail: '/resources/thumbnails/worship.jpg'
    },
    {
      id: 9,
      title: {
        en: 'Group Covenant Template',
        sv: 'Mall för Gruppförbund'
      },
      description: {
        en: 'A template for creating a group covenant to establish expectations and commitments.',
        sv: 'En mall för att skapa ett gruppförbund för att etablera förväntningar och åtaganden.'
      },
      type: 'template',
      fileUrl: '/resources/group-covenant.docx',
      thumbnail: '/resources/thumbnails/covenant.jpg'
    },
    {
      id: 10,
      title: {
        en: 'Conflict Resolution Guide',
        sv: 'Guide för Konfliktlösning'
      },
      description: {
        en: 'Biblical principles and practical steps for resolving conflicts within your group.',
        sv: 'Bibliska principer och praktiska steg för att lösa konflikter inom din grupp.'
      },
      type: 'guide',
      fileUrl: '/resources/conflict-resolution.pdf',
      thumbnail: '/resources/thumbnails/conflict.jpg'
    }
  ];

  // Filter resources based on active category
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeCategory);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">
            {currentLang === 'en' ? 'H2H Group Resources' : 'H2H Gruppresurser'}
          </h1>
          <p className="max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Access tools, templates, and guides to help your H2H group thrive.'
              : 'Få tillgång till verktyg, mallar och guider för att hjälpa din H2H-grupp att blomstra.'}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Resource Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {currentLang === 'en' ? 'Resource Categories' : 'Resurskategorier'}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              {currentLang === 'en' ? 'All Resources' : 'Alla Resurser'}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'guide' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('guide')}
            >
              {currentLang === 'en' ? 'Guides' : 'Guider'}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'template' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('template')}
            >
              {currentLang === 'en' ? 'Templates' : 'Mallar'}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'form' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('form')}
            >
              {currentLang === 'en' ? 'Forms' : 'Formulär'}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'activity' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('activity')}
            >
              {currentLang === 'en' ? 'Activities' : 'Aktiviteter'}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'marketing' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('marketing')}
            >
              {currentLang === 'en' ? 'Marketing' : 'Marknadsföring'}
            </button>
            
            <button
              className={`px-4 py-2 rounded-full \${
                activeCategory === 'music' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveCategory('music')}
            >
              {currentLang === 'en' ? 'Music' : 'Musik'}
            </button>
          </div>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="h-40 overflow-hidden bg-gray-200">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title[currentLang]} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{resource.title[currentLang]}</h3>
                <p className="text-gray-600 text-sm mb-3">{resource.description[currentLang]}</p>
                
                <div className="flex justify-between items-center">
                  <span className="bg-gray-200 text-xs px-2 py-1 rounded-full">
                    {resource.type === 'guide' && (currentLang === 'en' ? 'Guide' : 'Guide')}
                    {resource.type === 'template' && (currentLang === 'en' ? 'Template' : 'Mall')}
                    {resource.type === 'form' && (currentLang === 'en' ? 'Form' : 'Formulär')}
                    {resource.type === 'activity' && (currentLang === 'en' ? 'Activity' : 'Aktivitet')}
                    {resource.type === 'marketing' && (currentLang === 'en' ? 'Marketing' : 'Marknadsföring')}
                    {resource.type === 'music' && (currentLang === 'en' ? 'Music' : 'Musik')}
                  </span>
                  
                  <a 
                    href={resource.fileUrl} 
                    className="text-primary hover:underline flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{currentLang === 'en' ? 'Download' : 'Ladda ner'}</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Request Resources Section */}
        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            {currentLang === 'en' ? 'Need Something Specific?' : 'Behöver Du Något Specifikt?'}
          </h2>
          <p className="mb-6">
            {currentLang === 'en' 
              ? 'Can\'t find what you\'re looking for? Let us know what resources would help your group, and we\'ll do our best to provide them.'
              : 'Kan du inte hitta vad du letar efter? Låt oss veta vilka resurser som skulle hjälpa din grupp, så gör vi vårt bästa för att tillhandahålla dem.'}
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
                {currentLang === 'en' ? 'Resource Needed' : 'Behövd Resurs'}
              </label>
              <input 
                type="text" 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={currentLang === 'en' 
                  ? 'e.g., Youth Group Activity Guide'
                  : 't.ex., Aktivitetsguide för Ungdomsgrupp'
                }
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-1">
                {currentLang === 'en' ? 'Description' : 'Beskrivning'}
              </label>
              <textarea 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                rows="3"
                placeholder={currentLang === 'en'
                  ? 'Please describe what you need and how it would help your group...'
                    : 'Beskriv vad du behöver och hur det skulle hjälpa din grupp...'
                  }
                  required
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90"
                >
                  {currentLang === 'en' ? 'Submit Request' : 'Skicka Förfrågan'}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">
              {currentLang === 'en' ? 'Quick Links' : 'Snabblänkar'}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Link 
                to={`/\${currentLang}/h2h`}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-shadow"
              >
                <div className="bg-primary rounded-full p-2 text-white mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">
                    {currentLang === 'en' ? 'Find a Group' : 'Hitta en Grupp'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentLang === 'en' ? 'Join an existing H2H group' : 'Gå med i en befintlig H2H-grupp'}
                  </p>
                </div>
              </Link>
              
              <Link 
                to={`/\${currentLang}/h2h/create`}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-shadow"
              >
                <div className="bg-primary rounded-full p-2 text-white mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">
                    {currentLang === 'en' ? 'Start a Group' : 'Starta en Grupp'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentLang === 'en' ? 'Create a new H2H group' : 'Skapa en ny H2H-grupp'}
                  </p>
                </div>
              </Link>
              
              <Link 
                to={`/\${currentLang}/h2h/training`}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center hover:shadow-md transition-shadow"
              >
                <div className="bg-primary rounded-full p-2 text-white mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">
                    {currentLang === 'en' ? 'Leader Training' : 'Ledarutbildning'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentLang === 'en' ? 'Training for H2H group leaders' : 'Utbildning för H2H-gruppledare'}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default H2HResources;
  
