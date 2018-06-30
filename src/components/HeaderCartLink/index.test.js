import React from 'react';
import { shallow } from 'enzyme';
import HeaderCartLink from './index.js';

it('HeaderCartLink renders without crashing', () => {
  shallow(<HeaderCartLink />);
});
