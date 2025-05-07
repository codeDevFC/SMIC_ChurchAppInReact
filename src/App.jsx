import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import './index.css';

// Layout components
import Layout from './components/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Pages
import Home from './pages/Home';
import Sabbath from './pages/Sabbath';
import H2H from './pages/H2H';
import Media from './pages/Media';
import Engage from './pages/Engage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// H2H related pages
import H2HGroup from './pages/H2HGroup';
import H2HCreate from './pages/H2HCreate';
import H2HResources from './pages/H2HResources';
import H2HTraining from './pages/H2HTraining';

// Language route wrapper to handle language detection from URL
function LanguageWrapper({ children }) {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  
  useEffect(() => {
    // If URL has a valid language parameter, use it
    if (lang && (lang === 'en' || lang === 'sv')) {
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
        localStorage.setItem('language', lang);
      }
    } else {
      // If invalid language in URL, redirect to a valid one
      const savedLang = localStorage.getItem('language') || 'en';
      i18n.changeLanguage(savedLang);
    }
  }, [lang, i18n]);
  
  return children;
}

// Redirect component to handle root URL and add language prefix
function RedirectToLanguage() {
  const savedLang = localStorage.getItem('language') || 'en';
  return <Navigate to={`/\${savedLang}`} replace />;
}

function App() {
  const { i18n } = useTranslation();
  
  // Set default language on initial load
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && (savedLang === 'en' || savedLang === 'sv')) {
      i18n.changeLanguage(savedLang);
    } else {
      // Default to browser language or English
      const browserLang = navigator.language.startsWith('sv') ? 'sv' : 'en';
      i18n.changeLanguage(browserLang);
      localStorage.setItem('language', browserLang);
    }
  }, [i18n]);

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Redirect root path to language path */}
          <Route path="/" element={<RedirectToLanguage />} />
          
          {/* Language routes */}
          <Route path="/:lang" element={
            <LanguageWrapper>
              <Layout />
            </LanguageWrapper>
          }>
            <Route index element={<Home />} />
            <Route path="sabbath" element={<Sabbath />} />
            
            {/* H2H Routes */}
            <Route path="h2h" element={<H2H />} />
            <Route path="h2h/create" element={<H2HCreate />} />
            <Route path="h2h/resources" element={<H2HResources />} />
            <Route path="h2h/training" element={<H2HTraining />} />
            <Route path="h2h/:groupId" element={<H2HGroup />} />
            
            <Route path="media" element={<Media />} />
            <Route path="engage" element={<Engage />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          
          {/* Catch-all redirect */}
          <Route path="*" element={<RedirectToLanguage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
