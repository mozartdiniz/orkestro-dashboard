import {
  ISaveDriversAction,
  ISelectDriversCloseToOrderAction,
  IDriverState
} from './drivers/interfaces';
import { ISaveOrderAction, ISelectOrderAction, IOrder } from './orders/interfaces';

export type AppAction =
  | ISaveDriversAction
  | ISelectDriversCloseToOrderAction
  | ISaveOrderAction
  | ISelectOrderAction

export interface IAppState {
  drivers: IDriverState;
  orders: IOrder[];
}
