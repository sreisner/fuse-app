import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import grey from '@material-ui/core/colors/grey';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
  arrow: {
    left: 0,
    color: grey[900],
    zIndex: theme.zIndex.appBar,
    '&:hover': {
      color: grey[900],
    },
    height: '100%',
    background:
      'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
    marginLeft: -24,
  },
});

let PrevArrow = props => {
  const { classes, className, style, onClick } = props;

  return (
    <ArrowBackIcon
      style={{ ...style }}
      onClick={onClick}
      className={classNames(className, classes.arrow)}
    />
  );
};

export default (PrevArrow = withStyles(styles)(PrevArrow));
