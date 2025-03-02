import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = ({ userId }) => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    // Fetch user data when the component mounts or the userId changes
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/${userId}`);
        const data = await response.json();
        setUser({
          firstname: data.firstname,
          lastname: data.lastname,
          username: data.username,
          email: data.email,
        });
      } catch (error) {
        toast.error('Failed to fetch user data!');
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the PUT/PATCH request to update user details
      const response = await fetch(`http://localhost:3000/api/${userId}`, {
        method: 'PUT', // Or 'PATCH' depending on your API design
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        toast.success('User details updated successfully!');
      } else {
        toast.error('Failed to update user details!');
      }
    } catch (error) {
      toast.error('An error occurred while updating user details!');
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstname"
            value={user.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastname"
            value={user.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Edit;
