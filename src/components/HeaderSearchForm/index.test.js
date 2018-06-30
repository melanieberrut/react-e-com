import React from 'react';
import { shallow } from 'enzyme';
import HeaderSearchForm from './index.js';

it('HeaderSearchForm renders without crashing', () => {
  shallow(<HeaderSearchForm />);
});
