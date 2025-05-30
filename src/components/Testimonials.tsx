import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      name: "Meghana Reddy",
      role: "Northeastern University, USA",
      quote: "The guidance I received was exceptional. They helped me navigate the complex application process to Northeastern University with ease.",
      rating: 5,
    },
    {
      id: 2,
      name: "Surya Kumar Narne",
      role: "University of Greenwich, UK",
      quote: "Thanks to their expertise, I secured admission at the University of Greenwich. Their knowledge of the UK education system was invaluable.",
      rating: 5,
    },
    {
      id: 3,
      name: "Maheswari Kodi",
      role: "Dublin Business School (DBS), Ireland",
      quote: "They made my dream of studying in Ireland come true. Their personalized approach made all the difference in my application.",
      rating: 5,
    },
    {
      id: 4,
      name: "Devi Sanjana Gadde",
      role: "University of Connecticut, USA",
      quote: "I couldn't have asked for better support. They guided me perfectly through my UConn application and visa process.",
      rating: 5,
    },
    {
      id: 5,
      name: "Ashok Reddy Nimmakayala",
      role: "Sheffield Hallam University, UK",
      quote: "Their expertise in UK universities helped me choose the perfect program. The end-to-end support was exceptional.",
      rating: 5,
    },
    {
      id: 6,
      name: "Venkateswarlu Pambha",
      role: "University of Hertfordshire, UK",
      quote: "My admission process was seamless thanks to their knowledgeable counselors who were always available to help.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto-scroll functionality
  useEffect(() => {
    let interval: number;
    if (autoScroll) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 4000); // Change testimonial every 4 seconds
    }
    return () => window.clearInterval(interval);
  }, [autoScroll, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoScroll(false); // Pause auto-scroll when user manually navigates
    setTimeout(() => setAutoScroll(true), 10000); // Resume auto-scroll after 10 seconds
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setAutoScroll(false); // Pause auto-scroll when user manually navigates
    setTimeout(() => setAutoScroll(true), 10000); // Resume auto-scroll after 10 seconds
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), 10000);
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Student <span className="text-primary-600">Testimonials</span>
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
            Hear from our students who have successfully achieved their international education goals with our guidance.
          </motion.p>
        </div>

        <div ref={ref} className="relative">
          {/* Desktop Testimonials - Now a carousel */}
          <div className="hidden md:block">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-custom p-8 relative mx-auto max-w-4xl"
            >
              <div className="absolute top-6 right-8">
                <Quote className="h-12 w-12 text-primary-100" />
              </div>
              <div className="mb-6 text-center">
                <h4 className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic text-center relative z-10 px-4">"{testimonials[currentIndex].quote}"</p>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-600 transition-colors z-10 -ml-4"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-600 transition-colors z-10 -mr-4"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Mobile Testimonials Carousel */}
          <div className="md:hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-custom p-6 relative"
            >
              <div className="absolute top-6 right-6">
                <Quote className="h-10 w-10 text-primary-100" />
              </div>
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                <div className="flex mt-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic relative z-10">"{testimonials[currentIndex].quote}"</p>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-primary-600' : 'bg-gray-300'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-6 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Write Your Success Story?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their international education dreams with our expert guidance.
          </p>
          <a 
            href="#contact"
            className="btn btn-primary"
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
            Book Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;