import React, { Component } from 'react';
import TopNav from './TopNav';
import HeroCarousel from './HeroCarousel';
import ProductCategoryList from './ProductCategoryList';
import { withStyles } from '@material-ui/core';
import Footer from './Footer';
import CategoriesService from '../services/api/categories/categories';
import ProductsService from '../services/api/products/products';

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
    this.state = {
      loading: true,
      categories: [],
      products: [],
    };
  }

  async componentDidMount() {
    Promise.all([
      CategoriesService.getCategories(),
      ProductsService.getProducts(),
    ]).then(([categories, products]) =>
      this.setState({
        loading: false,
        categories,
        products,
      })
    );
  }

  render() {
    const { loading, categories, products } = this.state;

    return (
      <React.Fragment>
        <TopNav />
        <div className={this.props.classes.heroCarouselContainer}>
          <HeroCarousel content={mockHeroCarouselData} />
        </div>
        <div className={this.props.classes.bodyContainer}>
          {loading ? (
            <h1>Loading</h1>
          ) : (
            categories.map(category => {
              const categoryProducts = products.filter(
                product => product.category === category.id
              );

              return (
                <div
                  className={this.props.classes.productCategoryListContainer}
                  key={category._id}
                >
                  <ProductCategoryList
                    category={category}
                    products={categoryProducts}
                  />
                </div>
              );
            })
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default (MenuView = withStyles(styles)(MenuView));
