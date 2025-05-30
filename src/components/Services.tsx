import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  GraduationCap,
  FileText, 
  Briefcase, 
  Plane, 
  BookOpen, 
  CreditCard 
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const services = [
    {
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      title: "University Selection & Admission",
      description: "We help you identify the best universities and programs aligned with your academic goals, career aspirations, and budget. Our team assists with the entire application process.",
      bgColor: "from-primary-500 to-primary-600",
      delay: 0.1,
      link: "/services/university-admission"
    },
    {
      icon: <FileText className="h-12 w-12 text-white" />,
      title: "Visa Application Support",
      description: "Our experts guide you through the complex visa application process, ensuring all documentation is accurate and complete to maximize your chances of approval.",
      bgColor: "from-secondary-500 to-secondary-600",
      delay: 0.2,
      link: "/services/visa-application"
    },
    {
      icon: <Briefcase className="h-12 w-12 text-white" />,
      title: "Career Counseling",
      description: "Receive personalized career guidance to help you choose the right course and university that aligns with your long-term professional goals.",
      bgColor: "from-accent-500 to-accent-600",
      delay: 0.3,
      link: "/services/career-counseling"
    },
    {
      icon: <Plane className="h-12 w-12 text-white" />,
      title: "Pre-Departure Orientation",
      description: "Comprehensive preparation for life abroad, including cultural adaptation, accommodation options, banking setup, and essential information for a smooth transition.",
      bgColor: "from-primary-600 to-primary-700",
      delay: 0.4,
      link: "/services/pre-departure-orientation"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: "Interview Preparation & Test Prep",
      description: "We provide test prep solutions for PTE, TOEFL, IELTS, GRE, GMAT, SAT, and German Language, empowering students with comprehensive resources to excel in their exams.",
      bgColor: "from-secondary-600 to-secondary-700",
      delay: 0.5,
      link: "/services/test-preparation"
    },
    {
      icon: <CreditCard className="h-12 w-12 text-white" />,
      title: "Scholarship & Financial Aid",
      description: "Our counselors identify scholarship opportunities and financial aid options to help make your international education more affordable.",
      bgColor: "from-accent-600 to-accent-700",
      delay: 0.6,
      link: "/services/scholarship-financial-aid"
    },
  ];

  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    if (link.startsWith('#')) {
      e.preventDefault();
      const section = document.getElementById(link.substring(1));
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        {/* Added pt-16 to the heading container for consistent spacing */}
        <div className="text-center mb-16 pt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-primary-600">Services</span>
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
            We offer comprehensive support services to guide you through every step of your international education journey.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ delay: service.delay }}
              className="card group overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-br ${service.bgColor} flex justify-center items-center h-48 relative overflow-hidden transition-all duration-500 group-hover:h-40`}>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  {service.link.startsWith('#') ? (
                    <a 
                      href={service.link}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      onClick={(e) => handleLinkClick(service.link, e)}
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  ) : (
                    <Link 
                      to={service.link}
                      className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;