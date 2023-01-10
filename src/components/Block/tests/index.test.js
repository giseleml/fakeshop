import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Block from '../index.jsx';

describe('Block', () => {
  it('should render without throwing an error', () => {
    const rendered = shallow(
      <Block
        picture="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
        text="Flower blouse"
        id={1}
      />
    ).contains(<p>Flower blouse</p>);
    expect(rendered).toBe(true);
  });

  it('should mount in a full DOM', function () {
    const rendered = mount(
      <Block
        picture="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
        text="Flower blouse"
        id={1}
      />
    ).find('.wrapper');

    expect(rendered).toHaveLength(1);
  });

  it('should render to static HTML', function () {
    const rendered = render(
      <Block
        picture="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"
        text="Flower blouse"
        id={1}
      />
    ).text();

    expect(rendered).toEqual('Flower blouse');
  });
});
