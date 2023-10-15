// src/components/Register.js
import React, { useState } from 'react';
import './Register.css'; // Import the CSS file
import axios from 'axios';
import { toast } from 'react-toastify';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async() => {
    try{
        const response = await axios.post('http://localhost:4000/api/v1/user/register',{
                "name":name,
                "email":email,
                "password":password
        })
        localStorage.setItem('accessToken',response.data.token);
        toast.success('registered successfully!', {
            position: 'top-right',
            autoClose: 3000, // Notification auto-closes after 3 seconds
          });
    }catch(error){
        console.log(error)
        toast.error('An error occurred. Please try again.', {
            position: 'top-right', // Customize the toast position
            autoClose: 5000, // Automatically close the toast after 5 seconds
          });
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
