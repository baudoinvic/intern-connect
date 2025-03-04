

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bell, Briefcase, FileText, LayoutDashboard } from "lucide-react";


function CurrentInternship() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/internships"
        );
        setInternships(response.data);
      } catch (error) {
        console.error("Error fetching internships:", error);
      }
    };

    fetchInternships();
  }, []);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/student-dashboard",
    },
    {
      name: "Internship Listings",
      icon: <Briefcase size={20} />,
      path: "/student/listings",
    },
    {
      name: "Applications",
      icon: <FileText size={20} />,
      path: "/student/applications",
    },
    { name: "Notifications", icon: <Bell size={20} />, path: "", badge: 3 },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white shadow-lg`}
      >
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Current Internships
          </h2>

          {/* Internship List */}
          {internships.length > 0 ? (
            <div className="space-y-4">
              {internships.map((internship) => (
                <div
                  key={internship._id}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-700">
                    {internship.title}
                  </h3>
                  <p>
                    <span className="font-medium text-gray-600">Company:</span>{" "}
                    {internship.company}
                  </p>
                  <p>
                    <span className="font-medium text-gray-600">Location:</span>{" "}
                    {internship.location}
                  </p>
                  <p>
                    <span className="font-medium text-gray-600">Duration:</span>{" "}
                    {internship.duration}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No internships available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentInternship;
