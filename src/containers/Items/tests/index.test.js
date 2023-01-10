import React from 'react';
import { shallow, mount } from 'enzyme';

import Items from '../index.jsx';
import Block from '../../../components/Block/index';

describe('Items', () => {
  it('should render without throwing an error', () => {
    const items = [
      {
        id: 1,
        title: 'Purple blouse',
        picture: 'https://purpleblouse.jpg',
      },
      {
        id: 2,
        title: 'Pink blouse',
        picture: 'https://pinkblouse.jpg',
      },
    ];

    const rendered = shallow(<Items />);

    rendered.setProps({
      items,
    });

    expect(rendered.containsMatchingElement(<Block />)).toEqual(true);
  });

  it('should mount in a full DOM', () => {
    const rendered = mount(<Items items={[]} />);

    expect(rendered.find('.wrapper')).toHaveLength(1);
    expect(rendered.containsMatchingElement(<Block />)).toEqual(false);
  });
});
