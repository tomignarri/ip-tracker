import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../App.css';
import './Display'
import ReactDOM from 'react-dom';

import { ipAddressContext } from '../App'
import Display from './Display';

function MapView(props){

    const [currentLocation, setCurrentLocation] = useState({ lat: 52.52437, lng: 13.41053 });
    const [zoom, setZoom] = useState(12);

    const {state, dispatch} = useContext(ipAddressContext);


    return(
        <div>
            <Display></Display>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <MapContainer center={state.locationCoordinates} zoom={zoom} style={{height: 350}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer>
        </div>
    )
    
}

export default MapView;