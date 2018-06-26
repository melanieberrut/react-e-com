import { product } from './product.json';
import { products } from './products.json';
import endpoints from '../endpoints';
const PRODUCTS_ENDPOINT = endpoints.products;
const PRODUCTID_ENDPOINT = endpoints.products + "1";

module.exports = {
  get: jest.fn(url => {
    switch (url) {
      case PRODUCTS_ENDPOINT:
        return Promise.resolve({
          data: products
        });
      case PRODUCTID_ENDPOINT:
        return Promise.resolve({
          data: product
        });
    }
  })
};
