import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Target, BookOpenText, BarChart2 } from 'lucide-react';

const CareerCounseling: React.FC = () => {
  const services = [
    {
      icon: <Briefcase className="h-12 w-12 text-primary-600" />,
      title: "Career Assessment",
      description: "Comprehensive evaluation of your skills, interests, and personality to identify suitable career paths.",
      bgColor: "bg-primary-50"
    },
    {
      icon: <Target className="h-12 w-12 text-secondary-600" />,
      title: "Goal Setting",
      description: "Help defining clear short-term and long-term career objectives with actionable steps.",
      bgColor: "bg-secondary-50"
    },
    {
      icon: <BookOpenText className="h-12 w-12 text-accent-600" />,
      title: "Education Pathway",
      description: "Guidance on choosing the right courses and degrees to achieve your career aspirations.",
      bgColor: "bg-accent-50"
    },
    {
      icon: <BarChart2 className="h-12 w-12 text-success-600" />,
      title: "Market Analysis",
      description: "Insights into current job market trends and future growth industries for informed decisions.",
      bgColor: "bg-success-50"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We evaluate your academic background, skills, interests, and personality traits."
    },
    {
      step: "2",
      title: "Career Exploration",
      description: "Identification of potential career paths that align with your profile and aspirations."
    },
    {
      step: "3",
      title: "Goal Definition",
      description: "Clear setting of short-term and long-term career objectives with milestones."
    },
    {
      step: "4",
      title: "Education Planning",
      description: "Recommendation of courses, degrees, and institutions that support your career goals."
    },
    {
      step: "5",
      title: "Action Plan",
      description: "Development of a step-by-step roadmap to achieve your career objectives."
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
            Career Counseling <br className="hidden md:block" />& Guidance
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Receive personalized career guidance to help you choose the right course and university that aligns with your long-term professional goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24 lg:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Career <span className="text-primary-600">Services</span>
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
                Our 5-Step <span className="text-primary-600">Career Planning Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to help you make informed career decisions and achieve your professional goals
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
                Start Your Career Planning Today
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCounseling;