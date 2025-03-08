
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LogOut,
  Menu,
  X,
  Home,
  List,
  FileText,
  Users,
  Settings,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect } from "react";

function CompaniesDashboard() {
       const [internships, setInternships] = useState([]);
       const [user, setUser] = useState(null);
        
        const fetchInternships = () => {
          let token = localStorage.getItem("token");
          axios({
            url: "http://localhost:4000/api/internships",
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((response) => {
              const allInternships = response.data;
              setInternships(allInternships);
              toast.success(response.data.message);
            })
            .catch((error) => {
              console.log(error);
            });
        };

        useEffect(() => {
          fetchInternships();
        }, []);


        
        useEffect(() => {
          const fetchUser = async () => {
            try {
              const token = localStorage.getItem("token");
              if (!token) {
                console.error("No token found");
                console.log("response", response)
                return;
              }
   
              const response = await axios.get(
                "http://localhost:4000/api/me",
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
   
              setUser(response.data);
            } catch (error) {
              console.error("Error fetching user:", error);
            }
          };
   
          fetchUser();
        }, []);



  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <Home size={20} />,
      path: "/company/dashboard",
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
      path: "/companies/approvals",
    },
    
  ];

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("No token found, user already logged out.");
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        "http://localhost:4000/api/auth/logout",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");

      toast.success("Logout successful!");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Logout failed", error);
      toast.error("Logout failed. Please try again.");
    }
  };


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className=" items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Company </h2>
          <div>
            <p>{user ? user.email : "Loading..."}</p>
          </div>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="" style={{ marginTop: "27rem" }}>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
          >
            <LogOut size={20} />
            <span className="ml-3">Logout</span>
          </button>
          <ToastContainer />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Sidebar Toggle Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-800"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            <h1 className="text-2xl font-semibold text-gray-800">
              Company Dashboard
            </h1>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-sm font-medium text-gray-500">
                Active Internships
              </p>
              <p className="text-xl font-bold">{internships.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-sm font-medium text-gray-500">
                Total Applicants
              </p>
              <p className="text-2xl font-semibold text-gray-800">25</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-sm font-medium text-gray-500">
                Current Interns
              </p>
              <p className="text-xl font-bold">{internships.length}</p>
              {/* <p className="text-2xl font-semibold text-gray-800">5</p> */}
            </div>
          </div>

          {/* Active Internships */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">
                Active Internships
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applications
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deadline
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Frontend Developer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      12
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Nov 30, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Backend Developer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      8
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Dec 15, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      UI/UX Designer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      15
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        In Review
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Dec 5, 2024
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      Full Stack Developer
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      20
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      Dec 25, 2024
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CompaniesDashboard;
