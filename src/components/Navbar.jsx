import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'about', 'contact', 'team', 'readme'];
  
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Smart Bat</div>
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize ${activeSection === item ? 'text-indigo-600 font-bold' : 'text-gray-600 hover:text-indigo-500'}`}
              >
                {item === 'readme' ? 'README' : item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;