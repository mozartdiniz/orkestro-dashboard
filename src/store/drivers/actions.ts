import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { driverAPI } from '../../consts/index';
import {
  ISaveDriversAction,
  IDriverPosition,
} from './interfaces';

export const saveDrivers = (driversPositions: IDriverPosition[]): ISaveDriversAction => ({
  type: actionTypes.SAVE_DRIVERS_POSITIONS,
  driversPositions
});

export const fetchDrivers = () => (dispatch: Dispatch<ISaveDriversAction>) => {
  fetch(`${process.env.REACT_APP_API}/${driverAPI}`)
    .then(result => result.json())
    .then((json: IDriverPosition[]) => dispatch(saveDrivers(json)));
};
