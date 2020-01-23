import React from 'react';
import SearchBox from './SearchBox';
import Home from './Home';
import {Box} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const Navigation = ({route, userName }) => {
  const preventDefault = event => event.preventDefault();
    return <Box display="flex" alignItems="center" justifyContent="space-between" minHeight={48} marginLeft={2}>
      {
        route === 'home' ?
          <Typography variant="body1" color="Primary" component="p">
            Welcome {userName}
          </Typography> :
          <Home/>
      }
      <Box display="flex" alignItems="center">
        <SearchBox/>
        <Box margin={2}>
          <Link href="#" onClick={preventDefault} variant="h5">
            Sign out
          </Link>
        </Box>
      </Box>
    </Box>
};

export default Navigation;