import React from 'react';

const ShoppingCartContext = React.createContext({});

export class ShoppingCartProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: [],
      cartDialogIsOpen: false,
    };
  }

  addToCart = product => {
    this.setState(prevState => {
      return {
        cart: [...prevState.cart, { product, numItemsInCart: 1 }],
      };
    });
  };

  incrementProductCount = product => {
    this.setState(prevState => {
      const cartProduct = prevState.cart.find(
        p => p.product._id === product._id
      );
      cartProduct.numItemsInCart++;

      return prevState;
    });
  };

  decrementProductCount = product => {
    this.setState(prevState => {
      const cartProduct = prevState.cart.find(
        p => p.product._id === product._id
      );
      cartProduct.numItemsInCart--;

      return prevState;
    });
  };

  removeProductFromCart = product => {
    this.setState(prevState => {
      return {
        cart: prevState.cart.filter(p => p.product._id !== product._id),
      };
    });
  };

  getProductSubtotal = product => {
    const cartProduct = this.state.cart.find(
      p => p.product._id === product._id
    );

    return cartProduct.product.price * cartProduct.numItemsInCart;
  };

  getCartSubtotal = () => {
    return this.state.cart.reduce(
      (acc, cartProduct) => acc + this.getProductSubtotal(cartProduct.product),
      0
    );
  };

  getNumItemsInCart = () => {
    return this.state.cart.reduce(
      (acc, cartProduct) => acc + cartProduct.numItemsInCart,
      0
    );
  };

  openCartDialog = () => {
    this.setState({
      cartDialogIsOpen: true,
    });
  };

  closeCartDialog = () => {
    this.setState({
      cartDialogIsOpen: false,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <ShoppingCartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          incrementProductCount: this.incrementProductCount,
          decrementProductCount: this.decrementProductCount,
          removeProductFromCart: this.removeProductFromCart,
          getProductSubtotal: this.getProductSubtotal,
          getCartSubtotal: this.getCartSubtotal,
          getNumItemsInCart: this.getNumItemsInCart,
          cartDialogIsOpen: this.state.cartDialogIsOpen,
          openCartDialog: this.openCartDialog,
          closeCartDialog: this.closeCartDialog,
        }}
      >
        {children}
      </ShoppingCartContext.Provider>
    );
  }
}

export const ShoppingCartConsumer = ShoppingCartContext.Consumer;
