


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/DSC_1168.JPG";
import {
  Bell,
  CheckCircle,
  ChevronRight,
  Clock,
  Edit,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";

function Listings() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [internships, setInternships] = useState([]);

  // Simulate student info (this would be dynamic based on logged-in user)
  const studentInfo = {
    name: "William",
    image: profileImage,
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/student-dashboard",
    },
    {
      name: "Applications",
      icon: <FileText size={20} />,
      path: "/student/applications",
    },
    {
      name: "Current Internship",
      icon: <Clock size={20} />,
      path: "/student/current",
    },
    { name: "Notifications", icon: <Bell size={20} />, path: "", badge: 3 },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    // Fetch the internship listings from the backend
    const fetchInternships = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        if (response.ok) {
          const data = await response.json();
          setInternships(data);
        } else {
          console.error("Error fetching internships");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchInternships();
  }, []);

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
        
          <span className="font-semibold">{studentInfo.name}</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white shadow-lg ${
          isSidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        {/* Profile Section */}
        <div className="p-6 border-b hidden md:block">
          <div className="flex items-center space-x-4">
          
            <div>
             
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Internship Listings
          </h2>

          {/* Internship Listing Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Internship Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
            

              <tbody>
                {internships.map((internship) => (
                  <tr className="hover:bg-gray-50" key={internship._id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {internship.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {internship.company}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Available
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 flex space-x-4">
                      <Edit
                        size={20}
                        className="cursor-pointer text-gray-500 hover:text-blue-600"
                      />
                      <CheckCircle
                        size={20}
                        className="cursor-pointer text-green-500"
                      />
                      <Link to={`/apply/${internship._id}`}>
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                          Apply
                        </button>
                      </Link>
                    </td>
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

export default Listings;
