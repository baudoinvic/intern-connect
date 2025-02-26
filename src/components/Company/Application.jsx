


import { Home, List, FileText, Users, Menu, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Application = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/applications"
        );
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusChange = async (id, status) => {
   try {
  await axios.put(`http://localhost:3000/api/applications/${id}/status`, { status });
  setApplications((prev) =>
    prev.map((app) => (app._id === id ? { ...app, status } : app))
  );
  toast.success(`Application ${status}`);
} catch (error) {
  console.error("Error updating status:", error);
  toast.error("Failed to update status");
}
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}
      >
        <nav className="mt-6">
          {[
            {
              name: "Dashboard",
              icon: <Home size={20} />,
              path: "/company/Dash",
            },
            {
              name: "Internship Listings",
              icon: <List size={20} />,
              path: "/company/interns",
            },
            {
              name: "Applications Received",
              icon: <FileText size={20} />,
              path: "/company/application",
            },
            {
              name: "Pending Approvals",
              icon: <Users size={20} />,
              path: "/company/pending",
            },
          ].map((item, index) => (
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

      <div className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Applications Received
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Internship Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.length > 0 ? (
                  applications.map((app) => (
                    <tr key={app._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {app.studentName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {app.internshipRole}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(app.dateApplied).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span
                          className={`px-2 py-1 rounded text-sm ${
                            app.status === "Pending"
                              ? "bg-yellow-300"
                              : app.status === "Accepted"
                              ? "bg-green-300"
                              : "bg-red-300"
                          }`}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">
                          View
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(app._id, "Accepted")
                          }
                          className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() =>
                            handleStatusChange(app._id, "Rejected")
                          }
                          className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No applications found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Application;
