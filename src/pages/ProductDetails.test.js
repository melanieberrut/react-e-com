import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductDetails from './ProductDetails.js';


it('renders without crashing', () => {
  shallow(<ProductDetails match={{ params: {id: "1"} }} />);
});