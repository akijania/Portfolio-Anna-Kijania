import { shallow } from 'enzyme';
import React from 'react';

import LatestProjects from './LatestProjects';

describe('Component LatestProjects', () => {
  it('should render without crashing', () => {
    const posts = [
      {
        id: 'aaa',
      },
    ];
    const component = shallow(<LatestProjects posts={posts} />);
    expect(component).toBeTruthy();
  });
});
