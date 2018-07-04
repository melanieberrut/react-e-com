import React from 'react';
import { shallow } from 'enzyme';
import SignOut from './index.js';

it('SignOut renders without crashing', () => {
  shallow(<SignOut />);
});
