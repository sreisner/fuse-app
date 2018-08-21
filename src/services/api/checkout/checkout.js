import ApiService from '../api';

const CheckoutService = {
  makePayment: (userData, productData, amountToCharge) => {
    return ApiService.post('/checkout', {
      userData,
      productData,
      amountToCharge,
    });
  },
};

export default CheckoutService;
