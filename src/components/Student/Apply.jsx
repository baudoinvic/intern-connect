import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState({});
  const [formData, setFormData] = useState({
    studentName: "",
    email: "", // if your API doesn't need email, you can remove it
    internshipRole: "",
  });

  // Fetch internship details
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/applications
/${id}`
      )
      .then((res) => {
        setInternship(res.data);
        setFormData((prev) => ({ ...prev, internshipRole: res.data.title }));
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load internship details");
      });
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit application
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/applications"
, formData);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit application.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">
          Apply for {internship.title || "Internship"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Student Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          {/* Email (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>

          {/* Internship Role (Auto-filled) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Internship Role
            </label>
            <input
              type="text"
              id="internshipRole"
              value={formData.internshipRole}
    
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
