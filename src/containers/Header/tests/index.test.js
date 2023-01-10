import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from '../index.jsx';

describe('Header', () => {
  it('should render without throwing an error', () => {
    const rendered = shallow(<Header />);

    expect(rendered.text()).toEqual('fakeshop');
  });

  it('should mount in a full DOM', () => {
    const rendered = mount(<Header />);

    expect(rendered.find('.wrapper')).toHaveLength(1);
  });
});
