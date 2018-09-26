import React, { Component } from 'react';
import { getFormattedPrice } from '../utils';
import {
  Typography,
  withStyles,
  Fade,
  IconButton,
  withWidth,
  Grow,
} from '@material-ui/core';
import ProductDetailDialog from './ProductDetailDialog';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import grey from '@material-ui/core/colors/grey';
import classNames from 'classnames';
import QuantityModifier from './QuantityModifier';

const styles = theme => ({
  productListItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20rem',
    minWidth: 200,
    cursor: 'pointer',
  },
  [theme.breakpoints.up('sm')]: {
    productListItem: {
      transition: `${theme.transitions.duration.shortest}ms ${
        theme.transitions.easing.sharp
      } box-shadow`,
      '&:hover': {
        boxShadow: theme.shadows[8],
      },
    },
  },
  upperRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: theme.zIndex.mobileStepper,
  },
  productCount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
    marginRight: 10,
    marginTop: 10,
    color: grey[100],
    background: theme.palette.secondary.main,
    borderRadius: '50%',
  },
  quantityModifierContainer: {
    position: 'absolute',
    top: theme.spacing.unit,
    left: '50%',
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    transform: 'translate(-50%)',
    zIndex: theme.zIndex.mobileStepper,
  },
  quantityModifier: {
    boxShadow: theme.shadows[8],
    background: 'white',
    borderRadius: theme.spacing.unit * 4,
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing.unit * 2,
    transition: `${theme.transitions.duration.shortest}ms ${
      theme.transitions.easing.sharp
    } opacity`,
  },
  body: {
    padding: theme.spacing.unit * 2,
  },
});

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailDialogOpen: false,
      hovered: false,
      productCountFocused: false,
    };
  }

  openProductDetailDialog = () => {
    this.setState({
      detailDialogOpen: true,
    });
  };

  closeProductDetailDialog = () => {
    this.setState({
      detailDialogOpen: false,
    });
  };

  onMouseEnter = () => {
    this.setState({
      hovered: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hovered: false,
    });
  };

  onAddClick = (event, addToCart) => {
    event.stopPropagation();

    addToCart(this.props.product);
  };

  onProductCountClicked = event => {
    event.stopPropagation();

    this.setState({
      productCountFocused: true,
    });
  };

  handleClickOutside = event => {
    if (
      this.productCountRef &&
      this.quantityModifierRef &&
      !this.productCountRef.contains(event.target) &&
      !this.quantityModifierRef.contains(event.target)
    ) {
      this.setState({
        productCountFocused: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setProductCountRef = node => {
    this.productCountRef = node;
  };

  setQuantityModifierRef = node => {
    this.quantityModifierRef = node;
  };

  render() {
    const { classes, width, product } = this.props;
    const { detailDialogOpen, hovered, productCountFocused } = this.state;

    const onMobile = width === 'xs';

    return (
      <React.Fragment>
        <div
          className={classes.productListItem}
          onClick={this.openProductDetailDialog}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <ShoppingCartConsumer>
            {({ addToCart, productInCart, getProductCount }) => {
              const showAddButton =
                ((hovered && !onMobile) || onMobile) && !productInCart(product);

              const showQuantityModifier =
                ((!onMobile && hovered) || (onMobile && productCountFocused)) &&
                productInCart(product);

              const showProductCount =
                (onMobile || !hovered) &&
                productInCart(product) &&
                !showQuantityModifier;

              return (
                <React.Fragment>
                  {productInCart(product) && (
                    <div
                      ref={this.setQuantityModifierRef}
                      className={classes.quantityModifierContainer}
                    >
                      <Grow
                        in={showQuantityModifier}
                        unmountOnExit={true}
                        className={classes.quantityModifier}
                      >
                        <div>
                          <QuantityModifier
                            product={product}
                            showPrice={false}
                          />
                        </div>
                      </Grow>
                    </div>
                  )}
                  <div ref={this.setProductCountRef}>
                    <Fade
                      in={showProductCount}
                      unmountOnExit={true}
                      className={classNames(
                        classes.upperRight,
                        classes.productCount
                      )}
                    >
                      <Typography
                        variant="body2"
                        color="inherit"
                        onClick={this.onProductCountClicked}
                      >
                        <b>{getProductCount(product)}</b>
                      </Typography>
                    </Fade>
                  </div>
                  <Fade
                    in={showAddButton}
                    unmountOnExit={true}
                    className={classes.upperRight}
                    onClick={event => this.onAddClick(event, addToCart)}
                  >
                    <IconButton>
                      <AddIcon
                        fontSize="small"
                        color="secondary"
                        className={classes.addIcon}
                      />
                    </IconButton>
                  </Fade>
                  <img
                    className={classes.img}
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    style={{ opacity: productInCart(product) ? 0.3 : 1 }}
                  />
                </React.Fragment>
              );
            }}
          </ShoppingCartConsumer>
          <div className={classes.body}>
            <Typography variant="body1">
              <b>{getFormattedPrice(product.price)}</b>
            </Typography>
            <Typography variant="body1">{product.title}</Typography>
            <Typography variant="caption">{product.manufacturer}</Typography>
          </div>
        </div>
        <ProductDetailDialog
          product={product}
          open={detailDialogOpen}
          onClose={this.closeProductDetailDialog}
        />
      </React.Fragment>
    );
  }
}

export default (ProductListItem = withWidth()(
  withStyles(styles)(ProductListItem)
));
