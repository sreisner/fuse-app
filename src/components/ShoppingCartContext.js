import React from 'react';

const ShoppingCartContext = React.createContext({});

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      subTotal: 0,
      totalItemsInCart: 0,
    };
  }

  addToCart = (product, numItemsToAdd = 1) => {
    this.setState(prevState => {
      let cart = [...prevState.cart];
      const item = cart.find(cartItem => cartItem.product._id === product._id);

      if (item) {
        item.numItemsInCart += numItemsToAdd;
      } else {
        cart = [...cart, { product, numItemsInCart: numItemsToAdd }];
      }

      return {
        cart,
        subTotal: this.getCartSubTotal(cart),
        totalItemsInCart: this.getNumItemsInCart(cart),
      };
    });
  };

  setProductCount = (product, updatedNumItemsInCart) => {
    this.setState(prevState => {
      const cart = [...prevState.cart];
      const item = cart.find(item => item.product._id === product._id);
      if (
        updatedNumItemsInCart > 0 &&
        updatedNumItemsInCart <= product.numInStock
      ) {
        item.numItemsInCart = updatedNumItemsInCart;
      }

      return {
        cart,
        subTotal: this.getCartSubTotal(cart),
        totalItemsInCart: this.getNumItemsInCart(cart),
      };
    });
  };

  getNumItemsInCart = cart => {
    return cart.reduce((acc, cartItem) => {
      return acc + cartItem.numItemsInCart;
    }, 0);
  };

  getProductSubTotal = cartItem => {
    return cartItem.product.retailPrice * cartItem.numItemsInCart;
  };

  getCartSubTotal = cart => {
    return cart.reduce(
      (acc, cartItem) => acc + this.getProductSubTotal(cartItem),
      0
    );
  };

  removeProductFromCart = product => {
    this.setState(prevState => ({
      cart: prevState.cart.filter(
        cartItem => cartItem.product._id !== product._id
      ),
    }));
  };

  render() {
    const { children } = this.props;

    return (
      <ShoppingCartContext.Provider
        value={{
          addToCart: this.addToCart,
          removeProductFromCart: this.removeProductFromCart,
          cart: this.state.cart,
          subTotal: this.state.subTotal,
          totalItemsInCart: this.state.totalItemsInCart,
          getProductSubTotal: this.getProductSubTotal,
          setProductCount: this.setProductCount,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  }
}

export const ShoppingCartConsumer = ShoppingCartContext.Consumer;
