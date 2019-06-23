import React from 'react';
import { IOrder } from '../../../store/orders/interfaces';
import { OrderListWrapper } from './OrderList.style';
import { OrderListItem } from '../item/OrderListItem';

export interface IOrderListProps {
  orders: IOrder[];
}

export const OrderList: React.FC<IOrderListProps> = ({ orders }) => (
  <OrderListWrapper>
    {orders.map(order => (
      <OrderListItem key={order.id} order={order} data-qa="order-item" />
    ))}
  </OrderListWrapper>
);
