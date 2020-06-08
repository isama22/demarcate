import React from "react";
import Home from '../../pages/Home/Home.js';
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
        </Router>
      </div>
    );
  }
}
export default App;