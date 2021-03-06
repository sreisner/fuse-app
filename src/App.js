import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import withRoot from './withRoot';
import MenuView from './components/MenuView';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import CartDialog from './components/CartDialog';
import ViewCartBottomMenu from './components/ViewCartBottomMenu';

const styles = theme => ({});

class App extends Component {
  render() {
    return (
      <ShoppingCartProvider>
        <MenuView />
        <ViewCartBottomMenu />
        <CartDialog />
      </ShoppingCartProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (App = withRoot(withStyles(styles)(App)));
