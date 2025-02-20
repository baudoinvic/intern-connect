

import { ArrowRight, Award, BookOpen, Briefcase, Users } from "lucide-react";
import React from "react";
import heroImage from "../../assets/images/stud2(1).jpg";
// import company1 from "../../assets/images/stud2(2).jpg";
// import company2 from "../../assets/images/stud2(3).jpg";
// import company3 from "../../assets/images/stud2(4).jpg";
// import company4 from "../../assets/images/stud2(5).jpg";
// import company5 from "../../assets/images/stud2(6).jpg";
import { Link } from "react-router-dom";

function HeroSection() {
  const features = [
    {
      icon: <Briefcase size={24} />,
      title: "Internship Matching",
      description: "Connect with top companies and find your perfect internship opportunity"
    },
    {
      icon: <Users size={24} />,
      title: "Mentor Network",
      description: "Get guidance from industry professionals and experienced alumni"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Resource Hub",
      description: "Access career resources, training materials, and interview prep guides"
    },
    {
      icon: <Award size={24} />,
      title: "Skills Development",
      description: "Track your progress and earn certifications for your achievements"
    }
  ];

  const stats = [
    { value: "500+", label: "Partner Companies" },
    { value: "10,000+", label: "Successful Placements" },
    { value: "95%", label: "Placement Rate" },
    { value: "4.8/5", label: "Student Satisfaction" }
  ];

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
              Campus Connect empowers students to discover and secure meaningful
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="text-blue-500 mb-4 bg-blue-50 p-3 rounded-full w-fit group-hover:bg-blue-100 transition-colors duration-200">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;