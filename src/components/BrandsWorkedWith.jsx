import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, Play, Camera, Film } from 'lucide-react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;

const clients = [
  {
    name: "Dhapte Bhosale Associates",
    logo: "DB", // Placeholder
    youtube: "https://youtube.com/@dhapte-bhosale",
    instagram: "#",
    roles: ["Social Media Manager", "Video Editor", "Videographer", "Content Creator"],
    work: [
      "Professional Video Shooting", "Instagram Reels", "YouTube Videos", 
      "YouTube Shorts", "Thumbnail Design", "Poster Design", "Motion Graphics",
      "Photography", "Content Planning", "Brand Strategy", "Video Production", 
      "Editing & Publishing"
    ]
  },
  {
    name: "Advocate Amruta Salunke",
    logo: "AS", // Placeholder
    youtube: "https://youtube.com/@advocateamrutasalunke",
    instagram: "#",
    roles: ["Video Editor", "Reels Editor", "Social Media Content Creator", "Graphic Designer"],
    work: [
      "Educational Videos", "Legal Awareness Content", "YouTube Shorts", 
      "Instagram Reels", "Thumbnail Design", "Motion Graphics", 
      "Subtitle Editing", "Branding Content"
    ]
  },
  {
    name: "5 Minutes Law",
    logo: "5M", // Placeholder
    youtube: "https://youtube.com/@5_minuteslaw",
    instagram: "#",
    roles: ["Video Editor", "Short-form Content Creator", "Motion Graphics Editor"],
    work: [
      "YouTube Shorts", "Educational Videos", "Social Media Reels", 
      "Animated Captions", "Video Optimization", "Thumbnail Design", 
      "Content Editing"
    ]
  }
];

const StatItem = ({ end, label, suffix = "+", delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center p-6 bg-white/60 backdrop-blur-md rounded-3xl border border-purple-50 shadow-sm"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-2 flex items-center">
        {inView ? <CountUp start={0} end={end} duration={2.5} useEasing={true} /> : "0"}
        <span className="text-purple-600">{suffix}</span>
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wider text-center font-medium">
        {label}
      </div>
    </motion.div>
  );
};

const BrandsWorkedWith = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="brands" className="py-24 relative overflow-hidden bg-white">
      {/* Background Design */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Floating Icons Background */}
        <motion.div animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-40 left-20 opacity-20 text-purple-400">
          <Play size={48} />
        </motion.div>
        <motion.div animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute bottom-40 right-20 opacity-20 text-blue-400">
          <Camera size={48} />
        </motion.div>
        <motion.div animate={{ x: [-10, 10, -10], rotate: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute top-1/2 left-10 opacity-10 text-gray-400">
          <Film size={64} />
        </motion.div>
        
        {/* Dotted Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Statistics Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          <StatItem end={20} label="Brands Collaborated" delay={0.1} />
          <StatItem end={100} label="Videos Produced" delay={0.2} />
          <StatItem end={1} suffix="M+" label="Views Generated" delay={0.3} />
          <StatItem end={100} label="Creative Projects" delay={0.4} />
        </div>

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Trusted By Brands & Creators
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I've collaborated with law firms, legal educators, and personal brands to create engaging videos, manage social media, produce professional content, and grow their digital presence.
          </p>
        </motion.div>

        {/* Client Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(124,58,237,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col h-full"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              {/* Header: Logo + Platforms */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 p-[2px] group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-display font-bold text-xl text-gray-900">
                    {client.logo}
                  </div>
                </div>
                <div className="flex gap-2">
                  <a href={client.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                    <FaYoutube size={20} />
                  </a>
                  <a href={client.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors cursor-pointer">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>

              {/* Title & Roles */}
              <div className="mb-6 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display leading-tight group-hover:text-purple-700 transition-colors">
                  {client.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {client.roles.map((role, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Work Included List */}
              <div className="flex-grow mb-8 relative z-10">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Work Included</h4>
                <ul className="space-y-2">
                  {client.work.slice(0, 7).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                  {client.work.length > 7 && (
                    <li className="text-sm text-gray-400 font-medium pl-6">
                      +{client.work.length - 7} more...
                    </li>
                  )}
                </ul>
              </div>

              {/* Visit Button */}
              <a 
                href={client.youtube} 
                target="_blank" 
                rel="noreferrer"
                className="relative z-10 w-full py-4 mt-auto rounded-2xl bg-gray-50 border border-gray-100 text-gray-900 font-semibold flex items-center justify-center gap-2 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all duration-300 shadow-sm cursor-pointer"
              >
                Visit Channel
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsWorkedWith;
