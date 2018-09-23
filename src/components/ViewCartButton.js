import React from 'react';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { Button, withStyles, Slide, Badge } from '@material-ui/core';

const styles = theme => ({
  [theme.breakpoints.down('xs')]: {
    wrapper: {
      display: 'none',
    },
  },
  slide: {
    position: 'absolute',
    right: theme.spacing.unit * 2,
  },
  badge: {
    margin: theme.spacing.unit * 2,
  },
});

let ViewCartButton = props => (
  <ShoppingCartConsumer>
    {({ cart, openCartDialog, getNumItemsInCart }) => (
      <Slide
        direction="left"
        in={cart.length > 0}
        className={props.classes.slide}
      >
        <Badge
          badgeContent={getNumItemsInCart()}
          color="secondary"
          className={props.classes.badge}
        >
          <Button variant="contained" color="primary" onClick={openCartDialog}>
            View Cart
          </Button>
        </Badge>
      </Slide>
    )}
  </ShoppingCartConsumer>
);

export default (ViewCartButton = withStyles(styles)(ViewCartButton));
