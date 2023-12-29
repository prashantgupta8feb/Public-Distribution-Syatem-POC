// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import DistributionForm from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={DistributionForm} />
          {/* Add routes for New Registration, User Login, and Status of Request */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
