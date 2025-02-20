
import {
  Building2,
  ChevronRight,
  FileText,
  LayoutDashboard,
  Menu,
  Plus,
  Search,
  Users,
  X
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const InstitutionsPage = () => {
const [sidebarOpen, setSidebarOpen] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);
const [formData, setFormData] = useState({
  name: '',
  type: 'University',
  location: '',
  students: '',
  status: 'Active'
});

const institutions = [
  { 
    id: 1, 
    name: 'AUCA', 
    type: 'University',
    location: 'Kigali, Rwanda',
    students: 1234,
    status: 'Active',
    joinDate: '2024-01-15'
  },
  { 
    id: 2, 
    name: 'UoK', 
    type: 'College',
    location: 'Kigali, Rwanda',
    students: 856,
    status: 'Active',
    joinDate: '2024-02-20'
  },
];

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin-dashboard" },
  { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
  { name: "Internship Listing", icon: <Building2 size={20} />, path: "/admin/internships" },
  { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
  { name: "Subscriptions", icon: <Building2 size={20} />, path: "/admin/subscriptions" },
];

const handleSubmit = (e) => {
 
  setIsModalOpen(false);
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
      <h1 className="text-xl font-bold text-gray-800">Institutions</h1>
      <div className="w-8" />
    </div>

    {/* Sidebar */}
    <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}>
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
     
      </nav>
    </div>

    {/* Main Content */}
    <div className="flex-1 overflow-auto pt-16 lg:pt-0">
      <div className="p-4 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">Institutions</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Institution
          </button>
        </div>

     

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {institutions.map((institution) => (
            <div key={institution.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="font-semibold text-lg">{institution.name}</h2>
              <div className="space-y-2 mt-4">
                <div className="flex items-center text-sm">
                  <Building2 className="w-4 h-4 mr-2" />
                  {institution.type}
                </div>
                <div className="flex items-center text-sm">
                  <FileText className="w-4 h-4 mr-2" />
                  {institution.location}
                </div>
                <div className="flex items-center text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  {institution.students} Students
                </div>
                <div className="flex items-center text-sm mt-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${institution.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {institution.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Add Institution Modal */}
    {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add New Institution</h2>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Institution Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="University">University</option>
                <option value="College">College</option>
                <option value="Technical School">Technical School</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Students
              </label>
              <input
                type="number"
                name="students"
                value={formData.students}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add Institution
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
);
};

export default InstitutionsPage;