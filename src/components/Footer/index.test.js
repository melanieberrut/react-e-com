import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index.js';

it('Footer renders without crashing', () => {
  shallow(<Footer />);
});
