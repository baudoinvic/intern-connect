

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  FileText,
  LayoutDashboard,
  Users,
  ChevronRight,
  Plus,
  X,
} from "lucide-react";

const InstitutionsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [institutions, setInstitutions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/institutions") 
      .then((response) => response.json())
      .then((data) => setInstitutions(data))
      .catch((error) => console.error("Error fetching institutions:", error));
  }, []);

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Institutions</h1>
        <Link to="/create">
          <button className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Institution
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
        {institutions.map((institution) => (
          <div
            key={institution._id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="font-semibold text-lg">{institution.name}</h2>
            <p className="text-sm text-gray-500">
              {institution.type} - {institution.location}
            </p>
            <p className="text-sm text-gray-500">
              {institution.numberOfStudents} Students
            </p>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                institution.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {institution.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionsPage;
