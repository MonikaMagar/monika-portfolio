import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const ExperienceTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const responsibilities = [
    "Professional video shooting",
    "Instagram Reels",
    "YouTube Shorts",
    "Photography",
    "Content Planning",
    "Poster Design",
    "Thumbnail Design",
    "Camera Handling",
    "Brand Strategy",
    "Video Production",
    "Client Communication"
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Experience
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-purple-200 pl-8 md:pl-12 ml-4 md:ml-6">
          {/* Timeline Node */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center shadow-md"
          >
            <Briefcase size={16} className="text-purple-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.08)] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 font-display">
                  Dhapte Bhosale Associates
                </h3>
                <div className="text-lg font-medium text-purple-600 mt-1">
                  Social Media Manager • Video Editor • Videographer
                </div>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-purple-50 text-purple-700 text-sm font-semibold whitespace-nowrap self-start">
                Full-time
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Managing complete content production and digital brand presence, ensuring high-quality visual storytelling across multiple social media platforms.
            </p>

            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Key Responsibilities</h4>
            
            <div className="flex flex-wrap gap-2 md:gap-3">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                  className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-gray-700 text-sm hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-colors cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
