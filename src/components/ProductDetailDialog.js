import React from 'react';
import {
  withStyles,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  withMobileDialog,
  Typography,
  IconButton,
  DialogTitle,
  Grid,
  Divider,
} from '@material-ui/core';
import Slider from 'react-slick';
import sharedStyles from './sharedStyles';
import CloseIcon from '@material-ui/icons/CloseRounded';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import { ShoppingCartConsumer } from './ShoppingCartContext';

const styles = theme => ({
  sliderContainer: {
    display: 'relative',
    height: 360,
    width: '100%',
    '& .slick-list': {},
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 0,
  },
  slider: sharedStyles.slider(),
  imageContainer: {
    width: '100%',
    '& img': {
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: 320,
    },
  },
  button: {
    margin: '0 8px',
    width: '33%',
  },
  dialogContent: {
    padding: '0 24px 0',
  },
  paperScrollPaper: {
    minHeight: '100vh',
    maxHeight: '100vh',
  },
  gridHeight: {
    height: '80vh',
  },
  description: {
    letterSpacing: 1,
  },
  details: {
    padding: 1,
  },
  background: {
    backgroundColor: '#F7F7F7',
  }
});

let ProductDetailDialog = props => {
  const { classes, product, category, fullScreen, open, onClose } = props;

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Dialog
      fullWidth="true"
      maxWidth="md"
      open={open}
      onClose={onClose}
      classes={{ paperScrollPaper: classes.paperScrollPaper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <IconButton onClick={props.onClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Grid
          container
          wrap="nowrap"
          justify="space-evenly"
          spacing={24}
          className={classes.gridHeight}
        >
          <Grid
            item
            xs={8}
            container
            direction="column"
            justify="space-between"
            className={classes.background}
          >
            <Grid item>
              <Typography variant="display1" style={{ overflow: 'hidden' }}>
                {product.title}
              </Typography>
              <Typography variant="caption">{product.manufacturer}</Typography>
            </Grid>
            <Grid item>
              <Divider inset light={true} />
            </Grid>
            <Grid item className={classes.description}>
              <Typography variant="headline">{product.description}</Typography>
            </Grid>
            <Grid item>
              <Divider inset light={true} />
            </Grid>
            <Grid item>
              <Typography variant="title" className={classes.details}>
                Type: category.singularName
              </Typography>
              <Typography variant="title" className={classes.details}>
                Duration: {product.duration}
              </Typography>
              <Typography variant="title" className={classes.details}>
                Colors: {product.colors}
              </Typography>
              <Typography variant="title">
                Effects: {product.effects}
              </Typography>
              <Typography variant="title" className={classes.details}>
                Shots: {product.numShots}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.sliderContainer}>
              <Slider className={classes.slider} {...sliderSettings}>
                {product.images.map((image, i) => (
                  <div className={classes.imageContainer} key={i}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </Slider>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <ShoppingCartConsumer>
          {({ addToCart }) => (
            <Button
              onClick={() => {
                addToCart(product);
                props.onClose();
              }}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Add To Cart
            </Button>
          )}
        </ShoppingCartConsumer>
      </DialogActions>
    </Dialog>
  );
};

export default (ProductDetailDialog = withMobileDialog()(
  withStyles(styles)(ProductDetailDialog)
));
