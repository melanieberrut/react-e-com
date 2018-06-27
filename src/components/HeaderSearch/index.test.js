import React from 'react';
import { shallow } from 'enzyme';
import HeaderSearch from './index.js';

it('HeaderSearch renders without crashing', () => {
  shallow(<HeaderSearch />);
});
