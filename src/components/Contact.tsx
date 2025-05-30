// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock,
//   Send,
//   CheckCircle,
//   User
// } from 'lucide-react';

// type ContactDetail = {
//   text: string;
//   link?: string;
// };

// type ContactInfoItem = {
//   icon: React.ReactNode;
//   title: string;
//   details: (string | ContactDetail)[];
//   isPhone?: boolean;
//   isEmail?: boolean;
//   isAddress?: boolean;
// };

// const Contact: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     destination: '',
//     message: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errors, setErrors] = useState<{[key: string]: string}>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({ ...prev, [name]: value }));
    
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors: {[key: string]: string} = {};
    
//     if (!formState.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formState.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
//       newErrors.email = 'Email is invalid';
//     }
    
//     if (!formState.message.trim()) {
//       newErrors.message = 'Message is required';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsLoading(true);
    
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsSubmitted(true);
//       setFormState({
//         name: '',
//         email: '',
//         phone: '',
//         destination: '',
//         message: '',
//       });
//     }, 1500);
//   };

//   const contactInfo: ContactInfoItem[] = [
//     {
//       icon: <User className="h-6 w-6 text-white" />,
//       title: "Contact Person",
//       details: ["Gopala Krishna Appalaneni, M.B.A."],
//     },
//     {
//       icon: <MapPin className="h-6 w-6 text-white" />,
//       title: "Office Address",
//       details: [
//         { text: "GK Overseas Education", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" },
//         { text: "Opp: Springboard School, Rikshaw Centre", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" },
//         { text: "Prakash Nagar, Narasaraopet – 522601", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" },
//         { text: "Andhra Pradesh, India", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" }
//       ],
//       isAddress: true
//     },
//     {
//       icon: <Phone className="h-6 w-6 text-white" />,
//       title: "Contact Numbers",
//       details: [
//         { text: "+91 76608 93395", link: "tel:+917660893395" },
//         { text: "+91 79950 30766", link: "tel:+917995030766" }
//       ],
//       isPhone: true
//     },
//     {
//       icon: <Mail className="h-6 w-6 text-white" />,
//       title: "Email Address",
//       details: [
//         { text: "gopi.kittu.krishna@gmail.com", link: "mailto:gopi.kittu.krishna@gmail.com" },
//         { text: "gkoverseas.assist@gmail.com", link: "mailto:gkoverseas.assist@gmail.com" }
//       ],
//       isEmail: true
//     },
//     {
//       icon: <Clock className="h-6 w-6 text-white" />,
//       title: "Working Hours",
//       details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
//     },
//   ];

//   const renderDetail = (detail: string | ContactDetail, index: number, isPhone?: boolean, isEmail?: boolean, isAddress?: boolean) => {
//     if (typeof detail === 'string') {
//       return <p key={index} className="text-white/90 mb-1 text-sm sm:text-base">{detail}</p>;
//     }
    
//     if (isPhone || isEmail || isAddress) {
//       return (
//         <a 
//           key={index}
//           href={detail.link}
//           className="text-white/90 mb-1 text-sm sm:text-base hover:no-underline block"
//           target={isAddress ? "_blank" : undefined}
//           rel={isAddress ? "noopener noreferrer" : undefined}
//         >
//           {detail.text}
//         </a>
//       );
//     }
    
//     return <p key={index} className="text-white/90 mb-1 text-sm sm:text-base">{detail.text}</p>;
//   };

//   return (
//     <section id="contact" className="section bg-white">
//       <div className="container">
//         <div className="text-center mb-10 md:mb-16 pt-16">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//           >
//             Contact <span className="text-primary-600">GK Overseas Education</span>
//           </motion.h2>
//           <motion.div 
//             initial={{ opacity: 0, width: 0 }}
//             animate={inView ? { opacity: 1, width: '80px' } : { opacity: 0, width: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="h-1 bg-primary-500 mx-auto mb-6"
//           ></motion.div>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
//           >
//             The next level career. Get in touch with our expert counselors for personalized guidance on your overseas education journey.
//           </motion.p>
//         </div>

