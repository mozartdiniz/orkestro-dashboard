import * as actionTypes from '../actionTypes';

import { AppAction } from "../interfaces";
import { ISaveOrderAction, IOrder } from "./interfaces";

const initialState: IOrder[] = [];

export const saveOrders = (state: IOrder[], action: ISaveOrderAction) => action.orders;

export const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.SAVE_ORDERS:
      return saveOrders(state, action);
    default:
      return state;
  }
};

export default reducer;
