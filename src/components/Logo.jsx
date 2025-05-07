// src/components/Logo.jsx
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Logo({ size = 'default' }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Size classes for different logo sizes
  const sizeClasses = {
    small: 'h-8',
    default: 'h-10',
    large: 'h-16'
  };
  
  // Preload logo image
  useEffect(() => {
    const img = new Image();
    img.src = '/logo/logo.png';
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      console.error("Logo image failed to load");
      setImageError(true);
    };
  }, []);
  
  // Fallback logo (inline SVG)
  const fallbackLogo = (
    <div className={`\${sizeClasses[size]} aspect-[2/1] bg-primary text-white rounded flex items-center justify-center mr-2`}>
      <span className="font-bold">SMIC</span>
    </div>
  );
  
  return (
    <Link to={`/\${currentLang}`} className="flex items-center">
      {imageError ? (
        fallbackLogo
      ) : (
        <img 
          src="/logo/logo.png"
          alt="Stockholm Mission International Church" 
          className={`${sizeClasses[size]} mr-2 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onError={() => setImageError(true)}
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        />
      )}
      <span className="font-bold text-xl text-primary hidden md:inline">SMIC</span>
    </Link>
  );
}

export default Logo;
