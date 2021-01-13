import { shallow } from 'enzyme';
import React from 'react';

import App from './App';

it('should render without crashing', () => {
  const component = shallow(<App />);
  expect(component).toBeTruthy();
});
