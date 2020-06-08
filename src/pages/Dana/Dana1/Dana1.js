import React from 'react';
import './Dana1.css';
import Dana2 from '../../../pages/Dana/Dana2/Dana2.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Dana1 = () => {

  return (
    <div id="main">
      <div id="text">
        <Link id="line2" to="/dana2">is contained heat like things keep applicable boxes</Link>
        <Router>
          <Route exact path="/dana2" component={Dana2} />
        </Router>
      </div>
    </div>
  );
}

export default Dana1;