import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing.unit * 8,
    background: grey[800],
    boxShadow: theme.shadows[4],
  },
  message: {
    color: grey[100],
  },
});

let Banner = props => (
  <div className={props.classes.banner}>
    <p className={props.classes.message}>{props.message}</p>
  </div>
);

export default (Banner = withStyles(styles)(Banner));
