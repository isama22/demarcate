import React from 'react';
import './Home.css';
import Enterpage from '../../pages/Enterpage/Enterpage.js'
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="Home">
       <Navbar user={props.user} handleLogout={props.handleLogout}/>
          <br></br><br></br><br></br>
      <div className="home-img">
        <div className="home-div">
          <Link to="/enterpage" className="enter"><em>enter</em></Link>
          <Router>
          <Route exact path="/enterpage" render={(props) => (
            <Enterpage {...props} />
          )} />
          </Router>
        </div>
      </div>
    </div>
  );
}
export default Home;