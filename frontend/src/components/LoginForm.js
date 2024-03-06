// Login.js
import React, { useState } from "react";
import axios from 'axios';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setLoginData] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    //Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(`https://localhost:44386/api/auth/login`,{
        email: email,
        password: password
      });
      
      setLoginData(response.data);
      
      
      // Redirect or do any further action upon successful login
      //alert(`${response.data.username} successfully logged in!`);
      navigate('/approve-application');
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      // Handle login error
      //console.log('Login failed:',error);
      alert('Invalid username or password');
      setError('Invalid username or password');
    }
    
  };

  return (
    <div className='login-wrapper'>
      <form onSubmit={handleLogin} className='login-form'>
        <h1>Login</h1>
        <div className="login-input-box">
          <input
            type="text"
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-input-box">
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
            
          </div>
        </div>
        <button className="login-button" type="submit">Login</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="register-link">
          <p> Don't have an account?&nbsp;&nbsp;&nbsp;<a href="/sign-up">Sign-Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
