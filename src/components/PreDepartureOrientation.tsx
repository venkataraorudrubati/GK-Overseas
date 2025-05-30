import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Home, Banknote, Users } from 'lucide-react';

const PreDepartureOrientation: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-primary-600" />,
      title: "Cultural Adaptation",
      description: "Learn about local customs, etiquette, and cultural norms to ease your transition into a new country.",
      bgColor: "bg-primary-50"
    },
    {
      icon: <Home className="h-12 w-12 text-secondary-600" />,
      title: "Accommodation Guidance",
      description: "Assistance with finding housing, understanding rental agreements, and setting up your new home.",
      bgColor: "bg-secondary-50"
    },
    {
      icon: <Banknote className="h-12 w-12 text-accent-600" />,
      title: "Financial Setup",
      description: "Guidance on opening bank accounts, managing finances, and understanding cost of living.",
      bgColor: "bg-accent-50"
    },
    {
      icon: <Users className="h-12 w-12 text-success-600" />,
      title: "Community Building",
      description: "Connect with student communities and support networks before you arrive.",
      bgColor: "bg-success-50"
    }
  ];

  const checklistItems = [
    {
      step: "1",
      title: "Travel Arrangements",
      description: "Flight booking, airport transfers, and essential travel documents"
    },
    {
      step: "2",
      title: "Accommodation Setup",
      description: "Temporary and permanent housing solutions"
    },
    {
      step: "3",
      title: "Financial Preparation",
      description: "Currency exchange, banking, and budgeting"
    },
    {
      step: "4",
      title: "Health & Insurance",
      description: "Medical checkups, vaccinations, and health insurance"
    },
    {
      step: "5",
      title: "Essential Packing",
      description: "What to bring and what to buy locally"
    }
  ];

  const handleButtonClick = () => {
    window.open('https://forms.gle/WyiHmrRs1HUPZYSk7', '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Pre-Departure <br className="hidden md:block" />Orientation
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive preparation for life abroad, including cultural adaptation, accommodation options, banking setup, and essential information for a smooth transition.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24 lg:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Orientation <span className="text-primary-600">Topics</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${service.bgColor} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100`}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white rounded-xl shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Checklist Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-10 md:p-14 lg:p-16">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pre-Departure <span className="text-primary-600">Checklist</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A step-by-step guide to ensure you're fully prepared before you leave
              </p>
            </div>

            <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 font-bold text-2xl shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <button 
                onClick={handleButtonClick}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Schedule Your Orientation Session
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreDepartureOrientation;