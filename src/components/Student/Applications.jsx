

import React, { useState } from "react";
import { Bell, Briefcase, CheckCircle, Clock, FileText, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/DSC_1168.JPG";

function ApplicationsPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentInfo = {
    name: "William",
    image: profileImage,
  };

  const menuItems = [
    
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/student-dashboard" },
    { name: "Internship Listings", icon: <Briefcase size={20} />, path: "/student/listings" },
    { name: "Current Internship", icon: <Clock size={20} />, path: "/student/current" },
    { name: "Notifications", icon: <Bell size={20} />, path: "", badge: 3 },
  ];

  const applications = [
    {
      company: "TechCorp",
      position: "Frontend Developer",
      status: "Pending",
      dateApplied: "November 1, 2024",
    },
    {
      company: "InnovateHub",
      position: "Backend Developer",
      status: "Accepted",
      dateApplied: "October 20, 2024",
    },
    {
      company: "DataSystems Inc",
      position: "Data Analyst",
      status: "Rejected",
      dateApplied: "October 15, 2024",
    },
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
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
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
        className={`fixed md:static inset-0 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white shadow-lg`}
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
              <h2 className="text-lg font-semibold text-gray-800">{studentInfo.name}</h2>
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
            </Link>
          ))}
       
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
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">My Applications</h2>

          {/* Applications Table */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <table className="w-full text-sm md:text-base text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-2 px-4">Company</th>
                  <th className="text-left py-2 px-4">Position</th>
                  <th className="text-left py-2 px-4">Status</th>
                  <th className="text-left py-2 px-4">Date Applied</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-4">{application.company}</td>
                    <td className="py-2 px-4">{application.position}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-xs ${
                          application.status === "Pending"
                            ? "bg-yellow-500"
                            : application.status === "Accepted"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{application.dateApplied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationsPage;
