// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Routes'; // Updated import name

const App = () => {
  return (
    <Router>
      <RoutesComponent /> {/* Updated component name */}
    </Router>
  );
};

export default App;
