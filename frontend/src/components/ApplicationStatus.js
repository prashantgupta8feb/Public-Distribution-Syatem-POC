// ApplicationStatus.js
import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationStatus.css';

const ApplicationStatus = () => {
  const [applicationNumber, setApplicationNumber] = useState('');
  const [applicationData, setApplicationData] = useState(null);
  const [error, setError] = useState(null);

  const handleApplicationStatus = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://localhost:7249/api/register/${applicationNumber}`);
      setApplicationData(response.data);
      setError(null);
    } catch (error) {
      setApplicationData(null);
      if (error.response && error.response.status === 404) {
        setError('No data found for the given application number.');
      } else {
        setError(error.response ? error.response.data : 'An error occurred');
      }
    }
  };

  return (
    <div className="application-status-wrapper">
      <form onSubmit={handleApplicationStatus} className="application-status-form">
        <h2>Track Application Status</h2>
        <div className="application-status-input-box">
          <label>Application Number:</label>
          <input
            type="text"
            placeholder="Enter your application number"
            value={applicationNumber}
            onChange={(e) => setApplicationNumber(e.target.value)}
            required
          />
        </div>
        <button className="application-status-button" type="submit">
          Proceed
        </button>
        <div className="register-link">
          <p>
            Back to the previous page?&nbsp;&nbsp;&nbsp;<a href="/">Home</a>
          </p>
        </div>
      </form>

      {applicationData ? (
        <div className="application-data">
          <h3>Application Data:</h3>
          <div className="data-details">
            {Object.entries(applicationData).map(([key, value]) => (
              <div key={key} className="data-item">
                <strong>{key}:</strong> {JSON.stringify(value)}
              </div>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ApplicationStatus;
