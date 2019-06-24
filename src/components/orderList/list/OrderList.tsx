import React from 'react';

import { IOrder } from '../../../store/orders/interfaces';
import { OrderListWrapper } from './OrderList.style';
import { OrderListItem } from '../item/OrderListItem';

export interface IOrderListProps {
  orders: IOrder[];
  selectedOrderId?: string;
  onClickItem?: (orderId: string) => void;
}

export const OrderList: React.FC<IOrderListProps> = ({
  orders,
  selectedOrderId,
  onClickItem
}) => (
  <OrderListWrapper>
    {orders.map(order => (
      <OrderListItem
        key={order.id}
        order={order}
        data-qa="order-item"
        onClickItem={onClickItem}
        isSelected={order.id === selectedOrderId}
      />
    ))}
  </OrderListWrapper>
);
