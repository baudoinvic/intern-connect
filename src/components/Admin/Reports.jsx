


// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Briefcase,
//   Building2,
//   FileText,
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   ChevronRight,
//   LogOut,
//   X,
// } from "lucide-react";

// export default function ReportsPage() {
//   const location = useLocation();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activePage, setActivePage] = useState(location.pathname);

//   const menuItems = [
//     {
//       name: "Dashboard",
//       icon: <LayoutDashboard size={20} />,
//       path: "/admin/dashboard",
//     },
//     { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
//     {
//       name: "Institutions",
//       icon: <Building2 size={20} />,
//       path: "/admin/institutions",
//     },
//     {
//       name: "Internship Listing",
//       icon: <Briefcase size={20} />,
//       path: "/admin/internships",
//     },
//     { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
  
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100 overflow-hidden">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}
//       >
//         <nav className="mt-6">
//           {menuItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               className={`flex items-center justify-between px-6 py-3 text-gray-700 ${
//                 activePage === item.path
//                   ? " text-text-gray-700"
//                   : "hover:bg-blue-50 hover:text-blue-600"
//               } transition-colors duration-200`}
//               onClick={() => setActivePage(item.path)}
//             >
//               <div className="flex items-center">
//                 <span className="text-gray-500">{item.icon}</span>
//                 <span className="ml-3">{item.name}</span>
//               </div>
//               <ChevronRight size={16} className="text-gray-400" />
//             </Link>
//           ))}
         
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto pt-16 lg:pt-0 p-6 ">
//         <h1 className="text-2xl font-bold pt-32">Reports & Analytics</h1>
     
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
//           <div className="p-4 border rounded-lg">
//             <h2 className="text-lg font-semibold">Total Internships</h2>
//             <p className="text-3xl font-bold">250</p>
//           </div>
//           <div className="p-4 border rounded-lg">
//             <h2 className="text-lg font-semibold">Active Interns</h2>
//             <p className="text-3xl font-bold">80</p>
//           </div>
//           <div className="p-4 border rounded-lg">
//             <h2 className="text-lg font-semibold">Pending Approvals</h2>
//             <p className="text-3xl font-bold">50</p>
//           </div>
//         </div>
//         <div className="bg-white shadow rounded-lg p-6 mt-6">
//           <h2 className="text-xl font-semibold mb-4">Internship Progress</h2>
//           <ResponsiveContainer  width="100%"  height={300}>
//             <BarChart className=""
//               data={[
//                 { name: "Completed", students: 120 },
//                 { name: "Ongoing", students: 80 },
//                 { name: "Pending", students: 50 },
//               ]}
//             >
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="students" fill="#3b82f6" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  ChevronRight,
} from "lucide-react";

export default function ReportsPage() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);

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
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 w-64 bg-white shadow-2xl z-30 transition-transform duration-300 ease-in-out border-r border-gray-100`}
      >
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Admin Panel</h2>
          <nav>
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center justify-between px-4 py-3 rounded-lg group transition-all duration-300 ${
                  activePage === item.path
                    ? "bg-blue-50 text-blue-600 shadow-md"
                    : "hover:bg-blue-50 hover:text-blue-600 text-gray-600 hover:shadow-md"
                }`}
                onClick={() => setActivePage(item.path)}
              >
                <div className="flex items-center">
                  <span
                    className={`${
                      activePage === item.path
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-blue-600"
                    } transition-colors`}
                  >
                    {item.icon}
                  </span>
                  <span className="ml-3 font-medium">{item.name}</span>
                </div>
                <ChevronRight
                  size={16}
                  className={`text-gray-400 opacity-0 group-hover:opacity-100 transition-all ${
                    activePage === item.path ? "opacity-100" : ""
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
            Reports & Analytics
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Total Internships",
                value: "250",
                color: "bg-blue-100 text-blue-600",
              },
              {
                title: "Active Interns",
                value: "80",
                color: "bg-green-100 text-green-600",
              },
              {
                title: "Pending Approvals",
                value: "50",
                color: "bg-yellow-100 text-yellow-600",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 ${card.color}`}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-70">
                  {card.title}
                </h2>
                <p className="text-4xl font-bold">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-blue-500 transition-all duration-300 hover:shadow-3xl">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Internship Progress
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={[
                  { name: "Completed", students: 120 },
                  { name: "Ongoing", students: 80 },
                  { name: "Pending", students: 50 },
                ]}
              >
                <XAxis dataKey="name" className="fill-gray-700" />
                <YAxis className="fill-gray-700" />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: "10px",
                    padding: "12px",
                  }}
                />
                <Bar
                  dataKey="students"
                  fill="#3b82f6"
                  radius={[10, 10, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}