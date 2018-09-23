const getFormattedPrice = price => {
  return `$${(price / 100).toFixed(2)}`;
};

export { getFormattedPrice };
