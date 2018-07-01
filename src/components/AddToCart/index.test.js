import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import AddToCart from './index.js';

it('AddToCart renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AddToCart productDetails={{ id: 6, name: 'Product Name', price: 250, qty: 1 }} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
//https://medium.com/@ryandrewjohnson/unit-testing-components-using-reacts-new-context-api-4a5219f4b3fe
it('handleClick method updates state', () => {});
