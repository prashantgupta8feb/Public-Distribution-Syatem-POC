// import React from "react";
// import './Signup.css';
// import { FaUser,FaLock } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// const Signup = () =>{
//     return(
//         <div className='wrapper'>
//             <form action="">
//                 <h1>Sign Up</h1>
//                 <div className="input-box">
//                     <input type="text" placeholder='Name' required />
//                     <FaUser className="icon" />
//                 </div>
//                 <div className="input-box">
//                     <input type="text" placeholder='Email' required />
//                     <MdEmail className="icon" />
//                 </div>
//                 <div className="input-box">
//                     <input type="password" placeholder='Password' required />
//                     <FaLock className="icon"/>
//                 </div>
//                 <button type="submit">Sign up</button>
//                 <div className="register-link">
//                     <p>Already have an account?&nbsp;&nbsp;&nbsp;<a href="/user-login">Login</a></p>
//                 </div>
//             </form>
//         </div>
//     );
// };

//export default Signup;
import React, { useState } from "react";
import './Signup.css';
import { FaUser, FaLock } from "react-icons/fa";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError('Please enter valid username, email, and password.');
      return;
    }

    // Your signup logic goes here
    // ...

    // If signup is successful, reset error
    setError('');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        <div className="input-box">
        <FaUser className="icon" />
          <input
            type="text"
            placeholder='Username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
        </div>
        <div className="input-box">
        <FaUser className="icon" />
          <input
            type="text"
            placeholder='Email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
        </div>
        <div className="input-box">
        <FaLock className="icon"/>
          <input
            type="password"
            placeholder='Password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Sign up</button>

        <div className="register-link">
          <p>Already have an account?<a href="/user-login">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;

