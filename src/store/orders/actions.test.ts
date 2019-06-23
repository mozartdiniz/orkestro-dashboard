import { saveOrders } from './actions';
import { IOrder } from './interfaces';
import { SAVE_ORDERS } from '../actionTypes';

describe('Order interface actions', () => {
  it('should dispatch SAVE_ORDERS action', () => {
    const orders: IOrder[] = [{
      id: 'dbed2ab5-c5ce-47fc-b2c3-b80e0d5e0fd7',
      pickupTime: '2019-06-23T06:31:33.998Z',
      pickupAddress: 'The Forge,Barwick,, Yeovil, BA22 9TB',
      dimension: {
        description: 'large pizza box',
        width: 24,
        height: 24,
        length: 4.5
      }
    },
    {
      id: '245c47f0-65f9-4b84-8ddc-dbe3d5b58147',
      pickupTime: '2019-06-23T06:31:33.998Z',
      pickupAddress: '48 Chapel Rd, London, SE27 0UR',
      dimension: {
        description: 'large pizza box',
        width: 24,
        height: 24,
        length: 4.5
      }
    }];

    const expectedAction = {
      type: SAVE_ORDERS,
      orders
    }

    expect(saveOrders(orders)).toEqual(expectedAction)
  });

});
