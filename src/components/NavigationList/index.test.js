import React from 'react';
import { shallow } from 'enzyme';
import NavigationList from './index.js';

it('NavigationList enders without crashing', () => {
  shallow(<NavigationList />);
});
