

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  FileText,
  LayoutDashboard,
  Briefcase,
  Plus,
} from "lucide-react";

const InstitutionsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/institutions")
      .then((response) => response.json())
      .then((data) => setInstitutions(data))
      .catch((error) => console.error("Error fetching institutions:", error));
  }, []);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      name: "Institutions",
      icon: <Building2 size={20} />,
      path: "/admin/institutions",
    },
    {
      name: "Internship Listing",
      icon: <Briefcase size={20} />,
      path: "/admin/internships",
    },
    { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white border-r border-gray-200 transition-all duration-300`}
      >
       
        <nav className="mt-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  {item.icon}
                  {sidebarOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">Institutions</h1>
          <Link to="/create">
            <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add Institution
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
          {institutions.map((institution) => (
            <div
              key={institution._id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <h2 className="font-semibold text-lg">{institution.name}</h2>
              <p className="text-sm text-gray-500">
                {institution.type} - {institution.location}
              </p>
              <p className="text-sm text-gray-500">
                {institution.numberOfStudents} Students
              </p>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  institution.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {institution.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstitutionsPage;
