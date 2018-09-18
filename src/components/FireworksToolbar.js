import { Grid, Toolbar, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import ShoppingCartMenu from './ShoppingCartMenu';
import PropTypes from 'prop-types';
import { getFormattedPrice } from '../utils';
import FAQ from './FAQ';

const styles = theme => ({
  faqButton: {
    width: 200,
  },
});

class FireworksToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.faqButton}
            >
              <Grid item>
                <Typography variant="title">Products</Typography>
              </Grid>
              <Grid item>
                <FAQ />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={40} alignItems="center">
              <ShoppingCartConsumer>
                {({ subTotal }) => (
                  <React.Fragment>
                    <Grid item>
                      <Typography variant="subheading">
                        Subtotal: {getFormattedPrice(subTotal)}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <ShoppingCartMenu />
                    </Grid>
                  </React.Fragment>
                )}
              </ShoppingCartConsumer>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }
}

FireworksToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (FireworksToolbar = withStyles(styles)(FireworksToolbar));
