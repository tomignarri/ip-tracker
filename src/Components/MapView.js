import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../App.css';
import './Display'
import ReactDOM from 'react-dom';

import { ipAddressContext } from '../App'
import Display from './Display';
import UpdateCenter from './UpdateCenter';





function MapView(){

   

    const {state, dispatch} = useContext(ipAddressContext);

   
   
    

    return(
        <div>
            <Display></Display>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <MapContainer center={state.locationCoordinates} zoom={12} style={{height: 350}}>
                <UpdateCenter center={state.locationCoordinates} zoom={12}></UpdateCenter>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer>
        </div>
    )
    
}

export default MapView;