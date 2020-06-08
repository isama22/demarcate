import React from "react";
import Home from '../../pages/Home/Home.js';
import Enterpage from '../../pages/Enterpage/Enterpage.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={(props) =>(
            <Home {...props}
            />
          )}
          /> 
          <Route exact path='/enterpage' render={(props) => (
            <Enterpage {...props}
            />
          )}
          />     
        </Router>

      </div>
    );
  }
}
export default App;