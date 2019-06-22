import * as actionTypes from '../actionTypes';
import { ISaveDriversAction } from './interfaces';
import { AppAction, IAppState } from '../interfaces';
import { initialState } from '../state';

export const saveDrivers = (state: IAppState, action: ISaveDriversAction) => ({
  ...state,
  drivers: action.drivers
});

export const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.SAVE_DRIVERS:
      return saveDrivers(state, action);
    default:
      return state;
  }
};

export default reducer;
