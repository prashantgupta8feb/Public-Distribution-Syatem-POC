// ForgotPassword.js
import React from "react";
import './ForgotPassword.css'

const ForgotPassword = () => {
  // Placeholder for the password recovery logic
  const handlePasswordRecovery = () => {
    // Implement your password recovery logic here
    console.log("Password recovery logic goes here");
  };

  return (
    <div className='forgot-password-wrapper'>
      <form onSubmit={handlePasswordRecovery} className='forgot-password-form'>
        <h2>Forgot Password</h2>
        <div className="forgot-password-input-box">
          <label></label>
          <input type="email" placeholder='Enter your email' required />
        </div>
        <button type="submit">Recover Password</button>
        <div className="forgot-password-register-link">
                    <p>Back to previous page?&nbsp;&nbsp;&nbsp;<a href="/user-login">Login</a></p>
                </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
