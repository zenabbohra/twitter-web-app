import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './Signin.module.css';
import Grid from "@material-ui/core/Grid";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailInput = (event) => {
    this.setState({signInEmail: event.target.value});
  };

  onPasswordInput = (event) => {
    this.setState({signInPassword: event.target.value});
  };

  onButtonClick = () => {
    const { signInEmail, signInPassword } = this.state;
    const { loadUser, onRouteChange } = this.props;
    fetch('http://localhost:3000/signin', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if(user.id) {
          loadUser(user);
          onRouteChange('home');
        }else{
          console.log('error:', user);
        }
      })
  };

  render() {
    const { onEmailInput, onPasswordInput, onButtonClick } = this;
    return (
      <Container component="main" maxWidth="xs">
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onEmailInput}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={onPasswordInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
              onClick={onButtonClick}
            >
              Sign In
            </Button>
            <Grid container className={styles.link}>
                <Link href="#" variant="body2" onClick={() => this.props.onRegisterClickFromSignInPage()}>
                  Don't have an account? Sign Up
                </Link>
            </Grid>
        </div>
      </Container>
    );
  }

}