import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  const [stats, setStats] = useState({
    direction: 'North-East',
    angle: '45°',
    axis: 'XY',
    angularSpeed: '120 rpm'
  });

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        direction: ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'][Math.floor(Math.random() * 8)],
        angle: `${Math.floor(Math.random() * 360)}°`,
        axis: ['X', 'Y', 'Z', 'XY', 'XZ', 'YZ', 'XYZ'][Math.floor(Math.random() * 7)],
        angularSpeed: `${Math.floor(Math.random() * 200)} rpm`
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Real-time Swing Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Direction</h3>
          <p className="text-4xl font-bold text-indigo-600">{stats.direction}</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Angle</h3>
          <p className="text-4xl font-bold text-indigo-600">{stats.angle}</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Axis</h3>
          <p className="text-4xl font-bold text-indigo-600">{stats.axis}</p>
        </div>
        <div className="bg-indigo-50 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Angular Speed</h3>
          <p className="text-4xl font-bold text-indigo-600">{stats.angularSpeed}</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;