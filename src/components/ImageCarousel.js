import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
  render() {
    const { product } = this.props;

    return (
      <Carousel width="50px">
        {product.imageUrls.map(imageUrl => (
          <div>
            <img src={imageUrl} alt="" />
          </div>
        ))}
      </Carousel>
    );
  }
}

export default ImageCarousel;
