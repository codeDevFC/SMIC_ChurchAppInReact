import { Outlet, useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Set language based on URL param or default to browser preference
    if (lang && (lang === 'en' || lang === 'sv')) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
      }
    } else {
      // Redirect to language-specific home page based on saved or browser language
      const savedLang = localStorage.getItem('language');
      const browserLang = savedLang || (navigator.language.startsWith('sv') ? 'sv' : 'en');
      i18n.changeLanguage(browserLang);
      
      // Only navigate if we're not already on a language path
      if (!lang) {
        navigate(`/\${browserLang}`, { replace: true });
      }
    }
  }, [lang, i18n, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
