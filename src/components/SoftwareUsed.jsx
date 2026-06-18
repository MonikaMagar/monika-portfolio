import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Video, PenTool, Layout, MonitorPlay, FileVideo, Mic, Wand2, Globe } from 'lucide-react';

const softwareList = [
  { name: 'Premiere Pro', icon: <MonitorPlay size={28} />, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'After Effects', icon: <Video size={28} />, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Photoshop', icon: <ImageIcon size={28} />, color: 'text-blue-500', bg: 'bg-blue-50' },
  { name: 'Illustrator', icon: <PenTool size={28} />, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Canva', icon: <Layout size={28} />, color: 'text-teal-500', bg: 'bg-teal-50' },
  { name: 'CapCut', icon: <FileVideo size={28} />, color: 'text-gray-900', bg: 'bg-gray-100' },
  { name: 'DaVinci Resolve', icon: <MonitorPlay size={28} />, color: 'text-red-500', bg: 'bg-red-50' },
  { name: 'ChatGPT', icon: <Sparkles size={28} />, color: 'text-green-600', bg: 'bg-green-50' },
  { name: 'Runway ML', icon: <Wand2 size={28} />, color: 'text-purple-500', bg: 'bg-purple-50' },
  { name: 'ElevenLabs', icon: <Mic size={28} />, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { name: 'Google Workspace', icon: <Globe size={28} />, color: 'text-blue-400', bg: 'bg-blue-50' }
];

// Fallback icon since ImageIcon isn't in lucide-react directly
function ImageIcon(props) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>;
}

const SoftwareUsed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Software I Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My toolkit for bringing creative visions to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {softwareList.map((software, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 shadow-sm border border-gray-100 hover:shadow-[0_15px_30px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${software.bg} ${software.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                {software.icon}
              </div>
              <span className="text-sm font-semibold text-gray-700 font-display">
                {software.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareUsed;
