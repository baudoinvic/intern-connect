
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  LogOut,
  Menu,
  X,
  Users,
  Briefcase,
  Bell,
  FileText,
  LayoutDashboard,
} from "lucide-react";

function InternshipOpportunitiesPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/internships") 
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((error) => console.error("Error fetching internships:", error));
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

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:hidden z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
        <div className="w-8" /> {/* Placeholder */}
      </div>

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
              className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <div className="flex items-center">
                <span className="text-gray-500">{item.icon}</span>
                <span className="ml-3">{item.name}</span>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Internship Opportunities
          </h2>

          {/* Internship Opportunities Table */}
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {internships.length > 0 ? (
                  internships.map((internship, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {internship.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {internship.company}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {internship.duration}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {internship.location}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            internship.status === "Open"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {internship.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No internship opportunities available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipOpportunitiesPage;
