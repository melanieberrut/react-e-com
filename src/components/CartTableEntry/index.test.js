import React from 'react';
import { shallow } from 'enzyme';
import CartTableEntry from './index.js';

it('CartTableEntry renders without crashing', () => {
  shallow(<CartTableEntry />);
});
