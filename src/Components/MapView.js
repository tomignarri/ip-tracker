import React, { useState, useContext } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../App.css';
import ReactDOM from 'react-dom';

import { ipAddressContext } from '../App'

function MapView(props){

    const [currentLocation, setCurrentLocation] = useState({ lat: 52.52437, lng: 13.41053 });
    const [zoom, setZoom] = useState(12);

    const {state, dispatch} = useContext(ipAddressContext);

    const changeInputValue = (newValue) => {
        dispatch({ type: 'UPDATE_INPUT', data: newValue,});
    };

    return(
        <div>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
            <MapContainer center={state.location} zoom={zoom} style={{height: 350}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            </MapContainer>
        </div>
    )
    
}

export default MapView;