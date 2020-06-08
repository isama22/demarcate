import React from 'react';
import './Home.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
          <br></br><br></br><br></br>
      <div className="home-img">
        <div className="home-div">
          {/* <Link to="/enter" className="enter"><em>enter</em></Link>
          <Router>
          <Route exact path="/enter" render={(props) => (
            <EnterPage {...props} />
          )} />
          </Router> */}
        </div>
      </div>
    </div>
  );
}
export default Home;