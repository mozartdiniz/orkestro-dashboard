import React from 'react';
import { IOrder } from '../../store/orders/interfaces';
import { OrderListWrapper, OrderListItem } from './OrderList.style';

export interface IOrderListProps {
  orders: IOrder[];
}

export const OrderList: React.FC<IOrderListProps> = ({ orders }) => (
  <OrderListWrapper>
    {orders.map(order => (
      <OrderListItem key={order.id} data-qa="order-item">
        {order.pickupAddress}
      </OrderListItem>
    ))}
  </OrderListWrapper>
);
