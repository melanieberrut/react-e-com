import React from 'react';
import { shallow } from 'enzyme';
import QuantitySelector from './index.js';

it('QuantitySelector renders without crashing', () => {
  shallow(<QuantitySelector />);
});
