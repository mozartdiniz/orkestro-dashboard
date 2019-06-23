import { IAppState } from "../interfaces";
import { IOrder } from "./interfaces";

export const ordersSelector = (state: IAppState) => state.orders.orders;

export const selectedOrderIdSelector = (state: IAppState) => state.orders.selectedOrderId;

export const selectedOrderSelector = (state: IAppState): IOrder => {
  const { orders: { orders, selectedOrderId } } = state;

  return orders.filter(order => order.id === selectedOrderId)[0];
}
