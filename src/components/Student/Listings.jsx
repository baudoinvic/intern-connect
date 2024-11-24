// import {
//   Building2,
//   ChevronRight,
//   CreditCard,
//   Edit,
//   FileText,
//   LayoutDashboard,
//   LogOut,
//   Menu,
//   Trash,
//   Users,
//   X
// } from "lucide-react";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
  
//   function Listings() {
//     const navigate = useNavigate();
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [modalOpen, setModalOpen] = useState(false);
  
//     const menuItems = [
//       { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/student-dashboard" },
//       { name: "Users", icon: <Users size={20} />, path: "/admin/users" },
//       { name: "Institutions", icon: <Building2 size={20} />, path: "/admin/institutions" },
//       // { name: "Internship Listing", icon: <Briefcase size={20} />, path: "/admin/internships" },
//       { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
//       { name: "Subscriptions", icon: <CreditCard size={20} />, path: "/admin/subscriptions" },
//     ];
  
//     const handleLogout = () => {
//       navigate("/");
//     };
  
//     const handleAddInternship = () => {
//       setModalOpen(true);
//     };
  
//     const closeModal = () => {
//       setModalOpen(false);
//     };
  
//     return (
//       <div className="flex h-screen bg-gray-100 overflow-hidden">
//         {/* Mobile Sidebar Overlay */}
//         {sidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//             onClick={() => setSidebarOpen(false)}
//           />
//         )}
  
//         {/* Mobile Header */}
//         <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-4 lg:hidden z-30">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
//           >
//             <Menu size={24} />
//           </button>
//           <h1 className="text-xl font-bold text-gray-800">Internship Listing</h1>
//           <div className="w-8" /> {/* Placeholder for balance */}
//         </div>
  
//         {/* Sidebar */}
//         <div
//           className={`
//             fixed inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
//             lg:relative lg:translate-x-0
//             w-64 bg-white shadow-lg z-30 transition-transform duration-200 ease-in-out
//           `}
//         >
//           <div className="flex items-center justify-between h-16 border-b px-6">
//             <h1 className="text-xl font-bold text-gray-800">Admin Portal</h1>
//             <button
//               onClick={() => setSidebarOpen(false)}
//               className="p-2 rounded-md text-gray-600 hover:bg-gray-100 lg:hidden"
//             >
//               <X size={20} />
//             </button>
//           </div>
//           <nav className="mt-6">
//             {menuItems.map((item, index) => (
//               <Link
//                 key={index}
//                 to={item.path}
//                 className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <div className="flex items-center">
//                   <span className="text-gray-500">{item.icon}</span>
//                   <span className="ml-3">{item.name}</span>
//                 </div>
//                 <ChevronRight size={16} className="text-gray-400" />
//               </Link>
//             ))}
//             <button
//               onClick={handleLogout}
//               className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
//             >
//               <LogOut size={20} />
//               <span className="ml-3">Logout</span>
//             </button>
//           </nav>
//         </div>
  
//         {/* Main Content */}
//         <div className="flex-1 overflow-auto pt-16 lg:pt-0">
//           <div className="p-4 md:p-8">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-6">Internship Listings</h2>
  
//             {/* Add Internship Button */}
//             <button
//               onClick={handleAddInternship}
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4"
//             >
//               Add Internship
//             </button>
  
//             {/* Internship Listing Table */}
//             <div className="bg-white rounded-lg shadow-md overflow-hidden">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Internship Title
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Company
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Location
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Duration
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {/* Example Internships */}
//                   {[1, 2, 3, 4, 5].map((item) => (
//                     <tr key={item}>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">Software Engineer Intern</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">UPskills Hub</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Kigali, Rwanda</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">6 months</td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800">
//                           <Edit size={18} />
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                           <Trash size={18} />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
  
//             {/* Add Internship Modal */}
//             {modalOpen && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
//                 <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//                   <h3 className="text-lg font-semibold mb-4">Add Internship</h3>
//                   <form>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700">Title</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700">Company</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700">Location</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="mb-4">
//                       <label className="block text-sm font-medium text-gray-700">Duration</label>
//                       <input
//                         type="text"
//                         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                     <div className="flex justify-end space-x-2">
//                       <button
//                         type="button"
//                         className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
//                         onClick={closeModal}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//                       >
//                         Save
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default Listings;
  
import {
  Bell,
  CheckCircle,
  ChevronRight,
  Clock,
  Edit,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  X
} from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/DSC_1168.JPG";

function Listings() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentInfo = {
    name: "William",
    image: profileImage,
  };

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/student-dashboard" },
    { name: "Applications", icon: <FileText size={20} />, path: "/student/applications" },
    { name: "Current Internship", icon: <Clock size={20} />, path: "/student/current" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/student/notifications", badge: 3 },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-md">
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="flex items-center space-x-3">
          <img
            src={studentInfo.image}
            alt="Profile"
            className="w-8 h-8 rounded-full bg-gray-200"
          />
          <span className="font-semibold">{studentInfo.name}</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:static inset-0 z-20 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white shadow-lg ${
          isSidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        {/* Profile Section */}
        <div className="p-6 border-b hidden md:block">
          <div className="flex items-center space-x-4">
            <img
              src={studentInfo.image}
              alt="Profile"
              className="w-12 h-12 rounded-full bg-gray-200"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{studentInfo.name}</h2>
              <p className="text-sm text-gray-500">Student</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              onClick={() => setIsSidebarOpen(false)}
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

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Internship Listings</h2>

          {/* Internship Listing Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Internship Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Apply
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Example Row */}
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Frontend Developer</td>
                  <td className="px-6 py-4 text-sm text-gray-500">TechCorp</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Accepted</td>
                  <td className="px-6 py-4 text-sm text-blue-500 cursor-pointer">Apply</td>
                  <td className="px-6 py-4 text-sm text-gray-500 flex space-x-4">
                    <Edit size={20} className="cursor-pointer text-gray-500 hover:text-blue-600" />
                    <CheckCircle size={20} className="cursor-pointer text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listings;
