// src/components/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleLogin = async() => {
    try{
        const response = await axios.post('http://localhost:4000/api/v1/user/login',{
                "email":email,
                "password":password
        })
        localStorage.setItem('accessToken',response.data.token);
        toast.success('logged in successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate('/');
    }catch(error){
        console.log(error)
        toast.error('An error occurred. Please try again.', {
            position: 'top-right', // Customize the toast position
            autoClose: 5000, // Automatically close the toast after 5 seconds
          });
    }
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
