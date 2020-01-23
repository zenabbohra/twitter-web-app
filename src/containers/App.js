import React, {Component} from 'react';
import './App.css';
import SignIn from '../components/Signin/Signin';
import Register from "../components/Register/Register";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'register',
      user: {
        name: '',
        email: ''
      }
    };
  }

  onRouteChange = (routeInput) => {
    let { route } = this.state;
    if (route === 'sign in' || route === 'register') {
      this.setState({route: routeInput})
    } else {
      this.setState({route: routeInput})
    }
    // route = routeInput;
  };

  loadUser = (data) => {
    this.setState({
      user: {
        name: data.name,
        email: data.email
      }
    })
  };

  onRegisterClickFromSignInPage = () => {
    this.setState({route: 'register'})
  };

  render() {
    const { onRouteChange, loadUser, onRegisterClickFromSignInPage } = this;
    switch (this.state.route) {
      case 'register':
        return <Register onRouteChange={onRouteChange} loadUser={loadUser}/>;
      case 'home':
        return <p>Welcome {this.state.user.name}</p>;
      default:
        return <SignIn onRouteChange={onRouteChange} loadUser={loadUser} onRegisterClickFromSignInPage={onRegisterClickFromSignInPage}/>;
    }

  }

}

  export default App;
