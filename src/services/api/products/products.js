import ApiService from '../api';

const ProductsService = {
  getProducts: () => {
    return ApiService.get('/products');
  },
};

export default ProductsService;
