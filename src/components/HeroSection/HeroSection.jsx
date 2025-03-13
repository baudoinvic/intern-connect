

import { ArrowRight, Award, BookOpen, Briefcase, Users } from "lucide-react";
import React from "react";
import heroImage from "../../assets/images/stud2(1).jpg";

import { Link } from "react-router-dom";

function HeroSection() {
 



  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Bridge to Professional Success
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Intern Connect empowers students to discover and secure meaningful
              internships, build professional networks, and launch successful
              careers.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center">
                Find Internships
                <ArrowRight className="ml-2" size={20} />
              </button>
              <Link to="/about">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students working"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}

        {/* Features */}
     
      </div>
    </div>
  );
}

export default HeroSection;