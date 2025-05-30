// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Users, BookOpen, Award, Clock, Handshake } from 'lucide-react';

// const About: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   // Bank partners data with placeholder images
//   const bankPartners = [
//     { 
//       name: "HDFC Credila", 
//       logo: "https://th.bing.com/th/id/OIP.OkHBZXiOImvUiLI-JuZQswAAAA?cb=iwc2&pid=ImgDet&w=181&h=181&c=7&dpr=1.5" 
//     },
//     { 
//       name: "Avance Fin Services", 
//       logo: "https://static.businessworld.in/1599474294_zSPOLj_Avanse_Financial_Services.jpg" 
//     },
//     { 
//       name: "Prodigy Finance", 
//       logo: "https://th.bing.com/th/id/OIP.BHQ-TY-NwA50-TlGBX49rQAAAA?w=141&h=155&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7" 
//     },
//     { 
//       name: "Axis Bank", 
//       logo: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/06/axis-bank-1623303816.jpg" 
//     },
//     { 
//       name: "ICICI Bank", 
//       logo: "https://th.bing.com/th/id/OIP.gELh_6SYZQk3X-bC3P7yYAHaEo?w=256&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7" 
//     },
//     { 
//       name: "Bank of Baroda", 
//       logo: "https://th.bing.com/th/id/OIP.xV_KTT1NgIfR3ecxx3IoEAHaDf?w=313&h=164&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7" 
//     },
//   ];

//   return (
//     <section id="about" className="section bg-gray-50">
//       <div className="container">
//         {/* About Us Content - Added pt-16 for top padding */}
//         <div className="text-center mb-16 pt-16"> {/* Added pt-16 here */}
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//             transition={{ duration: 0.6 }}
//             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//           >
//             About <span className="text-primary-600">GK Overseas Education</span>
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
//             className="text-lg text-gray-600 max-w-3xl mx-auto"
//           >
//             We are a premier educational consultancy dedicated to helping students achieve their dreams of studying abroad.
//           </motion.p>
//         </div>

//         {/* Rest of the component remains the same */}
//         <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//           {/* Image Section */}
//           <motion.div 
//             ref={ref}
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <div className="relative z-10 rounded-lg overflow-hidden shadow-custom-lg">
//               <img 
//                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
//                 alt="Students consulting with education advisor" 
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//             </div>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full z-0"></div>
//             <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-100 rounded-full z-0"></div>
//           </motion.div>

//           {/* Content Section */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             <motion.h3 
//               variants={itemVariants}
//               className="text-2xl font-bold text-gray-900 mb-6"
//             >
//               Your Trusted Partner in International Education
//             </motion.h3>
            
//             <motion.p 
//               variants={itemVariants}
//               className="text-gray-600 mb-6"
//             >
//               At GK Overseas Education, we understand that choosing to study abroad is a life-changing decision.
//             </motion.p>
            
//             {/* Stats */}
//             <motion.div 
//               variants={containerVariants}
//               className="grid grid-cols-2 gap-6"
//             >
//               <motion.div 
//                 variants={itemVariants}
//                 className="flex items-start"
//               >
//                 <div className="p-3 bg-primary-100 rounded-lg mr-4">
//                   <Users className="h-6 w-6 text-primary-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">500+</h4>
//                   <p className="text-gray-600">Students Placed</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 variants={itemVariants}
//                 className="flex items-start"
//               >
//                 <div className="p-3 bg-secondary-100 rounded-lg mr-4">
//                   <BookOpen className="h-6 w-6 text-secondary-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">100+</h4>
//                   <p className="text-gray-600">Partner Universities</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 variants={itemVariants}
//                 className="flex items-start"
//               >
//                 <div className="p-3 bg-accent-100 rounded-lg mr-4">
//                   <Award className="h-6 w-6 text-accent-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">99%</h4>
//                   <p className="text-gray-600">Success Rate</p>
//                 </div>
//               </motion.div>
              
