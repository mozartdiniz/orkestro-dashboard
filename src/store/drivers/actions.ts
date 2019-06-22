import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes';
import { driverAPI } from '../../consts/index';
import {
  IDriver,
  ISaveDriversAction,
} from './interfaces';

export const saveDrivers = (drivers: IDriver[]): ISaveDriversAction => ({
  type: actionTypes.SAVE_DRIVERS,
  drivers
});

export const fetchDriver = () => (dispatch: Dispatch<ISaveDriversAction>) => {
  fetch(`${process.env.REACT_APP_API}/${driverAPI}`)
    .then(result => result.json())
    .then((json: IDriver[]) => dispatch(saveDrivers(json)));
};
