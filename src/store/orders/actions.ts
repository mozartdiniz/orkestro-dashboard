import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { IOrder, ISaveOrderAction } from './interfaces';
import { orderAPI } from '../../consts';

export const saveOrders = (orders: IOrder[]): ISaveOrderAction => ({
  type: actionTypes.SAVE_ORDERS,
  orders
});

export const fetchOrders = () => (dispatch: Dispatch<ISaveOrderAction>) => {
  fetch(`${process.env.REACT_APP_API}/${orderAPI}`)
    .then(result => result.json())
    .then((json: IOrder[]) => dispatch(saveOrders(json)));
};
