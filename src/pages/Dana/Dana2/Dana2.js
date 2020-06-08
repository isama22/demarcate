import React from 'react';
import './Dana2.css';
import Dana3 from '../../../pages/Dana/Dana3/Dana3.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Dana2 = () => {

  return (
    <div id="main2">
      <div id="text2">
      <Link id="line3" to="/dana3">at the ready then subsume their diverging constituent parts</Link>
      <Router>
        <Route exact path="/dana3" component={Dana3} />
      </Router>
      </div>
      </div>
  );
}

export default Dana2;