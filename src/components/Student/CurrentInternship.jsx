
  
import {
  Bell,
  Briefcase,
  Clock,
  FileText,
  LogOut,
  Menu,
  X,
  CheckCircle,
  LayoutDashboard
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/DSC_1168.JPG";

function CurrentInternship() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentInfo = {
    name: "William",
    image: profileImage,
  };

  const internshipDetails = {
    title: "Frontend Developer Intern",
    company: "UPSkills Hub",
    duration: "Sept 2024 - Nov 2024",
    supervisor: "William",
    status: "Ongoing",
  };

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/student-dashboard" },
    { name: "Internship Listings", icon: <Briefcase size={20} />, path: "/student/listings" },
    { name: "Applications", icon: <FileText size={20} />, path: "/student/applications" },
    { name: "Notifications", icon: <Bell size={20} />, path: "", badge: 3 },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate("/");
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
              className={`flex items-center justify-between px-6 py-3 ${
                item.active ? "text-blue-600 bg-blue-50 font-semibold" : "text-gray-700"
              } hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200`}
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Current Internship</h2>

          {/* Internship Details */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Internship Details</h3>
            <div className="space-y-2">
              <p>
                <span className="font-medium text-gray-600">Title:</span> {internshipDetails.title}
              </p>
              <p>
                <span className="font-medium text-gray-600">Company:</span> {internshipDetails.company}
              </p>
              <p>
                <span className="font-medium text-gray-600">Duration:</span> {internshipDetails.duration}
              </p>
              <p>
                <span className="font-medium text-gray-600">Supervisor:</span>{" "}
                {internshipDetails.supervisor}
              </p>
              <p>
                <span className="font-medium text-gray-600">Status:</span>{" "}
                <span className="text-green-600 font-semibold">{internshipDetails.status}</span>
              </p>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Progress Tracking</h3>
            <div className="space-y-4">
              <p className="flex items-center text-sm text-gray-600">
                <CheckCircle className="text-green-500 mr-2" />
                Week 1: Orientation completed.
              </p>
              <p className="flex items-center text-sm text-gray-600">
                <CheckCircle className="text-green-500 mr-2" />
                Week 2: Project assigned.
              </p>
              <p className="flex items-center text-sm text-gray-400">
                <CheckCircle className="text-gray-300 mr-2" />
                Week 3: Mid-term progress report (Pending).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentInternship;
