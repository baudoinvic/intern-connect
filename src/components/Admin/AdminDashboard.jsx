

import {
  Briefcase,
  Building2,
  ChevronRight,
  CreditCard,
  FileText,
  LogOut,
  Menu,
  Users,
  X
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
    { name: "Institutions", icon: <Building2 size={20} />, path: "/admin/institutions" },
    { name: "Internship Listing", icon: <Briefcase size={20} />, path: "/admin/internships" },
    { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
    { name: "Subscriptions", icon: <CreditCard size={20} />, path: "/admin/subscriptions" },
  ];

  const statsCards = [
    { title: "Total Users", count: "1,234", icon: <Users size={24} />, color: "bg-blue-500" },
    { title: "Institutions", count: "56", icon: <Building2 size={24} />, color: "bg-green-500" },
    { title: "Active Internships", count: "89", icon: <Briefcase size={24} />, color: "bg-purple-500" },
    { title: "Subscribers", count: "432", icon: <CreditCard size={24} />, color: "bg-orange-500" },
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
        <h1 className="text-xl font-bold text-gray-800">Admin Portal</h1>
        <div className="w-8" /> {/* Placeholder for balance */}
      </div>

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
        w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out
      `}>
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            {statsCards.map((card, index) => (
              <Link key={index} to={menuItems[index].path}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{card.title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">{card.count}</p>
                      </div>
                      <div className={`p-3 rounded-full ${card.color} bg-opacity-10`}>
                        <div className={`text-${card.color.split('-')[1]}-500`}>
                          {card.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Activity Section */}
       
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;