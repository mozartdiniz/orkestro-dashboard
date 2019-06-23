import { reducer } from './reducers';
import { saveDrivers } from './actions';
import { IDriverPosition, IDriverState } from './interfaces';

const initialState: IDriverState = {
  driversPositions: []
}

const driversPositions: IDriverPosition[] = [{
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
    const action = saveDrivers(driversPositions);
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      driversPositions,
    });
  });

});