//               <motion.div 
//                 variants={itemVariants}
//                 className="flex items-start"
//               >
//                 <div className="p-3 bg-primary-100 rounded-lg mr-4">
//                   <Clock className="h-6 w-6 text-primary-600" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">10+ Years</h4>
//                   <p className="text-gray-600">Experience</p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Banking Partners Section */}
//         <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12">
//           <div className="text-center mb-12">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center justify-center mx-auto mb-4"
//             >
//               <Handshake className="h-8 w-8 text-primary-600 mr-3" />
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
//                 Our Financial Partners
//               </h3>
//             </motion.div>
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={inView ? { opacity: 1 } : { opacity: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-gray-600 max-w-3xl mx-auto"
//             >
//               We collaborate with leading financial institutions to provide seamless education loan solutions
//             </motion.p>
//           </div>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={inView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
//           >
//             {bankPartners.map((bank, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="flex flex-col items-center p-4"
//               >
//                 <div className="h-16 w-full flex items-center justify-center mb-3">
//                   <img 
//                     src={bank.logo} 
//                     alt={bank.name}
//                     className="max-h-full max-w-full object-contain"
//                   />
//                 </div>
//                 <span className="text-sm font-medium text-gray-700 text-center">{bank.name}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, BookOpen, Award, Clock, Handshake } from 'lucide-react';

const About: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Bank partners data with placeholder images
  const bankPartners = [
    { 
      name: "HDFC Credila", 
      logo: "https://th.bing.com/th/id/OIP.OkHBZXiOImvUiLI-JuZQswAAAA?cb=iwc2&pid=ImgDet&w=181&h=181&c=7&dpr=1.5" 
    },
    { 
      name: "Avance Fin Services", 
      logo: "https://static.businessworld.in/1599474294_zSPOLj_Avanse_Financial_Services.jpg" 
    },
    { 
      name: "Prodigy Finance", 
      logo: "https://th.bing.com/th/id/OIP.BHQ-TY-NwA50-TlGBX49rQAAAA?w=141&h=155&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7" 
    },
    { 
      name: "Axis Bank", 
      logo: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/06/axis-bank-1623303816.jpg" 
    },
    { 
      name: "ICICI Bank", 
      logo: "https://th.bing.com/th/id/OIP.gELh_6SYZQk3X-bC3P7yYAHaEo?w=256&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7" 
    },
    { 
      name: "Bank of Baroda", 
      logo: "https://th.bing.com/th/id/OIP.xV_KTT1NgIfR3ecxx3IoEAHaDf?w=313&h=164&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7" 
    },
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        {/* About Us Content - Added pt-16 for top padding */}
        <div className="text-center mb-16 pt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-primary-600">GK Overseas Education</span>
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
            We are a premier educational consultancy dedicated to helping students achieve their dreams of studying abroad.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-custom-lg">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Students consulting with education advisor" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-100 rounded-full z-0"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Your Trusted Partner in International Education
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6"
            >
              At GK Overseas Education, we understand that choosing to study abroad is a life-changing decision.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">500+</h4>
                  <p className="text-gray-600">Students Placed</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="p-3 bg-secondary-100 rounded-lg mr-4">
                  <BookOpen className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">100+</h4>
                  <p className="text-gray-600">Partner Universities</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="p-3 bg-accent-100 rounded-lg mr-4">
                  <Award className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">98%</h4>
                  <p className="text-gray-600">Success Rate</p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-start"
              >
                <div className="p-3 bg-primary-100 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">10+ Years</h4>
                  <p className="text-gray-600">Experience</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Banking Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center mx-auto mb-4"
            >
              <Handshake className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Financial Partners
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              We collaborate with leading financial institutions to provide seamless education loan solutions
            </motion.p>
          </div>

          <div className="relative overflow-hidden py-4">
            <div className="flex">
              {/* First set - visible */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="flex"
              >
                {bankPartners.map((bank, index) => (
                  <motion.div
                    key={`first-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center px-8 py-4 mx-2"
                  >
                    <div className="h-16 w-32 flex items-center justify-center mb-3">
                      <img 
                        src={bank.logo} 
                        alt={bank.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{bank.name}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Second set - creates seamless loop */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                className="flex absolute left-full"
              >
                {bankPartners.map((bank, index) => (
                  <motion.div
                    key={`second-${index}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center px-8 py-4 mx-2"
                  >
                    <div className="h-16 w-32 flex items-center justify-center mb-3">
                      <img 
                        src={bank.logo} 
                        alt={bank.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 text-center">{bank.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;