import React, { Component } from 'react';
import TopNav from './TopNav';
import HeroCarousel from './HeroCarousel';

const mockHeroCarouselData = [
  {
    heading: 'Fuse Fireworks Delivery #1',
    description: 'Best deals, wide selection, and unbelievable delivery',
    buttonText: 'Learn More',
    img: {
      src:
        'https://images.unsplash.com/photo-1536739607932-70a81609b241?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01301cf664cde4b3fb1288d59c08e6&auto=format&fit=crop&w=1350&q=80',
      alt: 'People watching fireworks',
    },
    color: '#ff0000',
  },
  {
    heading: 'Fuse Fireworks Delivery #2',
    description: 'Best deals, wide selection, and unbelievable delivery',
    buttonText: 'Learn More',
    img: {
      src:
        'https://images.unsplash.com/photo-1536739607932-70a81609b241?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01301cf664cde4b3fb1288d59c08e6&auto=format&fit=crop&w=1350&q=80',
      alt: 'People watching fireworks',
    },
    color: '#00ff00',
  },
];

class MenuView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { products } = this.state;

    return (
      <React.Fragment>
        <TopNav />
        <HeroCarousel content={mockHeroCarouselData} />
        {/* {products.map(list => <ProductCategoryCarousel products={list} />)}
        <Footer /> */}
      </React.Fragment>
    );
  }
}

export default MenuView;
