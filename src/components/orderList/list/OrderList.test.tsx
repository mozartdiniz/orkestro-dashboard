import React from 'react';
import { shallow, mount } from 'enzyme';
import { OrderList } from '../list/OrderList';
import { mockTwoOrders } from '../../../store/orders/mocks';

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
    ).toBe(
      '2019-6-23 07:31:33The Forge,Barwick,, Yeovil, BA22 9TBLength: 4.5 Width: 24 Height: 24'
    );
  });
});
