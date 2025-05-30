import React, { useState, useEffect } from 'react';
import { ArrowRight, GraduationCap, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';


const slides = [
  {
    id: 1,
    title: "Your Journey to Global Education Starts Here",
    subtitle: "Expert guidance for international students seeking quality education abroad",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    cta: "Explore Programs",
    icon: <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
  },
  {
    id: 2,
    title: "Unlock Your Potential with World-Class Education",
    subtitle: "Personalized counseling to help you find the perfect university and program",
    image: "https://i.ibb.co/FbZPmYtk/uk.png",
    cta: "Get Guidance",
    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6" />
  },
  {
    id: 3,
    title: "Building Bridges to Your Academic Success",
    subtitle: "Comprehensive support from application to visa processing and pre-departure",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    cta: "Start Your Journey",
    icon: <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      window.scrollTo({
        top: servicesSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Handle touch events for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      // Next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (isRightSwipe) {
      // Previous slide
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-secondary-900/70 z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
          
          {/* Content */}
          <div className="container relative z-20 h-full flex flex-col justify-center pt-16 md:pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl px-1 sm:px-0"
            >
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-4 sm:mb-6">
                {slide.icon}
                <span className="ml-2 text-sm sm:text-base font-medium">Global Education Experts</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl">
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <button 
                  onClick={scrollToContact}
                  className="btn btn-primary btn-sm sm:btn"
                >
                  {slide.cta}
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <a 
                  href="#services"
                  className="btn bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 btn-sm sm:btn"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToServices();
                  }}
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      ))}
      
      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 hidden md:block">
        <div className="animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/80 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Mobile Swipe Indicator - only visible on small screens */}
      <div className="absolute bottom-20 left-0 right-0 z-30 flex justify-center sm:hidden">
        <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-xs flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
          Swipe to navigate
        </div>
      </div>
    </section>
  );
};

export default Hero;