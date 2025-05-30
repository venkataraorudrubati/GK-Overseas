import { useEffect, useState } from 'react';
import type { MouseEvent } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import UniversitySearch from './university/UniversitySearch';
import UniversityAdmission from './components/UniversityAdmission';
import VisaApplication from './components/VisaApplication';
import CareerCounseling from './components/CareerCounseling';
import PreDepartureOrientation from './components/PreDepartureOrientation';
import ScholarshipFinancialAid from './components/ScholarshipFinancialAid';
import InterviewPreparation from './components/InterviewPreparation';

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Destinations />
      <Testimonials />
      <Contact />
    </div>
  );
}

function App() {
  const [showOffer, setShowOffer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const offerImages: string[] = [
    "https://res.cloudinary.com/db9r5kzvb/image/upload/v1747685365/qsxxk5al66fsxrxocyfr.jpg",
    "https://res.cloudinary.com/db9r5kzvb/image/upload/v1747685365/dcokznk6kxxjdmhsbl7a.jpg"
  ];

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no';
    document.head.appendChild(meta);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const offerTimer = setTimeout(() => {
      setShowOffer(true);
    }, 6000);

    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }, 100);
      }
    }

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(offerTimer);
      document.head.removeChild(meta);
    };
  }, []);

  const handleCloseOffer = (): void => {
    setShowOffer(false);
  };

  const handleConsultNow = (): void => {
    setShowOffer(false);
    window.location.href = '/contact';
  };

  const nextImage = (): void => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === offerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? offerImages.length - 1 : prevIndex - 1
    );
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      handleCloseOffer();
    }
  };

  const handleWhatsAppClick = (): void => {
    const phoneNumber = '917660893395';
    const defaultMessage = 'Hello%20GK%20Educational%20Consultancy,%20I%20would%20like%20to%20get%20more%20information%20about%20your%20services.';
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <Router>
      <div className="min-h-screen bg-white relative overflow-x-hidden">
        {isLoading && (
          <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="w-full max-w-md h-64">
              <DotLottieReact
                src="https://lottie.host/c82eaa61-709b-4f82-ad22-517dd581217d/lH0fXdPXRf.lottie"
                loop
                autoplay
              />
              <p className="mt-4 text-center text-gray-600 font-medium">Loading GK EDUCATIONAL CONSULTANCY...</p>
            </div>
          </div>
        )}

        {!isLoading && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/university/search" element={<UniversitySearch />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/services/university-admission" element={<UniversityAdmission />} />
              <Route path="/services/visa-application" element={<VisaApplication />} />
              <Route path="/services/career-counseling" element={<CareerCounseling />} />
              <Route path="/services/pre-departure-orientation" element={<PreDepartureOrientation />} />
              <Route path="/services/scholarship-financial-aid" element={<ScholarshipFinancialAid />} />
              <Route path="/services/test-preparation" element={<InterviewPreparation />} />
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center">Page Not Found</div>} />
            </Routes>
            <Footer />

            <div className="fixed bottom-6 right-6 z-40">
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 flex items-center justify-center"
                aria-label="Chat on WhatsApp"
              >
                <div className="relative">
                  <MessageCircle className="w-8 h-8" />
                  <div className="absolute -top-1 -right-1 bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-pulse">
                    <span>1</span>
                  </div>
                </div>
                <span className="hidden md:inline-block ml-2 font-medium">Chat with us</span>
              </button>
            </div>
          </>
        )}

        {showOffer && !isLoading && (
          <div 
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-2 sm:p-4"
            onClick={handleBackdropClick}
          >
            <div className="bg-white rounded-lg shadow-xl relative overflow-hidden w-full max-w-2xl mx-2">
              <button 
                onClick={handleCloseOffer}
                className="absolute top-2 right-2 z-20 bg-white rounded-full p-1 shadow-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close offer popup"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="relative w-full aspect-video bg-gray-100">
                <img 
                  src={offerImages[currentImageIndex]} 
                  alt="Special Offer"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors"
                  aria-label="Previous offer image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md hover:bg-white transition-colors"
                  aria-label="Next offer image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-3 sm:p-6">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4 rounded">
                  <p className="text-blue-800 font-medium text-sm sm:text-base">
                    We are offering a <span className="font-bold">FREE Laptop or Flight Ticket</span> to the first 50 students who enroll with us in this intake!
                  </p>
                </div>
          
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleConsultNow();
                    }}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 shadow-md text-sm sm:text-base"
                  >
                    Book Free Consultation
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppClick();
                    }}
                    className="bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Limited time offer. Terms and conditions apply.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;