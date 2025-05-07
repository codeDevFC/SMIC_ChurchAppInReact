// src/hooks/useImagePreloader.js
import { useState, useEffect } from 'react';

function useImagePreloader(images) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [failedImages, setFailedImages] = useState({});

  useEffect(() => {
    if (!images || Object.keys(images).length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = Object.keys(images).length;

    const preloadImages = () => {
      Object.entries(images).forEach(([key, src]) => {
        const img = new Image();
        img.src = src;
        
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        
        img.onerror = () => {
          console.warn(`Failed to load image: \${src}`);
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          setFailedImages(prev => ({ ...prev, [key]: true }));
          
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
      });
    };

    preloadImages();
  }, [images]);

  return { imagesLoaded, loadingProgress, failedImages };
}

export default useImagePreloader;
