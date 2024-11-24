// import React from "react";

// function Students() {
//   const studentData = [
//     {
//       name: "Alice Johnson",
//       university: "Tech University",
//       applications: 5,
//       activeInternships: 1,
//       accepted: 3,
//       rejected: 1,
//       pending: 1,
//     },
//     {
//       name: "David Brown",
//       university: "Global College",
//       applications: 3,
//       activeInternships: 0,
//       accepted: 2,
//       rejected: 0,
//       pending: 1,
//     },
//     {
//       name: "Sophia Wilson",
//       university: "Innovate Institute",
//       applications: 7,
//       activeInternships: 2,
//       accepted: 5,
//       rejected: 0,
//       pending: 0,
//     },
//   ];

//   return (
//     <div className="p-4 md:p-8">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Students</h2>
//       <div className="bg-white rounded-lg shadow-md">
//         <table className="min-w-full table-auto border-collapse border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">University</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Applications</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Active Internships</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Accepted</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Rejected</th>
//               <th className="border border-gray-300 px-4 py-2 text-center">Pending</th>
//             </tr>
//           </thead>
//           <tbody>
//             {studentData.map((student, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">{student.name}</td>
//                 <td className="border border-gray-300 px-4 py-2">{student.university}</td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {student.applications}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {student.activeInternships}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {student.accepted}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {student.rejected}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {student.pending}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Students;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, LogOut, Menu, X, Users, Briefcase, Bell, FileText } from "lucide-react";

function StudentsPage() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Students", icon: <Users size={20} />, path: "/coordinator/students" },
    { name: "Internship Opportunities", icon: <Briefcase size={20} />, path: "/coordinator/opportunities" },
    { name: "Reports", icon: <FileText size={20} />, path: "/coordinator/reports" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/coordinator/notifications", badge: 5 },
  ];

  const studentData = [
    {
      name: "Sarah Johnson",
      university: "Tech University",
      applications: 3,
      activeInternships: 1,
      accepted: 1,
      rejected: 1,
      pending: 1
    },
    {
      name: "Michael Smith",
      university: "Data University",
      applications: 2,
      activeInternships: 0,
      accepted: 1,
      rejected: 1,
      pending: 0
    },
    {
      name: "Emily Brown",
      university: "Innovate University",
      applications: 4,
      activeInternships: 2,
      accepted: 2,
      rejected: 1,
      pending: 1
    },
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
        <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
        <div className="w-8" /> {/* Placeholder for balance */}
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out`}>
        <div className="flex items-center justify-between h-16 border-b px-6">
          <h1 className="text-xl font-bold text-gray-800">Coordinator Portal</h1>
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
              {item.badge && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Students Overview</h2>

          {/* Student Table */}
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">University</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Applications</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Active Internships</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Accepted</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Rejected</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Pending</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.university}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.applications}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.activeInternships}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.accepted}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.rejected}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsPage;

