
import axios from "axios";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
   
 const navigate = useNavigate();
 const { id } = useParams();
 const [userId, setUserId] = useState(id);


  const [isLoading, setIsLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");

    const [users, setUsers] = useState([]);
   

    const fetchUsers = () => {
      let token = localStorage.getItem("token");
      axios({
        url: " http://localhost:3000/api/users",
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

    console.log("User ID:", userId);

      let token = localStorage.getItem("token");
    const data = {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
   
    };

    axios({
      method: "PUT",
      url: `http://localhost:3000/api/users/${id}`,
      data: data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("user is successfully edited");
        setTimeout(() => {
          navigate("/Admin/Users");
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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit User</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="firstname"
            className="block text-gray-700 font-medium mb-2"
          >
            Firstname
          </label>
          <input
            type="text"
            id="firstname"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="lastname"
            className="block text-gray-700 font-medium mb-2"
          >
            Lastname
          </label>
          <input
            type="text"
            id="lastname"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full border border-gray rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-900 transition duration-300"
        >
          update user
          {isLoading && <div className="loader-spinner">Loading...</div>}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Edit;
