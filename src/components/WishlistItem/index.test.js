import React from 'react';
import { shallow } from 'enzyme';
import WishlistItem from './index.js';

const fakeProduct = {
  id: '1',
  inWishlist: false
};
it('WishlistItem renders without crashing', () => {
  shallow(<WishlistItem product={fakeProduct} />);
});
