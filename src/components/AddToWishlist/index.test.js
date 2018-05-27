import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import AddToWishlist from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToWishlist isAdded={true} productId="1" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('handleClick method updates state', () => {
  // const wrapper = shallow(<AddToWishlist isAdded={true} productId="1" />);
  // wrapper.instance().handleClick();
});
