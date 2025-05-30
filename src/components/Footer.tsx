import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showPolicyModal, setShowPolicyModal] = useState(false);
  const [activePolicy, setActivePolicy] = useState('privacy');
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const openPolicyModal = (policyType: string) => {
    setActivePolicy(policyType);
    setShowPolicyModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closePolicyModal = () => {
    setShowPolicyModal(false);
    document.body.style.overflow = 'auto';
  };

  const countries = [
    { name: "United States of America", path: "/university/Search" },
    { name: "United Kingdom", path: "/university/Search" },
    { name: "Canada", path: "/university/Search" },
    { name: "Australia", path: "/university/Search" },
    { name: "New Zealand", path: "/university/Search" },
    { name: "Ireland", path: "/university/Search" },
    { name: "Singapore", path: "/university/Search" },
    { name: "Countries in Europe", path: "/university/Search" }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />,
      label: "Visit our Facebook page",
      url: "#"
    },
    {
      icon: <Twitter className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />,
      label: "Visit our Twitter profile",
      url: "#"
    },
    {
      icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />,
      label: "Visit our Instagram profile",
      url: "#"
    },
    {
      icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />,
      label: "Visit our LinkedIn page",
      url: "#"
    }
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white pt-12 sm:pt-16 pb-6 sm:pb-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 sm:mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <a 
                href="#home" 
                className="flex items-center space-x-2 text-white mb-4 sm:mb-6"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                aria-label="Go to home section"
              >
                <img 
                  src="https://res.cloudinary.com/db9r5kzvb/image/upload/v1747681780/lof2dazeqkwplxmzit2s.png" 
                  alt="GK Overseas Education Logo"
                  className="h-12 w-auto object-contain"
                />
                <span className="font-heading font-bold text-lg sm:text-xl">GK Overseas Education</span>
              </a>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Your trusted partner for international education. We help students achieve their dreams of studying abroad with personalized guidance and support.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="bg-gray-800 hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-500"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <a 
                    href="#home"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('home');
                    }}
                    aria-label="Go to home section"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                    }}
                    aria-label="Go to about section"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#why-choose-us"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('why-choose-us');
                    }}
                    aria-label="Go to why choose us section"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('services');
                    }}
                    aria-label="Go to services section"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#destinations"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('destinations');
                    }}
                    aria-label="Go to destinations section"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('testimonials');
                    }}
                    aria-label="Go to testimonials section"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                    }}
                    aria-label="Go to contact section"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Countries */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
                Study Destinations
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-500"></span>
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                {countries.map((country, index) => (
                  <li key={index}>
                    <a 
                      href={country.path} 
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                      aria-label={`View universities in ${country.name}`}
                    >
                      {country.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary-500"></span>
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="flex">
                  <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div className="text-gray-400">
                    <p>Opposite Springboard School, Rikshaw Centre,</p>
                    <p>Prakash Nagar, Narasaraopet – 522601</p>
                    <p>Andhra Pradesh, India</p>
                  </div>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="text-gray-400">
                    <a 
                      href="tel:+917660893395" 
                      className="hover:text-primary-400 transition-colors"
                      aria-label="Call us at +91 76608 93395"
                    >
                      +91 76608 93395
                    </a>
                    <br />
                    <a 
                      href="tel:+917995030766" 
                      className="hover:text-primary-400 transition-colors"
                      aria-label="Call us at +91 79950 30766"
                    >
                      +91 79950 30766
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <Mail className="h-5 w-5 text-primary-400 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="text-gray-400">
                    <a 
                      href="mailto:gopi.kittu.krishna@gmail.com" 
                      className="hover:text-primary-400 transition-colors break-words"
                      aria-label="Email us at gopi.kittu.krishna@gmail.com"
                    >
                      gopi.kittu.krishna@gmail.com
                    </a>
                    <br />
                    <a 
                      href="mailto:gkoverseas.assist@gmail.com" 
                      className="hover:text-primary-400 transition-colors break-words"
                      aria-label="Email us at gkoverseas.assist@gmail.com"
                    >
                      gkoverseas.assist@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-6 sm:pt-8 border-t border-gray-800 text-center sm:flex sm:justify-between sm:items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-500 text-xs sm:text-sm">
                &copy; {currentYear} GK Overseas Education. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                Developed by{' '}
                <a 
                  href="https://www.linkedin.com/in/venkateswarlu-pambha/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                  aria-label="Visit developer's LinkedIn profile"
                >
                  Venkateswarlu Pambha
                </a>
                <span className="inline-block ml-1 animate-pulse opacity-75 hover:opacity-100 transition-opacity duration-1000" aria-hidden="true">❤️</span>
              </p>
            </div>
            <div className="flex justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm mt-4 sm:mt-0">
              <button 
                onClick={() => openPolicyModal('privacy')} 
                className="text-gray-500 hover:text-primary-400 transition-colors"
                aria-label="View privacy policy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => openPolicyModal('terms')} 
                className="text-gray-500 hover:text-primary-400 transition-colors"
                aria-label="View terms of service"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => openPolicyModal('cookies')} 
                className="text-gray-500 hover:text-primary-400 transition-colors"
                aria-label="View cookie policy"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {showPolicyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold">
                {activePolicy === 'privacy' && 'Privacy Policy'}
                {activePolicy === 'terms' && 'Terms of Service'}
                {activePolicy === 'cookies' && 'Cookie Policy'}
              </h3>
              <button 
                onClick={closePolicyModal}
                className="text-gray-400 hover:text-white"
                aria-label="Close policy modal"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6 text-gray-300 text-sm">
              {activePolicy === 'privacy' && (
                <>
                  <h4 className="text-primary-400 font-bold mb-4">Privacy Policy</h4>
                  <p className="mb-4">
                    GK Overseas Education is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                  </p>
                  <h5 className="font-bold mb-2">Information We Collect</h5>
                  <p className="mb-4">
                    We may collect personal information including but not limited to your name, email address, phone number, and academic history when you fill out forms on our website.
                  </p>
                  <h5 className="font-bold mb-2">How We Use Your Information</h5>
                  <p className="mb-4">
                    We use the information we collect to provide our services, communicate with you, improve our website, and comply with legal obligations.
                  </p>
                  <h5 className="font-bold mb-2">Data Security</h5>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.
                  </p>
                </>
              )}
              
              {activePolicy === 'terms' && (
                <>
                  <h4 className="text-primary-400 font-bold mb-4">Terms of Service</h4>
                  <p className="mb-4">
                    By accessing and using our website, you accept and agree to be bound by these Terms of Service.
                  </p>
                  <h5 className="font-bold mb-2">Services</h5>
                  <p className="mb-4">
                    GK Overseas Education provides educational consulting services to help students pursue international education opportunities.
                  </p>
                  <h5 className="font-bold mb-2">User Responsibilities</h5>
                  <p className="mb-4">
                    You agree to provide accurate information and to use our services for lawful purposes only.
                  </p>
                  <h5 className="font-bold mb-2">Limitation of Liability</h5>
                  <p>
                    GK Overseas Education shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.
                  </p>
                </>
              )}
              
              {activePolicy === 'cookies' && (
                <>
                  <h4 className="text-primary-400 font-bold mb-4">Cookie Policy</h4>
                  <p className="mb-4">
                    Our website uses cookies to enhance user experience and analyze website traffic.
                  </p>
                  <h5 className="font-bold mb-2">What Are Cookies</h5>
                  <p className="mb-4">
                    Cookies are small text files stored on your device when you visit our website.
                  </p>
                  <h5 className="font-bold mb-2">How We Use Cookies</h5>
                  <p className="mb-4">
                    We use cookies to remember your preferences, analyze traffic patterns, and improve our services.
                  </p>
                  <h5 className="font-bold mb-2">Managing Cookies</h5>
                  <p>
                    You can control or delete cookies through your browser settings. However, disabling cookies may affect your experience on our website.
                  </p>
                </>
              )}
            </div>
            <div className="p-4 border-t border-gray-800 flex justify-end">
              <button
                onClick={closePolicyModal}
                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded text-sm font-medium transition-colors"
                aria-label="Close policy modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;