import React from 'react';
import { shallow } from 'enzyme';
import CartTable from './index.js';

it('CartTable renders without crashing', () => {
  shallow(<CartTable />);
});
