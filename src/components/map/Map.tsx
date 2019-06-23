import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import MapWrapper from './Map.style';
import { DriversLayer } from './DriversLayer';
import { IDriverPosition } from '../../store/drivers/interfaces';

const Mapbox = ReactMapboxGl({
  accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
});

export interface IMapProps {
  driversPositions: IDriverPosition[];
}

const Map: React.FC<IMapProps> = ({ driversPositions }) => (
  <MapWrapper>
    <Mapbox
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100%',
        width: '100%'
      }}>
      <DriversLayer driversPositions={driversPositions} />
    </Mapbox>
  </MapWrapper>
);

export default Map;
