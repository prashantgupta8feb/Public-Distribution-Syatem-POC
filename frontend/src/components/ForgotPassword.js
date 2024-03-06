// ForgotPassword.js
import React, {useState} from "react";
import axios from 'axios';
import './ForgotPassword.css'

const ForgotPassword =  () => {
  // Placeholder for the password recovery logic
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetLink, setResetLink] = useState('');
  const [error, setError] = useState('');

  const handlePasswordRecovery = async(e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter email to recover password!');
      return;
    }
    // Implement your password recovery logic here
    console.log("Password recovery logic goes here");
    try {
      const response = await axios.put(`https://localhost:44386/api/auth/forgotPassword${email}`);
      setResetLink(response.data.resetLink);
      setError('');
      // Redirect or do any further action upon successful login
      alert(`${response.data} successfully chaged password!`);      
    } catch (error) {
      // Handle login error
      setError('Error resetting password. Please try again.');
      alert('Error resetting password. Please try again.');
    }
  };
  

  return (
    <div className='forgot-password-wrapper'>
      <form onSubmit={handlePasswordRecovery} className='forgot-password-form'>
        <h2>Forgot Password</h2>
        <div className="forgot-password-input-box">
          <label></label>
          <input 
          type="email" 
          placeholder='Enter your email' 
          required
          value={password}
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Recover Password</button>
        <div className="forgot-password-register-link">
                    <p>Back to previous page?&nbsp;&nbsp;&nbsp;<a href="/user-login">Login</a></p>
                </div>
      </form>
      {resetLink && (
        <div>
          <p>Password reset link:</p>
          <a href={resetLink}>{resetLink}</a>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;
