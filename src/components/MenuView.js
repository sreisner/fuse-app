import React, { Component } from 'react';
import TopNav from './TopNav';
import HeroCarousel from './HeroCarousel';
import ProductCategoryList from './ProductCategoryList';
import { withStyles } from '@material-ui/core';

const mockHeroCarouselData = [
  {
    id: 1,
    heading: 'Fuse Fireworks Delivery #1',
    description: 'Best deals, wide selection, and unbelievable delivery.',
    buttonText: 'Learn More',
    img: {
      src:
        'https://images.unsplash.com/photo-1536739607932-70a81609b241?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5a01301cf664cde4b3fb1288d59c08e6&auto=format&fit=crop&w=1350&q=80',
      alt: 'People watching fireworks',
    },
    color: '#ff0000',
  },
  {
    id: 2,
    heading: 'Fuse Fireworks Delivery #2',
    description: 'Best deals, wide selection, and unbelievable delivery.',
    buttonText: 'Learn More',
    img: {
      src: 'https://www.galveston.com/uploads/images/fireworks.png',
      alt: 'A fireworks finale',
    },
    color: '#00ff00',
  },
];

const mockCategoryData = [
  {
    id: 1,
    name: '500 Gram Repeaters',
    description:
      'Ultimate in pyro-aerial action. One fuse ignites long barrages of spectacular timed bursts with vivid colors and professional show style effects.',
  },
  {
    id: 2,
    name: '200 Gram Repeaters',
    description: `Each multi-shot repeater is it's own aerial extravaganza with beautiful color bursts and effects that can be accompanied with whistles, crackles or loud reports.`,
  },
  {
    id: 3,
    name: 'Tubes',
    description: `Single Tubes with Tremendous trajectory and burst scope with the most advanced effects in the industry.`,
  },
  {
    id: 4,
    name: 'Roman Candles',
    description: `A Roman candle is a traditional type of firework that ejects one or more stars or exploding shells and come in a variety of sizes`,
  },
];

const mockProductData = [
  {
    id: 1,
    name: 'July 4th Jubilation, 12 Shot',
    price: 4999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36876.png?itok=3mKmvvm3',
      alt: '',
    },
    category: 1,
  },
  {
    id: 2,
    name: 'Grucci Mineshell Mayhem, 16 Shot',
    price: 4999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36406.png?itok=jzwRxl_f',
      alt: '',
    },
    category: 1,
  },
  {
    id: 3,
    name: 'Essence of Fire, 21 Shot',
    price: 6999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36716.png?itok=2kaUMyi_',
      alt: '',
    },
    category: 1,
  },
  {
    id: 4,
    name: 'Cosmic Carnival, 12 Shot',
    price: 6999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36936.png?itok=SDhLMHif',
      alt: '',
    },
    category: 1,
  },
  {
    id: 5,
    name: 'Wicked Willows, 16 Shot',
    price: 6999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36651.png?itok=C8o-ey22',
      alt: '',
    },
    category: 1,
  },
  {
    id: 6,
    name: 'Big Red One, 12 Shot',
    price: 6999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/38451.png?itok=LeMnxKnP',
      alt: '',
    },
    category: 1,
  },
  {
    id: 7,
    name: 'Garden In Spring, 7 Shot',
    price: 799,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36976.png?itok=2CFuOxnc',
      alt: '',
    },
    category: 2,
  },
  {
    id: 8,
    name: 'Crackling Mine, 7 shot',
    price: 999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/37186.png?itok=pYB0A8gP',
      alt: '',
    },
    category: 2,
  },
  {
    id: 9,
    name: '96 Shot Pearl',
    price: 999,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36991.png?itok=nN8YWCtX',
      alt: '',
    },
    category: 2,
  },
  {
    id: 10,
    name: 'Mighty Cobra, 19 Shot',
    price: 1299,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/37211.png?itok=dc2p9zoR',
      alt: '',
    },
    category: 2,
  },
  {
    id: 11,
    name: 'Large Happy Planet, 36 Shot',
    price: 1299,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/36986.png?itok=z4Y67-sF',
      alt: '',
    },
    category: 2,
  },
  {
    id: 12,
    name: 'Sea Sparrow Missiles, 91 Shot',
    price: 1299,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/38436.png?itok=bvOL8i3q',
      alt: '',
    },
    category: 2,
  },
  {
    id: 13,
    name: '#500 Red, White and Blue',
    price: 2499,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/37806.png?itok=_B00QCqR',
      alt: '',
    },
    category: 3,
  },
  {
    id: 14,
    name: '#500 Golden Lotus Shell',
    price: 2499,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/37816.png?itok=0YzLDN9U',
      alt: '',
    },
    category: 3,
  },
  {
    id: 15,
    name: 'Pink Powershell',
    price: 2499,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/37846.png?itok=NFbz54Q8',
      alt: '',
    },
    category: 3,
  },
  {
    id: 16,
    name: '#500 Fluorescent Yellow',
    price: 2499,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/37831.png?itok=OeMlvlc_',
      alt: '',
    },
    category: 3,
  },
  {
    id: 17,
    name: '5 Ball Roman Candle',
    price: 499,
    manufacturer: 'AFW',
    img: {
      src:
        'https://fireworks.com/sites/default/files/styles/r318x253/public/product/2018-06/38056.png?itok=8CXWy-qm',
      alt: '',
    },
    category: 4,
  },
];

const styles = theme => ({
  bodyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroCarouselContainer: {
    marginBottom: theme.spacing.unit * 4,
  },
  productCategoryListContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class MenuView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className={this.props.classes.heroCarouselContainer}>
          <HeroCarousel content={mockHeroCarouselData} />
        </div>
        <div className={this.props.classes.bodyContainer}>
          {mockCategoryData.map(category => {
            const products = mockProductData.filter(
              product => product.category === category.id
            );

            return (
              <div
                className={this.props.classes.productCategoryListContainer}
                key={category.id}
              >
                <ProductCategoryList category={category} products={products} />
              </div>
            );
          })}
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default (MenuView = withStyles(styles)(MenuView));
