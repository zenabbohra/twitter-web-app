import React, {Component} from 'react';
import './App.css';
import SignIn from '../components/Signin/Signin';
import Register from "../components/Register/Register";
import Navigation from '../components/Navigation/Navigation';
import SideNavigation from "../components/Navigation/SideNavigation";
import Box from "@material-ui/core/Box";
import PostTweet from "../components/PostTweet/PostTweet";
import Feeds from "../components/Feeds/Feeds";

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

  onRouteChange = (routeInput) => {
    // let {route} = this.state;
    console.log('OnRouteChange function');
    this.setState({route: routeInput})
  };

  loadUser = (data) => {
    console.log('render because of loadUser method');
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
    const {onRouteChange, loadUser, onRegisterClickFromSignInPage} = this;
    const {user, route} = this.state;
    console.log('page renders', route);
    switch (this.state.route) {
      case 'register':
        return <Register onRouteChange={onRouteChange} loadUser={loadUser}/>;
      case 'home':
        return <Box display='flex' flexDirection='column'>
          <Navigation userName={user.name} route={route} onRouteChange={onRouteChange}/>
          <Box display='flex'>
            <SideNavigation/>
            <Box display='flex' flexDirection='column'>
              <PostTweet/>
              <Feeds/>
            </Box>
          </Box>
        </Box>;
      case 'user profile':
        return <Navigation route={route} onRouteChange={onRouteChange}/>;
      default:
        return <SignIn
          onRouteChange={onRouteChange}
          loadUser={loadUser}
          onRegisterClickFromSignInPage={onRegisterClickFromSignInPage}
        />;
    }

  }

}

export default App;
