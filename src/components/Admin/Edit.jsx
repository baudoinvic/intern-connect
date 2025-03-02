


// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//    const fetchUsers = () => {

// const { id } = useParams();
//  const [userId, setUserId] = useState(id);


//   const [isLoading, setIsLoading] = useState(false);
//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//    const [username, setuserName] = useState("");
//   const [email, setEmail] = useState("");
 

//     const [users, setUsers] = useState([]);

//       let token = localStorage.getItem("token");
//       axios({
//         url: "http://localhost:3000/api/users",
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//         .then((response) => {
//           const allUsers = response.data;
//           setUsers(allUsers);
//           toast.success(response.data.message);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };

//     useEffect(() => {
//       fetchUsers();
//     }, []);


    

//   const handleSubmit = (e) => {
//     e.preventDefault();

//       let token = localStorage.getItem("token");
//     const data = {
//       fullName: fullName,
//       email: email,
//       location: location,
//       phoneNo: phoneNo,
//     };

//     axios({
//       method: "PUT",
//       url: `'http://localhost:3000/api/users/${userId}`,
//       data: data,
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         console.log(response);
//         toast.success("user is successfully edited");
//         setTimeout(() => {
//           navigate("/Admindashboard/Dashboard/Users");
//         }, 3000);
//       })

//       .catch((error) => {
//         console.log(error);
//         toast.error(error.message);
//       })

//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit User</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700">First Name:</label>
//           <input
//             type="text"
//             name="firstname"
//             value={user.firstname}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Last Name:</label>
//           <input
//             type="text"
//             name="lastname"
//             value={user.lastname}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={user.username}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           Submit
//         </button>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default Edit;


import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState(id);

  const [isLoading, setIsLoading] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = () => {
    let token = localStorage.getItem("token");
    axios({
      url: "http://localhost:3000/api/users",
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        const allUsers = response.data;
        setUsers(allUsers);
        toast.success(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    const data = {
      fullName: firstname + " " + lastname, // Combine first and last name
      email: email,
      username: username,
    };

    axios({
      method: "PUT",
      url: `http://localhost:3000/api/users/${userId}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("User is successfully edited");
        setTimeout(() => {
          navigate("/Admindashboard/Dashboard/Users");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name:
          </label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Edit;
