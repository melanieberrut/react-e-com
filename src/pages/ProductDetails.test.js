import React from 'react';
import { shallow, } from 'enzyme';
import ProductDetails from './ProductDetails.js';

describe('<ProductDetails />', () => {
	it('renders without crashing', () => {
	  shallow(<ProductDetails  match={{ params: {id: "7"}, isExact: true, path: "", url: ""}} />);
	});
});