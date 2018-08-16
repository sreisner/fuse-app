import { Grid, Typography, withStyles } from '@material-ui/core';
import React, { Component } from 'react';
import Fetch from './Fetch';
import Product from './Product';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  grid: {
    alignItems: 'center',
    marginTop: 10,
    height: 250,
  },
});

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <Fetch route="/products">
        {(loading, error, products) => {
          if (loading) {
            return (
              <Grid
                container
                direction="column"
                justify="space-around"
                className={classes.grid}
              >
                <Grid item>
                  <Typography variant="display2" classname={classes.loading}>
                    Loading...
                  </Typography>
                </Grid>
                <Grid item>
                  <CircularProgress
                    className={classes.progress}
                    color="secondary"
                    size={75}
                  />
                </Grid>
              </Grid>
            );
          } else if (error) {
            return <h1>{error.message}</h1>;
          } else {
            return (
              <Grid container spacing={16}>
                {products.map(product => (
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sm={6}
                    height="100%"
                    key={product._id}
                  >
                    <Product product={product} />
                  </Grid>
                ))}
              </Grid>
            );
          }
        }}
      </Fetch>
    );
  }
}

export default withStyles(styles)(ProductList);
