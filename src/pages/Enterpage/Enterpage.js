import React from 'react';
import './Enterpage.css';
import Dana1 from '../../pages/Dana/Dana1/Dana1';
// import carson1 from '../../pages/carson1/carson1';
// import derksen1 from '../../pages/derksen1/derksen1';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const EnterPage = () => {
  return (
    <div className="EnterPage">
      <br></br><br></br><br></br>
      <div className="border">
        <h2>follow a line</h2>
        {/* <p>put in three sentences as links, need to import those pages, have the Link and Route components</p> */}
        <div id="pdiv">
          <Link id="p1" to="/dana1">The heat out there this evening</Link>

          {/* <Link id="p2" to="/carson1">I can hear little clicks inside my dream.</Link>
          
          <Link id="p2" to="/derksen1">There goes the</Link> */}
          
          <Router>
          <Route exact path="/dana1" component={Dana1} />
          {/* <Route exact path="/carson1" component={carson1} />
          <Route exact path="/derksen1" component={derksen1} /> */}
          </Router>
        </div>
      </div>
    </div>
  );
}
export default EnterPage;