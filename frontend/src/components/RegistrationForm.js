// src/components/RegistrationForm.js
import React, { useEffect, useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {

  // const countries = [
  //   {id:"1",name:"INDIA"},
  //   {id:"2",name:"USA"}
  // ];

  // const states = [
  //   {id:"1",countryId:"1",name:"Haryana"},
  //   {id:"2",countryId:"1",name:"Delhi"},
  //   {id:"3",countryId:"2",name:"Texas"},
  //   {id:"4",countryId:"2",name:"California"}
  // ]

  const states = [    
    { id: "1", name: "Haryana" },
    { id: "2", name: "Delhi" },
  ]

  

  const districts = [
    { id: "3", stateId: "1", name: "Faridabad" },
    { id: "4", stateId: "1", name: "Palwal" },
    { id: "5", stateId: "2", name: "Mandi House" },
    { id: "6", stateId: "2", name: "kalka Ji" },

  ]

  const tehsils = [
    { id: "7", districtId: "3", name: "Faridabad Tehsil" },
    { id: "8", districtId: "4", name: "Palwal Tehsil" },
    { id: "9", districtId: "5", name: "Mandi House Tehsil" },
    { id: "10", districtId: "6", name: "kalka Ji Tehsil" },

  ]

  const Fpsshop = [
    { id: "11", tehsilId: "7", name: "Faridabad Tehsil FPS Shop 1" },
    { id: "12", tehsilId: "8", name: "Palwal Tehsil FPS Shop 1" },
    { id: "13", tehsilId: "9", name: "Mandi House Tehsil FPS Shop 1" },
    { id: "14", tehsilId: "10", name: "kalka Ji Tehsil FPS Shop 1" },

  ]

  
  const [state, setState] = useState([]);
  const [District, setDistrict] = useState('');
  const [Tehsil, setTehsil] = useState('');
  const [fpsShop, setFpsShop] = useState('');
  

  

  useEffect(() => {
    setState();
  }, [])

  const handlestate = (id) => {
    const dtdist = districts.filter(x => x.stateId === id);
    console.log(id)
    setDistrict(dtdist)    
    setTehsil('')
    setFpsShop('')
  }

  const handledistrict = (id) => {
    const dt = tehsils.filter(x => x.districtId === id);
    setTehsil(dt)
    setFpsShop('')
  }

  const handleTehsil = (id) => {
    const dt = Fpsshop.filter(x => x.tehsilId === id);
    setFpsShop(dt)
  }



  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('male');
  const [streetAddress1, setStreetAddress1] = useState('');
  const [streetAddress2, setStreetAddress2] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');  
  

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
      region,
      postalCode,
      Tehsil,
      Fpsshop,
    });
  };



  return (
    <section className="container">
      <header>Registration Form</header>
      <form onSubmit={handleSubmit} className="form">
      <div className="column">
          <div className="select-box">
            <select onChange={(e) => handlestate(e.target.value)}>
              <option value="0">Select State</option>
              {
                states &&
                  states !== undefined ?
                  states.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>{ctr.name}</option>
                    )
                  })
                  : "No State"

              }
            </select>
          </div>
          <div className="select-box">
            <select onChange={(e) => handledistrict(e.target.value)}>
              <option value="0">Select District</option>
              {
                District &&
                District !== undefined ?
                District.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>{ctr.name}</option>
                    )
                  })
                  : "No District"

              }
            </select>
          </div>
        </div>
        <div className="column">
          <div className="select-box">
            <select id="ddlCity" onChange={(e) => handleTehsil(e.target.value)} >
              <option value="0">Select Tehsil</option>
              {
                Tehsil &&
                  Tehsil !== undefined ?
                  Tehsil.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>{ctr.name}</option>
                    )
                  })
                  : "No City"

              }
            </select>
          </div>
          <div className="select-box">
          <select id="ddlCity" >
              <option value="0">Select FPS shop</option>
              {
                fpsShop &&
                fpsShop !== undefined ?
                fpsShop.map((ctr, index) => {
                    return (
                      <option key={index} value={ctr.id}>{ctr.name}</option>
                    )
                  })
                  : "No City"

              }
            </select>
          </div>
        </div>

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
            <input  placeholder="Enter phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
          </div>
          <div className="input-box">
            <label className="label">Birth Date</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
          </div>
        </div>

        <div className="column">
          <div className="input-box">
            <label className="label">Annual Family income</label>
            <input type="number" placeholder="Enter Family incode"  required />
          </div>
          <div className="input-box">
            <label className="label">No of family member(count)</label>
            <input type="number"  required />
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
        

        <button type="submit" className="button">Submit</button>
      </form>
    </section>
  );
};

export default RegistrationForm;
