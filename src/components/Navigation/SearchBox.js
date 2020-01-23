import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {fade, makeStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(4),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 4),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

export default function SearchBox() {
  const classes = useStyles();

  return (
    <Box flexGrow={1} border={1} borderColor="primary.main" borderRadius={64} padding={1}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon/>
        </div>
        <InputBase
          placeholder="Search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{'aria-label': 'search'}}
        />
      </div>
    </Box>
  );
}