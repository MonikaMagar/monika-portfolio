import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Laptop, Film, Video, Play, Image as ImageIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const AboutStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-8">
            My Journey
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              I started my creative journey with a passion for storytelling through videos and social media. Over time, I developed skills in professional editing, videography, branding, and content strategy.
            </p>
            <p>
              Working with <strong className="text-gray-900 font-semibold">Dhapte Bhosale Associates</strong> as a Social Media Manager, Video Editor, and Videographer allowed me to manage complete content production—from planning and shooting to editing and publishing.
            </p>
            <p>
              I have also worked on legal awareness content, educational videos, corporate branding, promotional campaigns, and social media marketing, helping businesses build a stronger online presence.
            </p>
          </div>
        </motion.div>

        {/* Right: Creative Collage */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
          {/* Central element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute z-20 w-40 h-40 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex items-center justify-center rotate-3"
          >
            <Camera size={64} className="text-purple-600" />
          </motion.div>

          {/* Floating elements */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -50, y: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute top-10 left-10 z-10 w-32 h-32 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center -rotate-6 gap-2"
          >
            <Laptop size={32} className="text-blue-500" />
            <span className="text-xs font-medium text-gray-500">Editing</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: -30 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: -30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-20 right-10 z-10 w-28 h-28 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center rotate-12"
          >
            <Film size={40} className="text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40, y: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -40, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-20 left-16 z-30 w-36 h-36 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center rotate-12 gap-2"
          >
            <Video size={40} className="text-pink-500" />
            <span className="text-xs font-medium text-gray-500">Reels</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute bottom-10 right-20 z-10 w-32 h-32 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center -rotate-12 gap-2 border border-gray-50"
          >
            <ImageIcon size={32} className="text-teal-500" />
            <span className="text-xs font-medium text-gray-500">Design</span>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute inset-0 bg-blue-50/50 rounded-full filter blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
