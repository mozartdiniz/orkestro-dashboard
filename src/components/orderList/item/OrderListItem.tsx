import React from 'react';

import { IOrder } from '../../../store/orders/interfaces';
import {
  OrderListItemStyled,
  AddressStyled,
  DimensionsStyled
} from './OrderListItem.style';

const formatDate = (pickupTime: string): string =>
  new Date(pickupTime).toLocaleString();

export interface IOrderListItemProps {
  order: IOrder;
}

export const OrderListItem: React.FC<IOrderListItemProps> = ({ order }) => (
  <OrderListItemStyled data-qa="order-item">
    <span>{formatDate(order.pickupTime)}</span>
    <AddressStyled>{order.pickupAddress}</AddressStyled>
    <DimensionsStyled>
      Length: {order.dimension.length} Width: {order.dimension.width} Height:{' '}
      {order.dimension.height}
    </DimensionsStyled>
  </OrderListItemStyled>
);
