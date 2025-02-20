
// import {
//   Briefcase,
//   Building2,
//   ChevronRight,
//   CreditCard,
//   FileText,
//   Home,
//   List,
//   Settings,
//   LogOut,
//   Menu,
//   Users,
//   X,
//   Edit,
//   Trash,
//   LayoutDashboard,
// } from "lucide-react";


// const Application = () => {

//       const navigate = useNavigate();
//       const [sidebarOpen, setSidebarOpen] = useState(false);
//       const [modalOpen, setModalOpen] = useState(false);

//   const menuItems = [
//     {
//       name: "Dashboard",
//       icon: <Home size={20} />,
//       path: "/company/Dash",
//     },
//     {
//       name: "Internship Listings",
//       icon: <List size={20} />,
//       path: "/company/interns",
//     },
//     {
//       name: "Applications Received",
//       icon: <FileText size={20} />,
//       path: "/company/application",
//     },
//     {
//       name: "Pending Approvals",
//       icon: <Users size={20} />,
//       path: "/companies/approvals",
//     },
//     {
//       name: "Account Settings",
//       icon: <Settings size={20} />,
//       path: "/companies/settings",
//     },
//   ];

//     const handleLogout = () => {
//       navigate("/");
//     };

//     const handleAddInternship = () => {
//       setModalOpen(true);
//     };

//     const closeModal = () => {
//       setModalOpen(false);
//     };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4">Applications Received</h2>

//       {/* Filters */}
//       <div className="flex space-x-4 mb-4">
//         <select className="border p-2 rounded">
//           <option>All Positions</option>
//           <option>Frontend Developer</option>
//           <option>Backend Developer</option>
//         </select>

//         <select className="border p-2 rounded">
//           <option>All Status</option>
//           <option>Pending</option>
//           <option>Accepted</option>
//           <option>Rejected</option>
//         </select>
//       </div>

//       {/* Table */}
//       <table className="w-full border shadow-lg">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-3">Student Name</th>
//             <th className="p-3">Internship Role</th>
//             <th className="p-3">Date Applied</th>
//             <th className="p-3">Status</th>
//             <th className="p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="border">
//             <td className="p-3">John Doe</td>
//             <td className="p-3">Frontend Developer</td>
//             <td className="p-3">Feb 15, 2025</td>
//             <td className="p-3">
//               <span className="px-2 py-1 rounded text-sm bg-yellow-300">
//                 Pending
//               </span>
//             </td>
//             <td className="p-3">
//               <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
//                 View
//               </button>
//               <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
//                 Accept
//               </button>
//               <button className="bg-red-500 text-white px-3 py-1 rounded">
//                 Reject
//               </button>
//             </td>
//           </tr>
//           <tr className="border">
//             <td className="p-3">Jane Smith</td>
//             <td className="p-3">Backend Developer</td>
//             <td className="p-3">Feb 12, 2025</td>
//             <td className="p-3">
//               <span className="px-2 py-1 rounded text-sm bg-yellow-300">
//                 Pending
//               </span>
//             </td>
//             <td className="p-3">
//               <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
//                 View
//               </button>
//               <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
//                 Accept
//               </button>
//               <button className="bg-red-500 text-white px-3 py-1 rounded">
//                 Reject
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       {/* Modal UI (Static, without functionality) */}
  
//     </div>
//   );
// };

// export default Application;


import {
  Home,
  List,
  FileText,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Application = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} />, path: "/company/Dash" },
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
    {
      name: "Account Settings",
      icon: <Settings size={20} />,
      path: "/companies/settings",
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
        <h1 className="text-xl font-bold text-gray-800">
          Applications Received
        </h1>
        <div className="w-8" />
      </div>

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
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Applications Received
          </h2>

          {/* Filters */}
          <div className="flex space-x-4 mb-4">
            <select className="border p-2 rounded">
              <option>All Positions</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
            </select>
            <select className="border p-2 rounded">
              <option>All Status</option>
              <option>Pending</option>
              <option>Accepted</option>
              <option>Rejected</option>
            </select>
          </div>

          {/* Applications Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Internship Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Frontend Developer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Feb 15, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 py-1 rounded text-sm bg-yellow-300">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Reject
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Backend Developer
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    Feb 12, 2025
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 py-1 rounded text-sm bg-yellow-300">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
