import * as actionTypes from '../actionTypes';
import { ILocation } from '../interfaces';

export interface IDriverState {
  driversPositions: IDriverPosition[]
}

export interface IDriver {
  id: string;
  name: string;
  inRoute: boolean;
}

export interface IDriverPosition extends IDriver {
  location: ILocation
}

export interface ISaveDriversAction {
  type: typeof actionTypes.SAVE_DRIVERS_POSITIONS;
  driversPositions: IDriverPosition[];
}

export interface ISelectDriversCloseToOrderAction {
  type: typeof actionTypes.SELECT_DRIVERS_CLOSE_TO_ORDER;
  driversPositions: IDriverPosition[];
}
