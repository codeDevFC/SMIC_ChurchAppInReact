// src/components/HeroBanner/index.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import images directly
import churchWorshipImg from '../../assets/images/hero-slider/church-worship.jpg';
import h2hGroupImg from '../../assets/images/hero-slider/h2h-group.jpg';
import churchWorship1Img from '../../assets/images/hero-slider/church-worship1.jpg';
import communityService1Img from '../../assets/images/hero-slider/community-service1.jpg';
import baptismImg from '../../assets/images/hero-slider/baptism.jpg';
import prayerMeetingImg from '../../assets/images/hero-slider/prayer-meeting.jpg';
import sabbathSchoolImg from '../../assets/images/hero-slider/sabbath-school.jpg';

// Slide transition variants - modified for smoother transitions
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    zIndex: 0
  })
};

// Image transition variants
const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

function HeroBanner() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [autoplay, setAutoplay] = useState(true);
  
  // Define slides with imported images
  const slides = [
    {
      id: 1,
      title: t('hero.welcome'),
      subtitle: t('hero.join'),
      cta: t('buttons.learnMore'),
      link: `/\${currentLang}/sabbath`,
      image: churchWorshipImg
    },
    {
      id: 2,
      title: currentLang === 'en' ? 'Find Your H2H Group' : 'Hitta Din Hemgrupp',
      subtitle: currentLang === 'en' ? '7 groups across Stockholm' : '7 grupper över hela Stockholm',
      cta: t('buttons.findGroup'),
      link: `/\${currentLang}/h2h`,
      image: h2hGroupImg
    },
    {
      id: 3,
      title: currentLang === 'en' ? 'Watch Our Services Live' : 'Se Våra Gudstjänster Live',
      subtitle: currentLang === 'en' ? 'Every Sabbath at 11:30 AM' : 'Varje sabbat kl 11:30',
      cta: currentLang === 'en' ? 'Watch Now' : 'Se Nu',
      link: `/\${currentLang}/media`,
      image: churchWorship1Img
    },
    {
      id: 4,
      title: currentLang === 'en' ? 'Join Our Community' : 'Gå Med I Vår Gemenskap',
      subtitle: currentLang === 'en' ? 'Connect with believers from all backgrounds' : 'Anslut med troende från alla bakgrunder',
      cta: currentLang === 'en' ? 'Learn More' : 'Läs Mer',
      link: `/\${currentLang}/about`,
      image: communityService1Img
    },
    {
      id: 5,
      title: currentLang === 'en' ? 'Upcoming Baptism' : 'Kommande Dop',
      subtitle: currentLang === 'en' ? 'Celebrate new beginnings' : 'Fira nya början',
      cta: currentLang === 'en' ? 'Register' : 'Registrera',
      link: `/\${currentLang}/engage`,
      image: baptismImg
    },
    {
      id: 6,
      title: currentLang === 'en' ? 'Prayer Meeting' : 'Bönmöte',
      subtitle: currentLang === 'en' ? 'Wednesdays at 7:00 PM' : 'Onsdagar kl 19:00',
      cta: currentLang === 'en' ? 'Join Us' : 'Var Med Oss',
      link: `/\${currentLang}/engage`,
      image: prayerMeetingImg
    },
    {
      id: 7,
      title: currentLang === 'en' ? 'Sabbath School' : 'Sabbatsskola',
      subtitle: currentLang === 'en' ? 'Deep Bible Study Every Sabbath' : 'Djupa Bibelstudier Varje Sabbat',
      cta: currentLang === 'en' ? 'Join a Class' : 'Gå Med i en Klass',
      link: `/\${currentLang}/sabbath`,
      image: sabbathSchoolImg
    }
  ];
  
  // Auto-rotate slides
  useEffect(() => {
    let timer;
    if (autoplay) {
      timer = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentSlide, autoplay]);
  
  // Navigation functions
  const nextSlide = () => {
    setSlide(([current, _]) => [(current + 1) % slides.length, 1]);
  };
  
  const prevSlide = () => {
    setSlide(([current, _]) => [current === 0 ? slides.length - 1 : current - 1, -1]);
  };
  
  const goToSlide = (index) => {
    const direction = index > currentSlide ? 1 : -1;
    setSlide([index, direction]);
  };

  // Pause autoplay when user interacts with slider
  const handleUserInteraction = () => {
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 10000); // Resume after 10 seconds
  };

  // Preload all images for smoother transitions
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  return (
    <div 
      className="relative h-[500px] md:h-[600px] overflow-hidden bg-black"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Background images - separate from content for smoother transitions */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={`image-\${currentSlide}`}
            className="absolute inset-0"
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7 }}
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            {/* Lighter overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Content with slide transitions */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={`content-\${currentSlide}`}
          className="absolute inset-0 flex items-center justify-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
        >
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 drop-shadow-md"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Link 
                to={slides[currentSlide].link}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition transform hover:scale-105 inline-block"
              >
                {slides[currentSlide].cta}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Navigation Arrows */}
      <motion.button 
        onClick={() => {
          prevSlide();
          handleUserInteraction();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-20"
        aria-label="Previous slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button 
        onClick={() => {
          nextSlide();
          handleUserInteraction();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-opacity-70 transition z-20"
        aria-label="Next slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20 overflow-x-auto px-4">
        <div className="flex space-x-2 pb-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                goToSlide(index);
                handleUserInteraction();
              }}
              className={`h-3 rounded-full bg-white \${
                index === currentSlide ? 'bg-opacity-100' : 'bg-opacity-50'
              }`}
              style={{ width: index === currentSlide ? 24 : 12 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide \${index + 1}`}
              initial={false}
              animate={{
                width: index === currentSlide ? 24 : 12,
                opacity: index === currentSlide ? 1 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
      
      {/* Progress bar */}
      {autoplay && (
        <motion.div 
          className="absolute bottom-0 left-0 h-1 bg-white z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          key={`progress-\${currentSlide}`}
        />
      )}
    </div>
  );
}

export default HeroBanner;