import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import '../App.css';

import { ipAddressContext } from '../App'


function UpdateCenter(center) {
  console.log("center!!!", center.center); 
  const map = useMap();
  map.flyTo(center.center, 12);
  return null;
  
  
}



export default UpdateCenter;