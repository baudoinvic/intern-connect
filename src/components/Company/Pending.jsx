const Pending = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Pending Approvals</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by applicant name..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        disabled
      />

      {/* Table */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Applicant Name</th>
              <th className="p-3">Internship Title</th>
              <th className="p-3">Date Applied</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample Rows */}
            <tr className="border-b">
              <td className="p-3">John Doe</td>
              <td className="p-3">Frontend Developer</td>
              <td className="p-3">2024-02-10</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-yellow-200 text-yellow-800">
                  Pending
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white rounded-md cursor-not-allowed">
                  Approve
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md cursor-not-allowed">
                  Reject
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-3">Jane Smith</td>
              <td className="p-3">Backend Developer</td>
              <td className="p-3">2024-02-12</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-yellow-200 text-yellow-800">
                  Pending
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="px-3 py-1 bg-green-500 text-white rounded-md cursor-not-allowed">
                  Approve
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded-md cursor-not-allowed">
                  Reject
                </button>
              </td>
            </tr>

            <tr className="border-b">
              <td className="p-3">Alice Johnson</td>
              <td className="p-3">UI/UX Designer</td>
              <td className="p-3">2024-02-15</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-blue-200 text-blue-800">
                  Under Review
                </span>
              </td>
              <td className="p-3 flex gap-2">
                <span className="text-blue-500 font-semibold">In Review</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending;
