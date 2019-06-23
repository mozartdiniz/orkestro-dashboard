import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import MapWrapper from './Map.style';

const Mapbox = ReactMapboxGl({
  accessToken: `${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`
});

const Map: React.FC = () => (
  <MapWrapper>
    <Mapbox
      // eslint-disable-next-line
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100%',
        width: '100%'
      }}>
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Mapbox>
  </MapWrapper>
);

export default Map;
