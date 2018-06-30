import React from 'react';
import { shallow } from 'enzyme';
import HeaderHamburgerLink from './index.js';

it('HeaderHamburgerLink renders without crashing', () => {
  shallow(<HeaderHamburgerLink />);
});
