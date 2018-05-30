import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import AddToWishlist from './index.js';

it('AddToWishlist renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddToWishlist isAdded={true} productId="1" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
//https://medium.com/@ryandrewjohnson/unit-testing-components-using-reacts-new-context-api-4a5219f4b3fe
it('handleClick method updates state', () => {});
