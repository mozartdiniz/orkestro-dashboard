import { reducer, IOrderState } from './reducers';
import { saveOrders, selectOrder } from './actions';
import { mockTwoOrders } from './mocks';

const selectedOrderId = mockTwoOrders[0].id;

describe('reducers', () => {
  it('save orders to store', () => {
    const initialState: IOrderState = {
      orders: [],
      selectedOrderId: ''
    }
    const expectedState = {
      ...initialState,
      orders: mockTwoOrders
    }

    const action = saveOrders(mockTwoOrders);
    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  it('select order', () => {
    const initialState: IOrderState = {
      orders: [],
      selectedOrderId: ''
    }
    const expectedState = {
      orders: [],
      selectedOrderId
    }

    const action = selectOrder(selectedOrderId);
    const newState = reducer(initialState, action);

    expect(newState).toEqual(expectedState);
  });
});
