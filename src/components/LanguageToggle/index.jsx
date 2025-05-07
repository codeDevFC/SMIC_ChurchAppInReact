import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

function LanguageToggle() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  
  const changeLanguage = (language) => {
    // Store the language preference
    localStorage.setItem('language', language);
    
    // Change the language in i18n
    i18n.changeLanguage(language);
    
    // Get current path parts
    const pathParts = location.pathname.split('/').filter(Boolean);
    
    // Create new path with language prefix
    let newPath;
    
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'sv')) {
      // If first part is a language code, replace it
      pathParts[0] = language;
      newPath = '/' + pathParts.join('/');
    } else {
      // This shouldn't normally happen with your routing structure,
      // but just in case there's no language prefix
      newPath = `/\${language}`;
      
      // If there's a path after the domain (not just "/"), append it
      if (location.pathname !== '/') {
        newPath += location.pathname.startsWith('/') ? 
          location.pathname : 
          '/' + location.pathname;
      }
    }
    
    // Add any query parameters back
    if (location.search) {
      newPath += location.search;
    }
    
    // Use replace to avoid adding to history stack
    navigate(newPath, { replace: true });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded transition-colors \${
          i18n.language === 'en' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('sv')}
        className={`px-2 py-1 rounded transition-colors \${
          i18n.language === 'sv' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'
        }`}
        aria-label="Switch to Swedish"
      >
        SV
      </button>
    </div>
  );
}

export default LanguageToggle;
