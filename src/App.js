import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StatsSection from './components/StatsSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Team members data
  const teamMembers = [
    {
      name: "Pranav Raj Wardhan",
      role: "UI/UX designer",
      image: "Pranav.jpg"
    },
    {
      name: "Anwesha Banerjee",
      role: "Data Scientist",
      image: "anwesha photo.jpg"
    },
    {
      name: "Dipanjana Pal",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "D Arun Kumar",
      role: "Backend Developer",
      image: "d arun photo.jpg"
    },
    {
      name: "Manish Kumar Shaw",
      role: "GIT push GIT pull",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const feedbackSuggestions = [
    "Keep your elbow higher during the swing",
    "Follow through completely after contact",
    "Rotate your hips more for additional power",
    "Keep your eyes on the ball throughout the swing",
    "Maintain a balanced stance throughout"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-12">
              <h1 className="text-5xl font-bold text-indigo-800 mb-4">Bahuballa</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Revolutionizing cricket training with AI-powered swing analysis and real-time feedback
              </p>
            </section>

            <StatsSection />
            
            {/* Unity Game Section */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Interactive Training Game</h2>
              <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-xl mb-4">Unity Game Would Be Embedded Here</p>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded">
                    Launch Game
                  </button>
                </div>
              </div>
            </section>

            {/* Camera Feed Section */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Live Posture Tracking</h2>
              <div className="bg-gray-800 h-96 rounded-lg flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-xl mb-4">Live Camera Feed Would Appear Here</p>
                  <div className="w-64 h-48 bg-gray-700 mx-auto flex items-center justify-center">
                    <span className="text-gray-400">Camera Preview</span>
                  </div>
                </div>
              </div>
            </section>

            {/* AI Feedback Section */}
            <section className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">AI Coaching Feedback</h2>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">Recommendations for Improvement:</h3>
                <ul className="list-disc list-inside space-y-2">
                  {feedbackSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-gray-700">{suggestion}</li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        )}

        {/* About Us Section */}
        {activeSection === 'about' && (
          <section className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">About Smart Bat</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Smart Bat is an innovative cricket training system that combines sensor technology with artificial intelligence
                to provide real-time feedback on batting technique. Our system tracks swing metrics, body posture, and ball contact
                to help players improve their performance.
              </p>
              <p>
                Developed by a team of sports scientists, AI experts, and professional cricket coaches, Smart Bat offers
                personalized training recommendations based on your unique swing characteristics.
              </p>
              <p>
                Whether you're a beginner learning the basics or a professional refining your technique, Smart Bat provides
                the insights you need to take your game to the next level.
              </p>
            </div>
          </section>
        )}

        {/* Contact Us Section */}
        {activeSection === 'contact' && (
          <section className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Contact Us</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg"
              >
                Send Message
              </button>
            </form>
          </section>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center bg-indigo-50 p-4 rounded-lg">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* README Section */}
        {activeSection === 'readme' && (
          <section className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Smart Bat Documentation</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Overview</h3>
                <p>
                  Smart Bat is an advanced cricket training system that uses inertial measurement units (IMUs) and computer vision
                  to analyze batting technique in real-time. The system provides immediate feedback on swing mechanics, body posture,
                  and follow-through to help players improve their performance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Real-time swing metrics (angle, speed, direction)</li>
                  <li>Body posture tracking using computer vision</li>
                  <li>AI-powered coaching recommendations</li>
                  <li>Interactive training games built with Unity</li>
                  <li>Performance history and progress tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">Getting Started</h3>
                <p>
                  To use Smart Bat, simply connect your sensor-equipped bat to the system via Bluetooth, position yourself in view
                  of the camera, and begin your training session. The system will automatically track your swings and provide feedback.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-indigo-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Smart Bat (Bahuballa). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;