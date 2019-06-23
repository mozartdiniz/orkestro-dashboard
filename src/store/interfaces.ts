import {
  ISaveDriversAction,
  ISelectDriversCloseToOrderAction,
  IDriverState
} from './drivers/interfaces';
import { ISaveOrderAction, ISelectOrderAction } from './orders/interfaces';
import { IOrderState } from './orders/reducers';

export type AppAction =
  | ISaveDriversAction
  | ISelectDriversCloseToOrderAction
  | ISaveOrderAction
  | ISelectOrderAction

export interface IAppState {
  drivers: IDriverState;
  orders: IOrderState;
}
