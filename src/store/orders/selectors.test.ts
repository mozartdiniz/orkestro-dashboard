import { IAppState } from "../interfaces";
import { mockTwoOrders } from "./mocks";
import { selectedOrderIdSelector, ordersSelector, selectedOrderSelector } from "./selectors";

const selectedOrderId = '245c47f0-65f9-4b84-8ddc-dbe3d5b58147';
const state: IAppState = {
  orders: {
    orders: mockTwoOrders,
    selectedOrderId: '245c47f0-65f9-4b84-8ddc-dbe3d5b58147'
  },
  drivers: {
    driversPositions: []
  }
}

describe('Order selectors', () => {
  it('return the id of the selected order', () => {
    expect(selectedOrderIdSelector(state)).toBe(selectedOrderId);
  });

  it('return all orders', () => {
    expect(ordersSelector(state)).toBe(mockTwoOrders);
  });

  it('return the selected order ', () => {
    expect(selectedOrderSelector(state)).toBe(mockTwoOrders[1]);
  });
});
