import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../App.css';
import ReactDOM from 'react-dom';


class MapView extends React.Component{

    constructor(){
       super();
       this.state = {
        currentLocation: { lat: 52.52437, lng: 13.41053 },
        zoom: 12,
      }
    }

    
    render(){
        return(
            <div>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css" />
               <MapContainer center={this.state.currentLocation} zoom={this.state.zoom} style={{height: 350}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
               </MapContainer>
            </div>
        )
    }
}

export default MapView;