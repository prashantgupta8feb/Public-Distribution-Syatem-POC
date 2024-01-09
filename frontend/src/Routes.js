// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import DistributionForm from './components/Dashboard';
import RegistrationForm from './components/RegistrationForm';

const RoutesComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="new-registration" element={<RegistrationForm />} />
        <Route path="/" element={<DistributionForm />} />
        <Route path="user-login" element={<LoginForm />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        {/* Add other routes if needed */}
      </Routes>
    </div>
  );
};

export default RoutesComponent;

