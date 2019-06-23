import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { IOrder, ISaveOrderAction, ISelectOrderAction } from './interfaces';
import { orderAPI } from '../../consts';

export const saveOrders = (orders: IOrder[]): ISaveOrderAction => ({
  type: actionTypes.SAVE_ORDERS,
  orders
});

export const selectOrder = (orderId: string): ISelectOrderAction => ({
  type: actionTypes.SELECT_ORDER,
  orderId
});

export const fetchOrders = () => (dispatch: Dispatch<ISaveOrderAction>) => {
  fetch(`${process.env.REACT_APP_API}/${orderAPI}`)
    .then(result => result.json())
    .then((json: IOrder[]) => dispatch(saveOrders(json)));
};
