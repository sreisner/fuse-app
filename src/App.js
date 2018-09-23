import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import withRoot from './withRoot';
import MenuView from './components/MenuView';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import CartDialog from './components/CartDialog';

const styles = theme => ({});

class App extends Component {
  render() {
    return (
      <ShoppingCartProvider>
        <MenuView />
        {/* <ViewCartBottomPaper /> */}
        <CartDialog />
      </ShoppingCartProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (App = withRoot(withStyles(styles)(App)));
