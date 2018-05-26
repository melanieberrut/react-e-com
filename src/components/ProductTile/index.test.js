import React from 'react';
import ReactDOM from 'react-dom';

import ProductTile from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductTile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
