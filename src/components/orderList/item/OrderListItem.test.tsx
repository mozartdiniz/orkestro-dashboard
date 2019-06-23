import React from 'react';
import { shallow, mount } from 'enzyme';
import { OrderListItem } from './OrderListItem';
import { mockTwoOrders } from '../../../store/orders/mocks';

describe('Order Item component', () => {
  it('renders', () => {
    const component = shallow(<OrderListItem order={mockTwoOrders[0]} />);

    expect(component.exists()).toBe(true);
  });

  it('renders a list item', () => {
    const component = mount(<OrderListItem order={mockTwoOrders[1]} />);

    expect(component.find('span').length).toBe(3);
  });

  it('renders the giving information', () => {
    const component = mount(<OrderListItem order={mockTwoOrders[1]} />);

    expect(
      component
        .find('span')
        .at(2)
        .text()
    ).toBe('Length: 4.5 Width: 24 Height: 24');
  });
});
