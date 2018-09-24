import React, { Component } from 'react';
import { getFormattedPrice } from '../utils';
import {
  Typography,
  withStyles,
  Grow,
  Fade,
  IconButton,
  Badge,
  Chip,
  Button,
} from '@material-ui/core';
import ProductDetailDialog from './ProductDetailDialog';
import AddIcon from '@material-ui/icons/AddCircleOutlineRounded';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import QuantityModifier from './QuantityModifier';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import classNames from 'classnames';

const styles = theme => ({
  productListItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20rem',
    minWidth: 200,
    cursor: 'pointer',
    transition: `${theme.transitions.duration.shortest}ms ${
      theme.transitions.easing.sharp
    } box-shadow`,
    '&:hover': {
      boxShadow: theme.shadows[8],
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
  quantityModifier: {},
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

    this.element = React.createRef();

    this.state = {
      detailDialogOpen: false,
      hovered: false,
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

  render() {
    const { classes, product } = this.props;
    const { detailDialogOpen, hovered } = this.state;

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
              return (
                <React.Fragment>
                  {/* <Grow
                    in={hovered && productInCart(product)}
                    className={classes.quantityModifier}
                  >
                    <QuantityModifier />
                  </Grow> */}
                  <Fade
                    in={!hovered && productInCart(product)}
                    className={classNames(
                      classes.upperRight,
                      classes.productCount
                    )}
                  >
                    <Typography variant="body2" color="inherit">
                      <b>{getProductCount(product)}</b>
                    </Typography>
                  </Fade>
                  <Fade
                    in={hovered && !productInCart(product)}
                    className={classes.upperRight}
                  >
                    <div onClick={event => this.onAddClick(event, addToCart)}>
                      <IconButton>
                        <AddIcon
                          fontSize="small"
                          color="secondary"
                          className={classes.addIcon}
                        />
                      </IconButton>
                    </div>
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

export default (ProductListItem = withStyles(styles)(ProductListItem));
