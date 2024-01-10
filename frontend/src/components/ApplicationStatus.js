// ApplicationStatus.js
import React from "react";

const ApplicationStatus = () => {
  // Placeholder for the password recovery logic
  const handleApplicationStatus = () => {
    // Implement your password recovery logic here
    console.log("Application status tracking logic goes here");
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleApplicationStatus}>
        <h2>Track Application Status</h2>
        <div className="input-box">
          <label></label>
          <input type="text" placeholder='Enter your application number' required />
        </div>
        <button type="submit">Proceed</button>
        <div className="register-link">
                    <p>Back to previous page?&nbsp;&nbsp;&nbsp;<a href="/">Home</a></p>
                </div>
      </form>
    </div>
  );
};

export default ApplicationStatus;
