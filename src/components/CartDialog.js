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
  DialogTitle,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/CloseRounded';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import EmptyCartIcon from '@material-ui/icons/RemoveShoppingCartRounded';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { getFormattedPrice } from '../utils';

const styles = theme => ({
  dialogTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityModifier: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: theme.spacing.unit * 8,
  },
  productSubtotalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
          <DialogTitle>
            <div className={classes.dialogTitle}>
              <Typography variant="display2">Your Order</Typography>
              <IconButton onClick={closeCartDialog}>
                <CloseIcon fontSize="large" />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent>
            {cart.length === 0 && (
              <Typography variant="display1">
                <EmptyCartIcon /> Your cart is empty
              </Typography>
            )}
            {cart.map(cartProduct => (
              <div className={classes.productRow} key={cartProduct.product._id}>
                <Typography variant="headline">
                  {cartProduct.product.title}
                </Typography>
                <div className={classes.quantityModifier}>
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
