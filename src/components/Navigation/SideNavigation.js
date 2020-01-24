import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExploreIcon from '@material-ui/icons/Explore';
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    paddingTop: 0
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideNavigation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (

    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <Divider variant="fullWidth" component="li"/>
      <ListItem button>
        <ListItemIcon>
          <ExploreIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Explore" color='inherit'/>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <NotificationsIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Notifications" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AccountBoxIcon color="primary"/>
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  );
}