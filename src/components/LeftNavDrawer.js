import React from 'react';
import {
  List,
  Drawer,
  Typography,
  IconButton,
  withStyles,
  ListItemIcon,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import HomeIcon from '@material-ui/icons/HomeOutlined';

const styles = theme => ({
  drawer: {
    width: '30rem',
    maxWidth: '90vw',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit * 3,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing.unit * 2,
    },
  },
  heading: {
    overflowY: 'hidden',
  },
  closeButton: {
    marginRight: theme.spacing.unit,
  },
  listItemIcon: {
    fontSize: 36,
  },
});

let LeftNavDrawer = props => (
  <Drawer open={props.open} onClose={props.onClose}>
    <div className={props.classes.drawer}>
      <div className={props.classes.toolbar}>
        <Typography variant="display1" className={props.classes.heading}>
          Fuse
        </Typography>
        <IconButton
          onClick={props.onClose}
          className={props.classes.closeButton}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </div>
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon
              className={props.classes.listItemIcon}
              fontVariant="outlined"
            />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>
    </div>
  </Drawer>
);

export default (LeftNavDrawer = withStyles(styles)(LeftNavDrawer));
