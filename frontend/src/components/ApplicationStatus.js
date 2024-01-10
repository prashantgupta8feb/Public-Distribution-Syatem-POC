// ApplicationStatus.js
import './ApplicationStatus.css'
import React from "react";

const ApplicationStatus = () => {
  // Placeholder for the password recovery logic
  const handleApplicationStatus = () => {
    // Implement your password recovery logic here
    console.log("Application status tracking logic goes here");
  };

  return (
    <div className='application-status-wrapper'>
      <form onSubmit={handleApplicationStatus} className='application-status-form'>
        <h2>Track Application Status</h2>
        <div className="application-status-input-box">
          <label></label>
          <input type="text" placeholder='Enter your application number' required />
        </div>
        <button className='application-status-button' type="submit">Proceed</button>
        <div className="register-link">
                    <p>Back to previous page?&nbsp;&nbsp;&nbsp;<a href="/">Home</a></p>
                </div>
      </form>
    </div>
  );
};

export default ApplicationStatus;
