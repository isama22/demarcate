import React from "react";
import './App.css';
import Home from '../../pages/Home/Home.js';
import Enterpage from '../../pages/Enterpage/Enterpage.js';
import Dana1 from '../../pages/Dana/Dana1/Dana1.js'
import Dana2 from '../../pages/Dana/Dana2/Dana2.js'
import Dana3 from '../../pages/Dana/Dana3/Dana3.js'
import Endpage1 from '../../components/Endpage1/Endpage1.js'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from "../../utils/userService";
import NavBar from '../../components/NavBar/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: userService.getUser(),
      lines: [],
      newLine: "",
      formInvalid: true,
    };
  }
  formRef = React.createRef();

  addLine = (e) => {
    e.preventDefault();
    if (!this.formRef.current.checkValidity()) return;
    this.setState((state) => ({
      lines: [...state.lines, state.newLine],
      newLine: { line: "" },
    }));
  };

  handleChange = (e) => {
    const newLine = { ...this.state.newLine }
    newLine[e.target.name] = e.target.value;
    e.persist();
    this.setState({
      newLine,
      formInvalid: !this.formRef.current.checkValidity(),
    });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  render() {
    return (
      <div className="App">
        <Router>
        <NavBar user={this.state.user} handleLogout={this.handleLogout} />
          <Route exact path='/' render={(props) => (
            <Home 
            {...props}
            />
          )}
          />
          <Route exact path='/enterpage' render={(props) => (
            <Enterpage {...props} />
          )}
          />
          <Route exact path="/dana1" component={Dana1} />
          <Route exact path="/dana2" component={Dana2} />
          <Route exact path="/dana3" component={Dana3} />

          <Route exact path='/endpage1' render={(props) => (
            <Endpage1
              addLine={this.addLine}
              handleChange={this.handleChange}
              lines={this.state.lines}
              newLine={this.state.newLine}
              formRef={this.formRef}
              {...props} />
          )}
          />
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
export default App;