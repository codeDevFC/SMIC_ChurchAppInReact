import { useTranslation } from 'react-i18next';
import DonationForm from '../../components/common/DonationForm';
import PrayerRequestForm from '../../components/common/PrayerRequestForm';
import VolunteerSignupForm from '../../components/common/VolunteerSignupForm';

function Engage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-accent text-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {currentLang === 'en' ? 'Get Involved' : 'Engagera Dig'}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {currentLang === 'en' 
              ? 'Join our community through giving, prayer, and service'
              : 'Bli en del av vår gemenskap genom givande, bön och tjänst'}
          </p>
        </div>
      </div>
      
      {/* Engagement Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {currentLang === 'en' ? 'Ways to Engage' : 'Sätt att Engagera Dig'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Giving Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {currentLang === 'en' ? 'Give' : 'Ge'}
              </h3>
              <DonationForm />
            </div>
            
            {/* Prayer Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {currentLang === 'en' ? 'Pray' : 'Be'}
              </h3>
              <PrayerRequestForm />
            </div>
            
            {/* Volunteer Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                {currentLang === 'en' ? 'Serve' : 'Tjäna'}
              </h3>
              <VolunteerSignupForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {currentLang === 'en' ? 'Community Stories' : 'Berättelser från Gemenskapen'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-4">
                  ES
                </div>
                <div>
                  <h4 className="font-bold">Prince Boateng</h4>
                  <p className="text-sm text-gray-600">H2H Group Leader</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                {currentLang === 'en' 
                  ? '"Leading an H2H group has been one of the most rewarding experiences of my life. Seeing our community grow together in faith has been incredible."'
                  : '"Att leda en H2H-grupp har varit en av de mest givande upplevelserna i mitt liv. Att se vår gemenskap växa tillsammans i tron har varit otroligt."'}
              </blockquote>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold mr-4">
                  MJ
                </div>
                <div>
                  <h4 className="font-bold">Maa Debora Ampomaah</h4>
                  <p className="text-sm text-gray-600">Volunteer - Children's Ministry</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                {currentLang === 'en' 
                  ? '"Volunteering with the children\'s ministry has brought so much joy to my Sabbaths. The kids teach me as much as I teach them!"'
                  : '"Att vara volontär i barnministeriet har gett så mycket glädje till mina sabbater. Barnen lär mig lika mycket som jag lär dem!"'}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Engage;