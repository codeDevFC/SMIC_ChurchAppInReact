import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function Logo({ size = 'default' }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [imageError, setImageError] = useState(false);
  
  // Size classes for different logo sizes
  const sizeClasses = {
    small: 'h-8',
    default: 'h-10',
    large: 'h-16'
  };
  
  // Handle image loading error
  const handleImageError = () => {
    console.error("Logo image failed to load");
    setImageError(true);
  };
  
  return (
    <Link to={`/\${currentLang}`} className="flex items-center">
      {!imageError ? (
        <img 
          src="/logo/logo.png"
          alt="Stockholm Mission International Church" 
          className={`\${sizeClasses[size]} mr-2`} 
          onError={handleImageError}
        />
      ) : (
        <div className={`\${sizeClasses[size]} aspect-[2/1] bg-primary text-white rounded flex items-center justify-center mr-2`}>
          <span className="font-bold">SMIC</span>
        </div>
      )}
      <span className="font-bold text-xl text-primary hidden md:inline">SMIC</span>
    </Link>
  );
}

export default Logo;