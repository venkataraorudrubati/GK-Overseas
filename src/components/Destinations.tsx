import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { MapPin, Users, BookOpen, Building, ChevronDown } from 'lucide-react';

const Destinations: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const destinations = {
    usa: {
      name: "United States",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      description: "Home to many of the world's top-ranked universities, the USA offers diverse academic programs, cutting-edge research opportunities, and a vibrant campus life.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "4,000+", label: "Universities & Colleges" },
        { icon: <Users className="h-5 w-5" />, value: "1M+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Diverse", label: "Program Options" },
      ],
      topUniversities: ["Harvard University", "MIT", "Stanford University", "University of California, Berkeley", "Columbia University"],
      popularPrograms: ["Computer Science", "Business Administration", "Engineering", "Medicine", "Arts & Humanities"],
    },
    uk: {
      name: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "The UK education system is renowned for its quality and prestigious institutions with shorter program durations, making it a cost-effective option for international students.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "160+", label: "Universities" },
        { icon: <Users className="h-5 w-5" />, value: "600K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Shorter", label: "Program Duration" },
      ],
      topUniversities: ["University of Oxford", "University of Cambridge", "Imperial College London", "University College London", "University of Edinburgh"],
      popularPrograms: ["Business & Management", "Law", "Engineering", "Medicine", "Arts & Design"],
    },
    canada: {
      name: "Canada",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
      description: "Canada offers high-quality education at affordable tuition rates, with excellent post-study work opportunities and pathways to permanent residency.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "100+", label: "Universities & Colleges" },
        { icon: <Users className="h-5 w-5" />, value: "500K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Excellent", label: "Work Opportunities" },
      ],
      topUniversities: ["University of Toronto", "University of British Columbia", "McGill University", "University of Alberta", "McMaster University"],
      popularPrograms: ["Business", "Engineering", "Computer Science", "Health Sciences", "Environmental Studies"],
    },
    australia: {
      name: "Australia",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1830&q=80",
      description: "Australia provides world-class education with a focus on research and innovation, along with a high quality of life and post-study work rights for international graduates.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "43", label: "Universities" },
        { icon: <Users className="h-5 w-5" />, value: "750K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Strong", label: "Research Focus" },
      ],
      topUniversities: ["University of Melbourne", "Australian National University", "University of Sydney", "University of Queensland", "Monash University"],
      popularPrograms: ["Business & Management", "Engineering", "Information Technology", "Health Sciences", "Hospitality & Tourism"],
    },
    newzealand: {
      name: "New Zealand",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1741&q=80",
      description: "New Zealand offers a safe, welcoming environment with high-quality education, stunning natural landscapes, and excellent work opportunities for international students.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "8", label: "Universities" },
        { icon: <Users className="h-5 w-5" />, value: "100K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Practical", label: "Learning Approach" },
      ],
      topUniversities: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury", "Massey University"],
      popularPrograms: ["Agriculture & Forestry", "Environmental Sciences", "Tourism & Hospitality", "Engineering", "Business Studies"],
    },
    germany: {
      name: "Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      description: "Germany is renowned for its tuition-free public universities, strong emphasis on research, and excellent career opportunities in engineering and technology sectors.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "400+", label: "Universities" },
        { icon: <Users className="h-5 w-5" />, value: "400K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Free", label: "Public Education" },
      ],
      topUniversities: ["Technical University of Munich", "Ludwig Maximilian University", "Heidelberg University", "Humboldt University of Berlin", "RWTH Aachen University"],
      popularPrograms: ["Engineering", "Computer Science", "Automotive Engineering", "Business", "Environmental Sciences"],
    },
    ireland: {
      name: "Ireland",
      image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      description: "Ireland combines high-quality education with a rich cultural heritage, offering excellent research opportunities and a welcoming environment for international students.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "34", label: "Universities & Institutes" },
        { icon: <Users className="h-5 w-5" />, value: "250K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "2 Years", label: "Stay Back Option" },
      ],
      topUniversities: ["Trinity College Dublin", "University College Dublin", "National University of Ireland Galway", "University College Cork", "Dublin City University"],
      popularPrograms: ["Data Science", "Business", "Computer Science", "Medicine", "Literature"],
    },
    netherlands: {
      name: "Netherlands",
      image: "https://images.unsplash.com/photo-1558551649-e9e5c830d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      description: "The Netherlands offers numerous English-taught programs, innovative teaching methods, and a high standard of living in a multicultural environment.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "70+", label: "Universities" },
        { icon: <Users className="h-5 w-5" />, value: "120K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "English", label: "Teaching Medium" },
      ],
      topUniversities: ["University of Amsterdam", "Delft University of Technology", "Erasmus University Rotterdam", "Leiden University", "Utrecht University"],
      popularPrograms: ["Business", "Engineering", "Liberal Arts", "Computer Science", "International Relations"],
    },
    singapore: {
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
      description: "Singapore is a global education hub offering world-class education with a perfect blend of Eastern and Western cultures in a safe, modern environment.",
      stats: [
        { icon: <Building className="h-5 w-5" />, value: "34", label: "Universities" },
        { icon: <Users className="h-5 w-5" />, value: "65K+", label: "International Students" },
        { icon: <BookOpen className="h-5 w-5" />, value: "Top", label: "Global Rankings" },
      ],
      topUniversities: ["National University of Singapore", "Nanyang Technological University", "Singapore Management University", "SUTD", "Yale-NUS College"],
      popularPrograms: ["Business", "Engineering", "Computer Science", "Design", "Finance"],
    },
  };

  const countries = [
    { id: 'usa', label: 'United States' },
    { id: 'uk', label: 'United Kingdom' },
    { id: 'canada', label: 'Canada' },
    { id: 'australia', label: 'Australia' },
    { id: 'newzealand', label: 'New Zealand' },
    { id: 'germany', label: 'Germany' },
    { id: 'ireland', label: 'Ireland' },
    { id: 'netherlands', label: 'Netherlands' },
    { id: 'singapore', label: 'Singapore' },
  ];

  type DestinationKey = keyof typeof destinations;

  const [selectedCountry, setSelectedCountry] = useState<DestinationKey>('usa');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const currentDestination = destinations[selectedCountry];

  const handleExploreClick = () => {
    navigate('/university/search', { 
      state: { 
        destination: currentDestination.name,
        country: selectedCountry
      } 
    });
  };

  return (
    <section id="destinations" className="section bg-white">
      <div className="container">
        {/* Only change: Added pt-16 to this div */}
        <div className="text-center mb-16 pt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Popular <span className="text-primary-600">Destinations</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={inView ? { opacity: 1, width: '80px' } : { opacity: 0, width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore top study destinations around the world and find the perfect location for your international education journey.
          </motion.p>
        </div>

        {/* Country Dropdown Filter */}
        <div className="relative w-full max-w-md mx-auto mb-12">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-full px-6 py-4 bg-white border border-gray-300 rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <span className="font-medium">{destinations[selectedCountry].name}</span>
            <ChevronDown className={`h-5 w-5 ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
              {countries.map(country => (
                <button
                  key={country.id}
                  onClick={() => {
                    setSelectedCountry(country.id as DestinationKey);
                    setIsDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 hover:bg-gray-100 ${
                    selectedCountry === country.id ? 'bg-primary-100 text-primary-700 font-medium' : 'text-gray-700'
                  }`}
                >
                  {country.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Destination Content */}
        <motion.div 
          ref={ref}
          key={selectedCountry}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-custom-lg">
              <img 
                src={currentDestination.image} 
                alt={`Study in ${currentDestination.name}`} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full z-0"></div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md flex items-center">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" />
              <span className="font-medium text-gray-900">{currentDestination.name}</span>
            </div>
          </div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-4"
            >
              Study in {currentDestination.name}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6"
            >
              {currentDestination.description}
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6 mb-6"
            >
              {currentDestination.stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="p-2 bg-primary-100 rounded-lg mr-3">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Top Universities */}
            <motion.div variants={itemVariants} className="mb-6">
              <h4 className="font-bold text-gray-900 mb-2">Top Universities:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentDestination.topUniversities.map((uni, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {uni}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Popular Programs */}
            <motion.div variants={itemVariants}>
              <h4 className="font-bold text-gray-900 mb-2">Popular Programs:</h4>
              <div className="flex flex-wrap gap-2">
                {currentDestination.popularPrograms.map((program, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                    {program}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <button 
                onClick={handleExploreClick}
                className="btn btn-primary"
              >
                Explore {currentDestination.name} Programs
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;