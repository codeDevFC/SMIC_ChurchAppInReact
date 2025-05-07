// src/components/common/ImageDebug.jsx
import { useState, useEffect } from 'react';

function ImageDebug() {
  const [imageStatuses, setImageStatuses] = useState({});
  
  // Define paths to test
  const imagesToTest = [
    '/hero-slider/church-worship.jpg',
    '/hero-slider/bible-study.jpg',
    '/hero-slider/h2h-group.jpg',
    '/logo/logo.png'
  ];
  
  useEffect(() => {
    // Test each image
    imagesToTest.forEach(path => {
      const img = new Image();
      img.onload = () => {
        setImageStatuses(prev => ({
          ...prev,
          [path]: { status: 'loaded', dimensions: `${img.width}x${img.height}` }
        }));
      };
      img.onerror = (err) => {
        console.error(`Error loading \${path}:`, err);
        setImageStatuses(prev => ({
          ...prev,
          [path]: { status: 'error', error: 'Failed to load' }
        }));
      };
      img.src = path;
    });
  }, []);
  
  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold mb-4">Image Loading Debug</h2>
      <div className="grid grid-cols-1 gap-4">
        {imagesToTest.map(path => (
          <div key={path} className="bg-white p-3 rounded shadow">
            <p className="font-bold">{path}</p>
            <p>Status: {imageStatuses[path]?.status || 'checking...'}</p>
            {imageStatuses[path]?.dimensions && (
              <p>Size: {imageStatuses[path].dimensions}</p>
            )}
            <div className="mt-2">
              <img 
                src={path}
                alt={`Test for \${path}`}
                className="max-h-32 border border-gray-300"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-red-500 mt-2">
                Image failed to load!
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageDebug;
