import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Experience', to: 'experience' },
  { name: 'Brands', to: 'brands' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-light' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="home" 
          smooth={true} 
          duration={800}
          className="font-display font-bold text-2xl tracking-tight cursor-pointer z-50 text-gray-900"
        >
          MONIKA<span className="text-purple-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="ml-4 px-6 py-2.5 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-purple-600 hover:text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-gray-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-display font-medium text-gray-900 hover:text-purple-600 cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
