// src/Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DistributionForm from './components/Dashboard';
import RegistrationForm from './components/RegistrationForm';

const RoutesComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="new-registration" element={<RegistrationForm />} />
        <Route path="/" element={<DistributionForm />} />
        {/* Add other routes if needed */}
      </Routes>
    </div>
  );
};

export default RoutesComponent;

