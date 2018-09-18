import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import withRoot from './withRoot';
import MenuView from './components/MenuView';

const styles = theme => ({});

class App extends Component {
  render() {
    return <MenuView />;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (App = withRoot(withStyles(styles)(App)));
