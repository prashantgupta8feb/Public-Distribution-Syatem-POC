// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import DistributionForm from './components/Dashboard';
import RegistrationForm from './components/RegistrationForm'; 


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={DistributionForm} />
          {/* Add routes for New Registration, User Login, and Status of Request */}
          <Route path="/new-registration" exact component={RegistrationForm}/>
          {/* Add other routes if needed */}
        </Switch>
       </div>
       // src/App.js
<      Route path="/new-registration" component={RegistrationForm} />
    </Router>
  );
};

export default App;
