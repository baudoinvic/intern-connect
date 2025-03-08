
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply = () => {

   const navigate = useNavigate();

  const { id } = useParams();
  const [internship, setInternship] = useState({});
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    internshipRole: "",
    institutionName: "", 
    fieldOfStudy: "", 
  });

  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/internships/${id}`)
      .then((res) => {
        console.log("Internship Data:", res.data); 
        setInternship(res.data);
        setFormData((prev) => ({
          ...prev,
          internshipRole: res.data.title || "", 
        }));
      })
      .catch((err) => {
        console.error("Error fetching internship:", err);
        // toast.error("Failed to load internship details");
      });
  }, [id]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.studentName ||
      !formData.internshipRole ||
      !formData.institutionName || // Check new field
      !formData.fieldOfStudy // Check new field
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      console.log("Submitting application:", formData); // Debugging
      await axios.post("http://localhost:4000/api/applications", formData);
      toast.success("Application submitted successfully!");


         setTimeout(() => {
           navigate("/student-dashboard");
         }, 4000);


    } catch (error) {
      console.error("Error submitting application:", error.response?.data);
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

          {/* Email */}
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Internship Role
            </label>
            <input
              type="text"
              id="internshipRole"
              value={formData.internshipRole}
              onChange={handleChange} 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution Name
            </label>
            <input
              type="text"
              id="institutionName"
              value={formData.institutionName}
              onChange={handleChange}
              placeholder="Enter your institution name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Field of Study
            </label>
            <input
              type="text"
              id="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              placeholder="Enter your field of study"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
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
