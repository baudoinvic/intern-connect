

import { BookOpen, Building, Clock, Globe, Heart, Mail, MapPin, Phone, Users } from "lucide-react";
import React from "react";
import storyImage from "../../assets/images/4.jpg";
import sarah from "../../assets/images/1.jpg";
import michael from "../../assets/images/3.jpg";
import emily from "../../assets/images/2.jpg";

function AboutPage() {
  const mission = [
    {
      icon: <Users size={24} />,
      title: "Student Success",
      description: "Empowering students to reach their full potential through meaningful professional experiences"
    },
    {
      icon: <Building size={24} />,
      title: "Industry Connection",
      description: "Building bridges between academia and industry to create valuable opportunities"
    },
    {
      icon: <Globe size={24} />,
      title: "Global Network",
      description: "Creating a worldwide network of opportunities for students and companies"
    }
  ];

  const team = [
    {
      name: "Therese",
      role: "Founder & CEO",
      image: sarah,
      description: "Former tech executive with 15+ years experience in education technology"
    },
    {
      name: "William",
      role: "Head of Partnerships",
      image: michael,
      description: "Industry veteran specializing in corporate-academic relationships"
    },
    {
      name: "Dr. Apolline",
      role: "Academic Director",
      image: emily,
      description: "PhD in Career Development with focus on student mentorship"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Foundation",
      description: "Campus Connect was founded with a vision to transform student career development"
    },
    {
      year: "2020",
      title: "Platform Launch",
      description: "Launched our digital platform connecting students with top companies"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 50+ countries and partnered with leading universities"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced AI-powered matching system for better internship placements"
    }
  ];

  const contact = {
    email: "contact@campusconnect.com",
    phone: "+250781299877",
    address: "KG 185 st 5, Kigali, Rwanda"
  };

  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}

        {/* Mission Section */}

        {/* Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {" "}
                About Campus Connect
              </h2>
              <p className="text-gray-600 mb-4">
                Campus Connect aims to modernize internship management, bridging
                the gap between students, institutions, and companies through a
                seamless digital experience.We're on a mission to revolutionize
                how students connect with professional opportunities and launch
                their careers.
              </p>
              <p className="text-gray-600">
                Today, we've grown into a global platform that has helped
                thousands of students launch their careers and enabled companies
                to build their future workforce through meaningful internships
                and early career programs.
              </p>
            </div>
            <div className="flex-1">
              <img
                src={storyImage}
                alt="Our Story"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mission.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-blue-500 bg-blue-50 p-3 rounded-full w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;