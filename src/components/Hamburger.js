import React, { Component } from 'react';
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

class Hamburger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
    };
  }

  updateColor = () => {
    if (window.scrollY === 0) {
      this.setState({
        color: grey[100],
      });
    } else {
      this.setState({
        color: grey[900],
      });
    }
  };

  componentDidMount() {
    this.updateColor();

    window.addEventListener('scroll', this.updateColor);
  }

  render() {
    const { classes, onClick } = this.props;
    const { color } = this.state;

    return (
      <div className={classes.hamburger} onClick={onClick}>
        <div className={classes.container}>
          <div
            className={classNames(classes.line, classes.line1)}
            style={{ background: color }}
          />
          <div
            className={classNames(classes.line, classes.line2)}
            style={{ background: color }}
          />
          <div
            className={classNames(classes.line, classes.line3)}
            style={{ background: color }}
          />
        </div>
      </div>
    );
  }
}

export default (Hamburger = withStyles(styles)(Hamburger));
