import React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';
import { IOrder } from '../../store/orders/interfaces';

const image = new Image();
image.src =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGQjE0RTsiIHBvaW50cz0iNDc1LjcxMSwxMjggNDc1LjcxMSwzODQgMjU2LDUxMiAyMTkuNjAyLDIxOS42MDIgIi8+PHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGOTM1NjsiIHBvaW50cz0iMjU2LDIxOS42MDIgMjU2LDUxMiAzNi4yODksMzg0IDM2LjI4OSwxMjggIi8+PHBvbHlnb24gc3R5bGU9ImZpbGw6I0ZGQjE0RTsiIHBvaW50cz0iMzY1Ljg2Miw2NCAzMDMuMDYyLDE2NS4yNTMgMTQ2LjEzOCwxOTIgMzYuMjg5LDEyOCAyNTYsMCAiLz48cG9seWdvbiBzdHlsZT0iZmlsbDojRkZEODZDOyIgcG9pbnRzPSI0NzUuNzExLDEyOCAyNTYsMjU2IDE0Ni4xMzgsMTkyIDM2NS44NjIsNjQgIi8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNDMuNjc1LDI5NC42NGMtNC4xNzYsMC04LjI0MS0yLjE1OC0xMC40OTUtNi4wMjhjLTMuMzczLTUuNzktMS40MTUtMTMuMjE3LDQuMzc2LTE2LjU5bDQ0LjM4Ni0yNS44NThjNS43ODktMy4zNzIsMTMuMjE5LTEuNDE1LDE2LjU5LDQuMzc2YzMuMzczLDUuNzksMS40MTUsMTMuMjE3LTQuMzc2LDE2LjU5bC00NC4zODYsMjUuODU4QzM0Ny44NTEsMjk0LjEwOCwzNDUuNzQ5LDI5NC42NCwzNDMuNjc1LDI5NC42NHoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=';
image.width = 30;
image.height = 30;
const images: any = ['order', image];

// Define layout to use in Layer component
const layoutLayer = { 'icon-image': 'order' };

export interface ISelectedOrderLayerProps {
  order?: IOrder;
}

export const SelectedOrderLayer: React.FC<ISelectedOrderLayerProps> = ({
  order
}) => (
  <Layer type="symbol" id="order" layout={layoutLayer} images={images}>
    {order && (
      <Feature coordinates={[order.location.long, order.location.lat]} />
    )}
  </Layer>
);
