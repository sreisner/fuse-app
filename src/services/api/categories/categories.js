import ApiService from '../api';

const CategoriesService = {
  getCategories: () => {
    return ApiService.get('/categories');
  },
};

export default CategoriesService;
