import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, X, Home, List, FileText, Users, Settings } from "lucide-react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Title, Tooltip, Legend);

function CompaniesDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/companies/dashboard" },
    { name: "Internship Listings", icon: <List size={20} />, path: "/companies/listings" },
    { name: "Applications Received", icon: <FileText size={20} />, path: "/companies/applications" },
    { name: "Pending Approvals", icon: <Users size={20} />, path: "/companies/approvals" },
    { name: "Account Settings", icon: <Settings size={20} />, path: "/companies/settings" },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  // Pie chart data (for performance or application statistics)
  const pieData = {
    labels: ["Accepted", "Pending", "Rejected"],
    datasets: [
      {
        data: [70, 20, 10], // Example percentages
        backgroundColor: ["#4CAF50", "#FFEB3B", "#FF5722"],
        borderWidth: 1,
      },
    ],
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
        <h1 className="text-xl font-bold text-gray-800">Companies Dashboard</h1>
        <div className="w-8" /> {/* Placeholder for balance */}
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}>
        <div className="flex items-center justify-between h-16 border-b px-6">
          <h1 className="text-xl font-bold text-gray-800">Companies Portal</h1>
          <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-md text-gray-600 hover:bg-gray-100 lg:hidden">
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
            </Link>
          ))}
          <button onClick={handleLogout} className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200">
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Companies Dashboard Overview</h2>

          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Applications Status</h3>
            <div className="h-48 w-48 mx-auto">
              <Pie data={pieData} />
            </div>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="p-4 md:p-6">
                <h4 className="text-lg font-medium text-gray-800">Total Internships Posted</h4>
                <p className="text-xl font-semibold text-gray-800">15</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="p-4 md:p-6">
                <h4 className="text-lg font-medium text-gray-800">Applications Received</h4>
                <p className="text-xl font-semibold text-gray-800">50</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="p-4 md:p-6">
                <h4 className="text-lg font-medium text-gray-800">Interns Accepted</h4>
                <p className="text-xl font-semibold text-gray-800">40</p>
              </div>
            </div>
          </div>

          {/* Pending Approvals Section */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="p-4 md:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Pending Approvals</h3>
              <div className="space-y-4">
                {/* Dummy data for pending approvals */}
                <div className="flex items-center justify-between py-4 border-b last:border-b-0">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">John Doe</span>
                    <span className="ml-2 text-gray-500">for Web Developer at TechCorp</span>
                  </div>
                  <span className="font-semibold text-yellow-500">Pending Review</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b last:border-b-0">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">Jane Smith</span>
                    <span className="ml-2 text-gray-500">for Data Analyst at DataSys</span>
                  </div>
                  <span className="font-semibold text-yellow-500">Pending Review</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CompaniesDashboard;
