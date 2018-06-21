import { products } from './products.json';
import endpoints from '../endpoints';
const PRODUCTS_ENDPOINT = endpoints.products;

module.exports = {
  get: jest.fn(url => {
    switch (url) {
      case PRODUCTS_ENDPOINT:
        return Promise.resolve({
          data: products
        });
    }
  })
};
