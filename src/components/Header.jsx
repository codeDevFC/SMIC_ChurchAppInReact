import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';
import LocalizedLink from './common/LocalizedLink';

function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo links to language-specific home */}
          <Link to={`/\${currentLang}`} className="flex items-center">
            <Logo className="h-10 w-auto" />
            {/*<span className="ml-2 font-bold text-lg">Home</span>*/}
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <LocalizedLink to="/sabbath" className="hover:text-primary transition-colors">
              {t('navigation.sabbath')}
            </LocalizedLink>
            <LocalizedLink to="/h2h" className="hover:text-primary transition-colors">
              {t('navigation.h2h')}
            </LocalizedLink>
            <LocalizedLink to="/media" className="hover:text-primary transition-colors">
              {t('navigation.media')}
            </LocalizedLink>
            <LocalizedLink to="/engage" className="hover:text-primary transition-colors">
              Engage
            </LocalizedLink>
            <LocalizedLink to="/about" className="hover:text-primary transition-colors">
              {t('navigation.about')}
            </LocalizedLink>
            <LocalizedLink to="/contact" className="hover:text-primary transition-colors">
              {t('navigation.contact')}
            </LocalizedLink>
            <LanguageToggle />
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
