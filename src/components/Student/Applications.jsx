// import {
//   Bell,
//   ChevronRight,
//   FileText,
//   LogOut,
//   Menu,
//   PlusCircle,
//   X,
// } from "lucide-react";
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import profileImage from "../../assets/images/DSC_1168.JPG";

// function Applications() {
//   const navigate = useNavigate();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const studentInfo = {
//     name: "William",
//     image: profileImage,
//   };

//   const [applications, setApplications] = useState([
//     {
//       position: "Backend Developer Intern",
//       company: "Innovatech",
//       status: "Pending",
//       date: "2024-11-01",
//     },
//     {
//       position: "Data Analyst Intern",
//       company: "DataSphere",
//       status: "Accepted",
//       date: "2024-10-15",
//     },
//   ]);

//   const [formData, setFormData] = useState({
//     position: "",
//     company: "",
//     resume: null,
//   });

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleLogout = () => {
//     navigate("/");
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, resume: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newApplication = {
//       position: formData.position,
//       company: formData.company,
//       status: "Pending",
//       date: new Date().toISOString().split("T")[0],
//     };
//     setApplications([...applications, newApplication]);
//     setFormData({ position: "", company: "", resume: null });
//     alert("Application submitted successfully!");
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Mobile Header */}
//       <div className="md:hidden bg-white p-4 flex items-center justify-between shadow-md">
//         <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
//           {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//         <div className="flex items-center space-x-3">
//           <img
//             src={studentInfo.image}
//             alt="Profile"
//             className="w-8 h-8 rounded-full bg-gray-200"
//           />
//           <span className="font-semibold">{studentInfo.name}</span>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`fixed md:static inset-0 z-20 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white shadow-lg ${
//           isSidebarOpen ? "block" : "hidden md:block"
//         }`}
//       >
//         {/* Profile Section */}
//         <div className="p-6 border-b hidden md:block">
//           <div className="flex items-center space-x-4">
//             <img
//               src={studentInfo.image}
//               alt="Profile"
//               className="w-12 h-12 rounded-full bg-gray-200"
//             />
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800">{studentInfo.name}</h2>
//               <p className="text-sm text-gray-500">Student</p>
//             </div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <nav className="mt-6">
//           <Link
//             to="/student/listings"
//             className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//           >
//             <FileText size={20} />
//             <span className="ml-3">Internship Listings</span>
//             <ChevronRight size={16} className="text-gray-400 ml-auto" />
//           </Link>
//           <Link
//             to="/student/apply"
//             className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 font-semibold"
//           >
//             <PlusCircle size={20} />
//             <span className="ml-3">New Application</span>
//           </Link>
//           <Link
//             to="/student/notifications"
//             className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//           >
//             <Bell size={20} />
//             <span className="ml-3">Notifications</span>
//           </Link>
//           <button
//             onClick={handleLogout}
//             className="flex items-center w-full px-6 py-3 mt-4 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
//           >
//             <LogOut size={20} />
//             <span className="ml-3">Logout</span>
//           </button>
//         </nav>
//       </div>

//       {/* Overlay for mobile sidebar */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
//           onClick={() => setIsSidebarOpen(false)}
//         />
//       )}

//       {/* Main Content */}
//       <div className="flex-1 overflow-auto">
//         <div className="p-4 md:p-8">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">New Application</h2>

//           {/* Application Form */}
//           <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">
//               Submit a New Application
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="position" className="block text-sm font-medium text-gray-600">
//                   Position
//                 </label>
//                 <input
//                   type="text"
//                   id="position"
//                   name="position"
//                   value={formData.position}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="company" className="block text-sm font-medium text-gray-600">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   id="company"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="resume" className="block text-sm font-medium text-gray-600">
//                   Upload Resume
//                 </label>
//                 <input
//                   type="file"
//                   id="resume"
//                   name="resume"
//                   onChange={handleFileChange}
//                   required
//                   className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//               >
//                 Submit Application
//               </button>
//             </form>
//           </div>

//           {/* Previous Applications */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-700 mb-4">
//               Previous Applications
//             </h3>
//             <ul className="divide-y divide-gray-200">
//               {applications.map((app, index) => (
//                 <li key={index} className="py-4">
//                   <p className="text-gray-800 font-medium">{app.position}</p>
//                   <p className="text-gray-600 text-sm">{app.company}</p>
//                   <p className="text-gray-500 text-sm">
//                     {app.status} - {app.date}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Applications;

import React, { useState } from "react";
import { Bell, Briefcase, CheckCircle, Clock, FileText, LayoutDashboard, LogOut, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import profileImage from "../../assets/images/DSC_1168.JPG";

function ApplicationsPage() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const studentInfo = {
    name: "William",
    image: profileImage,
  };

  const menuItems = [
    
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/student-dashboard" },
    { name: "Internship Listings", icon: <Briefcase size={20} />, path: "/student/listings" },
    { name: "Current Internship", icon: <Clock size={20} />, path: "/student/current" },
    { name: "Notifications", icon: <Bell size={20} />, path: "/student/notifications", badge: 3 },
  ];

  const applications = [
    {
      company: "TechCorp",
      position: "Frontend Developer",
      status: "Pending",
      dateApplied: "November 1, 2024",
    },
    {
      company: "InnovateHub",
      position: "Backend Developer",
      status: "Accepted",
      dateApplied: "October 20, 2024",
    },
    {
      company: "DataSystems Inc",
      position: "Data Analyst",
      status: "Rejected",
      dateApplied: "October 15, 2024",
    },
  ];

  const handleLogout = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        } md:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-white shadow-lg`}
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
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">My Applications</h2>

          {/* Applications Table */}
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <table className="w-full text-sm md:text-base text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left py-2 px-4">Company</th>
                  <th className="text-left py-2 px-4">Position</th>
                  <th className="text-left py-2 px-4">Status</th>
                  <th className="text-left py-2 px-4">Date Applied</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-4">{application.company}</td>
                    <td className="py-2 px-4">{application.position}</td>
                    <td className="py-2 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-white text-xs ${
                          application.status === "Pending"
                            ? "bg-yellow-500"
                            : application.status === "Accepted"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{application.dateApplied}</td>
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

export default ApplicationsPage;
