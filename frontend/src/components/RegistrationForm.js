// src/components/RegistrationForm.js
import React, { useEffect, useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {

  const StatesValues =[
    {id:"1",name:"Uttrakhand"},
    {id:"2",name:"Delhi"},
  ]
  const [states,setStates]=useState([]);
  useEffect(()=>{
    setStates(states);
  }
  )
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('male');
  const [streetAddress1, setStreetAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [State, setState] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [District, setDistrict] = useState('');
  const [Tehsil, setTehsil] = useState('');
  const [Fpsshop, setFpsshop] = useState('');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', {
      fullName,
      email,
      phoneNumber,
      birthDate,
      gender,
      streetAddress1,
      streetAddress2,
      State,
      city,
      region,
      postalCode,
      District,
      Tehsil,
      Fpsshop,
    });
  };
  
  
  
  return (
    <section className="container">
      <header>Registration Form</header>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-box">
          <label className="label">Full Name</label>
          <input type="text" placeholder="Enter full name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>

        <div className="input-box">
          <label className="label">Email Address</label>
          <input type="text" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="column">
          <div className="input-box">
            <label className="label">Phone Number</label>
            <input type="number" placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="input-box">
            <label className="label">Birth Date</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
          </div>
        </div>

        <div className="gender-box">
          <h3 className="label">Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" checked={gender === 'male'} onChange={() => setGender('male')} />
              <label htmlFor="check-male">male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" checked={gender === 'female'} onChange={() => setGender('female')} />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" checked={gender === 'other'} onChange={() => setGender('other')} />
              <label htmlFor="check-other">prefer not to say</label>
            </div>
          </div>
        </div>

        <div className="input-box address">
          <label className="label">Street Address</label>
          <input type="text" placeholder="Enter street address" value={streetAddress1} onChange={(e) => setStreetAddress1(e.target.value)} required />
          <input type="text" placeholder="Enter street address line 2" value={streetAddress2} onChange={(e) => setStreetAddress2(e.target.value)} required />
        </div>
          <div className="column"> 
          <div className="select-box">
              <select>
                <option value="0">Select State</option>
              {
                StatesValues && StatesValues.values !== undefined ?
                StatesValues.map((ctr,index)=>{
                    return(
                      <option key={index} value={ctr.id}>{ctr.name}</option>
                    )
                })
                :"No states"             
              }
              </select>
              </div>                    
            <div className="select-box">
              <select value={District} onChange={(e) => setDistrict(e.target.value)} required>
                <option hidden>District</option>
                <option>Dehradun</option>
                <option>Haridwar</option>
                <option>Almora</option>
                <option>Nanital</option>
              </select>
            </div>
            </div>
          <div className="column">
          <div className="select-box">
              <select value={Tehsil} onChange={(e) => setTehsil(e.target.value)} required>
                <option hidden>Tehsil</option>
                <option>Dehradun</option>
                <option>Vikashnagar</option>
                <option>Risikesh</option>                
              </select>
            </div>
            <div className="select-box">
              <select value={Fpsshop} onChange={(e) => setFpsshop(e.target.value)} required>
                <option hidden>FPS Shop</option>
                <option>MS test 1</option>
                <option>MS test 2</option>
                <option>MS test 3</option>                
              </select>
            </div>
          </div>
       

        <button type="submit" className="button">Submit</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
