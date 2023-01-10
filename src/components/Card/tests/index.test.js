import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from '../index.jsx';

describe('Card', () => {
  it('should render without throwing an error', () => {
    const item = {
      title: 'Purple blouse',
      picture: 'https://purpleblouse.jpg',
      price: 50,
      category: "women's clothing",
      description: '100% cotton purple blouse',
    };

    const onClose = jest.fn();

    const rendered = shallow(<Card item={item} onClose={onClose} />);

    expect(rendered.text()).toEqual(
      "Category: women's clothing100% cotton purple blouse$50X"
    );
  });

  it('should mount in a full DOM', () => {
    const item = {
      title: 'Purple blouse',
      picture: 'https://purpleblouse.jpg',
      price: 50,
      category: "women's clothing",
      description: '100% cotton purple blouse',
    };

    const onClose = jest.fn();

    const rendered = mount(<Card item={item} onClose={onClose} />);

    expect(rendered.find('.wrapper')).toHaveLength(1);
  });
});
