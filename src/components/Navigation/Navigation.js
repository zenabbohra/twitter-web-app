import React from 'react';
import SearchBox from './SearchBox';
import HomeIcon from '@material-ui/icons/Home';
import {Box} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styles from './Navigation.module.css';

const Navigation = ({route, userName, onRouteChange }) => {
  const preventDefault = event => event.preventDefault();
    return <Box display="flex" alignItems="center" justifyContent="space-between" minHeight={48} marginLeft={2}>
      {
        route === 'home' ?
          <Typography variant="body1" color="primary" component="p">
            Welcome
            <Link href="#" onClick={ (event) => {preventDefault(event); onRouteChange('user profile')} } variant="h5" >
              {' ' + userName}
            </Link>
          </Typography> :
          <Link onClick={() => onRouteChange('home')} href="/" className={styles.link} color="primary" variant="body1">
            <HomeIcon className={styles.icon}/>
            Home
          </Link>
      }
      <Box display="flex" alignItems="center">
        <SearchBox/>
        <Box margin={2}>
          <Link href="#" onClick={ (event) => {preventDefault(event); onRouteChange('sign in')} } variant="h5">
            Sign out
          </Link>
        </Box>
      </Box>
    </Box>
};

export default Navigation;