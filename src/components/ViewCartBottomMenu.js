import React from 'react';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { withStyles, Slide, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import { getFormattedPrice } from '../utils';
import grey from '@material-ui/core/colors/grey';
import classNames from 'classnames';

const styles = theme => ({
  slide: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 60,
    padding: 12,
    background: theme.palette.secondary.main,
    zIndex: theme.zIndex.appBar,
    boxShadow:
      // theme.shadows[4] inverted
      '0px -2px 4px -1px rgba(0, 0, 0, 0.2),0px -4px 5px 0px rgba(0, 0, 0, 0.14),0px -1px 10px 0px rgba(0, 0, 0, 0.12)',
  },
  [theme.breakpoints.up('sm')]: {
    slide: {
      display: 'none',
    },
  },
  textColor: {
    color: grey[100],
  },
  center: {
    display: 'flex',
  },
});

let ViewCartBottomMenu = props => (
  <ShoppingCartConsumer>
    {({ cart, openCartDialog, getNumItemsInCart, getCartSubtotal }) => (
      <Slide
        direction="up"
        in={cart.length > 0}
        className={props.classes.slide}
      >
        <div onClick={openCartDialog}>
          <Typography
            variant="button"
            className={classNames(
              props.classes.textColor,
              props.classes.center
            )}
          >
            <ShoppingCartIcon fontSize="small" />
            {getNumItemsInCart()}
          </Typography>
          <Typography variant="button" className={props.classes.textColor}>
            Checkout
          </Typography>
          <Typography variant="button" className={props.classes.textColor}>
            {getFormattedPrice(getCartSubtotal())}
          </Typography>
        </div>
      </Slide>
    )}
  </ShoppingCartConsumer>
);

export default (ViewCartBottomMenu = withStyles(styles)(ViewCartBottomMenu));
