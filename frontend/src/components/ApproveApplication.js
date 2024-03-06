// ApproveApplication.js
import React, { useState } from 'react';
import axios from 'axios';


const ApproveApplication = () => {
  const [approveData, setApproveData] = useState(null);
  const [error, setError] = useState(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('male');
  const [streetAddress1, setStreetAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');  
  const [State, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [fpsShop, setFpsShop] = useState('');
  const [district1, setDistrict1] = useState('');
  const [tehsil1, setTehsil1] = useState('');
  const [fpsShop1, setFpsShop1] = useState('');

  const handleApproveApplication = async (e) => {
    e.preventDefault();

    const registredData = {
      fullName,
      email,
      phoneNumber,
      birthDate,
      gender,
      streetAddress1,
      streetAddress2,
      State,
      region,
      postalCode,
      district1,
      tehsil1,
      fpsShop1,
    };
    try {
      const response = await axios.get(`https://localhost:44386/api/register`);
      setApproveData(response.data);
      setError(null);
    } catch (error) {
      setApproveData(null);
      if (error.response && error.response.status === 404) {
        setError('No new open application found.');
      } else {
        setError(error.response ? error.response.data : 'An error occurred');
      }
    }
  };

  return (
    <div className="ApproveApplication-wrapper">
      <form onSubmit={handleApproveApplication} className="approve-application-form">
        <h2>Applications to be approve or reject </h2>
        
        
        <div className="register-link">
          <p>
            Back to the previous page?&nbsp;&nbsp;&nbsp;<a href="/">Home</a>
          </p>
        </div>
      </form>

      {approveData ? (
        <div className="approve-data">
          <h3>Approve Data:</h3>
          <div className="data-details">
            {Object.entries(approveData).map(([key, value]) => (
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

export default ApproveApplication;
