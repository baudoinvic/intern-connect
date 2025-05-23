

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRight,
  X,
  Users,
  Briefcase,
  LayoutDashboard,
} from "lucide-react";

function StudentsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/applications") // Replace with your actual API URL
      .then((res) => res.json())
      .then((data) => {
        // Group applications by student
        const studentStats = {};

        data.forEach((app) => {
          const { studentName, status } = app;

          if (!studentStats[studentName]) {
            studentStats[studentName] = {
              name: studentName,
              applications: 0,
              accepted: 0,
              rejected: 0,
              pending: 0,
            };
          }

          studentStats[studentName].applications++;
          if (status === "Accepted") studentStats[studentName].accepted++;
          if (status === "Rejected") studentStats[studentName].rejected++;
          if (status === "Pending") studentStats[studentName].pending++;
        });

        setStudents(Object.values(studentStats));
      })
      .catch((error) => console.error("Error fetching data:", error));
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
              className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
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
      <div className="flex-1 overflow-auto pt-16 lg:pt-0 p-4 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Students Overview
        </h2>

        {/* Student Table */}
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Applications</th>
                <th className="px-6 py-3 text-left">Accepted</th>
                <th className="px-6 py-3 text-left">Rejected</th>
                <th className="px-6 py-3 text-left">Pending</th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0 ? (
                students.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.applications}</td>
                    <td className="px-6 py-4">{student.accepted}</td>
                    <td className="px-6 py-4">{student.rejected}</td>
                    <td className="px-6 py-4">{student.pending}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No applications found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentsPage;
