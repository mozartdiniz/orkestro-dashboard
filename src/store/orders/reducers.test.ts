import { reducer } from './reducers';
import { saveOrders } from './actions';
import { IOrder } from './interfaces';
import { mockTwoOrders } from './mocks';

const initialState: IOrder[] = [];

describe('reducers', () => {
  it('save orders to store', () => {
    const action = saveOrders(mockTwoOrders);
    const newState = reducer(initialState, action);

    expect(newState).toEqual(mockTwoOrders);
  });

});
