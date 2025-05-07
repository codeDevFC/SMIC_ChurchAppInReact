import { useState } from 'react';

function FallbackImage({ src, fallback, alt, className, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  const onError = () => {
    if (!error) {
      setImgSrc(fallback);
      setError(true);
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      className={className}
      onError={onError}
      {...props}
    />
  );
}

export default FallbackImage;
