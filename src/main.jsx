import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'; // Import i18n before App
import './index.css';

// Polyfills for older browsers (if needed)
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Error boundary for production
if (process.env.NODE_ENV === 'production') {
  try {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error rendering the application:', error);
    
    // Display a user-friendly error message
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="text-align: center; padding: 2rem; font-family: 'Inter', sans-serif;">
          <h1>Stockholm Mission International Church</h1>
          <p>Sorry, something went wrong. Please try refreshing the page.</p>
        </div>
      `;
    }
  }
} else {
  // Development mode - let errors bubble up for better debugging
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Add service worker registration if you want to make the site work offline
// This is optional and can be added later
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}
