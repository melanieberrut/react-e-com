import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductTile from './index.js';

const fakeProduct = {
  id: '1',
  inWishlist: false
};
it('renders without crashing', () => {
  shallow(<ProductTile product={fakeProduct} />);
});
