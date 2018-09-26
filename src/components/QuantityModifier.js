import React, { Component } from 'react';
import { withStyles, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlineRounded';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { getFormattedPrice } from '../utils';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

class QuantityModifier extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes, product, showPrice } = this.props;

    return (
      <ShoppingCartConsumer>
        {({
          cart,
          getProductSubtotal,
          removeProductFromCart,
          incrementProductCount,
          decrementProductCount,
        }) => {
          const cartProduct = cart.find(p => p.product._id === product._id);

          return (
            <div
              className={classes.root}
              onClick={event => event.stopPropagation()}
            >
              {cartProduct.numItemsInCart === 1 && (
                <IconButton
                  onClick={event => {
                    event.stopPropagation();
                    removeProductFromCart(cartProduct.product);
                  }}
                >
                  <DeleteIcon color="error" fontSize="large" />
                </IconButton>
              )}
              {cartProduct.numItemsInCart > 1 && (
                <IconButton
                  onClick={event => {
                    event.stopPropagation();
                    decrementProductCount(cartProduct.product);
                  }}
                >
                  <RemoveIcon color="primary" fontSize="large" />
                </IconButton>
              )}
              <div className={classes.productSubtotalContainer}>
                {showPrice && (
                  <React.Fragment>
                    <Typography variant="title">
                      {getFormattedPrice(
                        getProductSubtotal(cartProduct.product)
                      )}
                    </Typography>
                    <Typography variant="body1">
                      Qty: {cartProduct.numItemsInCart}
                    </Typography>
                  </React.Fragment>
                )}
                {!showPrice && (
                  <Typography variant="headline">
                    {cartProduct.numItemsInCart}
                  </Typography>
                )}
              </div>
              <IconButton
                onClick={event => {
                  event.stopPropagation();
                  incrementProductCount(cartProduct.product);
                }}
              >
                <AddIcon color="primary" fontSize="large" />
              </IconButton>
            </div>
          );
        }}
      </ShoppingCartConsumer>
    );
  }
}

export default (QuantityModifier = withStyles(styles)(QuantityModifier));
