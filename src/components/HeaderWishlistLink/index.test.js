import React from 'react';
import { shallow } from 'enzyme';
import HeaderWishlistLink from './index.js';

it('HeaderWishlistLink renders without crashing', () => {
  shallow(<HeaderWishlistLink />);
});
