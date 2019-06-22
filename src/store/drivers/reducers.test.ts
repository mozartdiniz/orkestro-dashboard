import { reducer } from './reducers';
import { saveDrivers } from './actions';
import { SAVE_DRIVERS } from '../actionTypes';
import { IAppState } from '../interfaces';
import { IDriver } from './interfaces';

const state: IAppState = {
  drivers: []
}

const drivers: IDriver[] = [{
  id: 'cc33f00c-d666-4cee-a9cb-8d591a154367',
  name: 'John Doe',
  inRoute: false,
  location: {
    lat: 1234,
    long: 4321
  }
}];

describe('reducers', () => {
  it('save drivers to store', () => {
    const action = saveDrivers(drivers);
    const newState = reducer(state, action);

    expect(newState).toEqual({
      ...state,
      drivers,
    });
  });

});
