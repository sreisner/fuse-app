import React, { Component } from 'react';
import { withStyles, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import grey from '@material-ui/core/colors/grey';
import classNames from 'classnames';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 24,
  },
  lightText: {
    color: grey[100],
  },
  darkText: {
    color: grey[900],
  },
});

class TopNavDeliveryAddressButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelTextColorClass: props.classes.lightText,
    };
  }

  updateColor = () => {
    if (window.scrollY === 0) {
      this.setState({
        labelTextColorClass: this.props.classes.lightText,
      });
    } else {
      this.setState({
        labelTextColorClass: this.props.classes.darkText,
      });
    }
  };

  componentDidMount() {
    this.updateColor();

    window.addEventListener('scroll', this.updateColor);
  }

  render() {
    const { classes, onClick } = this.props;
    const { labelTextColorClass } = this.state;

    return (
      <div className={classes.container}>
        <Button
          variant="text"
          onClick={onClick}
          classes={{ label: classNames(classes.label, labelTextColorClass) }}
        >
          Enter delivery address <ArrowDropDownIcon />
        </Button>
      </div>
    );
  }
}

export default (TopNavDeliveryAddressButton = withStyles(styles)(
  TopNavDeliveryAddressButton
));
