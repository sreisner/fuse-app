import React from 'react';
import { getFormattedPrice } from '../utils';
import { Typography, withStyles } from '@material-ui/core';

const styles = theme => ({
  productListItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '15rem',
    minWidth: 150,
    marginRight: theme.spacing.unit * 2,
  },
  img: {
    alignSelf: 'center',
    width: '100%',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
});

let ProductListItem = props => (
  <div className={props.classes.productListItem}>
    <img
      className={props.classes.img}
      src={props.product.images[0].src}
      alt={props.product.images[0].alt}
    />
    <Typography variant="body1">
      <b>{getFormattedPrice(props.product.price)}</b>
    </Typography>
    <Typography variant="body1">{props.product.title}</Typography>
    <Typography variant="caption">{props.product.manufacturer}</Typography>
  </div>
);

export default (ProductListItem = withStyles(styles)(ProductListItem));