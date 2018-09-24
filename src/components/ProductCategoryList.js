import React from 'react';
import { withStyles, Typography, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ProductListItem from './ProductListItem';
import sharedStyles from './sharedStyles';

const styles = theme => ({
  productCategoryList: {
    ...sharedStyles.contentWidth(theme),
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.unit,
  },
  productListContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
  },
  seeAllButton: {
    flexShrink: 0,
  },
});

let ProductCategoryList = props => (
  <div className={props.classes.productCategoryList}>
    <div className={props.classes.headerRow}>
      <Typography variant="headline">
        <strong>{props.category.pluralName}</strong>
      </Typography>
      <Button
        variant="text"
        color="primary"
        className={props.classes.seeAllButton}
        onClick={() => alert('implement me')}
      >
        See all {props.products.length} <KeyboardArrowRightIcon />
      </Button>
    </div>
    <Typography variant="caption">{props.category.description}</Typography>
    <div className={props.classes.productListContainer}>
      {props.products.map(product => (
        <ProductListItem key={product._id} product={product} />
      ))}
    </div>
  </div>
);

export default (ProductCategoryList = withStyles(styles)(ProductCategoryList));
