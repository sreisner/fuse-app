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
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import EmptyCartIcon from '@material-ui/icons/RemoveShoppingCartRounded';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { getFormattedPrice } from '../utils';
import classNames from 'classnames';

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
      {({
        cart,
        cartDialogIsOpen,
        closeCartDialog,
        removeProductFromCart,
        decrementProductCount,
        incrementProductCount,
        getProductSubtotal,
        getCartSubtotal,
      }) => (
        <Dialog
          fullScreen={fullScreen}
          open={cartDialogIsOpen}
          onClose={closeCartDialog}
        >
          <DialogContent>
            <div className={classNames(classes.row, classes.margin2)}>
              <Typography variant="display1">
                <b>Your Order</b>
              </Typography>
              <IconButton onClick={closeCartDialog}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>
            {cart.length === 0 && (
              <Typography variant="display1">
                <EmptyCartIcon /> <b>Your cart is empty</b>
              </Typography>
            )}
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
                <div
                  className={classNames(classes.row, classes.quantityModifier)}
                >
                  {cartProduct.numItemsInCart === 1 && (
                    <IconButton
                      onClick={() => removeProductFromCart(cartProduct.product)}
                    >
                      <DeleteIcon color="error" fontSize="large" />
                    </IconButton>
                  )}
                  {cartProduct.numItemsInCart > 1 && (
                    <IconButton
                      onClick={() => decrementProductCount(cartProduct.product)}
                    >
                      <RemoveIcon color="primary" fontSize="large" />
                    </IconButton>
                  )}
                  <div className={classes.productSubtotalContainer}>
                    <Typography variant="title">
                      {getFormattedPrice(
                        getProductSubtotal(cartProduct.product)
                      )}
                    </Typography>
                    <Typography variant="body1">
                      Qty: {cartProduct.numItemsInCart}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => incrementProductCount(cartProduct.product)}
                  >
                    <AddIcon color="primary" fontSize="large" />
                  </IconButton>
                </div>
              </div>
            ))}
            <Divider className={classes.divider} />
            <Typography variant="display1" className={classes.margin2}>
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
