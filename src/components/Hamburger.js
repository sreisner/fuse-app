import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import grey from '@material-ui/core/colors/grey';

const styles = theme => {
  const hamburgerWidth = theme.spacing.unit * 4;
  const hamburgerHeight = theme.spacing.unit * 2;
  const barHeight = 2;

  return {
    hamburger: {
      position: 'relative',
      cursor: 'pointer',
      padding: theme.spacing.unit * 2,
      left: -theme.spacing.unit,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      position: 'relative',
      width: hamburgerWidth,
      height: hamburgerHeight,
    },
    line: {
      position: 'absolute',
      width: '100%',
      height: barHeight,
      background: grey[100],
      transition: '0.3s all',
      opacity: 1,
    },
    line1: {
      top: 0,
    },
    line2: {
      top: hamburgerHeight / 2 - barHeight / 2,
    },
    line3: {
      top: hamburgerHeight - barHeight,
    },
  };
};

let Hamburger = props => (
  <div className={props.classes.hamburger} onClick={props.onClick}>
    <div className={props.classes.container}>
      <div className={classNames(props.classes.line, props.classes.line1)} />
      <div className={classNames(props.classes.line, props.classes.line2)} />
      <div className={classNames(props.classes.line, props.classes.line3)} />
    </div>
  </div>
);

export default (Hamburger = withStyles(styles)(Hamburger));
