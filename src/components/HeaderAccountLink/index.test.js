import React from 'react';
import { shallow } from 'enzyme';
import HeaderAccountLink from './index.js';

it('HeaderAccountLink renders without crashing', () => {
  shallow(<HeaderAccountLink />);
});
