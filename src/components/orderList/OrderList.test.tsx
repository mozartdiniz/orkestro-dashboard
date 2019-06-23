import React from 'react';
import { shallow, mount } from 'enzyme';
import { OrderList } from './OrderList';
import { mockTwoOrders } from '../../store/orders/mocks';

describe('Order List component', () => {
  it('renders', () => {
    const component = shallow(<OrderList orders={[]} />);

    expect(component.exists()).toBe(true);
  });

  it('renders a list of two orders', () => {
    const component = mount(<OrderList orders={mockTwoOrders} />);

    expect(component.find('div[data-qa="order-item"]').length).toBe(2);
  });

  it('the first item should displays the address "The Forge,Barwick,, Yeovil, BA22 9TB"', () => {
    const component = mount(<OrderList orders={mockTwoOrders} />);

    expect(
      component
        .find('div[data-qa="order-item"]')
        .at(0)
        .text()
    ).toBe('The Forge,Barwick,, Yeovil, BA22 9TB');
  });
});
