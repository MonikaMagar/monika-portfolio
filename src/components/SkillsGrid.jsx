import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CircularProgress = ({ title, percentage, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-40 h-40 flex items-center justify-center mb-4">
        {/* Background Circle */}
        <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#f1f5f9"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Animated Progress Circle */}
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            stroke="url(#purpleGradient)"
            strokeWidth="12"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
          />
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute flex flex-col items-center justify-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: delay + 1 }}
            className="text-3xl font-bold text-gray-900 font-display"
          >
            {percentage}%
          </motion.span>
        </div>
      </div>
      <h3 className="text-gray-700 font-semibold text-center">{title}</h3>
    </div>
  );
};

const SkillsGrid = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Core Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My proficiency levels across key creative disciplines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
          <CircularProgress title="Video Editing" percentage={95} delay={0.1} />
          <CircularProgress title="Videography" percentage={90} delay={0.2} />
          <CircularProgress title="Social Media" percentage={92} delay={0.3} />
          <CircularProgress title="Graphic Design" percentage={88} delay={0.4} />
          <CircularProgress title="Storytelling" percentage={95} delay={0.5} />
          <CircularProgress title="Camera Handling" percentage={90} delay={0.6} />
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;
