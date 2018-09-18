import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { ShoppingCartConsumer } from './ShoppingCartContext';
import { getFormattedPrice } from '../utils';
import { RemoveCircleOutline, AddCircleOutline } from '@material-ui/icons';
import ProductDialog from './ProductDialog';

const styles = theme => ({
  card: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  desc: {
    height: '4rem',
    overflow: 'hidden',
  },
  icon: {
    height: 15,
    width: 15,
  },
  button: {
    height: 15,
    width: 15,
    padding: 0,
    margin: 4,
    minHeight: 0,
    boxShadow: 'none',
  },
});

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numItemsToAdd: 1,
      open: false,
    };
  }

  decrementNumItemsToAdd = () => {
    if (this.state.numItemsToAdd > 1) {
      this.setState(prevState => {
        return {
          numItemsToAdd: prevState.numItemsToAdd - 1,
        };
      });
    }
  };

  incrementNumItemsToAdd = () => {
    if (this.state.numItemsToAdd < this.props.product.numInStock) {
      this.setState(prevState => {
        return {
          numItemsToAdd: prevState.numItemsToAdd + 1,
        };
      });
    }
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, product } = this.props;

    return (
      <React.Fragment>
        <Grid container justify="center" alignItems="stretch">
          <Grid item>
            <Card className={classes.card}>
              <div onClick={this.handleClickOpen}>
                <CardMedia
                  className={classes.media}
                  image={product.imageUrls[0]}
                  title={product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {product.title}
                  </Typography>
                  <Typography component="p" className={classes.desc}>
                    {product.description}
                  </Typography>
                </CardContent>
              </div>
              <CardActions>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item>
                    <Typography variant="caption">
                      {getFormattedPrice(product.retailPrice)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    {product.numInStock > 0 && (
                      <React.Fragment>
                        <Button
                          variant="fab"
                          disableFocusRipple={true}
                          disableRipple={true}
                          className={classes.button}
                          onClick={this.decrementNumItemsToAdd}
                        >
                          <RemoveCircleOutline className={classes.icon} />
                        </Button>
                        {this.state.numItemsToAdd}
                        <Button
                          variant="fab"
                          disableFocusRipple={true}
                          disableRipple={true}
                          className={classes.button}
                          onClick={this.incrementNumItemsToAdd}
                        >
                          <AddCircleOutline className={classes.icon} />
                        </Button>
                      </React.Fragment>
                    )}
                    {product.numInStock === 0 ? (
                      <Button disabled>
                        <Typography color="error">Sold Out!</Typography>
                      </Button>
                    ) : (
                      <ShoppingCartConsumer>
                        {({ addToCart }) => (
                          <Button
                            onClick={() =>
                              addToCart(product, this.state.numItemsToAdd)
                            }
                            size="small"
                            color="primary"
                          >
                            Add to Cart
                          </Button>
                        )}
                      </ShoppingCartConsumer>
                    )}
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <ProductDialog
          open={this.state.open}
          onClose={this.handleClickClose}
          product={this.props.product}
        />
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

export default (Product = withStyles(styles)(Product));
