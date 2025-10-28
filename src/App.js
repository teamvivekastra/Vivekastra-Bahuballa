import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  // Auto-rotate feedback suggestions
  useEffect(() => {
    const feedbackSuggestions = [
      "Keep your elbow higher during the swing",
      "Follow through completely after contact",
      "Rotate your hips more for additional power",
      "Keep your eyes on the ball throughout the swing",
      "Maintain a balanced stance throughout",
    ];
    
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbackSuggestions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Team members data with purple gradients
  const teamMembers = [
    { 
      name: "D Arun Kumar", 
      role: "Backend Developer", 
      image: "d_arun.jpg",
      gradient: "from-purple-500 to-violet-600"
    },
    { 
      name: "Pranav Raj Wardhan", 
      role: "UI/UX Designer", 
      image: "Pranav.jpg",
      gradient: "from-fuchsia-500 to-purple-600"
    },
    { 
      name: "Manish Kumar Shaw", 
      role: "Cloud Engineer", 
      image: "manish.png",
      gradient: "from-violet-500 to-purple-700"
    },
    { 
      name: "Anwesha Banerjee", 
      role: "Data Scientist", 
      image: "anwesha photo.jpg",
      gradient: "from-purple-400 to-fuchsia-600"
    },
    { 
      name: "Dipanjana Pal", 
      role: "Frontend Developer", 
      image: "Dipanjana.png.jpeg",
      gradient: "from-indigo-500 to-purple-600"
    },
  ];

  // Section transition variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0f0f23] to-[#1e1b4b] text-gray-200 font-orbitron">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-purple-400/30 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-1 h-1 bg-fuchsia-400/40 rounded-full top-3/4 left-1/3 animate-pulse delay-1000"></div>
        <div className="absolute w-1.5 h-1.5 bg-violet-400/30 rounded-full top-1/3 right-1/4 animate-pulse delay-500"></div>
      </div>

      {/* Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main content */}
      <main className="container mx-auto px-4 py-12 space-y-20 relative z-10">
        <AnimatePresence mode="wait">
          {/* Home Section */}
          {activeSection === "home" && (
            <motion.div
              key="home"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-20"
            >
              {/* Enhanced Hero Section with Pop-up Cricket Animation */}
              <section className="text-center space-y-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  className="space-y-6 relative"
                >
                  {/* Main Title with Pop-up Cricket Animation */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 relative"> 
                    
                    {/* BAHUBALLA Text */}
                    <div className="relative">
                      <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent drop-shadow-2xl relative z-20">
                        BAHUBALLA
                      </h1>
                      
                      {/* Pop-up Cricket Animation Container */}
                      {/* ADJUSTED: Moved the animation container to the right of the h1 */}
                      <motion.div 
                        className="absolute left-full top-1/2 transform -translate-y-1/2 ml-4 md:ml-8 z-30 cricket-popup-container"
                        initial={{ scale: 0, opacity: 0, x: 50 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1, 
                          x: 0,
                          transition: { 
                            delay: 0.5, 
                            type: "spring", 
                            stiffness: 200 
                          }
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="cricket-popup">
                          {/* Animated Cricket Elements */}
                          {/* NOTE: motion.divs here use classes defined in App.css for visual elements */}
                          <motion.div 
                            className="popup-ball"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          <motion.div 
                            className="popup-bat"
                            animate={{
                              rotate: [-10, 10, -10],
                              y: [0, -5, 0]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          <motion.div 
                            className="popup-stumps"
                            animate={{
                              y: [0, -2, 0]
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Glow Effect */}
                          <div className="popup-glow"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 mx-auto rounded-full"></div>
                  <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                    Revolutionizing cricket training with{" "}
                    <span className="text-purple-400 font-semibold">AI-powered swing analysis</span> and{" "}
                    <span className="text-fuchsia-400 font-semibold">real-time biomechanical feedback</span>.
                  </p>
                </motion.div>
                
                {/* CTA Buttons */}
                <motion.div 
                  className="flex gap-4 justify-center flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-xl font-semibold hover:shadow-neon transition-all duration-300 hover:scale-105">
                    Start Training
                  </button>
                </motion.div>
              </section>

              {/* Stats Section */}
              <StatsSection />

              {/* Training Game Section - Enhanced }
              <motion.section 
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-purple-400 rounded-full group-hover:animate-pulse"></div>
                  <h2 className="section-heading text-purple-400">Interactive Training Game</h2>
                </div>
                <div className="bg-gradient-to-br from-[#0c1021] to-[#1a1a2e] h-80 rounded-2xl flex items-center justify-center border border-purple-400/30 group-hover:border-purple-400/50 transition-all">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-purple-400/20 rounded-full flex items-center justify-center">
                      <span className="text-purple-400 text-2xl">🎯</span>
                    </div>
                    <p className="text-lg text-gray-300">Unity-powered Swing Simulation</p>
                    <button className="btn-primary px-8">Launch Game</button>
                  </div>
                </div>
              </motion.section> */}

              {/* Camera Feed Section */}
              <motion.section 
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 bg-fuchsia-400 rounded-full group-hover:animate-pulse"></div>
                  <h2 className="section-heading text-fuchsia-400">Live Posture Tracking</h2>
                </div>
                <div className="bg-gradient-to-br from-[#0c1021] to-[#1a1a2e] h-80 rounded-2xl flex items-center justify-center border border-fuchsia-400/30 group-hover:border-fuchsia-400/50 transition-all">
                  <div className="space-y-6 text-center">
                    <div className="w-20 h-20 mx-auto bg-fuchsia-400/20 rounded-full flex items-center justify-center">
                      <span className="text-fuchsia-400 text-2xl">📷</span>
                    </div>
                    <p className="text-gray-300">AI-Powered Camera Analysis</p>
                    <div className="w-50 h-40 bg-slate-900/50 border border-fuchsia-400/30 mx-auto flex items-center justify-center rounded-xl">
                      <span className="text-gray-400 ">Live Camera Feed</span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Enhanced AI Feedback Section */}
              <motion.section 
                className="glass-card p-8 hover:scale-[1.02] transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <h2 className="section-heading text-purple-400">Project Demo</h2>
                  </div>
                  <span className="text-sm text-gray-400">Real-time Analysis</span>
                </div>
                
                <div className="bg-gradient-to-br from-[#0c1021] to-[#1a1a2e] p-8 rounded-2xl border border-purple-400/30 flex flex-col items-center justify-center">
  <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-purple-400/40 shadow-lg">
    <video
    className="w-full h-full object-cover"
    controls
    autoPlay
    loop
    muted
  >
    <source src="/videos/entry.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  </div>
  <p className="text-gray-300 mt-6 text-lg text-center">
    Watch how our AI analyzes your swing in real-time and gives instant feedback.
  </p>
</div>

              </motion.section>
            </motion.div>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <motion.section
              key="about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-card p-10 max-w-4xl mx-auto"
            >
              <h2 className="section-heading text-purple-400 mb-6">About Bahuballa</h2>
              <p className="section-text text-lg leading-relaxed">
                Bahuballa combines <span className="text-purple-300">IMU sensors, computer vision, and AI</span> to analyze cricket swings and provide actionable coaching insights in real-time. 
                Our system adapts to your skill level, ensuring training is always personalized and effective for players of all abilities.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-purple-500/10 rounded-xl border border-purple-400/20">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="text-purple-300 font-semibold">Precision Tracking</h3>
                  <p className="text-gray-400 text-sm">Millimeter-accurate swing analysis</p>
                </div>
                <div className="text-center p-4 bg-fuchsia-500/10 rounded-xl border border-fuchsia-400/20">
                  <div className="text-2xl mb-2">🤖</div>
                  <h3 className="text-fuchsia-300 font-semibold">AI Coaching</h3>
                  <p className="text-gray-400 text-sm">Personalized real-time feedback</p>
                </div>
                <div className="text-center p-4 bg-violet-500/10 rounded-xl border border-violet-400/20">
                  <div className="text-2xl mb-2">📊</div>
                  <h3 className="text-violet-300 font-semibold">Progress Analytics</h3>
                  <p className="text-gray-400 text-sm">Track improvement over time</p>
                </div>
              </div>
            </motion.section>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <motion.section
              key="contact"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-card p-10 max-w-2xl mx-auto"
            >
              <h2 className="section-heading text-purple-400 mb-8">Contact Us</h2>
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    className="input-field" 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="input-field" 
                  />
                </div>
                <div>
                  <textarea 
                    rows="4" 
                    placeholder="Your message" 
                    className="input-field" 
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg">
                  Send Message
                </button>
              </form>
            </motion.section>
          )}

          {/* Team Section */}
          {activeSection === "team" && (
            <motion.section
              key="team"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="text-center mb-12">
                <h2 className="section-heading text-purple-400 mb-4">Meet Our Team</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                  Passionate engineers and designers building the future of sports technology
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center bg-gradient-to-b from-[#101b3b]/80 to-[#1a1a2e]/80 backdrop-blur-lg p-6 rounded-2xl border border-purple-400/20 shadow-lg hover:shadow-purple-400/30 transition-all duration-300 group"
                  >
                    <div className="relative mx-auto mb-4">
                      <div className={`w-28 h-28 mx-auto overflow-hidden rounded-2xl bg-gradient-to-br ${member.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-gray-900 rounded-[14px] overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {member.role}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Readme Section */}
          {activeSection === "readme" && (
            <motion.section
              key="readme"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="glass-card p-10 max-w-4xl mx-auto"
            >
              <h2 className="section-heading text-purple-400 mb-8">📘 Bahuballa Documentation</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-6 rounded-2xl border border-purple-400/20">
                  <h3 className="text-purple-300 font-semibold text-xl mb-4">Real-time Swing Metrics</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Capture precise data on <span className="text-fuchsia-300">angle, speed, and direction</span> of every swing, 
                    updated live within milliseconds for instant performance feedback.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10 p-6 rounded-2xl border border-fuchsia-400/20">
                  <h3 className="text-fuchsia-300 font-semibold text-xl mb-4">Body Posture Tracking</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AI-powered vision technology analyzes stance and movement, ensuring <span className="text-violet-300">optimal posture</span> 
                    for consistency and injury prevention during every swing.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 p-6 rounded-2xl border border-violet-400/20">
                  <h3 className="text-violet-300 font-semibold text-xl mb-4">ML-Powered Coaching</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Get <span className="text-purple-300">personalized recommendations</span> from our adaptive machine learning engine, 
                    designed to improve performance with every training session.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 p-6 rounded-2xl border border-purple-400/20">
                  <h3 className="text-purple-300 font-semibold text-xl mb-4">Immersive Training Games</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Interactive Unity-powered simulations make practice engaging, helping athletes 
                    <span className="text-fuchsia-300"> train smarter while having fun</span> with gamified challenges.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-fuchsia-500/10 to-violet-500/10 p-6 rounded-2xl border border-fuchsia-400/20">
                  <h3 className="text-fuchsia-300 font-semibold text-xl mb-4">Performance Tracking</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Log and review your swing history, compare past sessions, and 
                    <span className="text-violet-300"> track progress over time</span> with intuitive analytics and visual reports.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center p-6 bg-gradient-to-r from-purple-500/5 to-fuchsia-500/5 rounded-2xl border border-purple-400/10">
                <p className="text-gray-400 text-lg italic">
                  🚀 Built to combine sports, AI, and innovation — <span className="text-purple-300 font-semibold">Bahuballa</span> is not just a tool, 
                  it's your personal digital cricket coach.
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-t from-[#050d1f] to-transparent text-gray-400 py-12 mt-20 border-t border-purple-400/20 text-center relative z-10">
        <div className="container mx-auto px-4">
          <motion.p 
            className="tracking-wide text-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            © {new Date().getFullYear()} Made by <span className="text-purple-400 font-semibold">Team Vivekastra</span>
          </motion.p>
          <p className="text-gray-500 text-sm">
            Revolutionizing Cricket with AI & Innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;