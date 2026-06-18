import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;
const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white"
        >
          <div className="font-display text-4xl md:text-6xl font-bold flex items-center">
            <CountUp 
              start={0} 
              end={100} 
              duration={2} 
              onEnd={() => {
                setTimeout(() => {
                  setIsLoading(false);
                  onLoadingComplete();
                }, 500);
              }}
            />
            <span className="text-purple-500 ml-1">%</span>
          </div>
          <div className="mt-4 text-sm tracking-widest uppercase text-gray-400">
            Loading Experience
          </div>
          <motion.div 
            className="absolute bottom-10 w-48 h-[2px] bg-white/10 overflow-hidden"
          >
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-purple-500"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
