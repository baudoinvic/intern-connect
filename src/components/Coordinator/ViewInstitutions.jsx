
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Users, Briefcase, LayoutDashboard } from "lucide-react";
import axios from "axios";

const ViewInstitutions = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
      path: "/coordinator-dashboard",
    },
    {
      name: "Students",
      icon: <Users size={20} />,
      path: "/coordinator/students",
    },
    {
      name: "Internship Opportunities",
      icon: <Briefcase size={20} />,
      path: "/coordinator/opportunities",
    },
    {
      name: "Institutions",
      icon: <Briefcase size={20} />,
      path: "/coordinator/view",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between h-16 border-b px-6">
          <h1 className="text-xl font-bold text-gray-800">
            Coordinator Portal
          </h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            >
              <span className="text-gray-500">{item.icon}</span>
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0 p-4 md:p-8">
      
      
         <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Institutions
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
    </div>
  );
};

export default ViewInstitutions;
