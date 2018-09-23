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
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit * 2,
    top: theme.spacing.unit * 2,
    zIndex: theme.zIndex.appBar,
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
});

let ProductDetail = props => {
  const { classes, product, fullScreen, open, onClose } = props;

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
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      className={classes.dialog}
    >
      <IconButton onClick={props.onClose} className={props.classes.closeButton}>
        <CloseIcon className={props.classes.closeIcon} />
      </IconButton>
      <DialogContent className={classes.dialogContent}>
        <div className={classes.sliderContainer}>
          <Slider className={classes.slider} {...sliderSettings}>
            {product.images.map((image, i) => (
              <div className={classes.itemContainer} key={i}>
                <div className={classes.imageContainer}>
                  <img src={image.src} alt={image.alt} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className={classes.detailContainer}>
          <Typography variant="title" style={{ overflow: 'hidden' }}>
            {product.title}
          </Typography>
          <Typography variant="caption">{product.manufacturer}</Typography>
          <Typography variant="body1">{product.description}</Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <ShoppingCartConsumer>
          {({ addToCart }) => (
            <Button
              onClick={() => addToCart(product)}
              color="primary"
              autoFocus
            >
              Add To Cart
            </Button>
          )}
        </ShoppingCartConsumer>
      </DialogActions>
    </Dialog>
  );
};

export default (ProductDetail = withMobileDialog()(
  withStyles(styles)(ProductDetail)
));
