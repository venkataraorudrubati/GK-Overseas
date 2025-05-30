import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpenCheck, FileText, CheckCircle } from 'lucide-react';

const UniversityAdmission: React.FC = () => {
  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-primary-600" />,
      title: "University Selection",
      description: "We analyze your academic profile, career goals, and preferences to recommend the best-fit universities and programs.",
      bgColor: "bg-primary-50"
    },
    {
      icon: <BookOpenCheck className="h-12 w-12 text-secondary-600" />,
      title: "Program Research",
      description: "Detailed research on curriculum, faculty, research opportunities, and career outcomes for your chosen programs.",
      bgColor: "bg-secondary-50"
    },
    {
      icon: <FileText className="h-12 w-12 text-accent-600" />,
      title: "Application Preparation",
      description: "Comprehensive assistance with application forms, essays, recommendation letters, and required documents.",
      bgColor: "bg-accent-50"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-success-600" />,
      title: "Admission Guidance",
      description: "Expert advice on improving your admission chances and navigating acceptance/rejection scenarios.",
      bgColor: "bg-success-50"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We assess your academic background, test scores, and preferences to understand your needs."
    },
    {
      step: "2",
      title: "University Shortlisting",
      description: "We recommend 8-12 universities based on your profile and goals (reach, match, and safety schools)."
    },
    {
      step: "3",
      title: "Application Strategy",
      description: "We develop a personalized timeline and strategy for each application."
    },
    {
      step: "4",
      title: "Document Preparation",
      description: "We assist with essays, resumes, recommendation letters, and all required materials."
    },
    {
      step: "5",
      title: "Submission & Follow-up",
      description: "We ensure timely submission and help with any follow-up requirements."
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
            University Selection <br className="hidden md:block" />& Admission
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We help you identify the best universities and programs aligned with your academic goals, career aspirations, and budget.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24 lg:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Comprehensive <span className="text-primary-600">Services</span>
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

        {/* Process Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-10 md:p-14 lg:p-16">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our 5-Step <span className="text-primary-600">Admission Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology to maximize your chances of admission to top universities
              </p>
            </div>

            <div className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 font-bold text-2xl shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
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
                Start Your Admission Journey Today
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityAdmission;