import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './index.js';

it('SignUpForm renders without crashing', () => {
  shallow(<SignUpForm />);
});
