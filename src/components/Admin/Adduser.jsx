import React from 'react'

const Adduser = () => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
        <div className="bg-white rounded shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Add New User</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Firstname
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Lastname</label>
              <input
                type="lastname"
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Role</label>
              <select className="w-full border rounded px-3 py-2 focus:outline-none">
                <option>Student</option>
                <option>Employer</option>
                <option>Admin</option>
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Adduser
