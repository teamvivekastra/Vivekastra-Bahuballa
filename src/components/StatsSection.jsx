import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const [stats, setStats] = useState({
    direction: "North-East",
    angle: "45°",
    axis: "XY",
    angularSpeed: "120 rpm",
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        direction: [
          "North",
          "North-East",
          "East",
          "South-East",
          "South",
          "South-West",
          "West",
          "North-West",
        ][Math.floor(Math.random() * 8)],
        angle: `${Math.floor(Math.random() * 360)}°`,
        axis: ["X", "Y", "Z", "XY", "XZ", "YZ", "XYZ"][
          Math.floor(Math.random() * 7)
        ],
        angularSpeed: `${Math.floor(Math.random() * 200)} rpm`,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { label: "Direction", value: stats.direction },
    { label: "Angle", value: stats.angle },
    { label: "Axis", value: stats.axis },
    { label: "Angular Speed", value: stats.angularSpeed },
  ];

  return (
    <section className="bg-[#101b3b]/80 backdrop-blur-xl rounded-2xl shadow-lg shadow-cyan-400/30 p-10 border border-cyan-400/20 hover:shadow-cyan-400/50 transition">
      <h2 className="text-3xl font-extrabold text-center text-cyan-400 mb-12 drop-shadow tracking-wide">
        Real-time Swing Metrics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statCards.map((stat, index) => (
          <div
            key={index}
            className="relative group bg-gradient-to-br from-[#0c1021] to-[#101b3b] border border-cyan-400/20 rounded-xl p-6 text-center shadow-lg shadow-cyan-400/20 hover:scale-105 hover:shadow-cyan-400/40 transition-transform duration-300"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <h3 className="text-lg font-semibold text-cyan-300 mb-3 tracking-wider drop-shadow">
              {stat.label}
            </h3>
            <p className="text-4xl font-extrabold text-white drop-shadow-md animate-pulse">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
