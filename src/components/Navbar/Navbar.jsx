// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
//       <div className="text-2xl font-bold text-blue-600">Campus Connect</div>
//       <Link to="/login">
//         <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
//           Login
//         </button>
//       </Link>
//     </nav>
//   );
// }

// export default Navbar;

import { BookOpen, Briefcase, Info, LogIn, Menu, Users, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", icon: <Info size={20} />, href: "/about" },
    { name: "Students", icon: <Users size={20} />, href: "/students" },
    { name: "Internships", icon: <Briefcase size={20} />, href: "/internships" },
    { name: "Resources", icon: <BookOpen size={20} />, href: "/resources" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Campus Connect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/login"
              className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn size={20} />
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

