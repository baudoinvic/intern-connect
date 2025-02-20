

import {
    Bell,
    Briefcase,
    CheckCircle,
    ChevronRight,
    Clock,
    FileText,
    LogOut,
    Menu,
    X
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/DSC_1168.JPG";

function StudentDashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentInfo = {
    name: "William",
    image: profileImage
  };

  const menuItems = [
    { name: "Internship Listings", icon: <Briefcase size={20} />, path: "/student/listings" },
    { name: "Applications", icon: <FileText size={20} />, path: "/student/applications" },
    { name: "Current Internship", icon: <Clock size={20} />, path: "/student/current" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/student/notifications", badge: 3 },
  ];

  const statsCards = [
    { 
      title: "Current Internship", 
      status: "Active at TechCorp",
      icon: <Briefcase size={24} />, 
      color: "bg-blue-500",
      details: "Frontend Developer • 3 months remaining"
    },
    { 
      title: "Applications", 
      status: "2 Pending",
      icon: <FileText size={24} />, 
      color: "bg-yellow-500",
      details: "4 Total • 1 Accepted • 1 Rejected"
    },
    { 
      title: "Available Internships", 
      status: "12 New",
      icon: <Clock size={24} />, 
      color: "bg-green-500",
      details: "Matching your profile"
    }
  ];

  const recentActivity = [
    {
      icon: <CheckCircle size={20} />,
      title: "Application Accepted",
      company: "TechCorp",
      time: "2 days ago",
      color: "text-green-500"
    },
    {
      icon: <Bell size={20} />,
      title: "Interview Scheduled",
      company: "InnovateHub",
      time: "1 week ago",
      color: "text-blue-500"
    },
    {
      icon: <Briefcase size={20} />,
      title: "New Internship Match",
      company: "DataSystems Inc",
      time: "1 week ago",
      color: "text-purple-500"
    }
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-md">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-gray-100"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center space-x-3">
          <img
            src={studentInfo.image}
            alt="Profile"
            className="w-8 h-8 rounded-full bg-gray-200"
          />
          <span className="font-semibold">{studentInfo.name}</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`
        fixed md:static inset-0 z-20 transform
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 transition-transform duration-200 ease-in-out
        w-64 bg-white shadow-lg
        ${isSidebarOpen ? "block" : "hidden md:block"}
      `}
      >
        {/* Profile Section */}
        <div className="p-6 border-b hidden md:block">
          <div className="flex items-center space-x-4">
            <img
              src={studentInfo.image}
              alt="Profile"
              className="w-12 h-12 rounded-full bg-gray-200"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {studentInfo.name}
              </h2>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <div className="flex items-center">
                <span className="text-gray-500">{item.icon}</span>
                <span className="ml-3">{item.name}</span>
              </div>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
          <div className="" style={{marginTop: "24rem"}}>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
            >
              <LogOut size={20} />
              <span className="ml-3">Logout</span>
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Student Dashboard
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full ${card.color} bg-opacity-10`}
                    >
                      <div className={`text-${card.color.split("-")[1]}-500`}>
                        {card.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-600">
                        {card.title}
                      </p>
                      <p className="text-base md:text-lg font-bold text-gray-900 mt-1">
                        {card.status}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500">
                    {card.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Section */}
          <div className="bg-white rounded-lg shadow-md mt-6">
            <div className="p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-gray-50 rounded-lg"
                  >
                    <div
                      className={`w-10 h-10 rounded-full bg-${
                        activity.color.split("-")[1]
                      }-100 flex items-center justify-center ${
                        activity.color
                      } mb-2 sm:mb-0`}
                    >
                      {activity.icon}
                    </div>
                    <div className="sm:ml-4 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 sm:mt-0">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;