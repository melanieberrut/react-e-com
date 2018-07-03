import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from './index.js';

it('SignInForm renders without crashing', () => {
  shallow(<SignInForm />);
});
