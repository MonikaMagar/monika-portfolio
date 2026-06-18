import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { MapPin, Briefcase, Video, Camera, Sparkles } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "919325509725";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Monika!%20I%20visited%20your%20portfolio%20and%20I'm%20interested%20in%20your%20video%20editing%20services.%20Let's%20discuss%20my%20project.`;
  const callUrl = `tel:+${phoneNumber}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-[99]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originBottomRight: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 mb-4 w-[320px] bg-white/90 backdrop-blur-2xl rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 origin-bottom-right"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#25D366] p-0.5 relative">
                <img 
                  src="/src/assets/profile.png" 
                  alt="Monika Magar" 
                  className="w-full h-full rounded-full object-cover bg-gray-100"
                />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-white rounded-full"></div>
              </div>
              <div>
                <h4 className="font-display font-bold text-gray-900 text-lg flex items-center gap-1">
                  Monika Magar <Sparkles size={14} className="text-purple-500" />
                </h4>
                <div className="text-xs font-semibold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full inline-block mt-1">
                  Usually replies in minutes
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Video size={16} className="text-purple-500" />
                <span>Creative Video Editor</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Camera size={16} className="text-blue-500" />
                <span>Videographer</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin size={16} className="text-red-500" />
                <span>Pune, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Briefcase size={16} className="text-[#25D366]" />
                <span className="font-medium text-gray-900">Available for Freelance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium flex items-center justify-center gap-2 shadow-sm transition-colors text-sm"
              >
                <FaWhatsapp size={18} />
                Chat on WhatsApp
              </a>
              <a 
                href={callUrl}
                className="w-full py-3 rounded-xl bg-gray-50 border border-gray-100 hover:bg-gray-100 text-gray-900 font-medium flex items-center justify-center gap-2 transition-colors text-sm"
              >
                <FaPhoneAlt size={14} />
                Call Now (+91 9325509725)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] cursor-pointer overflow-hidden z-10"
        onClick={(e) => {
          // If on mobile and popup isn't showing, prevent default to just show popup first
          if (window.innerWidth < 768 && !isHovered) {
            e.preventDefault();
            setIsHovered(true);
          }
        }}
      >
        {/* Pulse animation ring */}
        <motion.div
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.5, 0.2, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2
          }}
          className="absolute inset-0 bg-white rounded-full"
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50 rounded-full"></div>
        
        <FaWhatsapp size={32} className="relative z-10 drop-shadow-md" />
      </motion.a>
      
      {/* Tooltip (only shows when NOT hovering to avoid overlapping the popup, actually the popup replaces the tooltip essentially, but let's add a small tooltip on the left that disappears when popup opens) */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 2 }} // Delayed entrance
            className="absolute right-20 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100 whitespace-nowrap pointer-events-none hidden md:block"
          >
            <div className="text-sm font-semibold text-gray-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              Chat with Monika
            </div>
            {/* Small triangle arrow */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-gray-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingWhatsApp;
