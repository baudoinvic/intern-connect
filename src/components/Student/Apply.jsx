import React from 'react'

const Apply = () => {
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen ">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mt-32">
          <form className="space-y-6">
            {/* Internship Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                student name
              </label>
              <input
                type="text"
                id='name'
                placeholder="enter your name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                email
              </label>
              <input
                type="text"
                id='email'
                placeholder="enter your email "
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                internship role
              </label>
              <input
                type="text"
                id='role'
                placeholder="e.g frontend "
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Apply
