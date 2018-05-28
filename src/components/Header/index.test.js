import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './index.js';

it('renders without crashing', () => {
  shallow(<Header />);
});
