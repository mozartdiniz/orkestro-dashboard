import { createSelector } from 'reselect';
import { IAppState } from "../interfaces";
import { selectedOrderSelector } from '../orders/selectors';
import { IDriverPosition } from './interfaces';

export const selectDriversSelector = (state: IAppState) => state.drivers.driversPositions;

export const selectClosestDriversSelector = createSelector(
  [selectedOrderSelector, selectDriversSelector],
  (order, drivers) => {
    if (!order) {
      return [];
    }

    const driverIds = order.closestDrivers;

    if (!driverIds || !driverIds.length) {
      return [];
    }

    const selectedDrivers: (IDriverPosition | undefined)[] = driverIds.map((driverId) => drivers.find(driver => driver.id === driverId));
    const filtered: IDriverPosition[] = selectedDrivers.filter(element => element !== undefined) as IDriverPosition[];

    return filtered;
  }
);
