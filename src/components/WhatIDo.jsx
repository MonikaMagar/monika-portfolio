import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Camera, Share2, PenTool, Layers, Cpu } from 'lucide-react';

const services = [
  {
    title: "Video Editing",
    icon: <Video size={32} />,
    items: ["Instagram Reels", "YouTube Shorts", "Corporate Videos", "Promotional Videos", "Educational Content"],
    delay: 0.1
  },
  {
    title: "Videography",
    icon: <Camera size={32} />,
    items: ["DSLR Camera", "Mirrorless Camera", "Office Shoots", "Interview Videos", "Event Coverage"],
    delay: 0.2
  },
  {
    title: "Social Media",
    icon: <Share2 size={32} />,
    items: ["Instagram", "Facebook", "LinkedIn", "YouTube", "Content Strategy"],
    delay: 0.3
  },
  {
    title: "Graphic Design",
    icon: <PenTool size={32} />,
    items: ["Canva", "Posters", "Banners", "Social Media Posts", "Thumbnails"],
    delay: 0.4
  },
  {
    title: "Motion Graphics",
    icon: <Layers size={32} />,
    items: ["Animated Titles", "Transitions", "Typography", "Logo Animation"],
    delay: 0.5
  },
  {
    title: "AI Creativity",
    icon: <Cpu size={32} />,
    items: ["ChatGPT", "Canva AI", "Runway ML", "AI Voice Tools", "Creative Automation"],
    delay: 0.6
  }
];

const WhatIDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive suite of creative services designed to elevate your brand's digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: service.delay }}
              className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top Purple Border Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                {service.title}
              </h3>
              
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-300"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
