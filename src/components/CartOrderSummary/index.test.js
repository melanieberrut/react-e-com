import React from 'react';
import { shallow } from 'enzyme';
import CartOrderSummary from './index.js';

it('CartOrderSummary renders without crashing', () => {
  shallow(<CartOrderSummary />);
});
