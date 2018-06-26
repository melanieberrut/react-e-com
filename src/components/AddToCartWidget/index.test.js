import React from 'react';
import { shallow } from 'enzyme';
import AddToCartWidget from './index.js';

it('AddToCartWidget renders without crashing', () => {
  shallow(<AddToCartWidget />);
});
