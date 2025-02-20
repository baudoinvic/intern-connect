// import React from 'react'

// const Interns = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Interns


import {
  Briefcase,
  Building2,
  ChevronRight,
  CreditCard,
  FileText,
  LogOut,
  Menu,
  Users,
  X,
  Edit,
  Trash,
  LayoutDashboard,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Interns() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin-dashboard",
    },
    { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
    {
      name: "Institutions",
      icon: <Building2 size={20} />,
      path: "/admin/institutions",
    },

    { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
    {
      name: "Subscriptions",
      icon: <CreditCard size={20} />,
      path: "/admin/subscriptions",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const handleAddInternship = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <h1 className="text-xl font-bold text-gray-800">Internship Listing</h1>
        <div className="w-8" /> {/* Placeholder for balance */}
      </div>

      {/* Sidebar */}
      <div
        className={`
            fixed inset-y-0 left-0 transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }
            lg:relative lg:translate-x-0
            w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out
          `}
      >
        <div className="flex items-center justify-between h-16 border-b px-6">
          <h1 className="text-xl font-bold text-gray-800">Admin Portal</h1>
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
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          >
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Internship Listings
          </h2>

          {/* Add Internship Button */}
          <button
            onClick={handleAddInternship}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
          >
            Add Internship
          </button>

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
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Example Internships */}
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      Software Engineer Intern
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      UPskills Hub
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Kigali, Rwanda
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      6 months
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Internship Modal */}
          {modalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                <h3 className="text-lg font-semibold mb-4">Add Internship</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Duration
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Interns;
  