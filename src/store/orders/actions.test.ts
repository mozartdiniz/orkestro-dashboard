import { saveOrders } from './actions';
import { IOrder } from './interfaces';
import { SAVE_ORDERS } from '../actionTypes';
import { mockTwoOrders } from './mocks';

describe('Order interface actions', () => {
  it('should dispatch SAVE_ORDERS action', () => {
    const expectedAction = {
      type: SAVE_ORDERS,
      orders: mockTwoOrders
    }

    expect(saveOrders(mockTwoOrders)).toEqual(expectedAction)
  });

});
