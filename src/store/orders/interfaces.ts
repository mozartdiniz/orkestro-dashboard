import * as actionTypes from '../actionTypes';

export interface IDimension {
  description: string
  width: number
  height: number
  length: number
}

export interface IOrder {
  id: string
  pickupTime: string
  pickupAddress: string
  dimension: IDimension
}

export interface ISaveOrderAction {
  type: typeof actionTypes.SAVE_ORDERS;
  orders: IOrder[];
}

export interface ISelectOrderAction {
  type: typeof actionTypes.SELECT_ORDER;
  orderId: string;
}
