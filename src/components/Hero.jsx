import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center z-10">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-purple-50 text-purple-700 mb-8 font-medium text-sm shadow-sm"
          >
            <Sparkles size={16} />
            <span>ABOUT ME</span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 2.4 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900 leading-[1.1]"
            >
              Turning Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Stunning Visual</span> Stories.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="text-lg md:text-xl text-gray-600 font-normal mb-10 leading-relaxed max-w-xl"
          >
            Hi, I'm <strong className="font-semibold text-gray-900">Monika Magar</strong>, a Creative Video Editor, Social Media Manager, and Videographer who helps brands create engaging digital experiences through cinematic editing, creative storytelling, and impactful social media content.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              className="px-8 py-4 rounded-full bg-gray-900 hover:bg-black text-white font-medium shadow-xl shadow-gray-900/20 hover:shadow-gray-900/30 hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-2"
            >
              View Portfolio <ArrowRight size={18} />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 font-medium hover:-translate-y-1 transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              Download Resume <Download size={18} />
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="px-8 py-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-900 font-medium hover:-translate-y-1 transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 2.6 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Animated pastel gradient circles behind */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 translate-x-10 -translate-y-10"
          ></motion.div>

          {/* Profile Image Card */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full max-w-[450px] aspect-[4/5] rounded-[32px] p-2 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden bg-gray-100">
              <img
                src={profileImg}
                alt="Monika Magar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating gradient border decoration */}
            <div className="absolute -inset-[1px] rounded-[33px] bg-gradient-to-b from-purple-400 to-blue-400 opacity-20 -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
