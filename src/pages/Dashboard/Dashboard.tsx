import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IAppState } from '../../store/interfaces';
import { fetchDrivers } from '../../store/drivers/actions';
import { fetchOrders, selectOrder } from '../../store/orders/actions';

import OrderList from '../../components/orderList';
import Map from '../../components/map/Map';
import DashboardStyle from './Dashboard.style';

export const Dashboard: React.FC = () => {
  const state = useSelector((state: IAppState) => state);
  const onClickOrdemListItem = (orderId: string) => {
    console.log(orderId);
    return dispatch(selectOrder(orderId));
  };

  console.log(state);
  const {
    orders: { orders, selectedOrderId },
    drivers: { driversPositions }
  } = state;
  const dispatch = useDispatch();

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
      <Map driversPositions={driversPositions} />
    </DashboardStyle>
  );
};
