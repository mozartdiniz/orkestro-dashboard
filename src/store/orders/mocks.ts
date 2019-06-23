import { IOrder } from './interfaces';

export const mockTwoOrders: IOrder[] = [{
  id: 'dbed2ab5-c5ce-47fc-b2c3-b80e0d5e0fd7',
  pickupTime: '2019-06-23T06:31:33.998Z',
  pickupAddress: 'The Forge,Barwick,, Yeovil, BA22 9TB',
  location: {
    lat: 51.5032532,
    long: -0.1527521
  },
  closestDrivers: [
    '7c3510e3-8db7-4508-8329-f2439caebc6b',
    '54550703-ac5b-42a6-a6c5-2cfeecee2ba4'
  ],
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
  location: {
    lat: 51.5158156,
    long: -0.4033515
  },
  dimension: {
    description: 'large pizza box',
    width: 24,
    height: 24,
    length: 4.5
  }
}];
