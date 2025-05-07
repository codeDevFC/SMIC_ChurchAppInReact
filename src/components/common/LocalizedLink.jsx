import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * A wrapper around React Router's Link that automatically adds the current language prefix
 */
function LocalizedLink({ to, children, ...rest }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || 'en';
  
  // Process the 'to' prop to ensure it has the language prefix
  let localizedTo = to;
  
  // Only modify absolute paths that don't already have a language prefix
  if (to.startsWith('/') && !to.startsWith(`/\${currentLang}/`)) {
    // Check if the path already has a language prefix (en or sv)
    const pathParts = to.split('/').filter(Boolean);
    if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'sv')) {
      // Replace existing language prefix
      pathParts[0] = currentLang;
      localizedTo = `/\${pathParts.join('/')}`;
    } else {
      // Add language prefix
      localizedTo = `/${currentLang}${to}`;
    }
  }
  
  return <Link to={localizedTo} {...rest}>{children}</Link>;
}

export default LocalizedLink;
