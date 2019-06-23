import * as actionTypes from '../actionTypes';
import { ISaveDriversAction, IDriverState } from './interfaces';
import { AppAction } from '../interfaces';

const initialState: IDriverState = {
  driversPositions: []
}

export const saveDrivers = (state: IDriverState, action: ISaveDriversAction) => ({
  driversPositions: action.driversPositions
});

export const reducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case actionTypes.SAVE_DRIVERS_POSITIONS:
      return saveDrivers(state, action);
    default:
      return state;
  }
};

export default reducer;
