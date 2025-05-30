import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {  Award, Users, BookOpen, Globe, Headphones, Shield } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const reasons = [
    {
      icon: <Award className="h-10 w-10 text-primary-500" />,
      title: "Expert Counselors",
      description: "Our team consists of certified education consultants with extensive experience in international education.",
      color: "bg-primary-50",
      borderColor: "border-primary-200",
      hoverColor: "hover:border-primary-400",
    },
    {
      icon: <Users className="h-10 w-10 text-secondary-500" />,
      title: "Personalized Approach",
      description: "We create customized plans for each student based on their academic background, interests, and career goals.",
      color: "bg-secondary-50",
      borderColor: "border-secondary-200",
      hoverColor: "hover:border-secondary-400",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-accent-500" />,
      title: "University Partnerships",
      description: "Direct partnerships with over 500 universities worldwide, giving our students priority consideration.",
      color: "bg-accent-50",
      borderColor: "border-accent-200",
      hoverColor: "hover:border-accent-400",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary-500" />,
      title: "Global Presence",
      description: "With offices in multiple countries, we provide localized support wherever you are.",
      color: "bg-primary-50",
      borderColor: "border-primary-200",
      hoverColor: "hover:border-primary-400",
    },
    {
      icon: <Headphones className="h-10 w-10 text-secondary-500" />,
      title: "End-to-End Support",
      description: "From university selection to visa processing and pre-departure orientation, we handle it all.",
      color: "bg-secondary-50",
      borderColor: "border-secondary-200",
      hoverColor: "hover:border-secondary-400",
    },
    {
      icon: <Shield className="h-10 w-10 text-accent-500" />,
      title: "Trusted Reputation",
      description: "Our high success rate and thousands of satisfied students speak to our commitment to excellence.",
      color: "bg-accent-50",
      borderColor: "border-accent-200",
      hoverColor: "hover:border-accent-400",
    },
  ];

  return (
    <section id="why-choose-us" className="section bg-white">
      <div className="container">
        {/* Added pt-16 to the heading container for consistent spacing */}
        <div className="text-center mb-16 pt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why <span className="text-primary-600">Choose Us</span>
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
            We stand out from other educational consultancies through our commitment to excellence, personalized approach, and comprehensive support services.
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`p-6 rounded-xl border-2 ${reason.borderColor} ${reason.color} ${reason.hoverColor} transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
            >
              <div className="mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white shadow-custom-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
              <p className="text-white/90">Get personalized guidance from our expert counselors today.</p>
            </div>
            <a 
              href="#contact"
              className="btn bg-white text-primary-600 hover:bg-gray-100 whitespace-nowrap"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Book a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;