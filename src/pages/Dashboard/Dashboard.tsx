import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchDrivers } from '../../store/drivers/actions';
import { fetchOrders, selectOrder } from '../../store/orders/actions';

import OrderList from '../../components/orderList';
import Map from '../../components/map/Map';
import DashboardStyle from './Dashboard.style';
import {
  selectedOrderSelector,
  ordersSelector,
  selectedOrderIdSelector
} from '../../store/orders/selectors';
import {
  selectClosestDriversSelector,
  selectDriversSelector
} from '../../store/drivers/selectors';

export const Dashboard: React.FC = () => {
  const orders = useSelector(ordersSelector);
  const selectedOrderId = useSelector(selectedOrderIdSelector);
  const selectedOrder = useSelector(selectedOrderSelector);
  const driversPositions = useSelector(selectDriversSelector);
  const closestDrivers = useSelector(selectClosestDriversSelector);

  const dispatch = useDispatch();

  const onClickOrderListItem = (orderId: string) =>
    dispatch(selectOrder(orderId));

  useEffect(() => {
    dispatch(fetchDrivers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <DashboardStyle>
      <OrderList
        orders={orders}
        selectedOrderId={selectedOrderId}
        onClickItem={onClickOrderListItem}
      />
      <Map
        driversPositions={driversPositions}
        selectedOrder={selectedOrder}
        closestDrivers={closestDrivers}
      />
    </DashboardStyle>
  );
};
