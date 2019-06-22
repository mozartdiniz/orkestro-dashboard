import * as actionTypes from '../actionTypes';

export interface ILocation {
  lat: number;
  long: number;
}

export interface IDriver {
  id: string;
  name: string;
  inRoute: false;
  location: ILocation
}

export interface ISaveDriversAction {
  type: typeof actionTypes.SAVE_DRIVERS;
  drivers: IDriver[];
}

export interface ISelectDriversCloseToOrderAction {
  type: typeof actionTypes.SELECT_DRIVERS_CLOSE_TO_ORDER;
  drivers: IDriver[];
}
