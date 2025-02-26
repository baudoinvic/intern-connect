import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';

const Postnewinternship = () => {

    const [formData, setFormData] = useState({
      title: "",
      description: "",
      requirements: "",
      location: "",
      duration: "",
      deadline: "",
    });

   const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevState) => ({
       ...prevState,
       [name]: value,
     }));
   };

    const handleSubmit = async (e) => {
      e.preventDefault();

      // Validate the form data
      if (
        !formData.title ||
        !formData.description ||
        !formData.location ||
        !formData.duration ||
        !formData.deadline
      ) {
        toast.error("Please fill in all required fields.");
        return;
      }

      try {
        // Send data to your backend API (replace the URL with your actual endpoint)
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          toast.success("Internship posted successfully!");
          // Optionally reset the form or redirect to another page
          setFormData({
            title: "",
            description: "",
            requirements: "",
            location: "",
            duration: "",
            deadline: "",
          });
        } else {
          toast.error("Failed to post internship. Please try again.");
        }
      } catch (error) {
        console.error("Error posting internship:", error);
        toast.error("An error occurred. Please try again later.");
      }
    };


  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold mb-6">Post New Internship</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Internship Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Internship Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Frontend Developer"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Internship Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide a brief description of the internship..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Requirements
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="List the required skills/qualifications..."
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Remote or City Name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., 3 months"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Post Internship
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
}

export default Postnewinternship
