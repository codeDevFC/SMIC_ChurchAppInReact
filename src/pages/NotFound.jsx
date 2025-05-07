import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">
        {currentLang === 'en' ? 'Page Not Found' : 'Sidan Hittades Inte'}
      </h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        {currentLang === 'en' 
          ? 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
          : 'Sidan du letar efter kan ha tagits bort, ändrat namn eller är tillfälligt otillgänglig.'}
      </p>
      <Link
        to={`/\${currentLang}`}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90"
      >
        {currentLang === 'en' ? 'Go to Homepage' : 'Gå till Startsidan'}
      </Link>
    </div>
  );
}

export default NotFound;