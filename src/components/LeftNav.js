import React, { Component } from 'react';
import Hamburger from './Hamburger';
import LeftNavDrawer from './LeftNavDrawer';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleDrawer = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    const { open } = this.state;

    return (
      <React.Fragment>
        <Hamburger active={open} onClick={this.toggleDrawer} />
        <LeftNavDrawer open={open} onClose={this.toggleDrawer} />
      </React.Fragment>
    );
  }
}

export default LeftNav;
