import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }
  
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    // Mock login logic (replace with your actual server logic)
    try {
      // Make an API request to authenticate the user
      // const response = await yourAuthenticationAPI.login({ username, password });
  
      // Assuming a successful login
      // if (response.success) {
      //   setError('');
      //   // Redirect or perform necessary actions on successful login
      // } else {
      //   setError('Invalid credentials. Please try again.');
      // }
  
      // Placeholder: Simulate a successful login
      setError('');
      console.log('Successfully logged in!');
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };
  

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="input-box">
        <FaUser className="icon" />
          <input
            type="email"
            placeholder='Email'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
         
        </div>
        <div className="input-box">
        <FaLock className=" icon"/>
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>
        <button type="submit">Login</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div className="remember-forgot">
          <p><a href="forgot-password">Forgot Password?</a></p>
        </div>

        <div className="register-link">
          <p> Don't have an account?&nbsp;&nbsp;&nbsp;<a href="/sign-up">Sign-Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
