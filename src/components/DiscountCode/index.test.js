import React from 'react';
import { shallow } from 'enzyme';
import DiscountCode from './index.js';

it('DiscountCode renders without crashing', () => {
  shallow(<DiscountCode />);
});
