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
    '& .slick-list': {
      marginLeft: -theme.spacing.unit * 3,
      marginRight: -theme.spacing.unit * 3,
    },
  },
  dialogTitle: {
    display: 'flex',
    justifyContent: 'flex-end',
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

let ProductDetailDialog = props => {
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
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose}>
      <DialogTitle className={classes.dialogTitle}>
        <IconButton onClick={props.onClose}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <div className={classes.sliderContainer}>
          <Slider className={classes.slider} {...sliderSettings}>
            {product.images.map((image, i) => (
              <div className={classes.imageContainer}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Slider>
        </div>
        <Typography variant="title" style={{ overflow: 'hidden' }}>
          {product.title}
        </Typography>
        <Typography variant="caption">{product.manufacturer}</Typography>
        <Typography variant="body1">{product.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <ShoppingCartConsumer>
          {({ addToCart }) => (
            <Button
              onClick={() => {
                addToCart(product);
                props.onClose();
              }}
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

export default (ProductDetailDialog = withMobileDialog()(
  withStyles(styles)(ProductDetailDialog)
));
