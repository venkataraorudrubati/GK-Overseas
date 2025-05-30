import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Award, 
  CheckCircle, 
  Mic, 
  ClipboardList,
  Globe,
  GraduationCap,
  FileCheck,
  DollarSign,
  Briefcase
} from 'lucide-react';

const InterviewPreparation: React.FC = () => {
  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-primary-600" />,
      title: "Comprehensive Study Materials",
      description: "Access to extensive study resources, practice tests, and up-to-date exam patterns for all major tests.",
      bgColor: "bg-primary-50"
    },
    {
      icon: <Award className="h-12 w-12 text-secondary-600" />,
      title: "Score Improvement Strategies",
      description: "Proven techniques and personalized study plans to maximize your test scores.",
      bgColor: "bg-secondary-50"
    },
    {
      icon: <Mic className="h-12 w-12 text-accent-600" />,
      title: "Interview Preparation",
      description: "Mock interviews and coaching for university admissions and visa interviews.",
      bgColor: "bg-accent-50"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-success-600" />,
      title: "Expert Feedback",
      description: "Detailed evaluations from certified instructors to identify strengths and weaknesses.",
      bgColor: "bg-success-50"
    }
  ];

  const testTypes = [
    {
      name: "English Proficiency",
      tests: ["PTE", "TOEFL", "IELTS"],
      icon: <ClipboardList className="h-8 w-8 text-primary-600 mb-2" />
    },
    {
      name: "Graduate Admissions",
      tests: ["GRE", "GMAT"],
      icon: <BookOpen className="h-8 w-8 text-secondary-600 mb-2" />
    },
    {
      name: "Undergraduate Admissions",
      tests: ["SAT", "ACT"],
      icon: <Award className="h-8 w-8 text-accent-600 mb-2" />
    },
    {
      name: "Language Tests",
      tests: ["German (TestDaF, Goethe)", "French (DELF, TCF)", "Spanish (DELE)"],
      icon: <Globe className="h-8 w-8 text-success-600 mb-2" />
    }
  ];

  const interviewTypes = [
    {
      name: "University Admissions",
      description: "Prepare for undergraduate and graduate program interviews",
      icon: <GraduationCap className="h-6 w-6 text-primary-600 mr-2" />
    },
    {
      name: "Visa Interviews",
      description: "Mock sessions for student and work visa applications",
      icon: <FileCheck className="h-6 w-6 text-secondary-600 mr-2" />
    },
    {
      name: "Scholarship Interviews",
      description: "Practice for competitive scholarship selection processes",
      icon: <DollarSign className="h-6 w-6 text-accent-600 mr-2" />
    },
    {
      name: "Job Interviews",
      description: "Preparation for internships and post-study work opportunities",
      icon: <Briefcase className="h-6 w-6 text-success-600 mr-2" />
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Assessment",
      description: "We evaluate your current level and identify areas for improvement."
    },
    {
      step: "2",
      title: "Personalized Plan",
      description: "Customized preparation schedule tailored to your needs."
    },
    {
      step: "3",
      title: "Skill Building",
      description: "Focused practice on all test sections and interview techniques."
    },
    {
      step: "4",
      title: "Mock Sessions",
      description: "Simulated tests and interviews with performance analysis."
    },
    {
      step: "5",
      title: "Final Preparation",
      description: "Test-taking strategies and interview tips before your actual exam."
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
            Test & Interview Preparation
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive Exam <br className="hidden md:block" />& Interview Prep
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide end-to-end preparation for standardized tests (PTE, TOEFL, IELTS, GRE, GMAT, SAT) and specialized interview coaching for admissions and visas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-24 lg:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Preparation <span className="text-primary-600">Services</span>
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

        {/* Test Types Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
          <div className="p-10 md:p-14 lg:p-16">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Standardized <span className="text-primary-600">Test Preparation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive resources for all major academic and language tests
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl text-center"
                >
                  <div className="flex justify-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{type.name}</h3>
                  <ul className="space-y-2">
                    {type.tests.map((test, i) => (
                      <li key={i} className="text-gray-700">
                        {test}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Interview Preparation Section */}
        <div className="bg-gray-50 rounded-3xl shadow-xl overflow-hidden mb-24 lg:mb-32">
          <div className="p-10 md:p-14 lg:p-16">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized <span className="text-primary-600">Interview Preparation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Personalized coaching to help you excel in critical interviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {interviewTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl"
                >
                  <div className="flex items-center mb-3">
                    {type.icon}
                    <h3 className="text-lg font-bold text-gray-900">{type.name}</h3>
                  </div>
                  <p className="text-gray-600">{type.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-primary-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Interview Preparation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Mock interview sessions with detailed feedback</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Common question banks and response strategies</span>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Body language and communication skills training</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Cultural awareness and professional etiquette</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-10 md:p-14 lg:p-16">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our 5-Step <span className="text-primary-600">Preparation Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured methodology to ensure you're fully prepared for success
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
                Begin Your Preparation Journey
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewPreparation;