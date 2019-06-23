import * as actionTypes from '../actionTypes';

import { AppAction } from "../interfaces";
import { ISaveOrderAction, IOrder, ISelectOrderAction } from "./interfaces";

export interface IOrderState {
  orders: IOrder[],
  selectedOrderId: string
}

const initialState: IOrderState = {
  orders: [],
  selectedOrderId: ''
}

export const saveOrders = (state: IOrderState, action: ISaveOrderAction) => ({
  ...state,
  orders: action.orders
});

export const selectOrder = (state: IOrderState, action: ISelectOrderAction) => ({
  ...state,
  selectedOrderId: action.orderId
});

export const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.SAVE_ORDERS:
      return saveOrders(state, action);
    case actionTypes.SELECT_ORDER:
      return selectOrder(state, action);
    default:
      return state;
  }
};

export default reducer;
