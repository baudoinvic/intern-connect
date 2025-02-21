import React from 'react'

const Create = () => {
  return (
    <div>
      <div class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Create Institution</h2>

        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Institution Name
            </label>
            <input
              type="text"
              name="name"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Type</option>
              <option value="University">University</option>
              <option value="College">College</option>
              <option value="School">School</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Number of Students
            </label>
            <input
              type="number"
              name="numberOfStudents"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Join Date
            </label>
            <input
              type="date"
              name="joinDate"
              class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Create Institution
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create
