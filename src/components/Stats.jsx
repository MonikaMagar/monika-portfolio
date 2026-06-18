import React from 'react';
import { motion } from 'framer-motion';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;
import { useInView } from 'react-intersection-observer';

const StatItem = ({ end, label, suffix = "+", delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(124,58,237,0.08)] hover:-translate-y-2 transition-all duration-300"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-2 flex items-center">
        {inView ? (
          <CountUp start={0} end={end} duration={2.5} useEasing={true} />
        ) : (
          "0"
        )}
        <span className="text-purple-600">{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-gray-500 uppercase tracking-wider text-center font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 relative z-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatItem end={100} label="Videos Edited" delay={0.1} />
          <StatItem end={50} label="Creative Projects" delay={0.2} />
          <StatItem end={20} label="Brands Worked With" delay={0.3} />
          <StatItem end={1} suffix="M+" label="Views Generated" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
