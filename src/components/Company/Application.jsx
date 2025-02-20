
import {
  Briefcase,
  Building2,
  ChevronRight,
  CreditCard,
  FileText,
  Home,
  List,
  Settings,
  LogOut,
  Menu,
  Users,
  X,
  Edit,
  Trash,
  LayoutDashboard,
} from "lucide-react";


const Application = () => {

  const menuItems = [
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
      path: "/companies/approvals",
    },
    {
      name: "Account Settings",
      icon: <Settings size={20} />,
      path: "/companies/settings",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Applications Received</h2>

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

      {/* Table */}
      <table className="w-full border shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Student Name</th>
            <th className="p-3">Internship Role</th>
            <th className="p-3">Date Applied</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-3">John Doe</td>
            <td className="p-3">Frontend Developer</td>
            <td className="p-3">Feb 15, 2025</td>
            <td className="p-3">
              <span className="px-2 py-1 rounded text-sm bg-yellow-300">
                Pending
              </span>
            </td>
            <td className="p-3">
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                View
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                Accept
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Reject
              </button>
            </td>
          </tr>
          <tr className="border">
            <td className="p-3">Jane Smith</td>
            <td className="p-3">Backend Developer</td>
            <td className="p-3">Feb 12, 2025</td>
            <td className="p-3">
              <span className="px-2 py-1 rounded text-sm bg-yellow-300">
                Pending
              </span>
            </td>
            <td className="p-3">
              <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                View
              </button>
              <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">
                Accept
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal UI (Static, without functionality) */}
  
    </div>
  );
};

export default Application;
