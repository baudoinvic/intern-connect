
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Postnewinternship = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    duration: "",
    deadline: "",
    company: "",
    institutionName: "", 
    fieldOfStudy: "", 
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

    if (
      !formData.title ||
      !formData.description ||
      !formData.location ||
      !formData.duration ||
      !formData.deadline ||
      !formData.company ||
      !formData.institutionName || // Check new field
      !formData.fieldOfStudy // Check new field
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Convert deadline to an object
    const deadlineParts = formData.deadline.split("-");
    const formattedDeadline = {
      year: parseInt(deadlineParts[0], 10),
      month: parseInt(deadlineParts[1], 10),
      day: parseInt(deadlineParts[2], 10),
    };

    const dataToSend = { ...formData, deadline: formattedDeadline };

    try {
      const response = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast.success("Internship posted successfully!");
        setFormData({
          title: "",
          description: "",
          requirements: "",
          location: "",
          duration: "",
          deadline: "",
          company: "",
          institutionName: "", // Reset new field
          fieldOfStudy: "", // Reset new field
        });
         setTimeout(() => {
           navigate("/company/Dash");
         }, 4000);
      } else {
        toast.error("Failed to post internship. Please try again.");
      }
    } catch (error) {
      console.error("Error posting internship:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6">Post New Internship</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a brief description..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Requirements
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="List required skills..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Remote or City"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

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
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Application Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g., TechCorp"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution Name
            </label>
            <input
              type="text"
              name="institutionName"
              value={formData.institutionName}
              onChange={handleChange}
              placeholder="e.g., Kigali University"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              type="text"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              placeholder="e.g., Computer Science"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Post Internship
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Postnewinternship;
