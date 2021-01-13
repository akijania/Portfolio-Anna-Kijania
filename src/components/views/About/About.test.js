import { shallow } from 'enzyme';
import React from 'react';

import About from './About';

describe('About', () => {
  it('renders without crashing', () => {
    shallow(<About />);
  });
});
