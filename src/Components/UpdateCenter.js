import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../App.css';

import { ipAddressContext } from '../App'


function UpdateCenter({ center, zoom }) {

  const {state, dispatch} = useContext(ipAddressContext);

  const map = useMap();
  map.setView(state.locationCoordinates, zoom);
  return null;
}



export default UpdateCenter;