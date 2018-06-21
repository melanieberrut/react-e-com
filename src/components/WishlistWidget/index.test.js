import React from 'react';
import { shallow } from 'enzyme';
import WishlistWidget from './index.js';

it('WishlistWidget renders without crashing', () => {
  shallow(<WishlistWidget />);
});
