import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import { withStyles, Button, Typography } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import Slider from 'react-slick';
import sharedStyles from './sharedStyles';

const styles = theme => ({
  container: {
    position: 'relative',
    height: 360,
    width: '100%',
  },
  slider: sharedStyles.slider(),
  itemContainer: {
    position: 'relative',
    height: 360,
    overflow: 'hidden',
    '& img': {
      objectFit: 'cover',
      bottom: 0,
    },
  },
  contentContainer: {
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    color: grey[50],
    ...sharedStyles.contentWidth(theme),
  },
  itemHeading: {
    paddingBottom: theme.spacing.unit * 2,
  },
  description: {
    maxWidth: 360,
  },
  button: {
    position: 'absolute',
    bottom: theme.spacing.unit * 4,
    alignSelf: 'start',
  },
});

class HeroCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, content } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div className={classes.container}>
        <Slider className={classes.slider} {...settings}>
          {content.map(item => (
            <div className={classes.itemContainer} key={item.id}>
              <div
                className={classes.contentContainer}
                style={{ backgroundImage: `url(${item.img.src})` }}
              >
                <div className={classes.content}>
                  <Typography
                    variant="headline"
                    color="inherit"
                    className={classes.itemHeading}
                  >
                    <b>{item.heading}</b>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="inherit"
                    className={classes.description}
                  >
                    {item.description}
                  </Typography>
                  {item.buttonText && (
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                    >
                      {item.buttonText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default (HeroCarousel = withStyles(styles)(HeroCarousel));
