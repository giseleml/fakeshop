import React from 'react';
import { shallow, mount } from 'enzyme';

import Pagination from '../index.jsx';

describe('Pagination', () => {
  it('should render without throwing an error', () => {
    const rendered = shallow(
      <Pagination
        page={1}
        onClickBefore={() => jest.fn()}
        onClickNext={() => jest.fn()}
        itemQuantity={6}
      />
    );

    expect(rendered.text()).toEqual('Page 1next');
  });

  it('should mount in a full DOM', () => {
    const rendered = mount(
      <Pagination
        page={1}
        onClickBefore={() => jest.fn()}
        onClickNext={() => jest.fn()}
        itemQuantity={6}
      />
    );

    expect(rendered.find('.wrapper')).toHaveLength(1);
  });
});
