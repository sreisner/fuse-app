import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 24,
    color: grey[100],
  },
});

let TopNavDeliveryAddressButton = props => (
  <div className={props.classes.container}>
    <Button
      variant="text"
      onClick={props.onClick}
      classes={{ label: props.classes.label }}
    >
      Enter delivery address <ArrowDropDownIcon />
    </Button>
  </div>
);

export default (TopNavDeliveryAddressButton = withStyles(styles)(
  TopNavDeliveryAddressButton
));
