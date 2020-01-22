import React, {Component} from 'react';
import './App.css';
import Signin from '../components/Signin/Signin';
import Register from "../components/Register/Register";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'sign in',
      user: {
        name: '',
        email: ''
      }
    };
  }

  onRouteChange = (route) => {
    if (route === 'sign in' || route === 'register') {
      this.setState({route: 'home'})
    } else {
      this.setState({route: 'sign in'})
    }
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
    switch (this.state.route) {
      case 'register':
        return <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>;
      case 'home':
        return <p>`Welcome ${this.state.user.name}`</p>;
      default:
        return <SignIn/>;
    }


  }

}

  export default App;
