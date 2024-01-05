// RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css'; // Import your CSS file for styling

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    state: '',
    district: '',
    tehsil: '',
    fpsShop: '',
    applicantName: '',
    fatherHusbandName: '',
    mobileNo: '',
    address: '',
    income: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="registration-form">
      <div className="form-section">
        <label>
          State:
          <select name="state" value={formData.state} onChange={handleInputChange}>
            <option value="">Select State</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttrakhand">Uttrakhand</option>
            <option value="Punjab">Punjab</option>
          </select>
        </label>

        <label>
          District:
          <select name="district" value={formData.district} onChange={handleInputChange}>
            <option value="">Select District</option>
            {/* Add district options */}
          </select>
        </label>

        <label>
          Tehsil:
          <select name="tehsil" value={formData.tehsil} onChange={handleInputChange}>
            <option value="">Select Tehsil</option>
            {/* Add tehsil options */}
          </select>
        </label>
      </div>

      <div className="form-section">
        <label>
          FPS Shop:
          <select name="fpsShop" value={formData.fpsShop} onChange={handleInputChange}>
            <option value="">Select FPS Shop</option>
            <option value="MS/Test1">MS/Test1</option>
            <option value="MS/Test2">MS/Test2</option>
          </select>
        </label>
      </div>

      <div className="form-section">
        <label>
          Applicant Name:
          <input type="text" name="applicantName" value={formData.applicantName} onChange={handleInputChange} />
        </label>

        <label>
          Father/Husband Name:
          <input type="text" name="fatherHusbandName" value={formData.fatherHusbandName} onChange={handleInputChange} />
        </label>
      </div>

      <div className="form-section">
        <label>
          Mobile No:
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} />
        </label>

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleInputChange} />
        </label>
      </div>

      <div className="form-section">
        <label>
          Income (RS):
          <input type="number" name="income" value={formData.income} onChange={handleInputChange} />
        </label>
      </div>
    </div>
  );
};

export default RegistrationForm;
