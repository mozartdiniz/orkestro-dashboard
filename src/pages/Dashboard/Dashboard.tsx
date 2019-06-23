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
  console.log(closestDrivers);
  const dispatch = useDispatch();

  const onClickOrdemListItem = (orderId: string) =>
    dispatch(selectOrder(orderId));

  console.log(selectedOrder);
  console.log(closestDrivers);

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
        onClickItem={onClickOrdemListItem}
      />
      <Map
        driversPositions={driversPositions}
        selectedOrder={selectedOrder}
        closestDrivers={closestDrivers}
      />
    </DashboardStyle>
  );
};
