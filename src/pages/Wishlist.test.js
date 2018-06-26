import React from 'react';
import { shallow } from 'enzyme';
import Wishlist from './Wishlist';

it('renders without crashing', () => {
  shallow(<Wishlist />);
});
