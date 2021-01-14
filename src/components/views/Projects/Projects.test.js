import { shallow } from 'enzyme';
import React from 'react';

import Projects from './Projects';

describe('Projects', () => {
  it('renders without crashing', () => {
    const posts = [
      {
        id: 'aaa',
      },
    ];
    shallow(<Projects posts={posts} />);
  });
});
