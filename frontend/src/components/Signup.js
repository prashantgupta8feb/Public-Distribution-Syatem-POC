import React, { useState } from "react";
import axios from "axios";
import './Signup.css';
import { MdEmail } from "react-icons/md";
import { FaUser, FaLock } from "react-icons/fa";

const Signup = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError('Please enter valid username, email, and password.');
      return;
    }
    try {
      const response = await axios.post(`https://localhost:44386/api/auth/signup`,{
        username: username,
        email: email,
        password: password
      });
      console.log('User signed up successfully:', response.data);
      alert(`User signedup with email: ${response.data.email}`);
      // Reset form fields after successful signup
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
    
  };

  return (
    <div className='signup-wrapper'>
      <form onSubmit={handleSignup} className='signup-form'>
        <h1>Sign Up</h1>
        <div className="signup-input-box" >
          <input
            type="text"
            placeholder='Username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </div>
        <div className="signup-input-box">
          <input
            type="text"
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className="signup-input-box">
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button className="signup-button" type="submit">Sign up</button>

        <div className="register-link">
          <p>Already have an account?<a href="/user-login">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;

