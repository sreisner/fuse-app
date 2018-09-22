import React, { Component } from 'react';
import { getFormattedPrice } from '../utils';
import { Typography, withStyles } from '@material-ui/core';
import ProductDetail from './ProductDetail';

const styles = theme => ({
  productListItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '15rem',
    minWidth: 150,
    marginRight: theme.spacing.unit * 2,
    cursor: 'pointer',
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
});

class ProductListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailDialogOpen: false,
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

  render() {
    const { classes, product } = this.props;
    const { detailDialogOpen } = this.state;

    return (
      <React.Fragment>
        <div
          className={classes.productListItem}
          onClick={this.openProductDetailDialog}
        >
          <img
            className={classes.img}
            src={product.images[0].src}
            alt={product.images[0].alt}
          />
          <Typography variant="body1">
            <b>{getFormattedPrice(product.price)}</b>
          </Typography>
          <Typography variant="body1">{product.title}</Typography>
          <Typography variant="caption">{product.manufacturer}</Typography>
        </div>
        <ProductDetail
          product={product}
          open={detailDialogOpen}
          onClose={this.closeProductDetailDialog}
        />
      </React.Fragment>
    );
  }
}

export default (ProductListItem = withStyles(styles)(ProductListItem));
