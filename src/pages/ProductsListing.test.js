import React from 'react';
import { shallow } from 'enzyme';
import ProductsListing from './ProductsListing.js';

it('renders without crashing', () => {
  shallow(<ProductsListing />);
});
