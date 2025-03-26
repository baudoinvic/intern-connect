
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Briefcase,
  Building2,
  FileText,
  LayoutDashboard,
  Users,
  CreditCard,
  ChevronRight,
  LogOut,
  X,
} from "lucide-react";

export default function ReportsPage() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);


    const [internships, setInternships] = useState([]);
  
    useEffect(() => {
      const fetchInternships = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/internships"
          );
          setInternships(response.data);
        } catch (error) {
          console.error("Error fetching internships:", error);
        }
      };
  
      fetchInternships();
    }, []);


      useEffect(() => {
        axios
          .get("http://localhost:4000/api/applications")
          .then((res) => setApplications(res.data))
          .catch((err) => console.error("Error fetching applications:", err));
      }, []);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
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
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}
      >
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center justify-between px-6 py-3 text-gray-700 ${
                activePage === item.path
                  ? " text-text-gray-700"
                  : "hover:bg-blue-50 hover:text-blue-600"
              } transition-colors duration-200`}
              onClick={() => setActivePage(item.path)}
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
      <div className="flex-1 overflow-auto pt-16 lg:pt-0 p-6 ">
        <h1 className="text-2xl font-bold pt-32">Reports & Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">Total Internships</h2>
            {/* <p className="text-3xl font-bold">250</p> */}
            <p className="text-3xl font-bold">{internships.length}</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">Active Interns</h2>
            <p className="text-3xl font-bold">30</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">Pending Approvals</h2>
            <p className="text-3xl font-bold">15</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Internship Progress</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              className=""
              data={[
                { name: "Completed", students: 120 },
                { name: "Ongoing", students: 80 },
                { name: "Pending", students: 50 },
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="students" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
