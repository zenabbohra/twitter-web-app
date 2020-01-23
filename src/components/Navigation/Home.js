import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',

  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: '1.1rem',
    height: '1.1rem',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Link href="/" className={classes.link} color="primary" variant="body2">
      <HomeIcon className={classes.icon}/>
      Home
    </Link>
  );
}