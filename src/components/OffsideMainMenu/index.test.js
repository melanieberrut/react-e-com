import React from 'react';
import { shallow } from 'enzyme';
import OffsideMainMenu from './index.js';

it('OffsideMainMenu enders without crashing', () => {
  shallow(<OffsideMainMenu />);
});
