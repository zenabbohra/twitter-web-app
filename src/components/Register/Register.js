import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './Register.module.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerName: '',
      registerEmail: '',
      registerPassword: ''
    }
  }


  onNameChange = (event) => {
    this.setState({registerName: event.target.value});
  };

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value});
  };

  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value});
  };

  onSignUpButtonClick = () => {
    const { registerName, registerEmail, registerPassword } = this.state;
    const { onRouteChange, loadUser } = this.props;
      fetch('http://circle.test/api/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword
        })
      })
        .then(response => response.json())
        .then(user => {
          if(user.name){
            onRouteChange('home');
            loadUser(user);
          }else {
            console.log(user);
          }
        })
        .catch(err => console.log(err))
  };

  render() {
    const { onNameChange, onEmailChange, onPasswordChange, onSignUpButtonClick } = this;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={styles.paper}>
          <Avatar className={styles.avatar}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={onNameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={onEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={onPasswordChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
              onClick={onSignUpButtonClick}
            >
              Sign Up
            </Button>
            <Grid container className={styles.link}>
                <Link href="#" variant="body2" onClick={() => this.props.onRouteChange('sign in')}>
                  Already have an account? Sign in
                </Link>
            </Grid>
        </div>
      </Container>
    );
  }

}

export default Register;