import { useTranslation } from 'react-i18next';

function About() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {currentLang === 'en' ? 'About Us' : 'Om Oss'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Learn about Stockholm Mission International Church'
              : 'Lär dig mer om Stockholm Mission International Church'}
          </p>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              {currentLang === 'en' ? 'Our Mission & Vision' : 'Vår Mission & Vision'}
            </h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 text-primary">
                {currentLang === 'en' ? 'Mission' : 'Mission'}
              </h3>
              <p className="text-gray-700 mb-4">
                {currentLang === 'en' 
                  ? 'To share the everlasting gospel with people from all backgrounds in Stockholm through authentic community, relevant worship, and practical Bible teaching.'
                  : 'Att dela det eviga evangeliet med människor från alla bakgrunder i Stockholm genom autentisk gemenskap, relevant tillbedjan och praktisk bibelundervisning.'}
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-primary">
                {currentLang === 'en' ? 'Vision' : 'Vision'}
              </h3>
              <p className="text-gray-700">
                {currentLang === 'en' 
                  ? 'A vibrant, multilingual community of believers who are growing in their relationship with God, with each other, and reaching out to their neighbors through House-to-House groups across Stockholm.'
                  : 'En levande, flerspråkig gemenskap av troende som växer i sin relation med Gud, med varandra, och når ut till sina grannar genom hemgrupper över hela Stockholm.'}
              </p>
            </div>
            
            <h2 className="text-3xl font-bold text-center mb-8">
              {currentLang === 'en' ? 'Our Story' : 'Vår Historia'}
            </h2>
            
            <div className="prose max-w-none">
              <p>
                {currentLang === 'en' 
                  ? 'Stockholm Mission International Church was founded in 2015 by a small group of believers who saw the need for a multilingual, Sabbath-observing church community in Stockholm. What started as a small Bible study group has by God\'s grace grown into a vibrant church with members from different nationalities.'
                  : 'Stockholm Mission International Church grundades 2015 av en liten grupp troende som såg behovet av en flerspråkig, sabbatsfirande kyrkogemenskap i Stockholm. Det som började som en liten bibelstudiegrupp i någons vardagsrum har växt till en levande kyrka med medlemmar från olika nationaliteter.'}
              </p>
              <p>
                {currentLang === 'en' 
                  ? 'In 2024, we launched our House-to-House (H2H) small group ministry, focusing on creating authentic communities across Stockholm where people can grow spiritually, build meaningful relationships, and serve their neighborhoods together.'
                  : 'År 2024 lanserade vi vår House-to-House (H2H) smågruppstjänst, med fokus på att skapa autentiska gemenskaper över hela Stockholm där människor kan växa andligt, bygga meningsfulla relationer och tjäna sina grannskap tillsammans.'}
              </p>
              <p>
                {currentLang === 'en' 
                  ? 'Today, SMIC continues to grow as we focus on our mission to share God\'s love with the diverse population of Stockholm through relevant, Bible-based teaching and authentic community.'
                  : 'Idag fortsätter SMIC att växa när vi fokuserar på vår mission att dela Guds kärlek med Stockholms mångfaldiga befolkning genom relevant, bibelbaserad undervisning och autentisk gemenskap.'}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Our Leadership Team' : 'Vårt Ledarteam'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Pastor */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Pastor Berny Carlsson</h3>
                <p className="text-primary">{currentLang === 'en' ? 'Lead Pastor' : 'Huvudpastor'}</p>
                <p className="mt-2 text-gray-600">
                  {currentLang === 'en' 
                    ? 'Serving at SMIC since 2015'
                    : 'Tjänar på SMIC sedan 2015'}
                </p>
              </div>
            </div>
            
            {/* Elder */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Anna Svensson</h3>
                <p className="text-primary">{currentLang === 'en' ? 'Elder & Worship Director' : 'Äldste & Lovsångsledare'}</p>
                <p className="mt-2 text-gray-600">
                  {currentLang === 'en' 
                    ? 'Serving at SMIC since 2015'
                    : 'Tjänar på SMIC sedan 2015'}
                </p>
              </div>
            </div>
            
            {/* H2H Coordinator */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-4">
                <h3 className="font-bold text-lg">Bro. Ekow Baah</h3>
                <p className="text-primary">{currentLang === 'en' ? 'H2H Groups Coordinator' : 'H2H Gruppkoordinator'}</p>
                <p className="mt-2 text-gray-600">
                  {currentLang === 'en' 
                    ? 'Serving at SMIC since 2020'
                    : 'Tjänar på SMIC sedan 2020'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;