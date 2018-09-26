import React from 'react';
import {
  withStyles,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  withMobileDialog,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { getFormattedPrice } from '../utils';
import classNames from 'classnames';
import QuantityModifier from './QuantityModifier';

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    marginRight: theme.spacing.unit * 2,
  },
  margin1: {
    marginBottom: theme.spacing.unit * 2,
  },
  margin2: {
    marginBottom: theme.spacing.unit * 4,
  },
  productSubtotalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px ${-theme.spacing.unit * 3}px`,
  },
});

let CartDialog = props => {
  const { classes, fullScreen } = props;

  return (
    <ShoppingCartConsumer>
      {({ cart, cartDialogIsOpen, closeCartDialog, getCartSubtotal }) => (
        <Dialog
          fullScreen={fullScreen}
          open={cartDialogIsOpen}
          onClose={closeCartDialog}
        >
          <DialogContent>
            <div className={classNames(classes.row, classes.margin2)}>
              <Typography variant="headline">
                <b>Your Order</b>
              </Typography>
              <IconButton onClick={closeCartDialog}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>
            {cart.map(cartProduct => (
              <div
                className={classNames(classes.row, classes.margin1)}
                key={cartProduct.product._id}
              >
                <Typography
                  variant="subheading"
                  className={classes.productTitle}
                >
                  {cartProduct.product.title}
                </Typography>
                <QuantityModifier product={cartProduct.product} />
              </div>
            ))}
            <Divider className={classes.divider} />
            <Typography variant="headline" className={classes.margin2}>
              <b>Order Summary</b>
            </Typography>
            <div className={classes.row}>
              <Typography variant="subheading">Subtotal</Typography>
              <Typography variant="title">
                {getFormattedPrice(getCartSubtotal())}
              </Typography>
            </div>
            <Divider className={classes.divider} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={closeCartDialog}
              color="primary"
              variant="contained"
              disabled={cart.length === 0}
            >
              Checkout
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </ShoppingCartConsumer>
  );
};

export default (CartDialog = withMobileDialog()(
  withStyles(styles)(CartDialog)
));
