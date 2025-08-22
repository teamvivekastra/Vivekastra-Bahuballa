import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Team members data
  const teamMembers = [
    { name: "D Arun Kumar", role: "Backend Developer", image: "d_arun.jpg" },
    { name: "Pranav Raj Wardhan", role: "UI/UX Designer", image: "Pranav.jpg" },
    { name: "Manish Kumar Shaw", role: "Cloud Engineer", image: "manish.png" },
    { name: "Anwesha Banerjee", role: "Data Scientist", image: "anwesha photo.jpg" },
    { name: "Dipanjana Pal", role: "Frontend Developer", image: "dipanjana.jpg" },
    
    
  ];

  const feedbackSuggestions = [
    "Keep your elbow higher during the swing",
    "Follow through completely after contact",
    "Rotate your hips more for additional power",
    "Keep your eyes on the ball throughout the swing",
    "Maintain a balanced stance throughout",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#050d1f] to-[#0a0f2c] text-gray-200 font-orbitron">
      {/* Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content */}
      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Home Section */}
        {activeSection === "home" && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-20"
          >
            {/* Hero Section */}
            <section className="text-center space-y-6">
              <motion.h1
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_25px_#00f2ff] animate-pulse"
              >
                Bahuballa
              </motion.h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Revolutionizing cricket training with{" "}
                <span className="text-cyan-400 font-semibold">AI-powered swing analysis</span> and{" "}
                <span className="text-indigo-400 font-semibold">real-time feedback</span>.
              </p>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Training Game Section */}
            <section className="glass-card p-8 hover:scale-[1.02] transition">
              <h2 className="section-heading text-cyan-400">Interactive Training Game</h2>
              <div className="bg-[#0c1021] h-80 rounded-xl flex items-center justify-center border border-cyan-400/30">
                <div className="text-center space-y-4">
                  <p className="text-lg text-gray-300">Unity Game Placeholder</p>
                  <button className="btn-primary">Launch Game</button>
                </div>
              </div>
            </section>

            {/* Camera Feed Section */}
            <section className="glass-card p-8 hover:scale-[1.02] transition">
              <h2 className="section-heading text-indigo-400">Live Posture Tracking</h2>
              <div className="bg-[#0c1021] h-80 rounded-xl flex items-center justify-center border border-indigo-400/30">
                <div className="space-y-4 text-center">
                  <p className="text-gray-300">Camera Feed Placeholder</p>
                  <div className="w-64 h-48 bg-slate-900 border border-indigo-400/30 mx-auto flex items-center justify-center rounded-lg">
                    <span className="text-gray-500">Camera Preview</span>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Feedback Section */}
            <section className="glass-card p-8 hover:scale-[1.02] transition">
              <h2 className="section-heading text-cyan-400">AI Coaching Feedback</h2>
              <div className="bg-[#0c1021] p-6 rounded-lg border border-cyan-400/30">
                <h3 className="text-xl font-semibold text-indigo-300 mb-4">Recommendations:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {feedbackSuggestions.map((suggestion, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {suggestion}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </section>
          </motion.div>
        )}

        {/* About Section */}
        {activeSection === "about" && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 max-w-4xl mx-auto"
          >
            <h2 className="section-heading text-cyan-400">About Smart Bat</h2>
            <p className="section-text">
              Smart Bat combines IMUs, sensors, and AI to analyze swings and provide actionable coaching insights in
              real-time. It adapts to your skill level, ensuring training is always personalized and effective.
            </p>
          </motion.section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 max-w-2xl mx-auto"
          >
            <h2 className="section-heading text-cyan-400">Contact Us</h2>
            <form className="space-y-6">
              <input type="text" placeholder="Your name" className="input-field" />
              <input type="email" placeholder="Your email" className="input-field" />
              <textarea rows="4" placeholder="Your message" className="input-field" />
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </motion.section>
        )}

        {/* Team Section */}
        {activeSection === "team" && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading text-cyan-400">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center bg-[#101b3b]/80 backdrop-blur-lg p-6 rounded-xl border border-cyan-400/20 shadow-lg hover:shadow-cyan-400/60"
                >
                  <div className="w-28 h-28 mx-auto mb-4 overflow-hidden rounded-full border-4 border-cyan-400 shadow-lg">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-cyan-300">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Readme Section */}
        {activeSection === "readme" && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-10 max-w-4xl mx-auto">
           <h2 className="section-heading text-cyan-400 mb-6">📘 Smart Bat Documentation</h2>
           <ul className="list-disc list-inside space-y-4 text-gray-300 text-lg leading-relaxed">
            <li>
              <span className="text-cyan-300 font-semibold">Real-time Swing Metrics:</span>{" "}
              Capture precise data on <span className="text-indigo-300">angle, speed, and direction</span> of every swing, updated live within milliseconds.
            </li>
            <li>
                <span className="text-cyan-300 font-semibold">Body Posture Tracking:</span>{" "}
              AI-powered vision technology analyzes stance and movement, ensuring <span className="text-indigo-300">optimal posture</span> for consistency and injury prevention.
            </li>
            <li>
                <span className="text-cyan-300 font-semibold">ML-Powered Coaching:</span>{" "}
              Get <span className="text-indigo-300">personalized recommendations</span> from our adaptive machine learning engine, designed to improve performance with every session.
            </li>
            <li>
                <span className="text-cyan-300 font-semibold">Immersive Training Games:</span>{" "}
              Interactive Unity-powered simulations make practice engaging, helping athletes <span className="text-indigo-300">train smarter while having fun</span>.
            </li>
            <li>
                <span className="text-cyan-300 font-semibold">Performance Tracking:</span>{" "}
              Log and review your swing history, compare past sessions, and <span className="text-indigo-300">track progress over time</span> with intuitive analytics.
            </li>
          </ul>
          <p className="mt-8 text-gray-400 text-center italic">
            🚀 Built to combine sports, AI, and innovation — <span className="text-cyan-300">Smart Bat</span> is not just a tool, it’s your personal digital coach. 
          </p>
          </motion.section>
        )}
      </main>

      {/* Futuristic Footer */}
      <footer className="bg-[#050d1f] text-gray-400 py-8 mt-20 border-t border-cyan-400/20 text-center">
        <p className="tracking-wide">
          © {new Date().getFullYear()} Made by Team Vivekastra.
        </p>
      </footer>
    </div>
  );
}

export default App;
