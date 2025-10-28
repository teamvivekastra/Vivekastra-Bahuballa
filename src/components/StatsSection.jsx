import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation, Gauge, Axis3D, Activity, Sparkles } from "lucide-react";

const StatsSection = () => {
  const [stats, setStats] = useState({
    direction: "North-East",
    angle: "45°",
    axis: "XY",
    angularSpeed: "120 rpm",
  });

  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        direction: [
          "North", "North-East", "East", "South-East",
          "South", "South-West", "West", "North-West"
        ][Math.floor(Math.random() * 8)],
        angle: `${Math.floor(Math.random() * 360)}°`,
        axis: ["X", "Y", "Z", "XY", "XZ", "YZ", "XYZ"][
          Math.floor(Math.random() * 7)
        ],
        angularSpeed: `${Math.floor(Math.random() * 200 + 50)} rpm`,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { 
      label: "Direction", 
      value: stats.direction, 
      icon: <Navigation className="filter drop-shadow-lg" size={28} />,
      gradient: "from-purple-500 to-fuchsia-500",
      color: "text-purple-300",
      delay: 0.1
    },
    { 
      label: "Swing Angle", 
      value: stats.angle, 
      icon: <Gauge className="filter drop-shadow-lg" size={28} />,
      gradient: "from-fuchsia-500 to-violet-500",
      color: "text-fuchsia-300",
      delay: 0.2
    },
    { 
      label: "Rotation Axis", 
      value: stats.axis, 
      icon: <Axis3D className="filter drop-shadow-lg" size={28} />,
      gradient: "from-violet-500 to-purple-500",
      color: "text-violet-300",
      delay: 0.3
    },
    { 
      label: "Angular Speed", 
      value: stats.angularSpeed, 
      icon: <Activity className="filter drop-shadow-lg" size={28} />,
      gradient: "from-purple-600 to-fuchsia-600",
      color: "text-purple-200",
      delay: 0.4
    },
  ];

  // Floating particles animation
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  // Rotating orb animation
  const RotatingOrb = () => (
    <motion.div
      className="absolute -top-20 -right-20 w-40 h-40 opacity-10"
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full blur-xl" />
    </motion.div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const valueVariants = {
    initial: { 
      scale: 0.5, 
      opacity: 0,
      textShadow: "0px 0px 0px rgba(168, 85, 247, 0)"
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      textShadow: [
        "0px 0px 0px rgba(168, 85, 247, 0)",
        "0px 0px 20px rgba(168, 85, 247, 0.8)",
        "0px 0px 0px rgba(168, 85, 247, 0)"
      ],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="stats-section"
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 1, type: "spring", stiffness: 50 }}
      className="relative bg-gradient-to-br from-black/80 via-[#0f0f23] to-[#1e1b4b] backdrop-blur-2xl rounded-3xl shadow-2xl shadow-purple-500/30 p-10 border border-purple-400/40 hover:shadow-purple-500/40 transition-all duration-700 overflow-hidden group"
    >
      {/* Background Animations */}
      <FloatingParticles />
      <RotatingOrb />
      
      {/* Animated Grid Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Section Header */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-3 mb-4"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="text-purple-400" size={32} />
          <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent tracking-tight drop-shadow-2xl">
            Real-time Swing Metrics
          </h2>
          <Sparkles className="text-purple-400" size={32} />
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-violet-600 rounded-full mb-4 mx-auto w-48"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-400 text-xl font-light"
        >
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {statCards.map((stat, index) => (
          <motion.div
            key={`${stat.label}-${stat.value}`}
            variants={cardVariants}
            whileHover="hover"
            className="relative group perspective-1000"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#0f0f23]/90 to-[#1a1a2e]/90 border-2 border-purple-400/30 rounded-3xl p-8 text-center shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-500 backdrop-blur-lg z-10 overflow-hidden transform-style-preserve-3d">
              
              {/* Animated Background Pattern */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-full h-full bg-gradient-conic from-purple-500 via-transparent to-fuchsia-500" />
              </motion.div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"
                whileHover={{ scale: 1.1 }}
              />

              {/* Icon Container */}
              <motion.div 
                className="relative mb-6"
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  animate={{
                    rotateY: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-20 blur-md"
                />
                <div className={`relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-2xl shadow-purple-500/30 backdrop-blur-sm`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
              </motion.div>

              {/* Label */}
              <motion.h3 
                className={`text-xl font-bold ${stat.color} mb-4 tracking-wider drop-shadow-lg`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.label}
              </motion.h3>

              {/* Animated Value */}
              <div className="min-h-[60px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={stat.value}
                    variants={valueVariants}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    className="text-4xl font-black text-white drop-shadow-2xl"
                  >
                    {stat.value}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Live Indicator */}
              <motion.div 
                className="flex items-center justify-center mt-6 space-x-2"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full shadow-lg shadow-green-500/50" />
                <span className="text-green-400 text-sm font-bold tracking-wider">LIVE</span>
              </motion.div>

              {/* Particle Burst on Hover */}
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{
                      scale: [0, 2, 0],
                      opacity: [0, 1, 0],
                      x: Math.cos((i * 60) * Math.PI / 180) * 40,
                      y: Math.sin((i * 60) * Math.PI / 180) * 40,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Outer Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 -z-10"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Note */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center mt-12 pt-8 border-t border-purple-400/20 relative z-10"
      >
        <motion.p 
          className="text-gray-500 text-sm font-light"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🔄 Updated every 3 seconds • 🎯 Millimeter precision • 🤖 AI-powered analytics
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default StatsSection;