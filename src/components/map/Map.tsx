import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import MapWrapper from './Map.style';
import { DriversLayer } from './DriversLayer';
import { IDriverPosition } from '../../store/drivers/interfaces';
import { IOrder } from '../../store/orders/interfaces';
import { SelectedOrderLayer } from './SelectedOrderLayer';
import { ClosestDriversLayer } from './ClosestDriversLayer';

const Mapbox = ReactMapboxGl({
  accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
});

export interface IMapProps {
  driversPositions: IDriverPosition[];
  closestDrivers: IDriverPosition[] | undefined;
  selectedOrder?: IOrder;
}

export interface IFocusMapOnSelectedOrder {
  zoom: [number];
  center: [number, number];
}

export const focusMapOnSelectedOrder = (
  order: IOrder | undefined
): IFocusMapOnSelectedOrder =>
  order
    ? {
        zoom: [15],
        center: [order.location.long, order.location.lat]
      }
    : {
        zoom: [12],
        center: [-0.118092, 51.509865]
      };

const Map: React.FC<IMapProps> = ({
  driversPositions,
  selectedOrder,
  closestDrivers
}) => {
  const { zoom, center } = focusMapOnSelectedOrder(selectedOrder);

  return (
    <MapWrapper>
      <Mapbox
        // eslint-disable-next-line
        style="mapbox://styles/mapbox/streets-v9"
        zoom={zoom}
        center={center}
        containerStyle={{
          height: '100%',
          width: '100%'
        }}>
        <DriversLayer driversPositions={driversPositions} />
        <ClosestDriversLayer driversPositions={closestDrivers} />
        <SelectedOrderLayer order={selectedOrder} />
      </Mapbox>
    </MapWrapper>
  );
};

export default Map;
