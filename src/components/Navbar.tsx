import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo on the left */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary-600"
        >
          <img 
            src="https://res.cloudinary.com/db9r5kzvb/image/upload/v1747681780/lof2dazeqkwplxmzit2s.png" 
            alt="GK OVERSEAS EDUCATION Logo" 
            className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
          />
          <span className="font-heading font-bold text-lg md:text-xl">GK OVERSEAS EDUCATION</span>
        </Link>
        
        {/* Desktop Navigation - Right Side */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            to="/"
            className={`nav-link ${location.pathname === '/' && activeSection === 'home' ? 'nav-link-active' : ''}`}
            onClick={() => location.pathname === '/' && scrollToSection('home')}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className={`nav-link ${location.pathname === '/about' ? 'nav-link-active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/why-choose-us"
            className={`nav-link ${location.pathname === '/why-choose-us' ? 'nav-link-active' : ''}`}
          >
            Why Choose Us
          </Link>
          <Link 
            to="/services"
            className={`nav-link ${location.pathname === '/services' ? 'nav-link-active' : ''}`}
          >
            Services
          </Link>
          
          <div className="relative">
            <Link 
              to="/destinations"
              className={`nav-link flex items-center ${location.pathname === '/destinations' ? 'nav-link-active' : ''}`}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              Destinations <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            
            {dropdownOpen && (
              <div 
                className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-20"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link 
                  to="/destinations"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  All Destinations
                </Link>
                <Link 
                  to="/university/search?country=usa"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  USA
                </Link>
                <Link 
                  to="/university/search?country=uk"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  UK
                </Link>
                <Link 
                  to="/university/search?country=canada"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  Canada
                </Link>
                <Link 
                  to="/university/search?country=australia"
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  onClick={() => setDropdownOpen(false)}
                >
                  Australia
                </Link>
              </div>
            )}
          </div>
          
          <Link 
            to="/contact"
            className={`nav-link ${location.pathname === '/contact' ? 'nav-link-active' : ''}`}
          >
            Contact
          </Link>

          <Link 
            to="/contact"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
        
        {/* Mobile Menu Button - Right Side */}
        <button 
          className="lg:hidden text-gray-700 hover:text-primary-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu - Preserved exactly as before */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
        style={{ top: '60px' }}
      >
        <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/"
              className={`py-3 px-4 rounded-lg ${location.pathname === '/' ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`py-3 px-4 rounded-lg ${location.pathname === '/about' ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/why-choose-us"
              className={`py-3 px-4 rounded-lg ${location.pathname === '/why-choose-us' ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Why Choose Us
            </Link>
            <Link 
              to="/services"
              className={`py-3 px-4 rounded-lg ${location.pathname === '/services' ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            
            <div className="py-3 px-4">
              <div 
                className={`flex justify-between items-center ${location.pathname === '/destinations' ? 'text-primary-600 font-medium' : 'text-gray-700'}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Destinations</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className={`mt-2 ml-4 space-y-2 ${dropdownOpen ? 'block' : 'hidden'}`}>
                <Link 
                  to="/destinations"
                  className="block py-2 text-gray-600 hover:text-primary-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleMenu();
                  }}
                >
                  All Destinations
                </Link>
                <Link 
                  to="/university/search?country=usa"
                  className="block py-2 text-gray-600 hover:text-primary-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleMenu();
                  }}
                >
                  USA
                </Link>
                <Link 
                  to="/university/search?country=uk"
                  className="block py-2 text-gray-600 hover:text-primary-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleMenu();
                  }}
                >
                  UK
                </Link>
                <Link 
                  to="/university/search?country=canada"
                  className="block py-2 text-gray-600 hover:text-primary-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleMenu();
                  }}
                >
                  Canada
                </Link>
                <Link 
                  to="/university/search?country=australia"
                  className="block py-2 text-gray-600 hover:text-primary-600"
                  onClick={() => {
                    setDropdownOpen(false);
                    toggleMenu();
                  }}
                >
                  Australia
                </Link>
              </div>
            </div>
            
            <Link 
              to="/contact"
              className={`py-3 px-4 rounded-lg ${location.pathname === '/contact' ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
          
          <div className="mt-8">
            <Link 
              to="/contact"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-4">Connect with us:</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;