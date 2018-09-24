import React, { Component } from 'react';
import { withStyles, Badge } from '@material-ui/core';

const styles = {};

class QuantityModifier extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default (QuantityModifier = withStyles(styles)(QuantityModifier));
