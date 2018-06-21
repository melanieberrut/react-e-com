import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './index.js';

it('renders without crashing', () => {
  shallow(<Navigation />);
});
