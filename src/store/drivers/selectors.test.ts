import { IAppState } from "../interfaces";
import { mockTwoOrders } from "../orders/mocks";
import { mockDriver } from "./mocks";
import { selectDriversSelector, selectClosestDriversSelector } from "./selectors";

const state: IAppState = {
  orders: {
    orders: mockTwoOrders,
    selectedOrderId: 'dbed2ab5-c5ce-47fc-b2c3-b80e0d5e0fd7'
  },
  drivers: {
    driversPositions: mockDriver
  }
}

describe('Drivers selectors', () => {
  it('returns all drivers', () => {
    expect(selectDriversSelector(state).length).toBe(3);
  });

  it('returns all drivers with all properties', () => {
    expect(selectDriversSelector(state)[0].name).toBe('Oliver Taylor');
    expect(selectDriversSelector(state)[0].inRoute).toBe(true);
    expect(selectDriversSelector(state)[1].id).toBe('54550703-ac5b-42a6-a6c5-2cfeecee2ba4');
    expect(selectDriversSelector(state)[2].location.lat).toBe(51.5109822);
  });

  it('returns the drivers closest to the order', () => {
    expect(selectClosestDriversSelector(state).length).toBe(2);
    expect(selectClosestDriversSelector(state)[0].id).toBe('7c3510e3-8db7-4508-8329-f2439caebc6b');
    expect(selectClosestDriversSelector(state)[1].id).toBe('54550703-ac5b-42a6-a6c5-2cfeecee2ba4');
  });
});
