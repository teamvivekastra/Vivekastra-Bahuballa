import React from 'react';
import { motion } from "framer-motion";
import { Cpu, Home, Info, Mail, Users, FileText } from "lucide-react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { key: 'home', label: 'Home', icon: <Home size={18}/> },
    { key: 'about', label: 'About', icon: <Info size={18}/> },
    { key: 'contact', label: 'Contact', icon: <Mail size={18}/> },
    { key: 'team', label: 'Team', icon: <Users size={18}/> },
    { key: 'readme', label: 'README', icon: <FileText size={18}/> },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-cyan-400/20 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 text-cyan-400 font-extrabold text-2xl tracking-wide"
        >
          <Cpu className="animate-pulse text-indigo-400" size={24} />
          <span>Vivekastra Unleashes Bahuballa</span>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <motion.button
              key={item.key}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection(item.key)}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition ${
                activeSection === item.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50"
              }`}
            >
              {item.icon}
              <span className="capitalize">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
