import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Scissors, CheckCircle, Zap } from 'lucide-react';

const features = [
  {
    title: "Creative Storytelling",
    description: "Crafting narratives that engage audiences and leave a lasting impact.",
    icon: <Lightbulb size={32} />
  },
  {
    title: "Professional Editing",
    description: "Delivering cinematic cuts, color grading, and flawless audio design.",
    icon: <Scissors size={32} />
  },
  {
    title: "Attention to Detail",
    description: "Ensuring every frame, transition, and text element is pixel-perfect.",
    icon: <CheckCircle size={32} />
  },
  {
    title: "Fast Delivery",
    description: "Meeting tight deadlines without ever compromising on quality.",
    icon: <Zap size={32} />
  }
];

const WhyChooseMe = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Why Choose Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What sets my work apart and why brands love collaborating with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated Gradient Border on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-sm"></div>
              <div className="absolute inset-[2px] bg-white rounded-[22px] -z-10"></div>
              
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
