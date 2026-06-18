import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white flex justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl rounded-[40px] bg-gradient-to-br from-gray-900 to-purple-900 p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Animated Background Mesh */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-30 -translate-x-1/2 -translate-y-1/2"
        ></motion.div>
        
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full mix-blend-screen filter blur-[150px] opacity-20 translate-x-1/3 translate-y-1/3"
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 tracking-tight max-w-3xl">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Amazing</span> Together.
          </h2>
          
          <p className="text-xl text-purple-100/80 max-w-2xl mb-10 leading-relaxed font-light">
            Whether you're a startup, business, creator, or law firm, I can help transform your ideas into engaging videos and compelling digital content.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all cursor-pointer flex items-center gap-2">
              Hire Me <ArrowRight size={18} />
            </button>
            
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              View My Work
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
