


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

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Briefcase,
  Building2,
  FileText,
  LayoutDashboard,
  Users,
  Download,
  // FilePdf,
  FileSpreadsheet,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRangePicker } from "@/components/ui/date-range-picker";

export default function ReportsPage() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState(location.pathname);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(),
  });

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

  // Sample internship statistics data
  const internshipStatsData = {
    totalInternships: 250,
    activeInterns: 80,
    pendingApprovals: 50,
    completionRates: [
      { name: "Completed", value: 120 },
      { name: "Ongoing", value: 80 },
      { name: "Pending", value: 50 },
    ],
    departmentPerformance: [
      { name: "Computer Science", completionRate: 85 },
      { name: "Business", completionRate: 75 },
      { name: "Engineering", completionRate: 90 },
      { name: "Design", completionRate: 65 },
    ],
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const handleGenerateReport = () => {
    // Placeholder for report generation logic
    console.log("Generating report", {
      department: selectedDepartment,
      dateRange,
    });
    // In a real implementation, this would call an API to generate the report
  };

  const downloadReport = (format) => {
    // Placeholder for report download logic
    console.log(`Downloading report in ${format} format`);
    // In a real implementation, this would trigger a file download
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar (same as previous implementation) */}
      <div className="flex-1 overflow-auto pt-16 lg:pt-0 p-6">
        <h1 className="text-2xl font-bold pt-32">Reports & Analytics</h1>

        {/* Report Generation Controls */}
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Generate Custom Report</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <Select
                value={selectedDepartment}
                onValueChange={setSelectedDepartment}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Departments</SelectItem>
                  <SelectItem value="ComputerScience">
                    Computer Science
                  </SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <DateRangePicker
                initialDateFrom={dateRange.from}
                initialDateTo={dateRange.to}
                onUpdate={({ range }) => setDateRange(range)}
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={handleGenerateReport}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Generate Report
              </Button>
            </div>
          </div>

          {/* Download Options */}
          <div className="mt-4 flex space-x-2">
            <Button variant="outline" onClick={() => downloadReport("pdf")}>
              <FilePdf className="mr-2" /> Download PDF
            </Button>
            <Button variant="outline" onClick={() => downloadReport("excel")}>
              <FileSpreadsheet className="mr-2" /> Download Excel
            </Button>
          </div>
        </div>

        {/* Internship Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">Total Internships</h2>
            <p className="text-3xl font-bold">
              {internshipStatsData.totalInternships}
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">Active Interns</h2>
            <p className="text-3xl font-bold">
              {internshipStatsData.activeInterns}
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">Pending Approvals</h2>
            <p className="text-3xl font-bold">
              {internshipStatsData.pendingApprovals}
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Internship Progress Bar Chart */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Internship Progress</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={internshipStatsData.completionRates}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Department Performance Pie Chart */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">
              Department Performance
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={internshipStatsData.departmentPerformance}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="completionRate"
                >
                  {internshipStatsData.departmentPerformance.map(
                    (entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    )
                  )}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}