//         <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white rounded-xl shadow-custom p-6 sm:p-8"
//           >
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            
//             {isSubmitted ? (
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="text-center py-8"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                   <CheckCircle className="h-8 w-8 text-green-600" />
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
//                 <p className="text-gray-600 mb-6">
//                   Your message has been received. One of our counselors will contact you shortly.
//                 </p>
//                 <button 
//                   onClick={() => setIsSubmitted(false)}
//                   className="btn btn-primary"
//                 >
//                   Send Another Message
//                 </button>
//               </motion.div>
//             ) : (
//               <form onSubmit={handleSubmit} noValidate>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formState.name}
//                       onChange={handleChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
//                       placeholder="Your name"
//                     />
//                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formState.email}
//                       onChange={handleChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
//                       placeholder="Your email"
//                     />
//                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                   </div>
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone Number *
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formState.phone}
//                       onChange={handleChange}
//                       required
//                       className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
//                       placeholder="Your phone number"
//                     />
//                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//                   </div>
//                   <div>
//                     <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
//                       Preferred Destination
//                     </label>
//                     <select
//                       id="destination"
//                       name="destination"
//                       value={formState.destination}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
//                     >
//                       <option value="">Select a destination</option>
//                       <option value="usa">USA</option>
//                       <option value="uk">UK</option>
//                       <option value="canada">Canada</option>
//                       <option value="australia">Australia</option>
//                       <option value="newzealand">New Zealand</option>
//                       <option value="germany">Germany</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </div>
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Your Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formState.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors`}
//                     placeholder="Tell us about your education goals and preferred course..."
//                   ></textarea>
//                   {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`btn btn-primary w-full flex justify-center items-center ${
//                     isLoading ? 'opacity-70 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="mr-2 h-5 w-5" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </motion.div>
          
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-custom p-6 sm:p-8 text-white mb-8">
//               <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex">
//                     <div className="mr-4 mt-1 flex-shrink-0">
//                       {info.icon}
//                     </div>
//                     <div>
//                       <h4 className="font-bold mb-2">{info.title}</h4>
//                       {info.details.map((detail, i) => 
//                         renderDetail(detail, i, info.isPhone, info.isEmail, info.isAddress)
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             {/* Map */}
//             <div className="rounded-xl overflow-hidden shadow-custom h-64 sm:h-80 bg-gray-200">
//               <iframe 
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.231205386621!2d80.04368331423906!3d16.22861438800083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81000a7356ef%3A0xf8c23b9b7a06c56d!2s62HW%2BCGX%2C%20Nerby%2C%20Prakash%20Nagar%2C%20Narasaraopeta%2C%20Andhra%20Pradesh%20522601%2C%20India!5e0!3m2!1sen!2suk!4v1747338793794!5m2!1sen!2suk" 
//                 width="100%" 
//                 height="100%" 
//                 style={{ border: 0 }} 
//                 allowFullScreen 
//                 loading="lazy"
//                 title="GK Overseas Education Location"
//               ></iframe>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  User
} from 'lucide-react';

type ContactDetail = {
  text: string;
  link?: string;
};

type ContactInfoItem = {
  icon: React.ReactNode;
  title: string;
  details: (string | ContactDetail)[];
  isPhone?: boolean;
  isEmail?: boolean;
  isAddress?: boolean;
};

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Load Tally script dynamically
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.title = 'Tally form script';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <User className="h-6 w-6 text-white" aria-hidden="true" />,
      title: "Contact Person",
      details: ["Gopala Krishna Appalaneni, M.B.A."],
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" aria-hidden="true" />,
      title: "Office Address",
      details: [
        { text: "GK Overseas Education", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" },
        { text: "Opp: Springboard School, Rikshaw Centre", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" },
        { text: "Prakash Nagar, Narasaraopet – 522601", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" },
        { text: "Andhra Pradesh, India", link: "https://maps.app.goo.gl/SuEnAvKALVcxqWQi8" }
      ],
      isAddress: true
    },
    {
      icon: <Phone className="h-6 w-6 text-white" aria-hidden="true" />,
      title: "Contact Numbers",
      details: [
        { text: "+91 76608 93395", link: "tel:+917660893395" },
        { text: "+91 79950 30766", link: "tel:+917995030766" }
      ],
      isPhone: true
    },
    {
      icon: <Mail className="h-6 w-6 text-white" aria-hidden="true" />,
      title: "Email Address",
      details: [
        { text: "gopi.kittu.krishna@gmail.com", link: "mailto:gopi.kittu.krishna@gmail.com" },
        { text: "gkoverseas.assist@gmail.com", link: "mailto:gkoverseas.assist@gmail.com" }
      ],
      isEmail: true
    },
    {
      icon: <Clock className="h-6 w-6 text-white" aria-hidden="true" />,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  const renderDetail = (detail: string | ContactDetail, index: number, isPhone?: boolean, isEmail?: boolean, isAddress?: boolean) => {
    if (typeof detail === 'string') {
      return <p key={index} className="text-white/90 mb-1 text-sm sm:text-base">{detail}</p>;
    }
    
    if (isPhone || isEmail || isAddress) {
      return (
        <a 
          key={index}
          href={detail.link}
          className="text-white/90 mb-1 text-sm sm:text-base hover:no-underline block"
          target={isAddress ? "_blank" : undefined}
          rel={isAddress ? "noopener noreferrer" : undefined}
          aria-label={isPhone ? `Call ${detail.text}` : isEmail ? `Email ${detail.text}` : `View address on map: ${detail.text}`}
        >
          {detail.text}
        </a>
      );
    }
    
    return <p key={index} className="text-white/90 mb-1 text-sm sm:text-base">{detail.text}</p>;
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-10 md:mb-16 pt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Contact <span className="text-primary-600">GK Overseas Education</span>
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
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            The next level career. Get in touch with our expert counselors for personalized guidance on your overseas education journey.
          </motion.p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Tally Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-custom overflow-hidden min-h-[585px]"
          >
            <iframe 
              src="https://tally.so/embed/nrWvNM?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Contact for Free Consultation"
              className="min-h-[585px]"
            ></iframe>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl shadow-custom p-6 sm:p-8 text-white mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{info.title}</h4>
                      {info.details.map((detail, i) => 
                        renderDetail(detail, i, info.isPhone, info.isEmail, info.isAddress)
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-custom h-64 sm:h-80 bg-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.231205386621!2d80.04368331423906!3d16.22861438800083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81000a7356ef%3A0xf8c23b9b7a06c56d!2s62HW%2BCGX%2C%20Nerby%2C%20Prakash%20Nagar%2C%20Narasaraopeta%2C%20Andhra%20Pradesh%20522601%2C%20India!5e0!3m2!1sen!2suk!4v1747338793794!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                className="border-0" 
                allowFullScreen 
                loading="lazy"
                title="GK Overseas Education Location"
                aria-label="Map of GK Overseas Education location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;