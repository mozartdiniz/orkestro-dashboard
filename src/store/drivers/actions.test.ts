import { saveDrivers } from './actions';
import { IDriverPosition } from './interfaces';
import { SAVE_DRIVERS_POSITIONS } from '../actionTypes';

describe('Driver interface actions', () => {
  it('should dispatch SAVE_DRIVERS_POSITIONS action', () => {
    const driversPositions: IDriverPosition[] = [{
      id: 'cc33f00c-d666-4cee-a9cb-8d591a154367',
      name: 'John Doe',
      inRoute: false,
      location: {
        lat: 1234,
        long: 4321
      }
    }];

    const expectedAction = {
      type: SAVE_DRIVERS_POSITIONS,
      driversPositions
    }

    expect(saveDrivers(driversPositions)).toEqual(expectedAction)
  });

});
