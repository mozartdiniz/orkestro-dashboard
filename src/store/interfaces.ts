import {
  IDriver,
  ISaveDriversAction,
  ISelectDriversCloseToOrderAction
} from './drivers/interfaces';

export type AppAction =
  | ISaveDriversAction
  | ISelectDriversCloseToOrderAction;

export interface IAppState {
  drivers: IDriver[];
}
