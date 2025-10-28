import React from 'react';
import { motion } from "framer-motion";
import { Cpu, Home, Info, Mail, Users, FileText, Sparkles } from "lucide-react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { key: 'home', label: 'Home', icon: <Home size={18} /> },
    { key: 'about', label: 'About', icon: <Info size={18} /> },
    { key: 'contact', label: 'Contact', icon: <Mail size={18} /> },
    { key: 'team', label: 'Team', icon: <Users size={18} /> },
    { key: 'readme', label: 'Docs', icon: <FileText size={18} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600 bg-clip-text font-extrabold text-2xl tracking-wider"
        >
          <div className="relative">
            <Cpu className="text-purple-400 animate-pulse" size={28} />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 border-2 border-purple-400/30 rounded-full"
            />
          </div>
          <span className="flex items-center gap-2">
            Vivekastra 
          </span>
        </motion.div>

        {/* Enhanced Navigation Links */}
        <div className="flex space-x-2 bg-black/40 backdrop-blur-lg rounded-2xl p-1 border border-purple-400/10">
          {navItems.map((item, index) => (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(192, 132, 252, 0.1))"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.key)}
              className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 font-semibold ${
                activeSection === item.key
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/25"
                  : "text-gray-400 hover:text-purple-300 hover:bg-purple-500/10"
              }`}
            >
              {item.icon}
              <span className="capitalize">{item.label}</span>
              
              {/* Active indicator */}
              {activeSection === item.key && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 border border-purple-400/50 rounded-xl shadow-inner shadow-purple-400/20"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center space-x-2 text-sm"
        >
          <div className="flex items-center space-x-1 px-3 py-1 bg-purple-500/10 border border-purple-400/20 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            <span className="text-green-400 font-semibold">Live</span>
            <Sparkles size={14} className="text-purple-400" />
          </div>
        </motion.div>
      </div>

      {/* Animated Border Bottom */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, transparent, #a855f7, transparent)",
            "linear-gradient(90deg, transparent, #c084fc, transparent)",
            "linear-gradient(90deg, transparent, #a855f7, transparent)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="h-px w-full"
      />
    </motion.nav>
  );
};

export default Navbar;