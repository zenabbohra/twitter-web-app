import React from 'react';
import SearchBox from './SearchBox';
import Home from './Home';
import {Box} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Navigation = ({route, userName }) => {
  const preventDefault = event => event.preventDefault();
  if (route === 'home') {
    return <Box display="flex" alignItems="center" justifyContent="space-between" minHeight={48} marginLeft={2}>
      <Typography variant="body1" color="Primary" component="p">
        Welcome {userName}
      </Typography>
      <Box display="flex" alignItems="center">
        <SearchBox/>
        <Box margin={2}>
          <Link href="#" onClick={preventDefault} variant="h5">
            Sign out
          </Link>
        </Box>
      </Box>
    </Box>
  } else if (route === 'user profile') {
    return <nav>
      <Box display="flex" alignItems="center" justifyContent="space-between" minHeight={48} marginLeft={2}>
        <Home/>
        <Box display="flex" alignItems="center">
          <SearchBox/>
          <Box margin={2}>
            <Link href="#" onClick={preventDefault} variant="body1">
              Sign out
            </Link>
          </Box>
        </Box>
      </Box>
    </nav>
  }
  return <></>;
};

export default Navigation;