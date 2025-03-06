
import React, { useState, useEffect } from "react";
import { Bell, Briefcase, Clock, LayoutDashboard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function ApplicationsPage() {
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);

  
  const studentName = "Sophia Esther"; 

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
      name: "Current Internship",
      icon: <Clock size={20} />,
      path: "/student/current",
    },

  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/applications")
      .then((res) => {
        const filteredApplications = res.data.filter(
          (app) => app.studentName.toLowerCase() === studentName.toLowerCase()
        );
        setApplications(filteredApplications);
      })
      .catch((err) => console.error("Error fetching applications:", err));
  }, [studentName]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center space-x-4 mb-6">
        
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {studentName}
            </h2>
            <p className="text-sm text-gray-500">Student</p>
          </div>
        </div>
        <nav>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          My Applications
        </h2>

        {/* Applications Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <table className="w-full text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left py-2 px-4">Internship Role</th>
                <th className="text-left py-2 px-4">Status</th>
                <th className="text-left py-2 px-4">Date Applied</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((app, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-4">{app.internshipRole}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-xs ${
                          app.status === "Pending"
                            ? "bg-yellow-500"
                            : app.status === "Accepted"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      {new Date(app.dateApplied).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 text-center text-gray-500">
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

export default ApplicationsPage;
